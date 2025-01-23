import { Component, ElementRef, ViewChild } from '@angular/core';
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
export class NewTicketComponent {
  @ViewChild('ticketForm') private form?: ElementRef<HTMLFormElement>;

  onSubmit(title: String, ticketText: string){ {
    console.log(title);
    console.log(ticketText);
    this.form?.nativeElement.reset();
  }
  }
}
