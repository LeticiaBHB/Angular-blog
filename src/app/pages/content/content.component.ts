import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string="https://th.bing.com/th/id/OIG.zXRvxeApFTLaIwfssnxI?pid=ImgGn"
  contentTitle:string="Arte Anônima?"
  contentDescription:string="Aprecie esta obra de arte"
  constructor() { }

  ngOnInit(): void {
  }

}
