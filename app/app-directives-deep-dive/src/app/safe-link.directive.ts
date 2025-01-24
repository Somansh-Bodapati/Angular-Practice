import { Directive, input } from "@angular/core";

@Directive({
    selector: '[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeave($event)',
    }
})

export class SafeLinkDirective {
    queryParam = input('myapp', {alias: 'appSafeLink'});

    constructor(){
        console.log('SafeLinkDirective initialized');
    }

    onConfirmLeave(event: MouseEvent) {
        const wantsToLeave = window.confirm('Are you sure you want to leave this page?');

        if (wantsToLeave) {
            const address = (event.target as HTMLAnchorElement).href;
            (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam;
            return;
        }
        event.preventDefault();
    }
}