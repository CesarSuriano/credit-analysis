import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AnalysisViewerModule } from './pages/analysis-viewer/analysis-viewer.module';
import { HomeModule } from './pages/home/home.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    AnalysisViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
