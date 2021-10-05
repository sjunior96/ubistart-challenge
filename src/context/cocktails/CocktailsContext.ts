import { createContext, useContext } from 'react';
import { ICategory, IDrink, IDrinkDetails } from '../../interfaces';

export type CocktailsContextType = {
    categories: ICategory[];
    setCategories: (categories: ICategory[]) => void;
    drinks: IDrink[];
    setDrinks: (drinks: IDrink[]) => void;
    drinkDetails: IDrinkDetails[];
    setDrinkDetails: (drinkDetails: IDrinkDetails[]) => void;
};

export const initialDrinkDetails = [
    {
        idDrink: "",
        strDrink: "",
        strDrinkAlternate: null,
        strTags: "",
        strVideo: "",
        strCategory: "",
        strIBA: "",
        strAlcoholic: "",
        strGlass: "",
        strInstructions: "",
        strInstructionsES: null,
        strInstructionsDE: "",
        strInstructionsFR: null,
        strInstructionsIT: "",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        strDrinkThumb: "",
        strIngredient1: "",
        strIngredient2: "",
        strIngredient3: "",
        strIngredient4: "",
        strIngredient5: null,
        strIngredient6: null,
        strIngredient7: null,
        strIngredient8: null,
        strIngredient9: null,
        strIngredient10: null,
        strIngredient11: null,
        strIngredient12: null,
        strIngredient13: null,
        strIngredient14: null,
        strIngredient15: null,
        strMeasure1: "",
        strMeasure2: "",
        strMeasure3: "",
        strMeasure4: "",
        strMeasure5: null,
        strMeasure6: null,
        strMeasure7: null,
        strMeasure8: null,
        strMeasure9: null,
        strMeasure10: null,
        strMeasure11: null,
        strMeasure12: null,
        strMeasure13: null,
        strMeasure14: null,
        strMeasure15: null,
        strImageSource: "",
        strImageAttribution: "",
        strCreativeCommonsConfirmed: "",
        dateModified: ""
    }
];

export const CocktailsContext = createContext<CocktailsContextType>({
    categories: [],
    setCategories: () => { },
    drinks: [],
    setDrinks: () => { },
    drinkDetails: initialDrinkDetails,
    setDrinkDetails: () => { }
});

export const useCocktails = () => useContext(CocktailsContext);