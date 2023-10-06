import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  openNewTab(url: string) {
    const windowName = '_blank';
    window.open(url, windowName);
  }
}
