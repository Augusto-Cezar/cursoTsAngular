import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../Models/iusuarios';
import { ListUsersServicesComponent } from '../list-users-services/list-users-services.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private service: ListUsersServicesComponent, private router:Router){}

  displayedColumns = ['id', 'first_name', 'last_name', 'email'];
 
  dataSource: IUsuario[] = [];
  
  listaUsuarios: IUsuario[] = [

    {
      id: 1,
      first_name: 'Fulano 1',
      last_name: 'Silva',
      email: 'fulano1@gmail.com',
    },
    {
      id: 2,
      first_name: 'Fulano 2',
      last_name: 'Silveira',
      email: 'fulano2@gmail.com',

    }
  ]

ngOnInit(): void {
  this.pesquisar();
}

pesquisar(): void{
 this.service.listarUsuarios().subscribe((response) => {
  this.dataSource = response;
 })
}

abrirListaProdutos():void{
  this.router.navigate(['/produtos']);
}

abrirCarrinho():void{
  this.router.navigate(['/carrinho']);
}

}
