import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ArticleComponent } from './Components/UnUsed /article/article.component';
import { BootcampComponent } from './Components/UnUsed /bootcamp/bootcamp.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { EventsComponent } from './Components/UnUsed /events/events.component';
import { AllProgramesComponent } from './Components/Programs/all-programes/all-programes.component';
import { WebdevelopmentComponent } from './Components/Programs/webdevelopment/webdevelopment.component';
import { UiUxComponent } from './Components/Programs/ui-ux/ui-ux.component';
import { ProductmanagmentComponent } from './Components/Programs/productmanagment/productmanagment.component';
import { BrandingComponent } from './Components/Programs/branding/branding.component';
import { MobiledevelopmentComponent } from './Components/Programs/mobiledevelopment/mobiledevelopment.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent,
  children: [
    {
      path: 'allprograms',
      component:AllProgramesComponent,
    },
    {
      path:'',
      redirectTo:'allprograms',
      pathMatch:"full",
    },
    {
      path: 'uiux',
      component: UiUxComponent,
    },
    {
      path: 'productmanagement',
      component: ProductmanagmentComponent,
    },
    {
      path: 'branding',
      component: BrandingComponent,
    },
    {
      path: 'mobiledevelopment',
      component: MobiledevelopmentComponent,
    },
    {
      path: 'webdevelopment',
      component: WebdevelopmentComponent,
    },
  ],
},
  {path:"home/article",component:ArticleComponent},
  {path:"home/bootcamp",component:BootcampComponent},
  {path:"home/contactus",component:ContactusComponent},
  {path:"home/events",component:EventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
