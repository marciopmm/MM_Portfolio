import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';

import { environment } from '../environments/environment.development';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkComponent } from './components/work/work.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmailComponent } from './components/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    WorkComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireFunctionsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

/* USING EMAULATOR (use with command firebase serve --only functions)

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireFunctionsModule, USE_EMULATOR } from '@angular/fire/compat/functions';

import { environment } from '../environments/environment.development';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireFunctionsModule
  ],
  providers: [{ provide: USE_EMULATOR, useValue: ['localhost', 5000]}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


*/