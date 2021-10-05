import React, { useEffect } from "react";
import { useCocktails } from "../../context/cocktails/CocktailsContext";
import history from "../../history";
import AppContainer from "../../components/AppContainer/AppContainer";
import { Button, Typography } from "@mui/material";
import { getCategories } from "../../services/services";
import { Box } from "@mui/system";

export default function CategoriesScreen() {
    const { categories, setCategories } = useCocktails();

    useEffect(() => {
        getCategories().then(setCategories);
    }, []);

    return (
        <AppContainer>
            <Typography color="#0288d1" variant="h5" component="div">
                Please, select a drink category
            </Typography>
            <Box sx={{
                margin: "1rem",
                width: "50vw",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center"
            }}>
                {categories.map((category, index) => (
                    <Button color="info"
                        key={index}
                        onClick={() => history.push(`/drinks/${category.strCategory.replaceAll("/", ",")}`)}
                        variant="outlined"
                        sx={{ margin: ".3rem" }}
                    >
                        {category.strCategory}
                    </Button>
                ))}
            </Box>
        </AppContainer>
    );
}