import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {CtrlLoaderService} from "../../services/ctrlLoader/ctrl-loader.service";
import {UserInterface} from "../../services/user/user.interface";
import {headersTableFatures} from "./headers-table.fatures";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public users!: string[][];

  public headersTable: string[] = headersTableFatures;

  constructor(private userService: UserService, private loaderService: CtrlLoaderService) { }

  ngOnInit(): void {
    this.loaderService.show();
    this.userService.getUsers().subscribe((res: UserInterface[]) => {
      this.buildUsers([...res]);
      this.loaderService.hide()
    });
  }

  buildUsers(users: UserInterface[]) {
    this.users = users.map((user) => [
      user.id.toString(),
      user.username,
      user.company.name
    ]);
  }

}
