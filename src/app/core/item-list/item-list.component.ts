import { Observable } from 'rxjs/Observable';
import { TotService, Item, ItemsPayload } from './../tot.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tot-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items$: Observable<Item[]>;

  constructor(private totService: TotService) { }

  ngOnInit() {
    this.items$ = this.totService.getItems(new ItemsPayload());
  }

}
