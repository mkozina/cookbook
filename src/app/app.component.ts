import { Component } from '@angular/core';

export class Recipe {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ryourisho';
  recipe: Recipe = {
    id: 1,
    name: 'Warabi Mochi'
  };
}
