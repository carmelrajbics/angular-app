import { Renderer, ElementRef, Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[cc]'
})
export class ColorChanger {
    // constructor(ren: Renderer, ef: ElementRef) {
    //     ren.setElementStyle(ef.nativeElement, 'backgroundColor', 'blue');
    // }

    private defaultColor='white';

    @HostListener('mouseenter')
    addColor()
    {
        this.defaultColor='pink';
    }

    @HostListener('mouseleave')
    removeColor()
    {
        this.defaultColor='white';
    }

    @HostBinding('style.backgroundColor')
    get applyColor()
    {
        return this.defaultColor;
    }
}