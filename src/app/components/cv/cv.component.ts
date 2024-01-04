import {Component, Inject, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {EducationModel} from '../../models/EducationModel'
import {ExperienceModel} from "../../models/ExperienceModel";
import {SkillsModel} from "../../models/SkillsModel";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface dataPDF {
  pdf: string;
}

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  education: EducationModel[] = []
  experience: ExperienceModel[] = []
  skills: SkillsModel[] = []

  constructor(
    private dataService: DataService,
    public dialog: MatDialog,
  ) {
  }

  openDialogPDF() {
    const pdfUrlEs = 'assets/docs/cv-es.pdf';
    const pdfUrlEn = 'assets/docs/cv-en.pdf';
    let pdf: string = ''

    const userLang = localStorage.getItem('language');
    if (userLang === 'en') {
      pdf = pdfUrlEn
    } else {
      pdf = pdfUrlEs
    }

    this.dialog.open(DialogPdfComponent, {
      data: {
        pdf: pdf
      }
    })
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

//COMPONENTE DIALOGO PDF
@Component({
  selector: 'app-dialog-pdf',
  templateUrl: './dialog-pdf.component.html',
})

export class DialogPdfComponent {
  pdf?: dataPDF;

  constructor(
    private dialogRef: MatDialogRef<DialogPdfComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private dialogData: dataPDF) {
    if (dialogData !== null) {
      this.pdf = dialogData;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

