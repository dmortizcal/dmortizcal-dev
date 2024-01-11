import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {ProjectsModels} from "../../models/ProjectsModels";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectsModels[] = []

  constructor(private dataProjects: DataService,) {
  }

  openNewTab(url: string) {
    const windowName = '_blank';
    window.open(url, windowName);
  }

  getProjects() {
    this.dataProjects.getDataProjects().subscribe((data) => {
      this.projects = data.data as ProjectsModels[]
    })
  }

  ngOnInit(): void {
    this.getProjects();
  }
}
