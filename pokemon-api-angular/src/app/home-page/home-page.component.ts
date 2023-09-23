import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokelistComponent} from "../pokelist/pokelist.component";
import {PokecardComponent} from "../pokecard/pokecard.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,  PokelistComponent, PokecardComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

}
