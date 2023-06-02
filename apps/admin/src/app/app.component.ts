import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@form/core';
interface auth {
  email: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin';
  form = new FormGroup({});
  model: auth = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
        description: 'enter your email address',
      },
    },
    {
      key: 'firstname',
      type: 'input',
      props: {
        label: 'First Name',
        placeholder: 'enter your first name',
        required: true,
      },
    },
    {
      key: 'candy',
      type: 'select',
      defaultValue: 'milky_way',
      props: {
        label: 'Favorite Candy (initialized via default value)',
        options: [
          { label: 'Snickers', value: 'snickers' },
          { label: 'Baby Ruth', value: 'baby_ruth' },
          { label: 'Milky Way', value: 'milky_way' },
        ],
      },
    },
    {
      key: 'Checkbox',
      type: 'checkbox',
      props: {
        label: 'Accept terms',
        description: 'In order to proceed, please accept terms',
        pattern: 'true',
        required: true,
      },
      validation: {
        messages: {
          pattern: 'Please accept the terms',
        },
      },
    },
  ];

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
