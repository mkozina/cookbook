import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent implements OnInit {
  title = 'Ryourisho';
  recipes: Recipe[];
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  getRecipes(): void {
    this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  ngOnInit(): void {
    this.getRecipes();
  }

}
