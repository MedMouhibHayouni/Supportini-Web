import { Injectable } from '@angular/core';
import {ParticlesConfig} from "../../../particles-config";

declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Injectable({
  providedIn: 'root'
})
export class ParticlesServiceService {

  constructor() { }



  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {
    });
  }
}
