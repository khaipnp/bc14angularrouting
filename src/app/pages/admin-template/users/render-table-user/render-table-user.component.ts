import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-render-table-user',
  templateUrl: './render-table-user.component.html',
  styleUrls: ['./render-table-user.component.scss'],
})
export class RenderTableUserComponent implements OnInit {
  @Input() user: any;
  @Input() index: any;
  constructor() {}

  ngOnInit(): void {}
}
