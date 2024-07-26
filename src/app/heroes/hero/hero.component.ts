import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

getHerpDescription(): string {


  return `${this.name} -${this.age}`;

}
changeHero(): void {
  this.name = this.name === 'ironman' ? 'spiderman' : 'ironman';
}
changeAge(): void {
  this.age = this.age === 45 ? 16 : 45;
}
}
