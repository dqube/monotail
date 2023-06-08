import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@app/form/core';
interface auth {
  email: string;
  firstName?: string;
  tasks?: [];
  multicheckbox?: [];
  members?: member[];
}
interface member {
  name: string;
  age: number;
  description: string;
}
@Component({
  selector: 'app-auth-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  form = new FormGroup({});
  model: auth = {
    email: 'email@gmail.com',
    tasks: [],
    multicheckbox: [],
    members: [
      { name: 'dev', age: 23, description: 'test' },
      { name: 'dev', age: 23, description: 'test' },
    ],
  };
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'members',
      type: 'table',
      props: {
        label: 'Member',
        columns: [
          { label: 'Name' },
          { label: 'Age' },
          { label: 'Description' },
        ],
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'input',
            key: 'name',
            props: {
              label: 'First Name',
              required: true,
            },
          },
          {
            type: 'input',
            key: 'age',
            props: {
              label: 'age',
              required: true,
            },
          },
          {
            type: 'input',
            key: 'desc',
            props: {
              label: 'desc',
              required: true,
            },
          },
        ],
      },
    },
    {
      wrappers: ['panel'],
      props: { label: 'Address' },
      fieldGroup: [
        {
          key: 'tasks',
          type: 'repeat',
          props: {
            addText: 'Add Task',
            label: 'TODO LIST',
            removeText: '-',
          },
          fieldArray: {
            fieldGroupClassName: 'grid grid-cols-2 gap-4',
            fieldGroup: [
              {
                fieldGroup: [
                  {
                    className: 'col-6',
                    key: 'multiselect',
                    type: 'select',
                    defaultValue: 'milky_way',
                    props: {
                      label: 'Favorite Candy (initialized via default value)',
                      options: [
                        { label: 'Snickers', value: 'snickers' },
                        { label: 'Baby Ruth', value: 'baby_ruth' },
                        { label: 'Milky Way', value: 'milky_way' },
                      ],
                      multiple: true,
                    },
                  },
                ],
              }, //Row 1 settings
              {
                fieldGroup: [
                  {
                    className: 'col-6',
                    type: 'input',
                    key: 'taskname',
                    props: {
                      label: 'First Name',
                      required: true,
                    },
                  },
                ],
              }, //Row 2 settings
            ],
          },
        },
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
        // {
        //   key: 'age',
        //   type: 'input',
        //   props: {
        //     label: 'Age',
        //     type: 'number',
        //     max: 99999,
        //     min: 0,
        //     pattern: '\\d{5}',
        //     placeholder: 'Enter your age',
        //     required: true,
        //     description: 'enter your age',
        //   },
        // },
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
            multiple: true,
          },
        },
        {
          key: 'candy1',
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
            {
              key: 'multicheckbox',
              type: 'multicheckbox',
              props: {
                label: 'Accept terms',
                required: true,

                options: [
                  { value: 1, label: 'Male' },
                  { value: 2, label: 'Female' },
                  { value: 4, label: 'Others', disabled: true },
                ],
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
        {
          type: 'button',
          props: {
            btnType: 'primary',
            text: 'With Function',
            click: () => alert('You clicked me!'),
          },
        },
      ],
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
