import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(priceVal: any, priceFil?: any): any {
        console.log('priceFil', priceFil);
        return priceFil
         ? priceVal.filter(filteredFlights => filteredFlights.price >= priceFil) 
         : priceVal;
    }

}