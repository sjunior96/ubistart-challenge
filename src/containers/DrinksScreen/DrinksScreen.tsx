import React, { useEffect } from "react";
import { useParams } from "react-router";
import { IDrink } from "../../interfaces";
import { useCocktails } from '../../context/cocktails/CocktailsContext';
import history from "../../history";
import "./DrinksScreen.css";
import AppContainer from "../../components/AppContainer/AppContainer";
import DrinksImageList from "../../components/DrinkCard/DrinkCard";
import { Button } from "@mui/material";

export default function DrinksScreen() {
    let { strCategory } = useParams<{ strCategory: string; }>();
    const { drinks, setDrinks } = useCocktails();

    useEffect(() => {
        getDrinks(strCategory).then(setDrinks);
    }, []);

    return (
        <AppContainer>
            <Button
                color="info"
                variant="outlined"
                sx={{ marginBottom: ".5rem" }}
                onClick={() => history.push("/categories")}
            >
                Back to Categories
            </Button>
            <DrinksImageList
                drinks={drinks}
                viewDrinkDetails={(idDrink: string) => history.push(`/drinkDetails/${idDrink}`)}
                strCategory={strCategory}
            />
        </AppContainer>
    );
}

function getDrinks(strCategory: string): Promise<IDrink[]> {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory.replaceAll(",", "/")}`)
        .then((response) => {
            return response
                .json()
                .then((responseJSON) => {
                    return responseJSON.drinks;
                });
        });
}