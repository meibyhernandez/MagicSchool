import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { APP_ROUTING } from './app.routes';
//import { routes } from "./app-routing.module";
import { SearchingService } from "./services/searching.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'

import { CharactersComponent } from './components/characters/characters.component';
import { MembersComponent } from './components/members/members.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FormsModule } from '@angular/forms'; 





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    CharactersComponent,
    MembersComponent,
    FilterPipe,
    SortPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
    //routes
  ],
  providers: [
    SearchingService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
