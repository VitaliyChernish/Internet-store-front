import { GOAL_VARIANT } from './actionsGoal.js';
import { parseData } from '../../utils/functions.js';

const defaultState = {
    goal: ''
}

export const WhatGoalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GOAL_VARIANT: {
            return {
                ...state,
                goal: action.goal
            }
        }
        // case ADMIN_AUTH: {
        //     return {
        //         ...state,
        //         role: action.role
        //     }
        // }
        default: {
            return state
        }
    }
}

