import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../character.model';


@Pipe({
  name: 'filter'
}) 

export class FilterPipe implements PipeTransform {

  transform(characters: Character[], name:string): Character[]{
    if (!characters || !name) {
      return characters;
    }
    return characters.filter(characters=>
      characters.name.toLowerCase().indexOf(name.toLowerCase())!==-1 || characters.ancestry.toLowerCase().indexOf(name.toLowerCase())!==-1);
  }



}
