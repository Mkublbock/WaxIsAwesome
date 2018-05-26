import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormattingService } from '../providers/formatingService';
import { SlideService } from '../providers/SlideManager';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ParticlesModule
  ],
  providers: [SlideService, FormattingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
