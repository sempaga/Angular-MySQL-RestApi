import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CholloListComponent } from './components/chollo-list/chollo-list.component';
import { CholloFormComponent } from './components/chollo-form/chollo-form.component';
import { CholloViewComponent } from './components/chollo-view/chollo-view.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/chollos',
    pathMatch:'full'
  },
  {
    path:'chollos',
    component: CholloListComponent
  },
  {
    path: 'chollos/add',
    component: CholloFormComponent
  },
  {
    path: 'chollos/edit/:id',
    component: CholloFormComponent
  },
  {
    path : 'chollos/:id',
    component :CholloViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
