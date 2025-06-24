import { Note } from "./note";

export class Notes {

    notes: Note[] | any
    constructor(note: Note) {
        this.notes.push(note);

    }
    viewNote(id: number){
        const index = this.notes.indexOf(id);
        if (index > -1) {
            return this.notes[index]
        }       
    }
    addNote(note: Note){
        this.notes.push(note);
    }
    editNote(id: number, description: string) {
        const index = this.notes.indexOf(id);
        if (index > -1) {
            this.notes[index].description  = description;
        }
    }
    removeNote(id: number) {
        const index = this.notes.indexOf(id);
        if (index > -1) {
            this.notes.splice(index, 1);
        }
    }
}