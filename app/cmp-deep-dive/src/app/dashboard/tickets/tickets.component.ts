import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from "./ticket/ticket.component";
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: {title: string, ticketText: string}) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.ticketText,
      status: 'Open',
      id: Math.random().toString()
    }

    this.tickets.push(ticket);
  }

  onCloseTicket(id: string){
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id){
        return {...ticket, status: 'Closed' }
      }
      return ticket;
    })
  }
}
