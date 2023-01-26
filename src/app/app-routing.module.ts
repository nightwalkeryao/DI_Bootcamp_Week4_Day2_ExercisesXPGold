import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemDetailComponent } from './todo-item-detail/todo-item-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    pathMatch: 'full',
  }, {
    path: '/item/:id',
    component: TodoItemDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
