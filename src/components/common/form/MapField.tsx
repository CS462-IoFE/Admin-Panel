import { Autocomplete, CircularProgress, Grid, TextField } from "@mui/material";
import { Map } from "@vis.gl/react-google-maps";
import React, { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import useGoogleMaps from "../../../custom-hooks/map/useGoogleMaps";

interface MapFieldProps {
    name: string;
    label: string;
}

const MapField: React.FC<MapFieldProps> = ({ name, label }) => {
    const { control, setValue } = useFormContext();
    const {
        center,
        setPrediction,
        setInputValue,
        inputValue,
        predictionResults,
        isLoading,
        placeSelected,
    } = useGoogleMaps();

    return (
        <Controller
            name={name}
            control={control}
            render={({ fieldState }) => {
                useEffect(() => {
                    if (!placeSelected) return;

                    const {
                        formatted_address,
                        geometry,
                        name: locationName,
                    } = placeSelected;

                    setValue(name, {
                        formatted_address,
                        name: locationName,
                        lat: geometry?.location?.lat(),
                        lon: geometry?.location?.lng(),
                    });
                }, [placeSelected]);

                return (
                    <Grid container direction="column" width={652}>
                        <Autocomplete
                            fullWidth
                            autoSelect
                            inputValue={inputValue}
                            isOptionEqualToValue={(option, value) =>
                                option.description === value.description
                            }
                            onChange={(_, value) =>
                                setPrediction(`${value?.place_id}`)
                            }
                            options={predictionResults?.predictions || []}
                            getOptionLabel={(option) => option.description}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    onChange={(e) =>
                                        setInputValue(e.target.value)
                                    }
                                    label={label}
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                    InputProps={{
                                        ...params.InputProps,
                                        endAdornment: (
                                            <>
                                                {isLoading && (
                                                    <CircularProgress
                                                        color="inherit"
                                                        size={20}
                                                    />
                                                )}
                                            </>
                                        ),
                                    }}
                                    fullWidth
                                />
                            )}
                        />
                        <Map
                            onClick={({ detail }) => {
                                if (detail.placeId) {
                                    setPrediction(detail.placeId);
                                }
                            }}
                            style={{ width: 652, height: 342 }}
                            defaultZoom={15}
                            center={{ lat: center[0], lng: center[1] }}
                            gestureHandling={"greedy"}
                            disableDefaultUI
                        />
                    </Grid>
                );
            }}
        />
    );
};

export default MapField;
