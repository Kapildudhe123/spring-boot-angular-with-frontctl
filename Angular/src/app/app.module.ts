import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';

import { HttpServiceService } from './http-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './user/userlist.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { AuthServiceService } from './auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    NavbarComponent,
    UserComponent,
    UserlistComponent,
    FooterComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthServiceService, multi: true
    },
    HttpServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
