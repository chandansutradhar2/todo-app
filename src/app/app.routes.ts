import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './auth/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { SearchComponent } from './search/search.component';
import { BookmarkComponent } from './bookmark/bookmark.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home/:mobile', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path:'signup', component: SignupComponent},
    {path:'login', component: LoginComponent},
    {path:'home/features', component:FeaturesComponent},
    {path:'pricing', component:PricingComponent},
    {path:'search', component: SearchComponent},
    {path:'bookmark', component:BookmarkComponent},
    {path: '**', component:PageNotFoundComponent},
    
];

