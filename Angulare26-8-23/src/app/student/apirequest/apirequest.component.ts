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
  dataupdate = false;
  isLoading = true;
  alert = false;

  ngOnInit(): void {
    this.requestservice
      .getdata()
      // .pipe(
      //   tap(() => {
      //     this.isLoading = false;
      //   }),
      //   map((res: any) => {
      //     return res.filter((p: any) => p.id == 101);
      //   })
      // )
      .subscribe((result) => {
        // console.log(result);
        this.data = result;
      });

    this.loginform = this.fb.group({
      userId: [''],
      title: [''],
      body: [''],
      id: [''],
      // password: [''],
    });
  }

  datasubmit() {
    if (!this.dataupdate) {
      console.log('data create');

      console.log([this.loginform.value]);
      this.requestservice.cratedata(this.loginform.value).subscribe((res) => {
        // no 3rd bracket
        console.log(res);
        this.data.push(res);
        console.log(this.data);
      });
    } else {
      console.log('====================================');
      console.log('data updated');
      console.log('====================================');
      console.log([this.loginform.value]);
      this.requestservice
        .updatedata(this.loginform.value)
        .subscribe((res: any) => {
          console.log(res);
          const tempdata = this.data.find((i: any) => i.id === res.id);
          const position = this.data.indexOf(tempdata);
          this.data[position] = res;
          this.loginform.reset();
          this.dataupdate = false;
        });
      this.alert = true;
    }
  }

  //update data
  selectdata(item: any) {
    console.log(item);
    this.loginform.patchValue(item);
    this.dataupdate = true;
  }

  deleteaction(Id: any) {
    this.requestservice.deletedata(Id).subscribe((res: any) => {
      console.log(res);
      console.log(Id);

      this.data = this.data.filter((i: any) => i.id !== Id);
    });
  }
}
