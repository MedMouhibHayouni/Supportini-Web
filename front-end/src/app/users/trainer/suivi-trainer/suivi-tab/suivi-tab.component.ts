import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-suivi-tab',
  templateUrl: './suivi-tab.component.html',
  styleUrls: ['./suivi-tab.component.css']
})
export class SuiviTabComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  closeResult = '';

  private getDismissReasonAddSuivi(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  ngOnInit(): void {
  }

}
