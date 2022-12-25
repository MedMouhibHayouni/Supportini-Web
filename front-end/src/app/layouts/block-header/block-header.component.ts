import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-block-header',
  templateUrl: './block-header.component.html',
  styleUrls: ['./block-header.component.css']
})
export class BlockHeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  @Input() titleHeaderPage!:string
  @Input()route!: string
  @Input()titleSecondPage!: string

  ngOnInit(): void {

  }
}

