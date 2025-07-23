import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { EditTable } from './edit-table/edit-table';
import { Note } from './note';
import { CommonModule } from '@angular/common';
import { Stack } from './stack';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, EditTable, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'PrimaryNote';
  // private noteOne = new Note(1, 'notka piersgdfwsza', 'tresc sgd');
  //private noteTwo = new Note(2, 'notka gvsd', 'tresc dsf');
  //private noteThree = new Note(3, 'notka fdsg', 'tresc gsdf');
  //private noteFour = new Note(4, 'notka gdsf', 'tresc gssg');

  // private noteOneX = new Note(1, 'notka fdsfdgg', 'tresc sgggsdd');
  //private noteTwoX = new Note(2, 'notka gvgdsfsd', 'tresc dsdsfgfdgf');
  // private noteThreeX = new Note(3, 'notka fdgfdsg', 'tresc gsfgsgfddf');
  //private noteFourX = new Note(4, 'notka gdgsdsf', 'tresc gsgdfsgsfdgsg');

  private changedNotes: Note[] | any;

  get nt(): readonly Note[] {
    return this.changedNotes;
  }

  private stackFirst = new Stack("Notes pierwszy", [new Note(1, 'notka piersgdfwsza', 'tresc sgd'), new Note(2, 'notka gvsd', 'tresc dsf'), new Note(3, 'notka fdsg', 'tresc gsdf'), new Note(4, 'notka gdsf', 'tresc gssg')]);
  private stackSecond = new Stack("Notes drugi", [new Note(1, 'notka fdsfdgg', 'tresc sgggsdd'), new Note(2, 'notka gvgdsfsd', 'tresc dsdsfgfdgf'), new Note(3, 'notka fdgfdsg', 'tresc gsfgsgfddf'), new Note(4, 'notka gdgsdsf', 'tresc gsgdfsgsfdgsg')]);

  private stacks: Stack[] = [this.stackFirst, this.stackSecond];
  get stcks(): Stack[] {
    return this.stacks;
  }
  onChangedNotes(notes: Note[]) {
    this.changedNotes = notes;

  }
  currentNote: Note | any;
  changeNote(note: Note){
    this.currentNote = note;
  }
}
