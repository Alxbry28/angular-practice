import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { PokemonTemplateFormComponent } from './pokemon-base/pokemon-template-form/pokemon-template-form.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,

    NotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokemonBaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
