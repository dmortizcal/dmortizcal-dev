import {SkillsModel} from "./SkillsModel";

export interface ExperienceModel {
  "name": string
  "company": string
  "type": string
  "year": string
  "city": string
  "skills": SkillsModel[]

  [key: string]: any;
}
