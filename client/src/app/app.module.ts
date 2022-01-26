import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CholloFormComponent } from './components/chollo-form/chollo-form.component';
import { CholloListComponent } from './components/chollo-list/chollo-list.component';
import { CholloViewComponent } from './components/chollo-view/chollo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CholloFormComponent,
    CholloListComponent,
    CholloViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
