import { Component, Input, input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-listaz',
  templateUrl: './list.component.html',

})

export class ListComponent {
  @Input()
public characterList: Character[] = [{
  name:'trunks',
  power: 10
}]

}
