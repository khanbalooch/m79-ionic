import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/models/User';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: User[], searchTerm: string, fieldName: string): User[] {
    if(list === null || list.length === 0 ) return [];
    if(searchTerm === '') return list;
    searchTerm = searchTerm.toLowerCase();
    return list.filter( (ele) => ele.fullName.toLowerCase().includes(searchTerm));
  }
}
