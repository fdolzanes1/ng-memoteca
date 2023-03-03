import { Component, OnInit } from '@angular/core';
import { ThoughtsService } from '../thoughts.service';
import { Observable } from 'rxjs';
import { Thoughts } from '../thoughts.interface';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ThoughtsListComponent implements OnInit {
  listaPensamentos: Thoughts[] = [];

  constructor(private service: ThoughtsService) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.service.listar().subscribe((value) => {
      this.listaPensamentos = value;
    });
  }
}
