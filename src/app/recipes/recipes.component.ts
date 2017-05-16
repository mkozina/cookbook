import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

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
