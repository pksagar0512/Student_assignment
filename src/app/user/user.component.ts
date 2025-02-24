import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  username: string| null = null;

  constructor(private route : ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => this.username = params.get('username') 
    )
  }

}
