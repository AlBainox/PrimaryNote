import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { EditTable } from './edit-table/edit-table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, EditTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'PrimaryNote';
}
