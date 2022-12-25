import { Injectable } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ScriptServiceService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  /**
   * Append the JS tag to the Document Body.
   * @param renderer The Angular Renderer
   * @param src The path to the script
   * @returns the script element
   */
  public loadJsScript(renderer: Renderer2, src: string): HTMLScriptElement {
    const script = renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    renderer.appendChild(this.document.body, script);
    return script;
  }
}
