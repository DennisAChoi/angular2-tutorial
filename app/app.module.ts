import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategorysComponent }  from './category/categorys.component';
import { CategorySearchComponent } from './category/category-search.component';
import { CategoryDetailComponent } from './category/category-detail.component';
import { CategoryService } from './category/category.service';
import { routing } from './app.routing';
import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CategorysComponent,
    CategoryDetailComponent,
    CategorySearchComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
