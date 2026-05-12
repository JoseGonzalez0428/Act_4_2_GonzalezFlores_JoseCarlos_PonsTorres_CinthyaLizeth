import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-search-box',
  imports: [CommonModule, IconComponent],
  templateUrl: './search-box.html',
  styleUrl: './search-box.css'
})
export class SearchBoxComponent {
  isActive: boolean = false;
  @Output() searchChange = new EventEmitter<string>();
  @Output() searchSubmit = new EventEmitter<void>();

  onFocus() { this.isActive = true; }
  onBlur() { this.isActive = false; }
  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchChange.emit(value);
  }

  onSearchClick() {
    this.searchSubmit.emit();
  }
}