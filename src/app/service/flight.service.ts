import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { IflightDetails } from '../flight/flight.interface';

@Injectable()
export class FlightService{

	flightUrl:string = '../assets/flights.json';

    constructor( private http: HttpClient){}

     getAllFlights(): Observable<IflightDetails[]>{

        return this.http.get<IflightDetails[]>(this.flightUrl).pipe(
            //tap(data => console.log('Data fetched:'+JSON.stringify(data))),
            catchError(this.handleError));
     }

     private handleError(err:HttpErrorResponse) {
        let errMsg:string='';
        if (err.error instanceof Error) {
           // A client-side or network error occurred. Handle it accordingly.
           console.log('An error occurred:', err.error.message);
           let errMsg=err.error.message;} 
           else {
           console.log(`Backend returned code ${err.status}`);
             let errMsg=err.error.status;
         }
            return Observable.throw(errMsg); 
      }
}