import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DividerComponent } from './divider/divider.component';
import { ResourceSelectorComponent } from './resource-selector/resource-selector.component';
import { DisplayResourceComponent } from './display-resource/display-resource.component';
import { HomeComponent } from './home/home.component';
import { OutputComponent } from './output/output.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import {MatCardModule} from '@angular/material/card';
import { NgxSpinnerModule } from 'ngx-spinner';
import {WebcamModule} from 'ngx-webcam';


@NgModule({
  declarations: [
    AppComponent,
    DividerComponent,
    ResourceSelectorComponent,
    DisplayResourceComponent,
    HomeComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    MatProgressBarModule,
    CarouselModule,
    WavesModule,
    MatCardModule,
    NgxSpinnerModule,
    WebcamModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
