import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  form: any = {
    searchParams: {},
    id: null,
    list: [],
    preload: [],
    pageNo: 0,
    message: ''
  }

  constructor(private httpService: HttpServiceService, private router: Router) {

  }

  ngOnInit(): void {
    this.preload();
    this.search();
  }

  preload() {
    var self = this;
    this.httpService.get('http://localhost:8080/User/preload', function (res: any) {
      self.form.preload = res.result;
    })
  }
  edit(page: any) {
    this.router.navigateByUrl(page);
  }
  next() {
    this.form.pageNo++;

    this.search();
  }
  previous() {
    this.form.pageNo--;

    this.search();
  }
  select(event: any) {

    this.form.id = event;


  }
  delete() {
    var self = this;
    console.log('in delete method with id', this.form.id);
    this.httpService.get("http://localhost:8080/User/delete/" + this.form.id, function (res: any) {
      self.form.message = res.result.message;
      self.search();
      self.form.pageNo = 0;
    })
  }
  search() {

    var self = this;
    this.httpService.post('http://localhost:8080/User/search/' + this.form.pageNo, this.form.searchParams, function (res: any) {

      if (res.result.message) {
        self.form.message = res.result.message;
      }
      self.form.list = res.result.data;
    })
  }
}