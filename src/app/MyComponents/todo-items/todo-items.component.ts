import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Todo} from 'src/app/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {
  @Input() todo !: Todo;
  @Input() index !: number;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter;
  @Output() todoCheck : EventEmitter<Todo> = new EventEmitter;

  OnClick(todo: Todo){
    console.log("On click has been Triggered")
    this.todoDelete.emit(todo);
  }

  OnCheckBoxClick(todo: Todo){
    // console.log("befor",todo)
    this.todoCheck.emit(todo);
    // console.log(todo)
  }


  constructor(){
  }
  ngOnInit():void{
  }
}
