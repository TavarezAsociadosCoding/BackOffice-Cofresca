import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {

  constructor() { }

  public users = [
    {
      img: "assets/images/dashboard/user.png",
      name: "Vincent Porter",
      status: "Online"
    },
    {
      img: "assets/images/dashboard/user1.jpg",
      name: "Ain Chavez",
      status: "28 minutes ago"
    },
    {
      img: "assets/images/dashboard/user2.jpg",
      name: "Kori Thomas",
      status: "Online"
    },
    {
      img: "assets/images/dashboard/user3.jpg",
      name: "Erica Hughes",
      status: "Online"
    },
    {
      img: "assets/images/dashboard/man.png",
      name: "Ginger Johnston",
      status: "2 minutes ago"
    },
    {
      img: "assets/images/dashboard/user5.jpg",
      name: "Prasanth Anand",
      status: "2 hour ago"
    },
    {
      img: "assets/images/dashboard/designer.jpg",
      name: "Hileri Jecno",
      status: "Online"
    }
  ]

  ngOnInit() { }

}
