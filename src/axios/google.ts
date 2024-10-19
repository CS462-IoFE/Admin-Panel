import axios from "axios";

export const getTranslation = async (enString: string) => {
    const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {
            q: enString,
            source: "en",
            target: "cmn",
            format: "text",
        },
        {
            params: {
                key: import.meta.env.VITE_GOOGLE_MAPS_API,
            },
        }
    );

    return data.data.translations[0].translatedText as string;
};
