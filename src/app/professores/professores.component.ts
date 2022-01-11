import { Component, OnInit } from '@angular/core';
import {alunos} from '../model/alunos';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
aluno: alunos;
  constructor() { }

  valor: number=5;
  exibeTabela: boolean = false;
  exibeForm: boolean = false;

    listaAlunos: alunos[] = [
  {nome: 'Camila', idade: 27, email: 'camila@gmail.com', curso: 'Ciência da computação'},
  {nome: 'José', idade: 22, email: 'jose.augusto@outlook.com', curso: 'Engenharia de software'}
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
  this.valor = 5;
  this.aluno = new alunos();
  }

  mudarValor() {
  this.valor++;
  }

  reiniciarValor() {
  this.valor = 0;
  }

  exibirTabela() {
  this.exibeTabela = true;
  }
   exibirFormulario() {
    this.exibeForm = true;
    }

    save() : void {
    this.listaAlunos.push(this.aluno);
    this.aluno = new alunos();
    }

    limpar() : void {
    this.exibeTabela = false;
    this.exibeForm = false;

   }

}
