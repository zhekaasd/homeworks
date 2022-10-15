import {InitialStatePeopleType} from "../HW8";

const SORT_ITEM = 'SORT_ITEM';
const CHECK_ITEM_18 = 'CHECK_ITEM_18';

type SortType = {
    type: typeof SORT_ITEM
    payload: {method: string}
}

type CheckedType = {
    type: typeof CHECK_ITEM_18
    payload: {minAge: number}
}

export type ActionsType = SortType | CheckedType;


export const homeWorkReducer = (state: InitialStatePeopleType, action: ActionsType): InitialStatePeopleType => { // need to fix any
    switch (action.type) {
        case SORT_ITEM: {

            // need to fix
            return action.payload.method === 'up' ? [...state.sort((a,b) => a.name >= b.name ? 1 : -1 )]
                : [...state.sort((a,b) => a.name >= b.name ? -1 : 1 )];
        }
        case CHECK_ITEM_18: {
            // need to fix
            return [...state.filter(el => el.age >= action.payload.minAge)]
        }
        default: return state
    }
}

//type SortedType = ReturnType<typeof sortedItems>;
export const sortedItems = (payload: {method: 'up' | 'down'}) => {
    return {type: SORT_ITEM, payload: payload}
}


//type CheckedItems18Type = ReturnType<typeof checkedItems18>;
export const checkedItems18 = (payload: {minAge: number}) => {
    return {type: CHECK_ITEM_18, payload}
};

