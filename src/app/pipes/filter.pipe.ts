import { Pipe, PipeTransform } from '@angular/core';
import { nullSafeIsEquivalent } from '../../../node_modules/@angular/compiler/src/output/output_ast';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], property: string, val:any): any[] {
    let data: any = [];
    if(!items) return [];
    switch(property){
      case 'rate': 
        data= items.filter( it => {
          return it[property]>val;
        })
      break;
      case 'dateread': 
        data= items.filter( it => {
          return it[property]==val;
        })
      break;
    }
    return data;
    
  }

}