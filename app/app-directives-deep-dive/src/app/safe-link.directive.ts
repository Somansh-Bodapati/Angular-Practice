import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector: '[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeave($event)',
    }
})

export class SafeLinkDirective {
    queryParam = input('myapp', {alias: 'appSafeLink'});
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    constructor(){
        console.log('SafeLinkDirective initialized');
    }

    onConfirmLeave(event: MouseEvent) {
        const wantsToLeave = window.confirm('Are you sure you want to leave this page?');

        if (wantsToLeave) {
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam;
            return;
        }
        event.preventDefault();
    }
}