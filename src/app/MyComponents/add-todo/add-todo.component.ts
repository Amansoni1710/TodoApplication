import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title!:string;
  desc?:string;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor(){}

  ngOnInit(): void{

  }

  onSubmit(){
    const todo = {
      sno: 0,
      title :  this.title ,
      desc: this.desc,
      active: true
    }
    if (this.title && this.desc)
    {
      this.todoAdd.emit(todo);
    }
  }

  reset() {
    this.title = ""
    this.desc = ""
  }
}
