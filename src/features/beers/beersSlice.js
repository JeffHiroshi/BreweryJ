import { BEERS } from "../../app/shared/BEERS";

export const selectAllBeers = () => {
    return BEERS;
};

export const selectRandomBeer = () => {
    return BEERS[Math.floor(Math.random() * BEERS.length)]
};