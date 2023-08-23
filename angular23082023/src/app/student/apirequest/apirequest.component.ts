import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service';
import { tap, map } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-apirequest',
  templateUrl: './apirequest.component.html',
  styleUrls: ['./apirequest.component.css'],
})
export class ApirequestComponent implements OnInit {
  // url = 'https://jsonplaceholder.typicode.com/posts';
  // constructor(private http: HttpClient) {}
  // data: any;
  // ngOnInit(): void {
  //   this.http.get(this.url).subscribe((result) => {
  //     this.data = result;
  //   });
  // }

  loginform: any = FormGroup;
  constructor(
    private requestservice: RequestService,
    private fb: FormBuilder
  ) {}

  data: any;
  isLoading = true;

  ngOnInit(): void {
    this.requestservice
      .getdata()
      .pipe(
        tap(() => {
          this.isLoading = false;
        }),
        map((res: any) => {
          return res.filter((p: any) => p.id == 1);
        })
      )
      .subscribe((result) => {
        // console.log(result);
        this.data = result;
      });

    this.loginform = this.fb.group({
      userid: [''],
      title: [''],
      body: [''],
      id: [''],
      // password: [''],
    });
  }

  datasubmit() {
    console.log([this.loginform.value]);
    // var responce = this.requestservice
    //   .cratedata([this.loginform.value])
    //   .subscribe();
    // console.log(responce);
  }
}
