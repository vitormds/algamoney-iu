import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';


import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';
import { LancamentoPessoaComponent } from './lancamento-pessoa/lancamento-pessoa.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputMaskModule,


  ],
  declarations: [
    LancamentoPessoaComponent,
    PessoasPesquisaComponent,
    PessoasGridComponent
  ],
  exports: [
    LancamentoPessoaComponent,
    PessoasPesquisaComponent
  ]
})
export class PessoasModule { }
