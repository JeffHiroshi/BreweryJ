import { createSlice } from "@reduxjs/toolkit";
import { BEERS } from "../../app/shared/BEERS";

const initialState = {
    beersArray: BEERS
}

const beersSlice = createSlice({
    name: 'beers',
    initialState
})

export const beersReducer = beersSlice.reducer;

export const selectAllBeers = (state) => {
    return state.beers.beersArray;
};

// export const selectRandomBeer = () => {
//     return BEERS[Math.floor(Math.random() * BEERS.length)]
// };

export const selectBeerById = (id) => (state) => {
    return state.beers.beersArray.find((beer) => beer.id === parseInt(id));
}

export const selectFeaturedBeer = (state) => {
    return state.beers.beersArray.find((beer) => beer.featured);
}