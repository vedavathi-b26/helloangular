import {Component, Output, EventEmitter} from @'angular/core';

@Component({
    standalone: true,
    selector: 'app-item-output',
    templateUrl: './item-output.component.html'
})

export class ItemOutputComponent{
    @Output() newItemEvent = new EventEmitter<string>();
    addNewItem(value: string) {
        this.newItemEvent.emit(value);
    }
}