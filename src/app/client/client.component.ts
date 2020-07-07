import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { IClient } from '../model/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  clients?: IClient[];

  constructor(private router: Router, protected clientService: ClientService) {
    this.checkAuth();
    this.loadAll();
  }

  checkAuth() {
    if (localStorage.getItem('authorities') != 'ROLE_ADMIN')
      this.router.navigate(['accessdenied']);
  }

  ngOnInit(): void {}

  loadAll() {
    this.clientService.getClients().subscribe(
      (res) => {
        console.log(res);
        this.clients = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnDestroy(): void {}

  trackId(index: number, item: IClient): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInClients(): void {}

  delete(client: IClient): void {}

  editClient(client) {
    // console.log(client.nom);
    localStorage.setItem('clientupdate', client)
    this.router.navigate(['editclient'])
  }
}
