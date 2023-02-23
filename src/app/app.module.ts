import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AboutComponent } from './about/about.component';
import {AboutModule} from "./about/about.module";
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
import { UserModule } from './user/user.module';
import { ProvidersComponent } from './providers/providers.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvidersComponent,
    HomeComponent,
    ContactComponent,
    NotfoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AboutModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
