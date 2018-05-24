import { Component } from '@angular/core';

export interface IflightDetails{
    _id: string;
    from_city_id: string;
    to_city_id:string;
    depart: string;
    arrive: string;
    startDate:Date;
    endDate:Date;
    duration:string;
    price: number;
}