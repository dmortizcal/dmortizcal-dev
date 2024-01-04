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
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {LanguageDetectorService} from "./services/language-detector.service";
import {CvComponent, DialogPdfComponent} from './components/cv/cv.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {PdfViewerModule} from "ng2-pdf-viewer";


// Configura el cargador de traducción
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/translations/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BaseComponent,
    HomeComponent,
    NotFoundComponent,
    ContactComponent,
    CvComponent,
    ProjectsComponent,
    DialogPdfComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'es',
    }),
    PdfViewerModule
  ],
  providers: [
    SidenavService,
    LanguageDetectorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
