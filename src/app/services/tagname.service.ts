import { Injectable,EventEmitter } from '@angular/core';
import {Name} from '../Name'; //importing interface (model of name fields)
import {NAMES} from '../placeholder_names';

@Injectable({
  providedIn: 'root'
})
export class TagnameService {
  //declaring eventemitter to interlay comms between txt area and dropdown components
  commentTextTypedEvent = new EventEmitter<string>();
  //declaring eventemitter to interlay comms when @ symbol is typed
  dropdownVisibleEvent = new EventEmitter<boolean>();
  //declaring eventemitter to interlay comms when dropdown option is selected
  dropdownSelectOptionEvent = new EventEmitter<{changed:boolean,name:string}>();
  constructor() { }

  emitCommentTextTypedEvent(txt: string){
    this.commentTextTypedEvent.emit(txt);
  }

  getCommentTextTypedEmitter(){
    return this.commentTextTypedEvent;
  }

  emitDropdownVisibleEvent(b: boolean){
    this.dropdownVisibleEvent.emit(b);
  }

  emitOptionChangeEvent(o: {changed:boolean,name:string}){
    this.dropdownSelectOptionEvent.emit(o);
  }

  getOptionChangeEmitter(){
    return this.dropdownSelectOptionEvent;
  }

  getNames(): Name[]{
    return NAMES;
  }

  //filters out names that don't include typed string
  filterNames(containsStr: string):Name[]{
    return NAMES.filter(name => {
      return name.name.includes(containsStr)
    });
  }

}
