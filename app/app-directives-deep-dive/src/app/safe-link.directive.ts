import { Directive } from "@angular/core";

@Directive({
    selector: '[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeave($event)',
    }
})

export class SafeLinkDirective {
    constructor(){
        console.log('SafeLinkDirective initialized');
    }

    onConfirmLeave(event: MouseEvent) {
        const wantsToLeave = window.confirm('Are you sure you want to leave this page?');

        if (wantsToLeave) {
            return;
        }
        event.preventDefault();
    }
}