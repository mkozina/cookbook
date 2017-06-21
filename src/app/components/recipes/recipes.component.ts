import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];
  selectedRecipe: Recipe;
  state = false;

  constructor(
    private router: Router,
    private recipeService: RecipeService
  ) { }

  getRecipes(): void {
    this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedRecipe.id]);
  }

  delete(recipe: Recipe): void {
    this.recipeService
      .delete(recipe.id)
      .then(() => {
        this.recipes = this.recipes.filter(h => h !== recipe);
        if (this.selectedRecipe === recipe) { this.selectedRecipe = null; }
      });
  }

  toggleState() {
    let bool = this.state;
    this.state = bool === false ? true : false;
  }

  ngOnInit(): void {
    this.getRecipes();
  }

}
