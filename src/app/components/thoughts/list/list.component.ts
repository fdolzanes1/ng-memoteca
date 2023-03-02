import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ThoughtsListComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Aprendendo Angular',
      autoria: 'Fabiano',
      modelo: 'modelo1',
      ano: '2021',
    },
    {
      conteudo: 'Aprendendo RxJS',
      autoria: 'Fabiano',
      modelo: 'modelo2',
      ano: '2022',
    },
    {
      conteudo: 'Aprendendo Ruby on Rails',
      autoria: 'Fabiano',
      modelo: 'modelo3',
      ano: '2023',
    },
  ];

  texto: string = 'Ola tudo bem';

  constructor() {}

  ngOnInit(): void {}
}
