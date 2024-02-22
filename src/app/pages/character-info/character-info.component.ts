import { Component, OnInit } from '@angular/core';
import { ServiceRickAndMortyService } from '../service/service-rick-and-morty.service';
import { RickAndMortyCharacter } from '../home/home.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-info',
  standalone: true,
  imports: [],
  templateUrl: './character-info.component.html',
  styleUrl: './character-info.component.scss',
})
export class CharacterInfoComponent implements OnInit {
  data: RickAndMortyCharacter = {} as RickAndMortyCharacter;

  constructor(
    private serviceRickAndMortyService: ServiceRickAndMortyService,
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.serviceRickAndMortyService.getDataById(id).subscribe((data) => {
          this.data = data;
          console.log(data);
        });
      }
    });
  }
}
