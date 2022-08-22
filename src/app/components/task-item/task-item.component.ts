import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {text:"",date:""}; //task ready for HTML. set some def value for task
  constructor() { }

  ngOnInit(): void {
  }

}
