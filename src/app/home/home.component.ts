import { DataService } from '../data.service';
import { OffersService } from '../offers.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { Config } from '../Config';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {
  title = 'seram';
  scroll = false;
  offers = [];
  cities = [];
  country = 1;
  clocks = 19;
  timeLeft: number = 59;
  timeSeconds: number = 59;
  interval;
  radioValues = [0, 1, 2, 3]
  templateUnchecked = false;
  templateChecked = true;
  template = 1;
  model = {
    //id: 0,
    fullName: '',
    phone: '',
    email: '',
    governmentId: '',
    address: '',
    websiteId: "edd43af7-4862-4c0e-92bd-08d727e611d4",
    age: 0,
    gender: 1,
    notes: '',
    total: 0,
    discountPercentage: 0,
    totalAfterDiscount: 0,
    paymentMethod: 20,
    // shippingCompanyId: 0,
    // shippingCompanyCode: '',
    requestDetails: [
      {
        productId: 1,
        count: 0,
        price: 0,
        total: 0
      }
    ]
  }

  bsModalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private spinner: NgxSpinnerService,
    private dataService: DataService,
    private offersService: OffersService,
    private router:Router
  ) {
    this.startTimer();
    this.offers = [...this.offersService.getoffers(1)];
    this.getCities();
    this.dataService
      .getAll<any>(Config.websites)
      .subscribe(
        data => {
          this.model.websiteId = data.websiteId;
          this.model.requestDetails[0].productId = data.productId;
          // this.orderOffer(1);//choose order 2 by default

        },
        error => {
          console.log(error);

        });
   }
   orderOffer(index) {
    this.template = this.radioValues[index];
    let price = this.offersService.getoffers(0)[index].currentPrice;
    this.model.total = price;
    this.model.totalAfterDiscount = price;
    this.model.requestDetails[0].price = price;
    this.model.requestDetails[0].total = price;
    this.model.requestDetails[0].count = (index == 0) ? index + 20 : index * 2;

  }
  scrollToElement($element): void {

    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  selectChanged() {
    //this.spinner.show();
    this.getCities();
    if (this.country == 7 || this.country == 8 || this.country == 9 || this.country == 0)
      this.offers = [...this.offersService.getoffers(0)];
    else
      this.offers = [...this.offersService.getoffers(this.country)];

  }
  getCities() {
    this.dataService.getAll<any>(Config.GetGovernmentsOfCountry + this.offersService.countryId[Number(this.country)]).subscribe(
      data => {
        console.log(data);
        this.cities = data;

      }, error => {
        alert('عفوا يرجى المحاوله لاحقا.');
      });
  }
  submit() {
    this.orderOffer(this.template)
    console.log(this.model);
    if (this.model.total != 0)
      this.dataService.add<any>(this.model, Config.requestsAddEdit).subscribe(
        data => {
          console.log(data);
     this.router.navigate(['/massage'])
          //this.submitted = false;


        }, error => {
          alert('عفوا يرجى المحاوله لاحقا.');
        });
    else
      alert('من فضلك اختر احد العروض اولا');

  }


  startTimer() {
    this.interval = setInterval(() => {

      if (this.timeSeconds > 0) {
        this.timeSeconds--;

      }
      else if (this.timeSeconds == 0) {
        if (this.timeLeft > 0) {
          this.timeLeft--;
          this.timeSeconds = 59;
        }
        else {
          if (this.clocks > 0) {
            this.clocks--;
            this.timeLeft = 59;
            this.timeSeconds = 59;
          }
          else {
            this.timeLeft = 59;
            this.timeSeconds = 59;
            this.clocks = 20;
            this.startTimer();
          }

        }
      }




    }, 1000)
  }


  ngOnInit() {
  }

}
