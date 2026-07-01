"use client";

import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";

import { useMemo } from "react";

export default function ThemeRegistry({ children }) {
    const theme = useMemo(() => {
        let t = createTheme();
        return responsiveFontSizes(t);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}