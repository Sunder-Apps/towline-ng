import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { BackgroundComponent } from './background/background.component';
import { BackgroundService } from './background/background.service';
import { DefaultDialogComponent } from './alerts/default-dialog/default-dialog.component';
import { SettingsService } from './settings/settings.service';
import { CryptoService } from './crypto/crypto.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SettingsComponent } from './settings/settings.component';
import { SafePipe } from './pipes/safe.pipe';
import { UrlSafePipe } from './pipes/url-safe.pipe';
import { FormsModule } from '@angular/forms';
import { AlertsComponent } from './alerts/alerts.component';

@NgModule({
  declarations: [
    AlertsComponent,
    AppComponent,
    BackgroundComponent,
    DefaultDialogComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    SafePipe,
    UrlSafePipe,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [
    BackgroundService,
    CryptoService,
    SettingsService,
  ],
  entryComponents: [
    DefaultDialogComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
