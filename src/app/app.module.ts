import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AllComponent } from './components/all/all.component';
import { MainComponent } from './components/main/main.component';
import { FindComponent } from './components/find/find.component';
import { RegisterComponent } from './components/register/register.component';
import { RemoveComponent } from './components/remove/remove.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AllComponent,
    MainComponent,
    FindComponent,
    RegisterComponent,
    RemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
