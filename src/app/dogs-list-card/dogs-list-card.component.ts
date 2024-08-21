import { Component, Input } from '@angular/core';
import { Dog } from '../dogs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dogs-list-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dogs-list-card.component.html',
  styleUrl: './dogs-list-card.component.scss'
})
export class DogsListCardComponent {
  @Input() dog!: Dog;
  @Input() index!: Number;
}
