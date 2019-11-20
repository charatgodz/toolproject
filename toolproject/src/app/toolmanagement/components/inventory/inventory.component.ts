import { AuthenService } from './../../../services/authen.service';
import { AlertService } from './../../../shareds/services/alert.service';
import { Itool } from './../../../shareds/interfaces/shared.interface';
import { Component, OnInit } from '@angular/core';
import { ToolService } from '../../services/Tool.service';
import { IinventoryComponent } from 'src/app/shareds/interfaces/shared.interface';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements IinventoryComponent {

  constructor(
    private tool : ToolService,
    private alert : AlertService,
    private authen: AuthenService
  ) {
    this.intialLoadTools(); 
   }

  items: Itool[] =[];

  /**Load Tool Inventory */

  private intialLoadTools(){
    this.tool
    .getTools(this.authen.getAuthenticated())
    .then(res => this.items = res)
  }


}
