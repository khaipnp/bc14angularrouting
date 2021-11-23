import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  listCategory = [];
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getCategory();
  }
  getCategory() {
    this.data.get('QuanLyKhoaHoc/LayDanhMucKhoaHoc').subscribe((data) => {
      this.listCategory = data;
    });
  }
}
