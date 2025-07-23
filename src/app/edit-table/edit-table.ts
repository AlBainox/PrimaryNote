import { Component, Input } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-edit-table',
  imports: [],
  templateUrl: './edit-table.html',
  styleUrl: './edit-table.css'
})
export class EditTable {
@Input() note: Note | any;

onTitleChanged(event: Event){
  (event.target as HTMLInputElement).value = this.note.name;
}
}
