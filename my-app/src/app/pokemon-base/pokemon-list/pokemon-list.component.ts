import { AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Pokemon } from "src/app/models/pokemon";
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

//Decorator
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit, AfterViewInit, AfterContentInit {
  pokemons!: Pokemon[];
  @ViewChildren('pokemonRef') pokemonRef!: ElementRef;
  @ViewChild('pokemonTh') pokemonTh!: ElementRef;
  @ContentChildren(PokemonDetailComponent) contentList!: any;
  constructor(private pokemonService: PokemonService, private renderer: Renderer2) {


  }


  ngAfterContentInit(): void {
    console.log("ngAfterContentInit:");
    console.log(this.contentList);

  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit:");
    console.log(this.pokemonRef);

    console.log("pokemonTh:");
    console.log(this.pokemonTh);
    this.pokemonTh.nativeElement.innerText = "Test test";
    // throw new Error('Method not implemented.');
    const div = this.renderer.createElement("div");
    const text = this.renderer.createText("Pokemon List");
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.pokemonTh.nativeElement, div);
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      console.log(data);
      this.pokemons = data;
    });
  }

  handleRemove(event: Pokemon) {
    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => {
      return pokemon.id !== event.id;
    });
  }





}
