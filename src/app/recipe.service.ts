import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Recipe } from './recipe';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RecipeService {

  private recipesUrl = '/api/recipes';

  constructor(private http: Http) { }

  getRecipes(): Promise<Recipe[]> {
    return this.http.get(this.recipesUrl)
      .toPromise()
      .then(response => response.json() as Recipe[])
      .catch(this.handleError);
  }

  getRecipe(id: number): Promise<Recipe> {
    const url = `${this.recipesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Recipe)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
