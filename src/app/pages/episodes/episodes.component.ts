import { Component, OnInit } from '@angular/core';
import { ServiceRickAndMortyService } from '../service/service-rick-and-morty.service';
import { EpisodeResponse } from '../home/home.component';
import { CardEpisodeComponent } from '../../components/card-episode/card-episode.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [CommonModule, CardEpisodeComponent],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss',
})
export class EpisodesComponent implements OnInit {
  data = {} as EpisodeResponse;

  constructor(private service: ServiceRickAndMortyService) {}

  ngOnInit(): void {
    this.service.getAllEpisodes().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
}
