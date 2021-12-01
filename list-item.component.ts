import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit, OnDestroy {
  @Input() listItem: any;
  constructor() { }
 
  ngOnInit(): void {
    console.log("list-item ngOnInit")
  }

  ngOnDestroy(): void {
    console.log("list-item OnDestroy")
  }
}
