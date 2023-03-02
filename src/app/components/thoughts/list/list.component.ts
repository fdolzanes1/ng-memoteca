import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ThoughtsListComponent implements OnInit {
  listaPensamentos = [];

  texto: string = 'Ola tudo bem';

  constructor() {}

  ngOnInit(): void {}
}
