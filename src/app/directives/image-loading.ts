import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[image-loading]',
})
export class ImageLoadingDirective {

  @Input() originalSrc: string = '';

  constructor(private el: ElementRef) {

  }

  ngAfterViewInit() {
    const image = new Image();
    image.src = this.originalSrc;
    image.onload = () => {
      this.el.nativeElement.setAttribute('src', this.originalSrc);
    }
  }
}
