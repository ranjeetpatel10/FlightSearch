import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, CanActivate, CanActivateChild} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './pages/about.component';
import { ServiceComponent } from './pages/service.component';
import { ContactComponent } from './pages/contact.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './login/authGuard';
import { UserService } from './login/user.service';
import { OnlyLoggedInUserGaurd } from './login/onlyLoggedInUserGaurd';
import { FormComponent } from './form/form.component';
import { FlightComponent } from './flight/flight.component';

import { FlightService } from './service/flight.service';
import { RangePipe } from './flight/flight.pipe';

const appRoutes: Routes =[
  { path: '', redirectTo:'/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'about', component: AboutComponent},
  { path: 'service', component: ServiceComponent },
  { path: 'contact', component: ContactComponent, canActivate: [ OnlyLoggedInUserGaurd, AuthGuard] },
  { path: 'products', component: ProductsComponent },
  { path: 'form', component: FormComponent },
  { path: 'flight', component: FlightComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    NotFoundComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    ProductsComponent,
    FormComponent,
    FlightComponent,
    RangePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [UserService, OnlyLoggedInUserGaurd, AuthGuard, LoginComponent, FlightService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
