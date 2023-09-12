import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {EducationModel} from '../../models/EducationModel'
import {ExperienceModel} from "../../models/ExperienceModel";
import {SkillsModel} from "../../models/SkillsModel";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  education: EducationModel[] = []
  experience: ExperienceModel[] = []
  skills: SkillsModel[]=[]

  constructor(private dataService: DataService) {
  }

  getEducation() {
    this.dataService.getDataEducation().subscribe((data) => {
      this.education = data.data as EducationModel[]
    })
  }

  getExperience() {
    this.dataService.getDataExperience().subscribe((data) => {
      this.experience = data.data as ExperienceModel[]
    })
  }
  getSkills() {
    this.dataService.getDataSkills().subscribe((data) => {
      this.skills = data.data as SkillsModel[]
    })
  }

  ngOnInit() {
    this.getEducation()
    this.getExperience()
    this.getSkills()
  }
}
