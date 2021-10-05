import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useCocktails } from '../../context/cocktails/CocktailsContext';
import AppContainer from "../../components/AppContainer/AppContainer";
import { Button } from "@mui/material";
import history from "../../history";
import { getDrinkDetails } from "../../services/services";
import DrinkDetails from "../../components/DrinkDetails/DrinkDetails";

interface IUseParams {
    idDrink: string;
}

export default function DrinkDetailsScreen() {
    const { idDrink } = useParams<IUseParams>();
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
                <DrinkDetails
                    drink={details}
                />
            ))}
        </AppContainer>
    );
}