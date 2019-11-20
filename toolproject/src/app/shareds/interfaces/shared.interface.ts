import { Itool } from './shared.interface';

export interface Itool {
    batch: string;
    goods_rcvd_batch: string;
    pn_description: string;
    pn: string;
    sn: string;
    condition: string;
    location: string;
    bin: string;
    qty_available: string;
    qty_borrow: string;
    qty_us: string;
    qty_repair: string;
    tool_life_expiration: string;
}

export interface IAccount {
    mem_id: string;
    mem_title: string;
    mem_name: string;
    mem_sname: string;
    mem_position: string;
    company_id: string;
    mem_username: string;
    mem_nname: string;
    mem_tel: string;
}

export interface IinventoryComponent {
    items: Itool[];

}

export interface IloanHeader {
    header_id: number;
    eng_id: string;
    eng_name?: string;
    aircraft: string;
    flight?: string;
}

export interface IloanDetail {
    batch: Number;
    qty_borrow: Number;
    header_id: Number;
}

export interface ILoanTool{
    header_id: number;
    eng_id: string;
    eng_name?: string;
    aircraft: string;
    flight?: string;
    batch?: Number;
    goods_rcvd_batch?: string;
    pn_description?: string;
    pn?: string;
    sn?: string;
    qty_borrow?: Number;
}

export interface Iemployee {
    employee_id: string;
    company_id: string;
    employee_name: string;
  }