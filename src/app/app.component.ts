import { Component } from '@angular/core';

import { Recipe } from './recipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ryourisho';
  recipes: Recipe[];
  selectedRecipe: Recipe;

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
}
