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
import { FooterComponent } from './core/footer/footer.component';
import { ExperienceComponent } from './core/experience/experience.component';
import { ExperienceItemComponent } from './shared/components/experience-item/experience-item.component';
import {NgxTypedJsModule} from 'ngx-typed-js';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { Router, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortfolioSectionComponent,
    SectionHeaderComponent,
    HomeComponent,
    AboutComponent,
    RecentWorkComponent,
    SkillWrapperComponent,
    TagItemComponent,
    ProjectCardComponent,
    FooterComponent,
    ExperienceComponent,
    ExperienceItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, NgxTypedJsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
