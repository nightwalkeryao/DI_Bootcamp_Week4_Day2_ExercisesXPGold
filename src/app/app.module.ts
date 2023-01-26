import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryFilterDirective } from './category-filter.directive';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DraggableDirective } from './draggable.directive';
import { TodoItemDetailComponent } from './todo-item-detail/todo-item-detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryFilterDirective,
    TodoListComponent,
    DraggableDirective,
    TodoItemDetailComponent,
    AboutComponent,
    ContactComponent,
    SuccessComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
