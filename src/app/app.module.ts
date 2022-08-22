import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { HeaderComponent } from './components/header/header.component';
import { BtnCommentComponent } from './components/btn-comment/btn-comment.component';
import { CommentTextareaComponent } from './components/comment-textarea/comment-textarea.component';
import { CommentDropdownComponent } from './components/comment-dropdown/comment-dropdown.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskItemComponent,
    HeaderComponent,
    BtnCommentComponent,
    CommentTextareaComponent,
    CommentDropdownComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
