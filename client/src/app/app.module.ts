import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';






import { AppComponent } from './app.component';
import { DividerComponent } from './divider/divider.component';
import { ResourceSelectorComponent } from './resource-selector/resource-selector.component';
import { DisplayResourceComponent } from './display-resource/display-resource.component';

@NgModule({
  declarations: [
    AppComponent,
    DividerComponent,
    ResourceSelectorComponent,
    DisplayResourceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    HttpModule 
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
