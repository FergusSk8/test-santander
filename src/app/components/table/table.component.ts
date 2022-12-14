import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() public headers!: string[];

  @Input() public rows!: string[][];

  constructor() { }

  ngOnInit(): void {
  }

}
