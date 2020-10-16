import { Component, ViewChild, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { OffersService } from './offers.service';
import { Config } from './Config';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor() {

  }

}
