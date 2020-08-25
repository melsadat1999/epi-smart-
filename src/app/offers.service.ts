import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OffersService {
  offers =
  {
      '1':
          [
              {
                  image: '../assets/mask1.png',
                  currentPrice: '146',
                  // currencyLetter: 'SR',
                  oldPrice: '292',
                  charge: '38',
                  currency: 'ريال',
              },
              {
                  image: '../assets/52156- 2.png',
                  currentPrice: '259',
                  // currencyLetter: 'SR',
                  oldPrice: '518',
                  charge: '38',
                  currency: 'ريال',
              },
              {
                  image: '../assets/52156- 4.png',
                  currentPrice: '409',
                  // currencyLetter: 'SR',
                  oldPrice: '742',
                  charge: '38',
                  currency: 'ريال',
              },
              {
                  image: '../assets/mask.png',
                  currentPrice: '559',
                  // currencyLetter: 'SR',
                  oldPrice: '1192',
                  charge: '0',
                  currency: 'ريال',
              }
          ]
      ,
      '2':
          [
              {
                  image: '../assets/mask1.png',
                  currentPrice: '144',
                  // currencyLetter: 'د.إ',
                  oldPrice: '286',
                  charge: '37',
                  currency: 'درهم',
              },
              {
                  image: '../assets/52156- 2.png',
                  currentPrice: '254',
                  // currencyLetter: 'د.إ',
                  oldPrice: '507',
                  charge: '37',
                  currency: 'درهم',
              },
              {
                  image: '../assets/52156- 4.png',
                  currentPrice: '400',
                  // currencyLetter: 'د.إ',
                  oldPrice: '727',
                  charge: '37',
                  currency: 'درهم',
              },
              {
                  image: '../assets/mask.png',
                  currentPrice: '547',
                  // currencyLetter: 'د.إ',
                  oldPrice: '1168',
                  charge: '0',
                  currency: 'درهم',
              }
          ]
      ,
      '3':
          [
              {
                  image: '../assets/mask1.png',
                  currentPrice: '15',
                  // // currencyLetter: 'OMR',
                  oldPrice: '30',
                  charge: '4',
                  currency: 'ريال',
              },
              {
                  image: '../assets/52156- 2.png',
                  currentPrice: '27',
                  // // currencyLetter: 'OMR',
                  oldPrice: '53',
                  charge: '4',
                  currency: 'ريال',
              },
              {
                  image: '../assets/52156- 4.png',
                  currentPrice: '42',
                  // // currencyLetter: 'OMR',
                  oldPrice: '76',
                  charge: '4',
                  currency: 'ريال',
              },
              {
                  image: '../assets/mask.png',
                  currentPrice: '57',
                  // currencyLetter: 'OMR',
                  oldPrice: '122',
                  charge: '0',
                  currency: 'ريال',
              }
          ]

      ,
      '4':
          [
              {
                  image: '../assets/mask1.png',
                  currentPrice: '142',
                  // currencyLetter: 'Q',
                  oldPrice: '284',
                  charge: '36',
                  currency: 'ريال',
              },
              {
                  image: '../assets/52156- 2.png',
                  currentPrice: '251',
                  // currencyLetter: 'Q',                  
                  oldPrice: '500',
                  charge: '36',
                  currency: 'ريال',
              },
              {
                  image: '../assets/52156- 4.png',
                  currentPrice: '397', 
                 // currencyLetter: 'Q',
                  oldPrice: '720',
                  charge: '36',
                  currency: 'ريال',
              },
              {
                  image: '../assets/mask.png',
                  currentPrice: '542',
                  // currencyLetter: 'Q',                  
                  oldPrice: '1157',
                  charge: '0',
                  currency: 'ريال',
              }
          ]

      ,
      '5':
          [
              {
                  image: '../assets/mask1.png',
                  currentPrice: '15',
                  // currencyLetter: 'B',
                  oldPrice: '29',
                  charge: '4',
                  currency: 'دينار',
              },
              {
                  image: '../assets/52156- 2.png',
                  currentPrice: '27',
                  // currencyLetter: 'B',
                  oldPrice: '52',
                  charge: '4',
                  currency: 'دينار',
              },
              {
                  image: '../assets/52156- 4.png',
                  currentPrice: '42',
                  // currencyLetter: 'B',
                  oldPrice: '74',
                  charge: '4',
                  currency: 'دينار',
              },
              {
                  image: '../assets/mask.png',
                  currentPrice: '57',
                  // currencyLetter: 'B',
                  oldPrice: '120',
                  charge: '0',
                  currency: 'دينار',
              }
          ]

      ,
      '6':
          [
              {
                  image: '../assets/mask1.png',
                  currentPrice: '12',
                  // currencyLetter: 'K',
                  oldPrice: '24',
                  charge: '3',
                  currency: 'دينار',
              },
              {
                  image: '../assets/52156- 2.png',
                  currentPrice: '21',
                  // currencyLetter: 'K',
                  oldPrice: '42',
                  charge: '3',
                  currency: 'دينار',
              },
              {
                  image: '../assets/52156- 4.png',
                  currentPrice: '42',
                  // currencyLetter: 'K',
                  oldPrice: '60',
                  charge: '3',
                  currency: 'دينار',
              },
              {
                  image: '../assets/mask.png',
                  currentPrice: '57',
                  // currencyLetter: 'K',
                  oldPrice: '96',
                  charge: '0',
                  currency: 'دينار',
              }
          ]

      ,
      '0':
          [
              {
                  image: '../assets/mask1.png',
                  currentPrice: '39',
                  // currencyLetter: '$',
                  oldPrice: '78',
                  charge: '10',
                  currency: 'دولار',
              },
              {
                  image: '../assets/52156- 2.png',
                  currentPrice: '69',
                  // currencyLetter: '$',
                  oldPrice: '138',
                  charge: '10',
                  currency: 'دولار',
              },
              {
                  image: '../assets/52156- 4.png',
                  currentPrice: '109',
                  // currencyLetter: '$',
                  oldPrice: '198',
                  charge: '10',
                  currency: 'دولار',
              },
              {
                  image: '../assets/mask.png',
                  currentPrice: '149',
                  // currencyLetter: '$',
                  oldPrice: '318',
                  charge: '0',
                  currency: 'دولار',
              }
          ]
  };
  countryId=[0,4,8,1,5,15,9,13,12,14];

constructor() {

}
public getoffers(index) {
  return this.offers[index];
}

}