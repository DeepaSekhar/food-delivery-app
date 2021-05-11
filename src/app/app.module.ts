import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    RestaurentComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, RouterModule.forRoot(routes)

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
