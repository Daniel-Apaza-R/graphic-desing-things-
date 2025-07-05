import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { App } from './app';
import { Formulario } from './formulario/formulario';
import { Clientes } from './clientes/clientes';


export const routes: Routes = [
  { path: 'inicio', component: Inicio, title: 'Inicio' },
  { path: 'formulario', component: Formulario, title: 'Formulario'},
  { path: 'clientes', component:Clientes, title:'Clientes'  },
];

