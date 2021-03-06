import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PessoasModule } from './pessoas/pessoas.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LancamentosModule,
    PessoasModule,
    CoreModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
