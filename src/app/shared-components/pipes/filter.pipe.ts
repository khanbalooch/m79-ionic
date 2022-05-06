import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from 'src/app/models/User';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: IUser[], searchTerm: string, fieldName: string): IUser[] {

    if(list === null || list.length === 0  )  return []; // return empty array if no users/items found

    if(searchTerm === '') return list; // return the same if user did not searched

    searchTerm = searchTerm.toLowerCase(); // convert the search term to lower case

    return list.filter( ele => ele && ele[fieldName] && JSON.stringify(ele[fieldName]).toLowerCase().includes(searchTerm));
  }

}
