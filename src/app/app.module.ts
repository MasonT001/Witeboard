import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup-login.component';
import { TermsServiceComponent } from './terms-service/terms-service.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContestsListComponent } from './contests-list/contests-list.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './company-info/about/about.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyInfoNavComponent } from './company-info/company-info-nav/company-info-nav.component';
import { PressComponent } from './company-info/press/press.component';
import { ImpactComponent } from './company-info/impact/impact.component';
import { NewContestComponent } from './contests-list/new-contest/new-contest.component';
import { ShowContestComponent } from './contests-list/show-contest/show-contest.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    FooterComponent,
    SignupComponent,
    TermsServiceComponent,
    PrivacyPolicyComponent,
    ContestsListComponent,
    LoginComponent,
    ProfileComponent,
    CategoriesComponent,
    AboutComponent,
    CompanyInfoComponent,
    CompanyInfoNavComponent,
    PressComponent,
    ImpactComponent,
    NewContestComponent,
    ShowContestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
