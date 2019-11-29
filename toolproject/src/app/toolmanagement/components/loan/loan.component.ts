import { AuthenService } from './../../../services/authen.service';
import { Iemployee, Iworkorder, IloanHeader } from './../../../shareds/interfaces/shared.interface';
import { AlertService } from './../../../shareds/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToolService } from '../../services/Tool.service';
import { SharedValidators, checkEmployee, checkBatch } from 'src/app/shareds/Validators/shared.validators';
import { EmployeeService } from '../../services/employee.service';
import { map } from 'rxjs/operators';
import { WorkorderService } from '../../services/workorder.service';

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
    private employee: EmployeeService,
    private workorder: WorkorderService,
    private authen: AuthenService
  ) {

    this.get_workorder();
    this.createForm();

  }

  form_header: FormGroup;
  form_detail: FormGroup;
  header_id: Number;
  emp: Iemployee[] = [];
  work: Iworkorder[] = [];
  modelHeader: IloanHeader = {} as any;

  isShow: boolean = false;
  batch_array: Array<{ batch: string, qty: number }> = [];

  ngOnInit() {

    const id = this.form_header.controls['eng_id'].statusChanges.pipe(map(
      res => { return res === 'VALID' ? this.form_header.get('eng_id').value : null }
    ))

    id.subscribe(id => {
      if (!id) return this.setName('');
      this.getEmp(id)
    })

  }

  private createForm() {
    this.form_header = this.fb.group({
      eng_id: ['', [Validators.required, SharedValidators.cannotContainSpace], [checkEmployee(this.employee)]],
      eng_name: ['', Validators.required],
      ac_reg: ['', Validators.required],
      flight: ['']
    });
    this.form_header.get('eng_name').disable();
    this.form_detail = this.fb.group({
      batch: ['', Validators.required, checkBatch(this.tool)],
      header_id: ['', Validators.required],
      qty_borrow: ['', Validators.required]
    })


  };

  private onSubmitHeader() {
    this.isShow = true;
    this.set_modelHeader(this.form_header.value)
    this.tool.insertLoadHeader(this.modelHeader, this.authen.getAuthenticated()).subscribe(res => { this.header_id = res.header_id; console.log(this.header_id) })
  }

  private onSubmitDetail() {
    this.form_detail.get('header_id').setValue(this.header_id);
    console.log(this.form_detail.value);
    this.form_detail.reset();
  }

  private reSetmodal() {
    this.isShow = false;
    this.form_header.reset();
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
    return this.employee.getEmployee(id).subscribe(res => this.setName((res[0].employee_name).toString()));
  }

  private get_workorder() {
    this.workorder.getWorkorders().subscribe(res => { this.work = res })
  }

  private set_modelHeader(header: IloanHeader) {
    this.modelHeader.eng_id = 'TL' + header.eng_id.toString();
    this.modelHeader.ac_reg = header.ac_reg;
    this.modelHeader.flight = header.flight.trim().toUpperCase();
  }

}


