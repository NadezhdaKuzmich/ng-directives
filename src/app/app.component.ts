import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'directives-ng';
  isAdmin: boolean = true;
  car = 'Audi';
  users = [
    {
      userName: 'Vadim',
      age: 32,
    },
    {
      userName: ' Marichka',
      age: 28,
    },
    {
      userName: 'Kate',
      age: 21,
    },
  ];
  elementStyle = {
    color: 'red',
    opacity: 0.5,
  };
  arrayOfClasses = ['bold', 'blue'];
  currentDate = new Date();

  changeStatus() {
    this.isAdmin = !this.isAdmin;
  }
}
