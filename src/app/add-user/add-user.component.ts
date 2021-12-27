import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userName : string;
  @Output() userAdded = new EventEmitter<string>()
  constructor() { 
    this.userName = '';
  }

  ngOnInit(): void {
  }

  onUserAdded() {
    this.userAdded.emit(this.userName)
  }

}
