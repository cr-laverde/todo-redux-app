import { createAction, props } from "@ngrx/store";

export type validFilters = 'all' | 'completed' | 'pending';

export const filter = createAction(
    '[FILTER] Set Filter',
    props<{filtro: string}>()
);