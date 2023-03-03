import { Component, OnInit } from '@angular/core';
import { Thoughts } from '../thoughts.interface';
import { ThoughtsService } from '../thoughts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thoughts-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class ThoughtsCreateComponent implements OnInit {
  label_pensamento = 'Pensamento';

  pensamento: Thoughts = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  constructor(private service: ThoughtsService, private router: Router) {}

  ngOnInit(): void {}

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}
