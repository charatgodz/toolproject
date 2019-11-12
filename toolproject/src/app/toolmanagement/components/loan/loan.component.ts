import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

declare const $: any;

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
  batch_array: Array<{batch: string, qty: number}> = [];

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
   this.batch_array.push({batch: this.form_detail.get('batch').value, qty: 1});
   console.log(JSON.stringify(this.batch_array));
   this.form_detail.reset();
  }

  private reSetmodal() {
    this.isShow = false;
    this.form_header.reset();
    this.form_header.get('eng_id').enable()
    this.form_header.get('aircraft').enable()
    this.form_header.get('flight').enable()
  }







}
