import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
    })

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = data.filter((article) => article.id === id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photo
  }
}
