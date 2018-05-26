import { Injectable, Renderer2, RendererFactory2, Renderer } from '@angular/core';

@Injectable()
export class SlideService {
  slideIndex = 1;
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  goToSite(url: any) {
    window.open(url, '_blank');
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      this.renderer.setStyle(slides[i], 'display', 'none');
    }
    for (i = 0; i < dots.length; i++) {
      this.renderer.removeClass(dots[i], 'active');
    }
    this.renderer.setStyle(slides[this.slideIndex - 1], 'display', 'block');
    this.renderer.addClass(dots[this.slideIndex - 1], 'active');
  }
}
