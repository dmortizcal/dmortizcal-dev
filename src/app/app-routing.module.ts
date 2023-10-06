import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseComponent} from "./components/base/base.component";
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ContactComponent} from "./components/contact/contact.component";
import {CvComponent} from "./components/cv/cv.component";
import {ProjectsComponent} from "./components/projects/projects.component";

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      }, {
        path: 'contacto',
        component: ContactComponent,
      }, {
        path: 'cv',
        component: CvComponent,
      },{
        path: 'proyectos',
        component: ProjectsComponent,
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
