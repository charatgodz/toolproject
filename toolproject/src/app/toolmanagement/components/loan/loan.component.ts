import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})

export class LoanComponent implements OnInit {
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }
  form: FormGroup;
  isShow: boolean = false;
  ngOnInit() {
  }

  private createForm() {
    this.form = this.fb.group({
      eng_id:[],
      aircraft:[],
      flight:[],
    });
  };

  private onSubmit(){
    this.isShow = true;

   this.form.get('eng_id').setValue(1234)
   this.form.get('eng_id').disable()
   this.form.get('aircraft').disable()
   this.form.get('flight').disable()



  }

  private reSetmodal(){
    this.isShow = false;
    this.form.reset();
  }

}
