import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterInfoComponent } from './pages/character-info/character-info.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { CharactersSimpsonsComponent } from './pages/characters-simpsons/characters-simpsons.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'info/:id', component: CharacterInfoComponent },
  {path: 'characters-simpson', component: CharactersSimpsonsComponent}
];
