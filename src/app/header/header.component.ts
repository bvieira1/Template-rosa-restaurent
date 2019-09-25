import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { $,} from 'protractor';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  title = "Rosa";


  constructor() { }

  ngOnInit() {
  }
   public onSidenavClose = () => {
    this.sidenavClose.emit();
  };



}
