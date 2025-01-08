import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

   userName: string = '';


   submitForm() {
     console.log('User Name:', this.userName);
   }
 

   updateUserName(event: Event) {
     const input = event.target as HTMLInputElement;
     this.userName = input.value;
   }
}
