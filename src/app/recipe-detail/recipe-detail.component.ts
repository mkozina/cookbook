import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.recipeService.update(this.recipe)
      .then(() => this.goBack());
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.recipeService.getRecipe(+params['id']))
      .subscribe(recipe => this.recipe = recipe);
  }

}
