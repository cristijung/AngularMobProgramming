import { Component, OnInit } from '@angular/core';
import { SimpsonsService } from '../service/simpsons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-characters-simpsons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters-simpsons.component.html',
  styleUrl: './characters-simpsons.component.scss'
})
export class CharactersSimpsonsComponent implements OnInit {
data: any = {}

constructor(
  private simpsonsService : SimpsonsService



){}
ngOnInit(): void{
this.simpsonsService.getData().subscribe((data) =>{
  this.data = data;
  console.log(data)
})
}
}
