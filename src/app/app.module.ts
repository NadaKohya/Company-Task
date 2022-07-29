import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { BootcampComponent } from './Components/UnUsed /bootcamp/bootcamp.component';
import { EventsComponent } from './Components/UnUsed /events/events.component';
import { ArticleComponent } from './Components/UnUsed /article/article.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { ExplorepathComponent } from './Components/explorepath/explorepath.component';
import { PartnersComponent } from './Components/partners/partners.component';
import { MembershipComponent } from './Components/membership/membership.component';
import { AdviceComponent } from './Components/advice/advice.component';
import { WorkplacesComponent } from './Components/workplaces/workplaces.component';
import { OpinionsComponent } from './Components/opinions/opinions.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { AllProgramesComponent } from './Components/Programs/all-programes/all-programes.component';
import { WebdevelopmentComponent } from './Components/Programs/webdevelopment/webdevelopment.component';
import { UiUxComponent } from './Components/Programs/ui-ux/ui-ux.component';
import { ProductmanagmentComponent } from './Components/Programs/productmanagment/productmanagment.component';
import { BrandingComponent } from './Components/Programs/branding/branding.component';
import { MobiledevelopmentComponent } from './Components/Programs/mobiledevelopment/mobiledevelopment.component';
import { CourseCardComponent } from './Components/course-card/course-card.component';
import { PopUpWindowComponent } from './Components/pop-up-window/pop-up-window.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BootcampComponent,
    EventsComponent,
    ArticleComponent,
    ContactusComponent,
    ExplorepathComponent,
    PartnersComponent,
    MembershipComponent,
    AdviceComponent,
    WorkplacesComponent,
    OpinionsComponent,
    FooterComponent,
    CoursesComponent,
    AllProgramesComponent,
    WebdevelopmentComponent,
    UiUxComponent,
    ProductmanagmentComponent,
    BrandingComponent,
    MobiledevelopmentComponent,
    CourseCardComponent,
    PopUpWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
