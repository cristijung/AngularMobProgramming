import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterInfoComponent } from './pages/character-info/character-info.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info/:id', component: CharacterInfoComponent },
];
