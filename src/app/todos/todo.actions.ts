import { createAction, props } from "@ngrx/store";
import { Todo } from "./models/todo.model";

export const create = createAction(
    '[TODO] Create todo',
    props<{text: string}>(),
);

export const toggle = createAction(
    '[TODO] Toogle todo',
    props<{id: number}>(),
);

export const edit = createAction(
    '[TODO] Edit todo',
    props<{id: number, text: string}>(),
);

export const deleteT = createAction(
    '[TODO] Delete todo',
    props<{id: number}>(),
);

export const toggleAll = createAction(
    '[TODO] ToggleAll todo',
    props<{completed: boolean}>(),
);

export const deleteCompleted = createAction('[TODO] DeleteCompleted todo');