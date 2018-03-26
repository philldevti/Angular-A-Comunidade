import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../model/card';

@Pipe({
  name: 'groupBy',
  pure: false
})
export class GroupByPipe implements PipeTransform {

  transform(collection: Array<Card>, property: string): any {
    // prevents the application from breaking if the array of objects doesn't exist yet
    if (!collection) {
        return null;
    }

    const groupedCollection = collection.reduce((previous, current) => {
        if (!previous[current[property]]) {
            previous[current[property]] = [current];
        } else {
            previous[current[property]].push(current);
        }

        return previous;
    }, {});

    // this will return an array of objects, each object containing a group of objects
    const ret = Object.keys(groupedCollection)
                      .map(key => ({ key, value: groupedCollection[key] }));
    // Order list
    const lista = ret.sort((a: any, b: any) => {
      if (a.value.length > b.value.length) {
        return -1;
      } else if (a.value.length < b.value.length) {
        return 1;
      } else {
        return 0;
      }
    });


    // console.log(lista);
    return lista;
  }

}
