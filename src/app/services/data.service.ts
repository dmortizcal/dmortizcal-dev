import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrlEducation = '../../assets/data/education.json';
  private dataUrlExperience = '../../assets/data/experience.json';
  private dataUrlSkills = '../../assets/data/skills.json';
  private dataUrlProjects = '../../assets/data/projects.json';

  constructor(private http: HttpClient) { }

  getDataEducation(): Observable<any> {
    return this.http.get(this.dataUrlEducation);
  }

  getDataExperience(): Observable<any> {
    return this.http.get(this.dataUrlExperience);
  }

  getDataSkills(): Observable<any> {
    return this.http.get(this.dataUrlSkills);
  }

  getDataProjects(): Observable<any> {
    return this.http.get(this.dataUrlProjects);
  }
}
