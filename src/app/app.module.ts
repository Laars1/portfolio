import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { PortfolioSectionComponent } from './shared/components/portfolio-section/portfolio-section.component';
import { HomeComponent } from './core/home/home.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, PortfolioSectionComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
