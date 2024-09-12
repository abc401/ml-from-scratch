import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  styles: `
    #main-canvas {
      outline: 1px solid red;
    }
  `,
  template: `
    <canvas width="100" height="100" id="main-canvas" #mainCanvas></canvas>
  `,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mainCanvas', { static: false })
  canvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    console.log('canvas: ', this.canvas.nativeElement);
  }
}
