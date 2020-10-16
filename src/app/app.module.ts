
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { OffersService } from './offers.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule } from "ngx-spinner";
import { MassageComponent } from './massage/massage.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module'
@NgModule({
  declarations: [
    AppComponent, MassageComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    NgxSpinnerModule,
    ModalModule.forRoot(),
    AppRoutingModule
    // ModalModule.forRoot()
  ],
  providers: [DataService, OffersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
