import { Component, OnInit } from '@angular/core';
import {ParticlesServiceService} from "../../shared-service/particle-service/particles-service.service";


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private particlesService: ParticlesServiceService) { }

  ngOnInit(): void {
    this.particlesService.invokeParticles();
  }

}
