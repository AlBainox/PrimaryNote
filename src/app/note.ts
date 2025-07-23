export class Note {
    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.description = description;
        this.name = name;
    };
    id: number;
    description: string;
    name: string;
}
