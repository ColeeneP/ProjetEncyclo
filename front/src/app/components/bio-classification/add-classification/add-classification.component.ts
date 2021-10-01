import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassificationService } from 'src/app/services/classification.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'appcp-add-classification',
  templateUrl: './add-classification.component.html',
  styleUrls: ['./add-classification.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddClassificationComponent implements OnInit {

  classificationForm!: FormGroup;
  responseServer = null;

  constructor( private classificationService: ClassificationService,
    private router: Router) { }

  ngOnInit(): void {
    this.classificationForm = new FormGroup({
      category: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      identification: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
      refs: new FormControl('', [Validators.required])
      });
  }

  // Création d'un commentaire
  onSubmit(): void {
    let category = this.classificationForm.get('category')!.value;
    let name = this.classificationForm.get('name')!.value;
    let identification = this.classificationForm.get('identification')!.value;
    let refs = this.classificationForm.get('refs')!.value;
    this.classificationService.createClassification(category, name).subscribe(
      result =>
      localStorage['message'] = JSON.stringify(result),
        error =>
          this.responseServer = error.error.message
    )
    this.router.navigate([''])
}

}
