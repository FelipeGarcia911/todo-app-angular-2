import { Injectable } from '@angular/core';
import {Todo} from './todo';


@Injectable()
export class TodoDataService {

  lastId: number = 0;
  todos: Todo[] = [];

  constructor() { }

  public addTodo(todo:Todo):TodoDataService{
    if (!todo.id){
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  public deleteTodoById(id: number): TodoDataService{
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  public updateTodoById(id: number, values: Object = {}):Todo{
    let todo = this.getTodoById(id);
    if (!todo){
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  public getAllTodos(): Todo[]{
    return this.todos;
  }

  public getTodoById(id: number):Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  public toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id,{
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
