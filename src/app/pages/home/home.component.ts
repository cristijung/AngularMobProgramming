import { Component, OnInit } from '@angular/core';
import { ServiceRickAndMortyService } from '../service/service-rick-and-morty.service';
import { CardCharacterComponent } from '../../components/card-character/card-character.component';
import { CommonModule } from '@angular/common';

interface APIPagesInfo {
  info: {
    count: number;

    pages: number;

    next: string | null;

    prev: string | null;
  };
}

export interface CharacterResponse extends APIPagesInfo {
  results: RickAndMortyCharacter[];
}

export interface RickAndMortyCharacter {
  id: number;

  name: string;

  species: string;

  status: string;

  gender: string;

  image: string;

  origin: {
    name: string;

    url: string;
  };

  location: {
    name: string;

    url: string;
  };

  episode: string[];
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardCharacterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private serviceRickAndMortyService: ServiceRickAndMortyService) {}
  data: CharacterResponse = {} as CharacterResponse;
  ngOnInit(): void {
    this.serviceRickAndMortyService.getData().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
}
