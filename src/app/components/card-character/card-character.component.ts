import { Component, Input } from '@angular/core';
import { RickAndMortyCharacter } from '../../pages/home/home.component';

@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.scss',
})
export class CardCharacterComponent {
  @Input() character!: RickAndMortyCharacter;
}
