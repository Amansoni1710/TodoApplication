import { Component, EventEmitter} from '@angular/core';
import { Todo } from "../../Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localitems ?: string | null;
  todos : Todo[];

  constructor(){
    this.localitems = localStorage.getItem("todosKey");
    if(this.localitems != null){
      this.todos = JSON.parse(this.localitems)
    }
    else{
      this.todos = []
    }
  }

  deleteTodo(todo : Todo){
    console.log(todo);
    let ind = this.todos.indexOf(todo);
    this.todos.splice(ind,1);
    localStorage.setItem("todosKey",JSON.stringify(this.todos));
    // console.log(ind);
  }

  removeAllTodo(){
    console.log("Remove all called");
    this.todos = [];
    localStorage.setItem("todosKey",JSON.stringify(this.todos));
  }

  addTodo(todo : Todo){
    // console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todosKey",JSON.stringify(this.todos));
  }

  ToggleTodo(todo : Todo){
    let ind = this.todos.indexOf(todo);
    this.todos[ind].active = !this.todos[ind].active;
    localStorage.setItem("todosKey",JSON.stringify(this.todos));
  }


  ngOnInit(): void{
  }

}
