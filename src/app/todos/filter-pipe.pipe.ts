import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipePipe implements PipeTransform {

  transform(todos: Todo[], filter: string): Todo[] {
    switch (filter) {
      case 'completed':
        return todos.filter( todo => todo.completed );
      case 'pending':
        return todos.filter( todo => !todo.completed );
      default:
        return todos;
    }

  }

}
