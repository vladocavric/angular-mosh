import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appFormatInput]'
})
export class FormatInputDirective {


  constructor(private el: ElementRef) {
  }

  @HostListener('focus') onFocus(): void {
    console.log('nesto na focus');
  }

  @HostListener('keyup') onKeyPress(): void {
    const value = this.el.nativeElement.value;
    const regex = '^[\\d-+()]+$';
    if (!value.match(regex)) {
      return this.el.nativeElement.value = value.slice(0, -1);
    }

  }

  @HostListener('blur') onBlur(): void {
    const value = this.el.nativeElement.value;
      console.log(value[0])
    if (value[0] !== '(') {
      this.el.nativeElement.value = `(${value}`;
    }
    if ((value.length > 3) && (value[4] !== ')')) {
      this.el.nativeElement.value = `${value.slice(0, 4)})${value.slice(4)}`;
    }
    if ((value.length > 7) && (value[8] !== '-')) {
      this.el.nativeElement.value = `${value.slice(0, 8)}-${value.slice(8)}`;
    }

  }

}
