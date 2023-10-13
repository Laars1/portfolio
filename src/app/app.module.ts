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
import { TagItemComponent } from './shared/components/tag-item/tag-item.component';
import { SkillWrapperComponent } from './shared/components/skill-wrapper/skill-wrapper.component';
import { RecentWorkComponent } from './core/recent-work/recent-work.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectCardComponent } from './shared/components/project-card/project-card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, PortfolioSectionComponent, SectionHeaderComponent, HomeComponent, AboutComponent, RecentWorkComponent, SkillWrapperComponent, TagItemComponent, ProjectCardComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
