import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filter, validFilters } from 'src/app/filter/filter.actions';
import { deleteCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: string = 'all';
  enabledFilters: validFilters[] = ['all', 'completed', 'pending'];

  pendings: number = 0;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    /* this.store.select('filter')
      .subscribe( filter => this.currentFilter = filter ); */

    this.store.subscribe( state => {
      this.currentFilter = state.filter;
      this.pendings = state.todos.filter( todo => !todo.completed).length;
    });
  }

  changeFilter(selected: string) {
    this.store.dispatch( filter({filtro: selected}) );
  }

  clear() {
    this.store.dispatch( deleteCompleted() );
  }

}
