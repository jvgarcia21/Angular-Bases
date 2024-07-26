import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public heroNames: string[] = ['Superman', 'Batman', 'hulck', 'Thor', 'Ironman'];
public deleteHero?:string;


removeLastHero() : void {
 this.deleteHero= this.heroNames.pop();
}



}
