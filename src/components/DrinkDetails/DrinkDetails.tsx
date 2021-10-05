import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { IDrinkDetails } from '../../interfaces';
import Divider from '@mui/material/Divider';

interface DrinkDetailsProps {
    drink: IDrinkDetails;
}

export default function MediaControlCard(props: DrinkDetailsProps) {
    const [ingredients, setIngredients] = React.useState<string[]>([]);

    function getValidIngredients(drink: IDrinkDetails): string[] {
        var tests: string[] = [];
        Object.keys(drink).forEach((keyName: string) => {
            if (keyName.toLowerCase().includes("ingredient") && drink[keyName] !== null) {
                const ingredient = drink[keyName];
                const measureKeyName = "strMeasure".concat(keyName.replace(/[^0-9]/g, ''));
                const measure = drink[measureKeyName]?.concat(" ");
                const ingredientWithMeasure = measure?.concat(ingredient || "");
                tests.push(ingredientWithMeasure || "");
            }
        });
        return tests;
    }

    React.useEffect(() => {
        setIngredients(getValidIngredients(props.drink));
    }, [props.drink]);

    return (
        <Card sx={{ display: 'flex', width: "80%", borderRadius: ".5rem", backgroundColor: "#001E3C" }} component="div">
            <CardMedia
                component="img"
                sx={{ width: 300, height: 300, borderRadius: ".5rem" }}
                image={props.drink.strDrinkThumb}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5" color="#FFF">
                        Drink: {props.drink.strDrink}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{ marginRight: "4rem", flex: "1 0 auto" }}>
                            <Typography variant="subtitle1" component="div" color="#FFF">
                                Category: {props.drink.strCategory}
                            </Typography>
                            <Typography variant="body2" component="div" color="#FFF">
                                Ingredients: {ingredients.map((ingredient) => <p>{ingredient}</p>)}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="subtitle1" component="div" color="#FFF">
                                Instructions:
                            </Typography>
                            <Typography variant="body2" component="div" color="#FFF">
                                {props.drink.strInstructions}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    );
}
