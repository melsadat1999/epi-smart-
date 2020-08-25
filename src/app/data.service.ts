import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', "Access-Control-Allow-Origin": "*", 'accept':'application/json'});

  constructor(private http: HttpClient) {

  }

  public getAll<T>(url: string): Observable<T> {

      return this.http.get<T>(url);//;//.map(res =>res);
  }
  public All<T>(obj: any, url: string): Observable<T> {
      const search = JSON.stringify(obj);
    return this.http.post<T>(url, search, { headers: this.headers });
      //;//.map(res => {
      //  console.log("res", res);
      //  return res;
      //});
  }

  public getSingle<T>(id: string, url: string): Observable<T> {
      return this.http.get<T>(url + id, { headers: this.headers }); //.map(res =>res);
  }

  public add<T>(item: any,url: string): Observable<T> {
      const toAdd = JSON.stringify(item);

      return this.http.post<T>(url, toAdd, { headers: this.headers }); //.map(res =>res);
  }




  public handleError(error: Error | HttpErrorResponse) {

      if (error instanceof HttpErrorResponse) {
          // Server or connection error happened
          if (!navigator.onLine) {
              // Handle offline error
             alert("No Internet Connection");
          } else {
              // Handle Http Error (error.status === 403, 404...)

              if (error.status === 400) {
                  /// check if the error is an Object or a Single String
                  if (typeof error.error === "object") {
                      let validationErrorDictionary = error.error;

                      /// define empty array for  error msgs
                      var allErrorsMsg = [];
                      for (var fieldName in validationErrorDictionary) {
                          if (validationErrorDictionary.hasOwnProperty(fieldName)) {
                              // push each error msg to the array
                              allErrorsMsg.push(validationErrorDictionary[fieldName]);
                              console.log(validationErrorDictionary[fieldName]);
                          }
                      }

                      // show toast for saved msgs
                     alert(allErrorsMsg.toString());
                  } else {
                      console.log(error.error);
                     alert(error.error);
                  }
              }

              if (error.status === 500) {
                 alert("عفوًا حدث خطأ أثناء الإتصال بالخادم.");
                
              }

              if (error.status === 404) {
                 alert("عفوًا حدث خطأ أثناء الإتصال بالخادم.");
                
              }

              if (error.status === 204) {
                 
                 alert("عفوًا حدث خطأ أثناء الإتصال بالخادم.");
                 
              }



          }
      } else {
          // Handle Client Error (Angular Error, ReferenceError...)
      }
      // Log the error anyway
      console.error("It happens: ", error);
  }
}