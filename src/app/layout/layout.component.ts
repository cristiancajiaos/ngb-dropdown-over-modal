import { ConfigModalComponent } from './../modals/config-modal/config-modal.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  public openConfigModal(): void {
    this.modal.open(ConfigModalComponent, {size: 'lg'}).result.then((res) => {
      console.log(res);
    }, (rej) => {
      console.log(rej);
    });
  }
}
