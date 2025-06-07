import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../Models/iusuarios';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

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

}

pesquisar(): void{
  this.dataSource = this.listaUsuarios;

}

}
