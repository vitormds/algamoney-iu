import { LancamentosModule } from './lancamentos/lancamentos.module';

 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {ButtonModule} from 'primeng/components/button/button';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';

import { NavbarComponent } from './navbar/navbar.component';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessageComponent } from './message/message.component';
import { PessoasModule } from './pessoas/pessoas.module';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // PessoasPesquisaComponent,
    MessageComponent,
    // PessoasGridComponent
  ],
  imports: [
    BrowserModule,
    // InputTextModule,
    // ButtonModule,
    // DataTableModule,
    // TooltipModule,
    // InputTextareaModule,
    // CalendarModule,
     BrowserAnimationsModule,
    // SelectButtonModule,
    // DropdownModule,
    // InputMaskModule,
    // FormsModule,
    LancamentosModule,
    PessoasModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
