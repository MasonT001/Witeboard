import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './company-info/about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContestsListComponent } from './contests-list/contests-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup-login.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { PressComponent } from './company-info/press/press.component';
import { ImpactComponent } from './company-info/impact/impact.component';
import { TeamComponent } from './company-info/team/team.component';
import { CareersComponent } from './company-info/careers/careers.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'contests', component: ContestsListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'privacypolicy', component: PrivacyPolicyComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'companyinfo', component: CompanyInfoComponent, children: [
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'team', component: TeamComponent
      },
      {
        path: 'careers', component: CareersComponent
      },
      {
        path: 'press', component: PressComponent
      },
      {
        path: 'impact', component: ImpactComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }