import { Iemployee } from './../../../shareds/interfaces/shared.interface';
import { AlertService } from './../../../shareds/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToolService } from '../../services/Tool.service';
import { SharedValidators, checkEmployee } from 'src/app/shareds/Validators/shared.validators';
import { EmployeeService } from '../../services/employee.service';
import { map } from 'rxjs/operators';

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
    private employee: EmployeeService
  ) {

    this.createForm();

  }

  form_header: FormGroup;
  form_detail: FormGroup;
  header_id: Number;
  emp: Iemployee[] = [];


  isShow: boolean = false;
  batch_array: Array<{ batch: string, qty: number }> = [];

  ngOnInit() {

    const id = this.form_header.controls['eng_id'].statusChanges.pipe(map(
      res => { return res === 'VALID' ? this.form_header.get('eng_id').value : null }
    ))

    id.subscribe(id => {
      if (!id) return;
      this.getEmp(id)
    })


  }

  private createForm() {
    this.form_header = this.fb.group({
      eng_id: ['', [Validators.required, SharedValidators.cannotContainSpace], [checkEmployee(this.employee)]],
      eng_name: ['', Validators.required],
      aircraft: ['', Validators.required],
      flight: ['']
    });
    this.form_header.get('eng_name').disable();
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

  get eng_id_error() {
    return this.form_header.get('eng_id')
  }

  get eng_name_error() {
    return this.form_header.get('eng_name')
  }

  private setName(name: string) {
    this.form_header.get('eng_name').setValue(name)
  }

  private getEmp(id) {
    return this.employee.getEmployee(id).subscribe(res => this.setName((res[0].employee_name).toString()))
  }


}


