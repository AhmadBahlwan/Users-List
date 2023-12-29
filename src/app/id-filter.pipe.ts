import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idFilter',
})
export class IdFilterPipe implements PipeTransform {
  transform(users: any[], searchText: string): any[] {
    if (!users || !searchText) {
      return users;
    }
    
    return users.filter(user => user.id.toString().includes(searchText));
  }
}