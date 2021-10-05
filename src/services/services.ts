import { ICategory, IDrink, IDrinkDetails } from "../interfaces";

export function getCategories(): Promise<ICategory[]> {
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        .then((response) => {
            return response
                .json()
                .then((responseJSON) => {
                    return responseJSON.drinks;
                });
        });
}

export function getDrinks(strCategory: string): Promise<IDrink[]> {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory.replaceAll(",", "/")}`)
        .then((response) => {
            return response
                .json()
                .then((responseJSON) => {
                    return responseJSON.drinks;
                });
        });
}

export function getDrinkDetails(idDrink: string): Promise<IDrinkDetails[]> {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
        .then((response) => {
            return response
                .json()
                .then((responseJSON) => {
                    return responseJSON.drinks;
                });
        });
}