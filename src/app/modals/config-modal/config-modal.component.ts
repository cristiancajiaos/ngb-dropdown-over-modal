import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-config-modal',
  templateUrl: './config-modal.component.html',
  styleUrls: ['./config-modal.component.scss']
})
export class ConfigModalComponent implements OnInit {

  constructor(
    private modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  public close(): void {
    this.modal.close('Close');
  }

  public dismiss(): void {
    this.modal.dismiss('Dismiss');
  }

}
