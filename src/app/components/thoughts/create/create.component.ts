import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thoughts-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  label_pensamento = 'Pensamento';
  pensamento = {
    id: 1,
    conteudo: 'aprendendo angular',
    autoria: 'Developer',
    modelo: '',
  };

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Um novo pensamento');
  }

  cancelar() {
    alert('Ação Cancelada');
  }
}
