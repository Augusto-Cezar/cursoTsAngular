import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListUsersComponent } from './list-users/list-users.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app.routing.module';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListUsersComponent,
    CarrinhoComponent,
    ListarProdutosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    appRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
