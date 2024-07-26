import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  public title:string = 'Hola Mundo';
  public count:number = 10;
  increaseby(value:number):void{
    this.count += value;
  }
  resetCounter():void{
    this.count = 10;
  }

}
