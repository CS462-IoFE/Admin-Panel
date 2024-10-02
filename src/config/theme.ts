import { createTheme } from "@mui/material/styles";
import GeomanistBlack from "../assets/fonts/Geomanist-Black.woff2";
import GeomanistBold from "../assets/fonts/Geomanist-Bold.woff2";
import GeomanistBook from "../assets/fonts/Geomanist-Book.woff2";
import GeomanistExtraLight from "../assets/fonts/Geomanist-ExtraLight.woff2";
import GeomanistLight from "../assets/fonts/Geomanist-Light.woff2";
import GeomanistMedium from "../assets/fonts/Geomanist-Medium.woff2";
import GeomanistRegular from "../assets/fonts/Geomanist-Regular.woff2";
import GeomanistThin from "../assets/fonts/Geomanist-Thin.woff2";
import GeomanistUltra from "../assets/fonts/Geomanist-Ultra.woff2";
import { blueGrey, lightBlue } from "@mui/material/colors";

/**
 * Creates a new default theme for the application
 *
 * Contains the primary and secondary color palette
 * Contains all the necessary Typography settings as well
 *
 * @returns {Theme} A default theme for the application
 *
 */
export default createTheme({
    palette: {
        primary: {
            main: lightBlue[500],
            light: lightBlue[600],
            dark: lightBlue[400],
            contrastText: "#fff",
        },

        secondary: {
            main: blueGrey[500],
            light: blueGrey[700],
            dark: blueGrey[300],
            contrastText: "#fff",
        },
    },

    typography: {
        fontFamily: "Geomanist",

        allVariants: {
            fontFamily: "Geomanist",
        },
    },

    components: {
        MuiCssBaseline: {
            /**
             * The following styles overrides declares the custom fonts used in the application
             */
            styleOverrides: `
                @font-face {
                    font-family: 'Geomanist';
                    src: url(${GeomanistUltra}) format('woff2');
                    font-weight: 900;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Geomanist';
                    src: url(${GeomanistBlack}) format('woff2');
                    font-weight: 800;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Geomanist';
                    src: url(${GeomanistBold}) format('woff2');
                    font-weight: 700;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Geomanist';
                    src: url(${GeomanistMedium}) format('woff2');
                    font-weight: 600;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Geomanist';
                    src: url(${GeomanistBook}) format('woff2');
                    font-weight: 500;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Geomanist';
                    src: url(${GeomanistRegular}) format('woff2');
                    font-weight: 400;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Geomanist';
                    src: url(${GeomanistLight}) format('woff2');
                    font-weight: 300;
                    font-style: normal;
                }

                                @font-face {
                    font-family: 'Geomanist';
                    src: url(${GeomanistExtraLight}) format('woff2');
                    font-weight: 200;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Geomanist';
                    src: url(${GeomanistThin}) format('woff2');
                    font-weight: 100;
                    font-style: normal;
                }
            `,
        },
    },
});
