import { Iemployee } from './../../../shareds/interfaces/shared.interface';
import { HttpService } from './../../../services/http.service';
import { AlertService } from './../../../shareds/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms'
import { ToolService } from '../../services/Tool.service';
import { SharedValidators } from 'src/app/shareds/Validators/shared.validators';

declare const $: any;

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})

export class LoanComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private tool: ToolService,
    private alert: AlertService,
    private http: HttpService
  ) {

    this.createForm();

  }

  form_header: FormGroup;
  form_detail: FormGroup;
  header_id: Number;
  emp: Iemployee;


  isShow: boolean = false;
  batch_array: Array<{ batch: string, qty: number }> = [];

    ngOnInit() {
      this.test()
  }



  private createForm() {
    this.form_header = this.fb.group({
      eng_id: ['', [Validators.required, SharedValidators],SharedValidators],
      eng_name: [''],
      aircraft: ['', Validators.required],
      flight: ['']
    });
    this.form_header.get('eng_name').disable()

    this.form_detail = this.fb.group({
      batch: ['', Validators.required],
      header_id: ['', Validators.required],
      qty_borrow: ['1', Validators.required]
    })


  };

  private onSubmitHeader() {
    this.isShow = true;
    this.form_header.get('eng_id').disable()
    this.form_header.get('aircraft').disable()
    this.form_header.get('flight').disable()
    this.tool.insertLoadHeader(this.form_header.value)
      .then(res => this.header_id = res.header_id)
      .catch(err => this.alert.notify(err.Message));
  }

  private onSubmitDetail() {
    this.form_detail.get('header_id').setValue(this.header_id)
    this.tool.insertLoanDetail(this.form_detail.value)
      .then(res => {
        this.tool.getToolLoan();
        this.form_detail.reset();
      })
      .catch(err => this.alert.notify(err.Message))
      .finally()
  }

  private reSetmodal() {
    this.isShow = false;
    this.form_header.reset();
    this.form_header.get('eng_id').enable()
    this.form_header.get('aircraft').enable()
    this.form_header.get('flight').enable()
  }
  /*   private loadLoanTable() {
      this.tool.getToolLoan();
    }
   */

  get eng_id_error() {
    return this.form_header.get('eng_id')
  }

  async test(){
    const control: string = '140802';
    const x = await this.http.requestPost('api/employee', { company_id: 'TL' + control }).toPromise() ;
    console.log(x)

  }

}
