import { AuthenService } from './../../../services/authen.service';
import { AlertService } from './../../../shareds/services/alert.service';
import { Itool, IToolSearchKey } from './../../../shareds/interfaces/shared.interface';
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
    private tool: ToolService,
    private alert: AlertService,
    private authen: AuthenService
  ) {
    this.intialLoadTools();
    this.searchType = this.searchTypeItems[0];
  }

  items: any[] = [];
  seachText: string = '';
  searchType: IToolSearchKey;
  searchTypeItems: IToolSearchKey[] = [
    { key: 'batch', value: 'Find by Batch' },
    { key: 'pn', value: 'Find by Part Number' },
    { key: 'sn', value: 'Find by Serial Number' },
    { key: 'tool_life_expiration', value: 'Find by Tool Exp' },
  ];

  /**Load Tool Inventory */

  private intialLoadTools() {
    this.tool
      .getTools(this.authen.getAuthenticated())
      
  }

  onSearchItem() {
    console.log(this.seachText, this.searchType)
  }

}
