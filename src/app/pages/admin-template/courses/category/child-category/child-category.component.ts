import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-category',
  templateUrl: './child-category.component.html',
  styleUrls: ['./child-category.component.scss'],
})
export class ChildCategoryComponent implements OnInit {
  @Input() category: any;
  constructor() {}

  ngOnInit(): void {}
}
