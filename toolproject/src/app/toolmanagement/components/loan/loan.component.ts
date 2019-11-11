import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})

export class LoanComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  form_header: FormGroup;
  form_detail: FormGroup;

  isShow: boolean = false;
  ngOnInit() {
  }

  private createForm() {
    this.form_header = this.fb.group({
      eng_id: ['', Validators.required],
      eng_name: [''],
      aircraft: ['', Validators.required],
      flight: ['']
    });
    this.form_header.get('eng_name').disable()

    this.form_detail = this.fb.group({
      batch: ['', Validators.required]
    })

  };

  private onSubmitHeader() {
    this.isShow = true;
    this.form_header.get('eng_id').setValue(1234)
    this.form_header.get('eng_id').disable()
    this.form_header.get('aircraft').disable()
    this.form_header.get('flight').disable()
  }

  private onSubmitDetail() {
    console.log(this.form_detail.value)
    this.form_detail.reset()
  
  }

  private reSetmodal() {
    this.isShow = false;
    this.form_header.reset();
    this.form_header.get('eng_id').enable()
    this.form_header.get('aircraft').enable()
    this.form_header.get('flight').enable()
  }

}
