import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@app/form/core';
interface auth {
  email: string;
  firstName?: string;
}
@Component({
  selector: 'app-auth-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
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
      key: 'age',
      type: 'input',
      props: {
        label: 'Age',
        type: 'number',
        max: 99999,
        min: 0,
        pattern: '\\d{5}',
        placeholder: 'Enter your age',
        required: true,
        description: 'enter your age',
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
      fieldGroupClassName: 'grid grid-cols-3 gap-4',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'firstName',
          props: {
            label: 'First Name',
          },
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'lastName',
          props: {
            label: 'Last Name',
          },
          expressions: {
            'props.disabled': '!model.firstName',
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
      ],
    },

    {
      key: 'Radio',
      type: 'radio',
      props: {
        label: 'Radio',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },
    {
      key: 'Textarea',
      type: 'textarea',
      props: {
        label: 'Textarea',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        cols: 1,
        rows: 5,
      },
    },
  ];

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
