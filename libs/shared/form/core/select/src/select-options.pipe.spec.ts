import { FormlyFieldConfig } from '@app/form/core';
import { of as observableOf, Subject } from 'rxjs';
import { FormlyValueChangeEvent } from 'src/core/src/lib/models';
import { FormlySelectOptionsPipe } from './select-options.pipe';

describe('Pipe: FormlySelectOptionsPipe', () => {
  let pipe: FormlySelectOptionsPipe;

  beforeEach(() => {
    pipe = new FormlySelectOptionsPipe();
  });

  it('passing empty options', () => {
    pipe.transform(undefined).subscribe((options) => {
      expect(options).toEqual([]);
    });
  });

  it('passing options as an array', () => {
    pipe.transform([{ label: '1', value: '1' }]).subscribe((options) => {
      expect(options).toEqual([{ label: '1', value: '1', disabled: false }]);
    });
  });

  it('passing options as an observable', () => {
    pipe
      .transform(observableOf([{ label: '1', value: '1' }]))
      .subscribe((options) => {
        expect(options).toEqual([{ label: '1', value: '1', disabled: false }]);
      });
  });

  it('should detect field expressions changes', () => {
    const fieldChanges = new Subject<FormlyValueChangeEvent>();
    const field: FormlyFieldConfig = {
      options: { fieldChanges },
      props: {
        options: [{ label: '1', value: '1' }],
      },
    };

    const spy = jest.fn();
    pipe.transform([], field).subscribe(spy);
    fieldChanges.next({
      value: [],
      field,
      type: 'expressionChanges',
      property: 'props.options',
    });
    fieldChanges.next({
      value: [],
      field,
      type: 'expressionChanges',
      property: 'templateOptions.options',
    });
    fieldChanges.next({
      value: [],
      field,
      type: 'expressionChanges',
      property: 'test',
    });
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('already grouped structure, so nothing to process', () => {
    const field = {};
    const options = [
      {
        label: 'g1',
        group: [
          { label: '1', value: '1' },
          { label: '2', value: '2' },
        ],
      },
      {
        label: 'g2',
        group: [{ label: '3', value: '3' }],
      },
    ];

    pipe.transform(options, field).subscribe((options) => {
      expect(options).toEqual([
        {
          label: 'g1',
          group: [
            { label: '1', value: '1', disabled: false },
            { label: '2', value: '2', disabled: false },
          ],
        },
        {
          label: 'g2',
          group: [{ label: '3', value: '3', disabled: false }],
        },
      ]);
    });
  });

  describe('label & value & disabled props', () => {
    let options: any;
    beforeEach(() => {
      options = [{ name: 'foo', id: '1', locked: true }];
    });

    it('as a string', () => {
      const field = {
        props: {
          labelProp: 'name',
          valueProp: 'id',
          disabledProp: 'locked',
        },
      };

      pipe.transform(options, field).subscribe((options) => {
        expect(options).toEqual([{ label: 'foo', value: '1', disabled: true }]);
      });
    });

    it('as a function', () => {
      const field = {
        props: {
          labelProp: (item: any) => item.name,
          valueProp: (item: any) => item.id,
          disabledProp: (item: any) => item.locked,
        },
      };

      pipe.transform(options, field).subscribe((options) => {
        expect(options).toEqual([{ label: 'foo', value: '1', disabled: true }]);
      });
    });

    it('with group props', () => {
      options = [
        { name: '1', id: '1', locked: true, parent: '1' },
        { name: '2', id: '2', locked: false, parent: '1' },
        { name: '3', id: '3', locked: false, parent: '2' },
      ];

      const field = {
        props: {
          labelProp: (item: any) => item.name,
          valueProp: (item: any) => item.id,
          disabledProp: (item: any) => item.locked,
          groupProp: (item: any) => item.parent,
        },
      };

      pipe.transform(options, field).subscribe((options) => {
        expect(options).toEqual([
          {
            label: '1',
            group: [
              { label: '1', value: '1', disabled: true },
              { label: '2', value: '2', disabled: false },
            ],
          },
          {
            label: '2',
            group: [{ label: '3', value: '3', disabled: false }],
          },
        ]);
      });
    });
  });

  describe('group options', () => {
    let options: any;
    beforeEach(() => {
      options = [
        { label: '1', value: '1', parent: '1' },
        { label: '2', value: '2', parent: '1' },
        { label: '3', value: '3', parent: '2' },
      ];
    });

    it('as a string', () => {
      const field = { props: { groupProp: 'parent' } };

      pipe.transform(options, field).subscribe((options) => {
        expect(options).toEqual([
          {
            label: '1',
            group: [
              { label: '1', value: '1', disabled: false },
              { label: '2', value: '2', disabled: false },
            ],
          },
          {
            label: '2',
            group: [{ label: '3', value: '3', disabled: false }],
          },
        ]);
      });
    });

    it('as a function', () => {
      const field = {
        props: { groupProp: (item: FormlyFieldConfig) => item.parent },
      };

      pipe.transform(options, field).subscribe((options) => {
        expect(options).toEqual([
          {
            label: '1',
            group: [
              { label: '1', value: '1', disabled: false },
              { label: '2', value: '2', disabled: false },
            ],
          },
          {
            label: '2',
            group: [{ label: '3', value: '3', disabled: false }],
          },
        ]);
      });
    });
  });
});
