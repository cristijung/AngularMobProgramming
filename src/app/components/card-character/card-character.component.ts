import { Component, Input } from '@angular/core';
import { RickAndMortyCharacter } from '../../pages/home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.scss',
})
export class CardCharacterComponent {
  @Input() character!: RickAndMortyCharacter;
}
