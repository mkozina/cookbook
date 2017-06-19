import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  constructor(
    private recipeService: RecipeService,
    private location: Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  add(name: string, instructions: string): void {
    name = name.trim();
    if (!name) { return; }
    this.recipeService.create(name, instructions)
      .then(() => this.goBack());
  }

  ngOnInit() {
  }

}
