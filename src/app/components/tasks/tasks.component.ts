import { Component, OnInit} from '@angular/core';
import {Task} from '../../Task'; //importing interface (model of fields)
import {TASKS} from '../../placeholder_tasks'; //importing placeholder tasks

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //@Input() task: Task = {id:0,text:"default",date:"default"}; //set some default value for task
  tasks: Task[] = TASKS; //tasks can now be used in the HTML component

  constructor() { }

  ngOnInit(): void {
  }

}
