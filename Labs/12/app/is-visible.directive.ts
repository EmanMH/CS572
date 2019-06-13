import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appIsVisible]',
})
export class IsVisibleDirective {
@Input() myvisibility: any;
  constructor(private e: ElementRef, private r: Renderer2) {
  

  }

  ngOnInit(){
    console.log(this.myvisibility);
    if(this.myvisibility==true)
    this.r.setStyle(this.e.nativeElement, 'display', 'block');
    else
    this.r.setStyle(this.e.nativeElement, 'display', 'none');
  }

  

}
