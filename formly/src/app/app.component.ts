import { Component, OnInit, AfterViewInit  } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFormOptions, FormlyFieldConfig} from '@ngx-formly/core';
import FormlyJsonMock1 from '../assets/mock-1.json';
import FormlyJsonMock2 from '../assets/mock-2.json';
import FormlyJsonMock3 from '../assets/mock-3.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit  {
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];
  fieldsJSON: FormlyFieldConfig[] = FormlyJsonMock1;
  // fieldsJSON: FormlyFieldConfig[] = FormlyJsonMock2;
  // fieldsJSON: FormlyFieldConfig[] = FormlyJsonMock3;
  accordianJson: any = [];
  accordianIndex: number = 0;
  totalAccordian: number | undefined = 0;
  formIndex: number = 0;
  totalForm: number | undefined = 0;


  ngOnInit() {
    this.createAccordian();
    this.fields = this.fieldsJSON;
    this.formClicked(this.accordianIndex, this.formIndex);
  }

  ngAfterViewInit(){

  }

  createAccordian() {
    this.totalAccordian = this.fieldsJSON.length;
    this.accordianJson = this.fieldsJSON.map((accordian, index ) => {
      return {
        'label': accordian.templateOptions?.label,
        'accordianIndex': index,
        'forms': accordian.fieldGroup?.map((form, index) => {
          return {
            'label': form.templateOptions?.label,
            'formIndex': index,
            'valid': false
          }
        })
      }
    });
  }

  formClicked(accIndex: number, formIndex: number) {
    this.accordianIndex = accIndex;
    this.formIndex = formIndex;
    const accordian = this.fieldsJSON[accIndex]?.fieldGroup;
    this.totalForm = accordian?.length;
    accordian?.map((form, index) => {
      if(index === formIndex) {
        this.fields = [];
        this.fields.push(form);
        return;
      }
    });
  }

  trackByFn(index: any, item: any) {
    return index;
}

  modelChange() {
    console.log(this.model);
  }

  prevForm(currAccIndex: number, currFormIndex: number) {
    console.log(currAccIndex, currFormIndex);
    if(this.totalAccordian && this.totalForm) {

      /*if (currFormIndex < this.totalForm-1) {
        this.formIndex++;
        this.formClicked(this.accordianIndex, this.formIndex);
      } else if (currAccIndex < this.totalAccordian-1) {
        this.accordianIndex++;
        this.formIndex = 0;
        this.formClicked(this.accordianIndex, this.formIndex);
      } else {
        console.log('Here form needs to be submited')
      }*/
    }

  }

  nextForm(currAccIndex: number, currFormIndex: number) {
    console.log(currAccIndex, currFormIndex);
    if(this.totalAccordian && this.totalForm) {
      if (currFormIndex < this.totalForm-1) {
        this.formIndex++;
        this.formClicked(this.accordianIndex, this.formIndex);
      } else if (currAccIndex < this.totalAccordian-1) {
        this.accordianIndex++;
        this.formIndex = 0;
        this.formClicked(this.accordianIndex, this.formIndex);
      } else {
        console.log('Here form needs to be submited')
      }
    }

  }
  onSubmit() {
    alert(
      JSON.stringify(this.model, null, 4)
    );
  }
}
