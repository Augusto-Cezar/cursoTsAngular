import { Routes, RouterModule } from "@angular/router";
import { ListUsersComponent } from "./list-users/list-users.component";
import { NgModule } from "@angular/core";
import { ListarProdutosComponent } from "./listar-produtos/listar-produtos.component";
import { CarrinhoComponent } from "./carrinho/carrinho.component";

const routes: Routes = [
    {path: '', component: ListUsersComponent},
    {path: 'produtos', component: ListarProdutosComponent},
    {path: 'carrinho', component: CarrinhoComponent},
]

@NgModule ({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class appRoutingModule {}