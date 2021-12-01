import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() usersList: any;
  list: any[] = [];
  values = 1;
  constructor() { }
  numberLine(event: any) {
    this.values = event.target.value - 1;
  }
  remove() {
    this.usersList.splice(this.values, 1);
  }

  ngOnInit(): void {
    console.log("list ngOnInit")
  }




}