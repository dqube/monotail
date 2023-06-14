import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@app/form/core';
import { DialogService } from '@app/ui/dialog';
import { DrawerService } from '@primeng/drawer';
import { TestComponent } from './test.component';
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
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-auth-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  private dialog = inject(DialogService);
  @ViewChild('editTmpl', { static: false })
  editTmpl!: TemplateRef<any>;
  constructor(private drawerService: DrawerService) {}
  cities: City[] = [];

  selectedCity!: City;
  openmodal() {
    const dialogRef = this.dialog.open(TestComponent, {
      // data is typed based on the passed generic
      data: {
        title: 'test',
      },
    });
  }
  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
  openDrawer(
    direction = 'left',
    size?,
    closeOnOutsideClick = true,
    template = this.editTmpl,
    isRoot = true,
    parentContainer?: any
  ) {
    this.drawerService.create({
      template,
      size,
      context: 'Alert Everyone!',
      closeOnOutsideClick,
      parentContainer,
      isRoot,
    });
  }
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
          key: 'datepicker',
          type: 'datepicker',
          props: {
            label: 'Datepicker',
            placeholder: 'Placeholder',
            description: 'Description',
            dateFormat: 'yy/mm/dd',
            hourFormat: '24',
            numberOfMonths: 1,
            selectionMode: 'single',
            required: true,
            readonlyInput: false,
            showTime: false,
            showButtonBar: true,
            showIcon: true,
            showOtherMonths: true,
            selectOtherMonths: false,
            monthNavigator: false,
            yearNavigator: false,
            yearRange: '2020:2030',
            inline: false,
          },
        },
        {
          key: 'city',
          type: 'autocomplete',
          props: {
            label: 'City name',
            placeholder: 'Enter city',
            options: [
              { value: 1, label: 'Option 1' },
              { value: 2, label: 'Option 2' },
              { value: 3, label: 'Option 3' },
              { value: 4, label: 'Option 4', disabled: true },
            ],
            // change: () => {
            //   alert('on change triggered');
            // },
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
    {
      type: 'tabs',
      fieldGroup: [
        {
          props: { label: 'Personal data' },
          fieldGroup: [
            {
              key: 'firstname',
              type: 'input',
              props: {
                label: 'First name',
                required: true,
              },
            },
            {
              key: 'age',
              type: 'input',
              props: {
                type: 'number',
                label: 'Age',
                required: true,
              },
            },
          ],
        },
        {
          props: { label: 'Destination' },
          fieldGroup: [
            {
              key: 'country',
              type: 'input',
              props: {
                label: 'Country',
                required: true,
              },
            },
          ],
        },
        {
          props: { label: 'Day of the trip' },
          fieldGroup: [
            {
              key: 'day',
              type: 'input',
              props: {
                type: 'date',
                label: 'Day of the trip',
                required: true,
              },
            },
          ],
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
