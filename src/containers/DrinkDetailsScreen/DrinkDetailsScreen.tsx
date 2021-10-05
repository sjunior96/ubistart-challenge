import React, { useEffect } from "react";
import { useParams } from "react-router";
import { IDrinkDetails } from "../../interfaces";
import { useCocktails } from '../../context/cocktails/CocktailsContext';
import MediaControlCard from "../../components/DrinkDetails/DrinkDetails";
import AppContainer from "../../components/AppContainer/AppContainer";
import { Button } from "@mui/material";
import history from "../../history";

export default function DrinkDetailsScreen() {
    const { idDrink } = useParams<{ idDrink: string; }>();
    const { drinkDetails, setDrinkDetails } = useCocktails();

    useEffect(() => {
        getDrinkDetails(idDrink).then(setDrinkDetails);
    }, []);

    return (
        <AppContainer>
            <Button
                color="info"
                variant="outlined"
                sx={{ marginBottom: ".5rem" }}
                onClick={() => history.push(`/drinks/${drinkDetails[0].strCategory.replaceAll("/", ",")}`)}
            >
                Back to Drinks
            </Button>
            {drinkDetails.map((details) => (
                <MediaControlCard
                    drink={details}
                />
            ))}
        </AppContainer>
    );
}

function getDrinkDetails(idDrink: string): Promise<IDrinkDetails[]> {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
        .then((response) => {
            return response
                .json()
                .then((responseJSON) => {
                    return responseJSON.drinks;
                });
        });
}