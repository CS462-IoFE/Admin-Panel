import { useQuery } from "@tanstack/react-query";
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

const useGoogleMaps = () => {
    const map = useMap();
    const places = useMapsLibrary("places");

    const [sessionToken, setSessionToken] =
        useState<google.maps.places.AutocompleteSessionToken>();
    const [autocompleteService, setAutocompleteService] =
        useState<google.maps.places.AutocompleteService | null>(null);
    const [placesService, setPlacesService] =
        useState<google.maps.places.PlacesService | null>(null);

    const [inputValue, setInputValue] = useState("");
    const [prediction, setPrediction] = useState("");
    const [center, setCenter] = useState([1.296568, 103.852119]);

    useEffect(() => {
        console.log(inputValue)
    },[inputValue])

    useEffect(() => {
        if (!places || !map) return;

        setAutocompleteService(new places.AutocompleteService());
        setPlacesService(new places.PlacesService(map));
        setSessionToken(new places.AutocompleteSessionToken());

        return () => setAutocompleteService(null);
    }, [map, places]);

    const { isLoading, data: predictionResults } = useQuery({
        queryKey: ["map", "place-predictions", inputValue],
        queryFn: async () =>
            await autocompleteService?.getPlacePredictions({
                input: inputValue,
                sessionToken,
            }),
        enabled: !!autocompleteService && inputValue.length > 0,
    });

    const { data: placeSelected } = useQuery({
        queryKey: ["map", "place-details", prediction],
        queryFn: async () =>
            (await new Promise((res, _) => {
                placesService?.getDetails(
                    {
                        placeId: prediction,
                        fields: ["geometry", "name", "formatted_address"],
                        sessionToken,
                    },
                    (placeDetails) => {
                        setCenter([
                            placeDetails?.geometry?.location?.lat() || 0,
                            placeDetails?.geometry?.location?.lng() || 0,
                        ]);
                        setInputValue(`${placeDetails?.name}`);
                        res(placeDetails);
                    }
                );
            })) as Promise<google.maps.places.PlaceResult | null>,

        enabled: prediction.length > 0,
    });

    return {
        setInputValue,
        setPrediction,
        predictionResults,
        isLoading,
        placeSelected,
        center,
        inputValue,
    };
};

export default useGoogleMaps;
