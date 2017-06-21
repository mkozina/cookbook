import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  public myForm: FormGroup;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  add(model: Recipe): void {
    this.recipeService.create(model)
      .then(() => this.router.navigate(['/recipes']));
  }

  addIngredient() {
    const control = <FormArray>this.myForm.controls['ingredients'];
    control.push(new FormControl('', [Validators.required, Validators.minLength(5)]));
  }

  removeIngredient(i: number) {
    const control = <FormArray>this.myForm.controls['ingredients'];
    control.removeAt(i);
  }

  addDirection() {
    const control = <FormArray>this.myForm.controls['directions'];
    control.push(new FormControl('', [Validators.required, Validators.minLength(25)]));
  }

  removeDirection(i: number) {
    const control = <FormArray>this.myForm.controls['directions'];
    control.removeAt(i);
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
      ingredients: this.fb.array([
        ['', [Validators.required, Validators.minLength(5), Validators.maxLength(80)]]
      ]),
      directions: this.fb.array([
        ['', [Validators.required, Validators.minLength(25), Validators.maxLength(800)]]
      ])
    });
  }

}
