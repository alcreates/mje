import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OurReachComponent } from './our-reach/our-reach.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WhyMjeComponent } from './why-mje/why-mje.component';
import { OurBusinessComponent } from './our-business/our-business.component';
import { TrackscrollDirective } from './trackscroll.directive';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import { TeamComponent } from './team/team.component';
import { MatDialogModule } from '@angular/material';
import { BioComponent } from './bio/bio.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DirectContactComponent } from './direct-contact/direct-contact.component';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { OurCapabilitiesComponent } from './our-capabilities/our-capabilities.component';
import { CoreExpertiseComponent } from './core-expertise/core-expertise.component';
import { OurApproachComponent } from './our-approach/our-approach.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BodyComponent,
    FooterComponent,
    AboutusComponent,
    WhyMjeComponent,
    OurBusinessComponent,
    TrackscrollDirective,
    OurReachComponent,
    TeamComponent,
    BioComponent,
    ContactusComponent,
    DirectContactComponent,
    WhatWeDoComponent,
    OurCapabilitiesComponent,
    CoreExpertiseComponent,
    OurApproachComponent
   
  ],
  entryComponents: [
    BioComponent,
    DirectContactComponent
  ]
  ,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpModule,
    FormsModule,
    AmChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBiQOkNFVlI6IqR5vU5bXvFQWbdwosz75U'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
