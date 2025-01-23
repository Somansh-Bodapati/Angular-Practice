import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  add = output<{title: string, ticketText: string}>();
  enteredText = '';
  enteredTitle = '';

  ngOnInit() {
    console.log("ON INIT");
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log("AFTER VIEW INIT");
    console.log(this.form?.nativeElement);
  }

  onSubmit(){ {
    this.add.emit({title: this.enteredTitle, ticketText: this.enteredText});
    //this.form?.nativeElement.reset();
    this.enteredText = '';
    this.enteredTitle = '';
  }
  }
}
