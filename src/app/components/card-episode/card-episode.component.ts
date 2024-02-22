import { Component, Input } from '@angular/core';
import { RickAndMortyEpisode } from '../../pages/home/home.component';

@Component({
  selector: 'app-card-episode',
  standalone: true,
  imports: [],
  templateUrl: './card-episode.component.html',
  styleUrl: './card-episode.component.scss',
})
export class CardEpisodeComponent {
  @Input() episode!: RickAndMortyEpisode;
}
