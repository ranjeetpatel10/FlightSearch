import { Component, OnInit } from '@angular/core';
import { FlightService } from '../service/flight.service';
import { Flight } from './flight';
import { IflightDetails } from './flight.interface';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {	
  source: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  allFlights: IflightDetails[];
  filteredFlights: any[];
  flightStatus: boolean = true;
  searchStatus: boolean = false;
  errorMessage: string;  
  sliderValue: number = 0;

  sourceList = ["Pune (PNQ)", "Indore (IDR)", "Mumbai (BOM)", "New Delhi (DEL)"];

  destinationList = ["Mumbai (BOM)", "Indore (IDR)", "Pune (PNQ)", "New Delhi (DEL)"];

  // Form validation
  flight = new Flight(this.sourceList[0], this.destinationList[0]);
  sourceValue:string = "Pune (PNQ)";
  destinationValue:string = "Mumbai (BOM)";
  valueStatus: boolean = false;

  constructor(private flightService: FlightService) {
    //console.log(this.filteredFlights);
  }

  ngOnInit() {
    this.getAllFlights();
  }

  getAllFlights() {
    this.flightService.getAllFlights().subscribe(
      allFlights => this.allFlights = allFlights,
      error => this.errorMessage = <any>error);
  }

  onChangeSource(newValue:string){ 
    this.sourceValue = newValue;
    this.compareValue();
   // console.log(newValue);             
  }
  onChangedestination(newValue:string){ 
    this.destinationValue = newValue;
    this.compareValue();
   // console.log(newValue);           
  }
  compareValue(){
    if(this.sourceValue == this.destinationValue){
      this.valueStatus = true;
    }else{
      this.valueStatus = false;
    }
  }

  onSubmit(SearchPara: any) {
      
    this.flightStatus = false;
    this.source = SearchPara.source;
    this.destination = SearchPara.destination;
    this.startDate = SearchPara.startDate;
    this.endDate = SearchPara.endDate;

    

    if (this.endDate) {
      this.filteredFlights = this.allFlights.filter((x) => {
        return (x.from_city_id == this.source) &&
          (x.to_city_id == this.destination) &&
          (x.startDate == this.startDate) &&
          (x.endDate == this.endDate)
      });
    } else if(this.startDate) {
      this.filteredFlights = this.allFlights.filter((x) => {
        return ((x.from_city_id == this.source) &&
          (x.to_city_id == this.destination)) &&
          (x.startDate == this.startDate)
      });
    }
    else {
      this.filteredFlights = this.allFlights.filter((x) => {
        return ((x.from_city_id == this.source) &&
          (x.to_city_id == this.destination)) ||
          (x.startDate == this.startDate)
      });
    }
    if(this.filteredFlights.length == 0){
      this.searchStatus = true;
    }else{ 
      this.searchStatus = false;
    }

    // console.log("Ok..."+ this.filteredFlights.length);

  }
}
