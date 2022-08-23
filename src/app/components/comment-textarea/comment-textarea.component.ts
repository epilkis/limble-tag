//using EventEmitter to inform the dropdown component about commentTextChanged
import { Component, OnInit,} from '@angular/core';
import { TagnameService } from 'src/app/services/tagname.service';
import {Name} from '../../Name'; //importing interface (model of name fields)

@Component({
  selector: 'app-comment-textarea',
  templateUrl: './comment-textarea.component.html',
  styleUrls: ['./comment-textarea.component.css']
})
export class CommentTextareaComponent implements OnInit {
  ngTextArea:string=""; //used to set selected name in textarea
  Names: Name[]=this.tagnameService.getNames();
  constructor(private tagnameService:TagnameService) { }

  ngOnInit(): void {

    //emitted event from comment-dropdown component via onSelectOptionChange() method
    this.tagnameService.getOptionChangeEmitter().subscribe(opt=>{
      if(opt.changed == true){
        this.ngTextArea="@"+opt.name;
      }
    });

    //emitted event from "add comment" button clears txtarea on submit
    this.tagnameService.getCommentTextTypedEmitter().subscribe(txt=>{
      this.ngTextArea=txt;
    })
  }

  commentTextChanged(txt: KeyboardEvent,txtall: string){
    //emitting all new text on comment text changed
    this.tagnameService.emitCommentTextTypedEvent(txtall);
    
    //remove this!
    if(txt.key=="@"){
      console.log(txt.key);  
    }
  }

}
