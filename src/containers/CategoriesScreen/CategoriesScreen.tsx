import React, { useEffect } from "react";
import { ICategory, IDrink, IDrinkDetails, IRequestResponse } from "../../interfaces";
import { useCocktails } from "../../context/cocktails/CocktailsContext";
import history from "../../history";
/* import Button from "../../components/Button/Button"; */
import AppContainer from "../../components/AppContainer/AppContainer";
import "./Categories.css";
import { Button, Typography } from "@mui/material";

export default function CategoriesScreen() {
    const { categories, setCategories } = useCocktails();

    useEffect(() => {
        getCategories().then(setCategories);
        /* getDrinks("Ordinary Drink").then((drinks) => console.log(drinks));
        getDrinkDetails().then((drinkDetails) => console.log(drinkDetails)); */
    }, []);

    return (
        <AppContainer>
            <Typography color="#0288d1" variant="h5" component="div">
                Please, select a drink category
            </Typography>
            <div className="categories-list">
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
            </div>
        </AppContainer>
    );
}

function getCategories(): Promise<ICategory[]> {
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        .then((response) => {
            return response
                .json()
                .then((responseJSON) => {
                    return responseJSON.drinks;
                });
        });
}

/* function getDrinks(strCategory: string): Promise<IDrink[]> {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`)
        .then((response) => {
            return response
                .json()
                .then((responseJSON) => {
                    return responseJSON.drinks;
                });
        });
} */

/* function getDrinkDetails(): Promise<IDrinkDetails[]> {
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007")
        .then((response) => {
            return response
                .json()
                .then((responseJSON) => {
                    return responseJSON.drinks;
                });
        });
} */