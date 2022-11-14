import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupLoginComponent } from './signup/signup-login.component';
import { TermsServiceComponent } from './terms-service/terms-service.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContestsListComponent } from './contests-list/contests-list.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    FooterComponent,
    SignupLoginComponent,
    TermsServiceComponent,
    PrivacyPolicyComponent,
    ContestsListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
