import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { IDrink } from '../../interfaces';

interface DrinkCardProps {
    drinks: IDrink[];
    strCategory: string;
    viewDrinkDetails: (idDrink: string) => void;
}

export default function DrinksImageList(props: DrinkCardProps) {
    return (
        <ImageList cols={3} sx={{ width: "50vw", height: "90vh", borderRadius: ".5rem" }} className="DrinksImageList">
            <ImageListItem key="Subheader" cols={3}>
                <ListSubheader component="h2">Exibindo itens da categoria {props.strCategory}</ListSubheader>
            </ImageListItem>
            {props.drinks.map((item) => (
                <ImageListItem key={item.strDrinkThumb}>
                    <img
                        src={`${item.strDrinkThumb}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.strDrinkThumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.strDrink}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.strDrink}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.strDrink}`}
                                onClick={() => props.viewDrinkDetails(item.idDrink)}
                            >
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}