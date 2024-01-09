import {Component, Inject, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {EducationModel} from '../../models/EducationModel'
import {ExperienceModel} from "../../models/ExperienceModel";
import {SkillsModel} from "../../models/SkillsModel";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DocumentsModel} from "../../models/DocumentsModel";
import * as FileSaver from "file-saver";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  education: EducationModel[] = []
  experience: ExperienceModel[] = []
  skills: SkillsModel[] = []
  documents: DocumentsModel[] = []

  constructor(
    private dataService: DataService,
    public dialog: MatDialog,
  ) {
  }

  openDialogPDF() {
    let pdf: {} = ''

    const userLang = localStorage.getItem('language');
    if (userLang === 'en') {
      pdf = this.documents[1];
    } else {
      pdf = this.documents[0];
    }

    this.dialog.open(DialogPdfComponent, {
      data: {
        data: pdf
      }
    })
  }

  getEDocuments() {
    this.dataService.getDataDocuments().subscribe((data) => {
      this.documents = data.data["cv"] as DocumentsModel[]
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
    this.getEDocuments()
  }
}

//COMPONENTE DIALOGO PDF
@Component({
  selector: 'app-dialog-pdf',
  templateUrl: './dialog-pdf.component.html',
})

export class DialogPdfComponent {
  base64?: string = '';
  docu: DocumentsModel = {};

  constructor(
    private dialogRef: MatDialogRef<DialogPdfComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private dialogData: any) {
    if (dialogData !== null) {
      this.base64 = dialogData.data.typeData + ';' + dialogData.data.typeFormat + ',' + dialogData.data.data;
      this.docu = dialogData.data;
    }
  }

  downloadPDF() {
    const blob = this.base64toBlob(this.docu?.data ?? '', this.docu.typeFormat ?? '');
    FileSaver.saveAs(blob, 'cv.pdf');
  }

  private base64toBlob(base64Data: string, contentType: string): Blob {
    const sliceSize = 512;
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, {type: contentType});
  }
}

