import { Component, Input, OnInit } from '@angular/core';
import { Thoughts } from '../thoughts.interface';
import { ThoughtsService } from '../thoughts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent implements OnInit {
  @Input() pensamento: Thoughts = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private service: ThoughtsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  excluirPensamento() {
    this.service.excluir(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }
}
