import React, { useState } from 'react';
import Router from './router';
import { ICategory, IDrink, IDrinkDetails } from './interfaces';
import { CocktailsContext, initialDrinkDetails } from './context/cocktails/CocktailsContext';

function App() {
	const [categories, setCategories] = useState<ICategory[]>([]);
	const [drinks, setDrinks] = useState<IDrink[]>([]);
	const [drinkDetails, setDrinkDetails] = useState<IDrinkDetails[]>(initialDrinkDetails);

	return (
		<>
			<CocktailsContext.Provider
				value={{
					categories,
					setCategories,
					drinks,
					setDrinks,
					drinkDetails,
					setDrinkDetails
				}}
			>
				<Router />
			</CocktailsContext.Provider>
		</>
	);
}

export default App;