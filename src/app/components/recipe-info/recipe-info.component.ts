import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {

  recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.recipeService.getRecipe(+params['id']))
      .subscribe(recipe => this.recipe = recipe);
  }

}
