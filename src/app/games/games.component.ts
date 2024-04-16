import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <h3>Los juegos favoritos de {{username}}</h3>
    <ul>
      @for (game of games; track game.id){
      <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Super Mario Bros.',
      platform: 'NES',
      genre: 'Platformer',
      year: 1985,
    },
    {
      id: 2,
      name: 'The Legend of Zelda',
      platform: 'NES',
      genre: 'Action-adventure',
      year: 1986,
    },
    {
      id: 2,
      name: 'Final Fantasy',
      platform: 'NES',
      genre: 'Role-playing',
      year: 198,
    },
  ];
}
