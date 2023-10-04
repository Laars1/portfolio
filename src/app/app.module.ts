import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { PortfolioSectionComponent } from './shared/components/portfolio-section/portfolio-section.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { SectionHeaderComponent } from './shared/components/section-header/section-header.component';
import { SkillItemComponent } from './shared/components/skill-item/skill-item.component';
import { SkillWrapperComponent } from './shared/components/skill-wrapper/skill-wrapper.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, PortfolioSectionComponent, SectionHeaderComponent, HomeComponent, AboutComponent, SkillWrapperComponent, SkillItemComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}