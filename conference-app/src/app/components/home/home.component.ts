import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items = [
    { id: 1, name: 'Item 1', description: 'haha' },
    { id: 2, name: 'Item 2', description: 'want ko' },
    { id: 3, name: 'Item 3', description: 'na' },
    { id: 4, name: 'Item 4', description: 'umuwi' }
  ];

 
  isVisible = true;

  
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
