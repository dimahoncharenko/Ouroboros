import { AnyAction } from "redux";

import C from "./constants";

export interface InitialState {
    menuIsActive: boolean
}

const InitialState: InitialState = {
    menuIsActive: false
};

export default function Reducer(state = InitialState, action: AnyAction) {
    switch (action.type) {
        case C.TOGGLE_MENU:
            return {
                ...state,
                menuIsActive: !state.menuIsActive
            };
        default:
            return state;
    }
};