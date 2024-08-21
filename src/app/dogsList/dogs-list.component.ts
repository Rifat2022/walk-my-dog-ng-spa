import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DogsListCardComponent } from '../dogs-list-card/dogs-list-card.component';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [CommonModule, DogsListCardComponent],
  templateUrl: './dogs-list.component.html',
  styleUrl: './dogs-list.component.scss'
})
export class DogsListComponent implements OnInit {
  /**
   *
   */
  constructor(readonly dogsService: DogsService) {
    // super();
    
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
