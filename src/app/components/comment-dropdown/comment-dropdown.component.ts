import { Component, OnInit, Input} from '@angular/core';
import {Name} from '../../Name'; //importing interface (model of name fields) 
import { TagnameService } from 'src/app/services/tagname.service';


@Component({
  selector: 'app-comment-dropdown',
  templateUrl: './comment-dropdown.component.html',
  styleUrls: ['./comment-dropdown.component.css']
})

export class CommentDropdownComponent implements OnInit {
  @Input() name: Name={name:""}; //name can now be used in HTML
  @Input() selectedValue: Name={userID:0,name:""};
  dropdownVisible: boolean=false;
  Names: Name[] = []; //[] initializing array of Names
  @Input() selectedOpt: any;
  text: string="";

  constructor(private tagnameService:TagnameService) { }

  ngOnInit(): void {
    //populates dropdown list with names
    this.Names = this.tagnameService.getNames();
    //listens to tagname service and updates list based on text typed
    this.tagnameService.getCommentTextTypedEmitter()
      .subscribe(text => {
        if(text.startsWith("@") && !text.includes(" ")){
          //notify all components that @ has been invoked
          this.tagnameService.emitDropdownVisibleEvent(true);
          this.dropdownVisible=true;
          //trim the @ symbol
          text = text.substring(1).trim();
          //set names to a new filtered list
          this.Names=this.tagnameService.filterNames(text);
          if(this.Names.length ==1){
            //sets selected option when last item is remaining
            this.selectedOpt=this.Names[0].userID;
            //add blank name element
            this.Names.push({name:""});
          }
        }
        
      }) 
  }

  onSelectOptionChange(){
    this.dropdownVisible=false;
    this.tagnameService.emitDropdownVisibleEvent(false);
    const myobject = {changed:true,name:this.selectedValue.toString()};
    this.tagnameService.emitOptionChangeEvent(myobject);
  }

}
