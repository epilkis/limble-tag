import { Component, OnInit, Input } from '@angular/core';
import {Name} from '../../Name'; //importing interface (model of name fields)
import {NAMES} from '../../placeholder_names';

@Component({
  selector: 'app-comment-dropdown-item',
  templateUrl: './comment-dropdown-item.component.html',
  styleUrls: ['./comment-dropdown-item.component.css']
})
export class CommentDropdownItemComponent implements OnInit {
  @Input() name: Name={name:""};
  @Input() Names: Name[] = NAMES;
  constructor() { }

  ngOnInit(): void {
  }

  ngDropdown(){

  }
}
