import { Component, OnInit } from '@angular/core';
import { ApiFakeJsonService } from 'src/services/api/api-fakeJson/api-fake-json.service';
import { ResFakeJsonGetData } from 'src/services/api/api-fakeJson/interfaces/fakeJsonGetData';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fake-json',
  templateUrl: './fake-json.component.html',
  styleUrls: ['./fake-json.component.scss']
})
export class FakeJsonComponent implements OnInit {
  public fakeJson: ResFakeJsonGetData = {
    userId: 0,
    id: 0,
    title: '',
    completed: false
  }

  public todos = 1

  // constructor(apiFakeJson: ApiFakeJsonService) { }
  constructor(private apiFakeJson: ApiFakeJsonService) { }


  ngOnInit() {
  }

  chekRequired() {
    if (this.todos !== null && String(this.todos) !== '' && this.todos !== 0) {
      return false
    } else {
      return true
    }
  }

  getDataFromFakeJson(todos: number) {
    console.log(todos);
    this.apiFakeJson.getDataFromFakeJsonParam(todos).subscribe(

      (resp: any) => {
        console.log(resp);
        this.fakeJson = resp;
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

}
