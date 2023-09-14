import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover:string = "https://picsum.photos/seed/picsum/600/400"
  contentTitle:string = ""
  contentDescription:string = ""
}
