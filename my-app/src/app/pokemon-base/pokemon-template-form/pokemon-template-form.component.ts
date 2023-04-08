import { Pokemon, PokemonType } from 'src/app/models/pokemon';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css']
})
export class PokemonTemplateFormComponent implements OnInit {

  pokemon!: Pokemon;
  acceptTerm!: boolean;

  pokemonType: PokemonType[] = [
    {
      key: 0,
      value: "Fire"
    },
    {
      key: 1,
      value: "Water"
    },

    {
      key: 2,
      value: "Electric"
    },


  ]

  constructor(private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute) { }

  toggleAccept(object: any) {
    console.log(object);
    this.acceptTerm = object;

  }

  handleSubmit(object: any) {
    console.log(object);


  }

  ngOnInit() {
    // this.pokemon = {} as Pokemon;
    this.route.params.subscribe((data: Params) => {
      console.log(data);

      let id = data['id'];
      console.log(id);
      this.pokemonService.getPokemon(id)
        .subscribe((data: Pokemon) => {
          this.pokemon = data;
        });
    });
  }

back(){
  this.router.navigate(['/pokemon']);
}

}
