import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThoughtsCreateComponent } from './components/thoughts/create/create.component';
import { ThoughtsListComponent } from './components/thoughts/list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full',
  },
  {
    path: 'criarPensamento',
    component: ThoughtsCreateComponent,
  },
  {
    path: 'listarPensamento',
    component: ThoughtsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
