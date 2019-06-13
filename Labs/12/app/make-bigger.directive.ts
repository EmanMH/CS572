import {  Directive, ElementRef, Renderer2, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[makeBigger]'
})
export class MakeBiggerDirective {

  @Input('size') defaultSize = 2;
  counter=1;
  @HostBinding('style.fontSize') myFont;
  @HostListener('dblclick') foo()
   {
     this.myFont=this.defaultSize * (++this.counter);
     this.r.setStyle(this.e.nativeElement, 'font-size', this.myFont.toString()+'px');
      //this.e.nativeElement.style.fontSize = this.myFont.toString()+'px' ; 
   }


  constructor(private e: ElementRef, private r: Renderer2) {
    r.setStyle(e.nativeElement, 'font-size', '2px')

  }

  ngOnInit(){
    this.myFont = this.defaultSize;
  }



 


}
