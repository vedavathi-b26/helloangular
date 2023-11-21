import { Component, Input } from '@angular/core';
import { booleanAttribute } from '@angular/core';
booleanAttribute
@Component({
    standalone: true,
    selector: 'app-item-detail-metadata',
    template: `
    <h2>Child component with &#64;Input() metadata configurations</h2>
    <p>
        Today's item:{{item}}
        Item's Availability: {{itemAvailability}}
    </p>
    `
})

export class ItemDetailMetadataComponent{
    @Input({required: true}) item!: string;
    @Input({transform: booleanAttribute}) itemAvailability!: boolean;
}