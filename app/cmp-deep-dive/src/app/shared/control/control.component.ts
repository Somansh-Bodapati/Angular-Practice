import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit{
  //@HostBinding('class') className = 'control';
  // @HostListener('click') onClick(){
  //   console.log('Clicked');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);
  //@ContentChild('input') private control?: ElementRef<HTMLTextAreaElement | HTMLInputElement>;
  private control = contentChild.required<ElementRef<HTMLTextAreaElement | HTMLInputElement>>('input');

  constructor(){
    afterRender(() =>{
      console.log('afterRENDER')
    });

    afterNextRender(() => {
      console.log('After next render')
    })
  }
  
  ngAfterContentInit() {
    console.log('After Content Init');
  }

  onClick(){
    console.log('Clicked');
    console.log(this.el);
    console.log(this.control());
  }
}
