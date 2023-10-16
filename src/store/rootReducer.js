import { combineReducers } from 'redux';
import { NetflixReducer } from './netflixCard/reducerNetflix'
import {TogleLoginReducer} from './signInSignUp/reducerSignIn'
import { OfferReducer } from './makingOffer/reducerOffer';
import { WhatGoalReducer } from './goalVariants/reducerGoal';

export const rootReducer = combineReducers({
    NetflixReducer,
    TogleLoginReducer,
    OfferReducer,
    WhatGoalReducer,
});