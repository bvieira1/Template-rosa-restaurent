import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = "The Rosa";

  constructor() { }

  ngOnInit() {
  }


}
