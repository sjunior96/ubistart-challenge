import { Box } from '@mui/system';
import React from 'react';

interface AppContainerProps {
    children: React.ReactNode;
}

export default function AppContainer(props: AppContainerProps) {
    return (
        <Box sx={{
            backgroundColor: "#0A1929",
            flexDirection: "column",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            {props.children}
        </Box>
    );
}