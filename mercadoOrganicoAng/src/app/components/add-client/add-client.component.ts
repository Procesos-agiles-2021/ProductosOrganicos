import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  @Input() rol: string;

  user = {
    "username": "",
    "password": "",
    "password2": "",
    "email": "",
    "first_name": "",
    "last_name": "",
    "clientprofile": 1
  }
  submitted = false;
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {

  }

  saveUser(): void {
    const data = {
      username: this.user.username,
      password: this.user.password,
      password2: this.user.password2,
      email: this.user.email,
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      clientprofile: this.user.clientprofile
    };

    this.registerService.create(data).subscribe(response => {
      console.log(response);
      this.submitted = true;
    },
      error => {
        console.log(error);
      });

  }
  newClient(): void {
    this.submitted = false;
    this.user = {
      "username": "",
      "password": "",
      "password2": "",
      "email": "",
      "first_name": "",
      "last_name": "",
      "clientprofile": 1
    };
  }
}
