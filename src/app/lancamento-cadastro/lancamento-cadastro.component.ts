import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    {label:'Receita', value:'RECEITA'},
    {label:'Despesa', value:'DESPESA'},

  ];
  categorias = [
    {label:'Alimento', value:'1'},
    {label:'Transporte', value:'2'},
  ]
pessoas = [
    {label:'Vitor', value:'1'},
    {label:'João', value:'2'},
    {label:'Gregori', value:'3'},
    {label:'Railson', value:'4'},


  ]
  constructor() { }

  ngOnInit() {

  }

}
