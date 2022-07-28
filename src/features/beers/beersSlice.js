import { BEERS } from "../../app/shared/BEERS";

export const selectAllBeers = () => {
    return BEERS;
};

// export const selectRandomBeer = () => {
//     return BEERS[Math.floor(Math.random() * BEERS.length)]
// };

export const selectBeerById = (id) => {
    return BEERS.find((beer) => beer.id === id);
}

export const selectFeaturedBeer = () => {
    return BEERS.find((beer) => beer.featured);
}