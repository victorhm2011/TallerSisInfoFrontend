import { Component, OnInit } from '@angular/core';
import { HellowordService } from 'src/app/services/helloword.service';

@Component({
  selector: 'app-helloword',
  templateUrl: './helloword.component.html',
  styleUrls: ['./helloword.component.scss']
})
export class HellowordComponent implements OnInit {

  public hello!: string;

  constructor(public helloService: HellowordService) { }

  ngOnInit(): void {
    this.helloService.getHelloWord().subscribe( resp => this.hello = resp.message);
  }

}
