import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '../../_services/account.service';
import { Usuario } from '../../_interfaces/authResponses';
import { Router } from '@angular/router';

@Component({ templateUrl: 'list-users.component.html' })
export class ListUsersComponent implements OnInit {
    users?: Usuario[];

    constructor(private accountService: AccountService, private router: Router) {}

    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(users => {
                console.log(users);
                this.users = users.usuarios;
            })
    }
}