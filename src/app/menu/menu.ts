import { Component, EventEmitter, inject, Input, Output, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Stack } from '../stack';
import { CommonModule } from '@angular/common';
import { Note } from '../note';
@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  private offcanvasService = inject(NgbOffcanvas);

  @Input()
  stcks: Stack[] | undefined;
  
  @Output()
  newNotes = new EventEmitter<Note[]>();

  notes: Note[]= [];

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
  changedNotes(notes: Note[]){
    this.newNotes.emit(notes);
  }

}
