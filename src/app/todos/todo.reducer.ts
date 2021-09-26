import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import { create, deleteCompleted, deleteT, edit, toggle, toggleAll } from "./todo.actions";


export const initialState: Todo[] = [
    new Todo('save cristian!!'),
    new Todo('save andres!!'),
    new Todo('save laverde!!')
];

const _todoReducer = createReducer(initialState,
    on(create, (state, { text }) => [ ...state, new Todo(text) ]),
    on(deleteT, (state, { id }) => state.filter( todo => todo.id !== id )),
    on(deleteCompleted, (state) => state.filter( todo => !todo.completed )),
    on(toggle, (state, { id }) => {
        return state.map( todo => {

            if( todo.id === id ) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo;
            }
            
        })
    }),
    on(edit, (state, { id, text }) => {
        return state.map( todo => {

            if( todo.id === id ) {
                return {
                    ...todo,
                    text: text
                }
            } else {
                return todo;
            }
            
        })
    }),
    on(toggleAll, (state, { completed }) => {
        return state.map( todo => {
            return {
                ...todo,
                completed: completed
            }
        })
    }),
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
    return _todoReducer(state, action);
}