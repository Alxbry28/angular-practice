import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Pokemon {
  id: number,
  name: string,
  type: string,
  isCool: boolean,
  isStylish: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string;
  title1: string = "Desserts";
  imgSrc: string = "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
  numberOne: number = 1;
  numberTwo: number = 2;
  togglePokemon: boolean = false;
  favoriteAnimal: string = "turtle";
  pokemonName: string = "";
  pokemonName1: string = "";

  pokemons: Pokemon[] = [
    {
      id: 1,
      name: "pikachu",
      type: "electric",
      isCool: false,
      isStylish: true,
    },
    {
      id: 2,
      name: "squirtle",
      type: "water",
      isCool: true,
      isStylish: true,
    },
    {
      id: 3,
      name: "charmander",
      type: "fire",
      isCool: true,
      isStylish: false,
    },
  ];

  constructor() {
    this.title = 'my-app';
  }

  handleClick(value: any) {
    console.log(value);
  }

  handleChange(event: any) {
    this.pokemonName1 = event.target.value;
  }

}
