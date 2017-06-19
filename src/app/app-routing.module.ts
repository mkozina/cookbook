import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeInfoComponent } from './components/recipe-info/recipe-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'detail/:id', component: RecipeDetailComponent },
  { path: 'form', component: RecipeFormComponent },
  { path: 'info/:id', component: RecipeInfoComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
