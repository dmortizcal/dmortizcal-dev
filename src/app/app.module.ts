import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from "./material.module";
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from "./app.component";
import {BaseComponent} from "./components/base/base.component";
import {FooterComponent} from "./components/base/footer/footer.component";
import {NavbarComponent} from "./components/base/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {SidenavService} from "./services/sidenav.service";
import {ContactComponent} from './components/contact/contact.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
