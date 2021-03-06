import {Component, OnInit} from '@angular/core';
import { Formio } from 'formiojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public form: Object = {components: []};
  dynamicForm: any;
  showForm: any = {};

  ngOnInit() {
  }

  onChange(event) {
    console.log(event.form);
    this.dynamicForm = event.form;
  }

  saveForm() {
    localStorage.setItem('dynamicForm', JSON.stringify(this.dynamicForm));
  }

  show() {
    this.showForm = JSON.parse(localStorage.getItem('dynamicForm'));
  }

}
