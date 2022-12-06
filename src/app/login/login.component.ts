import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  toggleAlert = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(userForm) {
    const verifiedUsers = [new User('Riley', 'riley@conway.com', 69, 'rileyrocks347!')]

    for (let i = 0; i < verifiedUsers.length; i++) {
      if (userForm.form.value.email === verifiedUsers[i].email && userForm.form.value.password === verifiedUsers[i].password) { 
        this.router.navigate(['/categories'])
        break
      }
    }
    this.toggleAlert = true

  }

}
