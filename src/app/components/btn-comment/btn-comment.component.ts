import { Component, OnInit, Input } from '@angular/core';
import { TagnameService } from 'src/app/services/tagname.service';
import {Task} from '../../Task'; //importing interface (model of fields)
import {TASKS} from '../../placeholder_tasks'; //importing placeholder tasks
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-btn-comment',
  templateUrl: './btn-comment.component.html',
  styleUrls: ['./btn-comment.component.css']
})
export class BtnCommentComponent implements OnInit {

  //will allow HTML to accept variables as input
  @Input() btntext: string="Add Comment";
  @Input() btncolor: string= "light-gray"; 
  tasks: Task[] = TASKS; //tasks can now be used in the HTML component
  text: string="";

  constructor(private tagnameService:TagnameService) { }

  ngOnInit(): void {
    this.tagnameService.getCommentTextTypedEmitter().subscribe(txt=>{    
      this.text=txt;
    });
  }

  btnOnClick(){
    if(this.text !=""){
      let datepipe: DatePipe = new DatePipe('en-US');
      let hours = new Date().getHours();
      let ampm = hours >= 12 ? 'PM' : 'AM';
      let d = "System - "+datepipe.transform(new Date(),"yyyy/mm/dd hh:mm")+ampm;
      const t = {text:this.text,date:d};
      this.tasks.push(t);
      //zeroout textarea
      this.tagnameService.emitCommentTextTypedEvent("");
    }else{
      alert("Please add a comment");
    }
  }

}
