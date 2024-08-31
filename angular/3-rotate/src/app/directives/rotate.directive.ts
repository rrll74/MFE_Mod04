import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: 'img[appRotate]',
  standalone: true,
})
export class RotateDirective implements OnInit {
  @Input() public rotate: string = '20';
  @Input() public step: string = '10';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.makeRotation();
  }

  @HostListener('click', ['$event'])
  onClickEvent(event: MouseEvent) {
    const steps = parseInt(this.step);
    const rotation = parseInt(this.rotate);
    const direction = event.shiftKey ? -1 : 1;
    this.rotate = (rotation + direction * steps).toString();
    console.log('rotacion:', this.rotate);
    this.makeRotation();
  }

  private makeRotation() {
    this.el.nativeElement.style.transform = `rotate(${this.rotate}deg)`;
  }
}
