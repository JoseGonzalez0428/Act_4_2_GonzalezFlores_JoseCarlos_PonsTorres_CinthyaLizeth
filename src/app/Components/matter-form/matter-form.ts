import { Component, EventEmitter, Input, Output } from '@angular/core';

export type MatterFormData = {
  matterName: string;
  groupName: string;
};

@Component({
  selector: 'app-ui-matter-form',
  standalone: true,
  imports: [],
  templateUrl: './matter-form.html',
  styleUrl: './matter-form.css'
})
export class MatterForm {
  @Input() title: string = 'Materia';
  @Input() date: string = 'Fecha';
  @Input() matterName: string = '';
  @Input() groupName: string = '';

  @Output() cancelClick = new EventEmitter<void>();
  @Output() acceptClick = new EventEmitter<MatterFormData>();

  onMatterNameChange(event: Event): void {
    this.matterName = (event.target as HTMLInputElement).value;
  }

  onGroupNameChange(event: Event): void {
    this.groupName = (event.target as HTMLInputElement).value;
  }

  onCancel(): void {
    this.cancelClick.emit();
  }

  onAccept(): void {
    this.acceptClick.emit({
      matterName: this.matterName.trim(),
      groupName: this.groupName.trim()
    });
  }
}
