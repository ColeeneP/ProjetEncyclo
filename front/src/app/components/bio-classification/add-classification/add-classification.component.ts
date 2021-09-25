import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassificationService } from 'src/app/services/classification.service';

@Component({
  selector: 'appcp-add-classification',
  templateUrl: './add-classification.component.html',
  styleUrls: ['./add-classification.component.scss']
})
export class AddClassificationComponent implements OnInit {

  classificationForm!: FormGroup;
  responseServer = null;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private classificationService: ClassificationService,
    private router: Router) { }

  ngOnInit(): void {
    this.classificationForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      identification: this.formBuilder.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
      refs: this.formBuilder.control('', [Validators.required])
    })
  }

  // Création d'un commentaire
  onSubmit(): void {
    let name = this.classificationForm.get('name')!.value;
    let identification = this.classificationForm.get('identification')!.value;
    let refs = this.classificationForm.get('refs')!.value;
    this.classificationService.createClassification(name).subscribe(
      result =>
      localStorage['message'] = JSON.stringify(result),
        error =>
          this.responseServer = error.error.message
    )
    this.router.navigate([''])
}

}
