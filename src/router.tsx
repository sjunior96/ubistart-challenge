import { Redirect, Route, Router, Switch } from "react-router";
import CategoriesScreen from "./containers/CategoriesScreen/CategoriesScreen";
import DrinkDetailsScreen from "./containers/DrinkDetailsScreen/DrinkDetailsScreen";
import DrinksScreen from "./containers/DrinksScreen/DrinksScreen";
import history from "./history";


export default () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/categories" component={CategoriesScreen} />
            <Route exact path="/drinks/:strCategory" component={DrinksScreen} />
            <Route exact path="/drinkDetails/:idDrink" component={DrinkDetailsScreen} />

            <Redirect from="*" to="/categories" />
        </Switch>
    </Router>
);