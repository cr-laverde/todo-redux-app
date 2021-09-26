import { Action, createReducer, on } from "@ngrx/store";
import { filter, validFilters } from "./filter.actions";

export const initialState: string = 'all';

const _filterReducer = createReducer(initialState,
    on(filter, (state, { filtro }) => state = filtro),
);

export function filterReducer(state: any, action: Action) {
    return _filterReducer(state, action);
}