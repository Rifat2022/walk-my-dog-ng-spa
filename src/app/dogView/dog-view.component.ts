import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Dog, DogsService } from '../dogs.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dog-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog-view.component.html',
  styleUrl: './dog-view.component.scss'
})
export class DogViewComponent {
  dog$!: Observable<Dog | undefined>;

  constructor(private dogsService: DogsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dog$ = this.route.paramMap.pipe(map(params => {
      return this.dogsService.dogs[Number(params.get('index'))]
    }))
  }
}
