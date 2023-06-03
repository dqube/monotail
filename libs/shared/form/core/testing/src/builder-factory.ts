import { FormlyConfig, FormlyFormBuilder } from '@app/form/core';
import { FieldExpressionExtension } from '../../src/lib/extensions';
import { CoreExtension } from '../../src/lib/extensions/core/core';
import { FieldFormExtension } from '../../src/lib/extensions/field-form/field-form';
import { FieldValidationExtension } from '../../src/lib/extensions/field-validation/field-validation';
import { mockComponent } from './utils';

interface IBuilderOption {
  onInit?: (c: FormlyConfig) => void;
  extensions?: string[];
}

export function createBuilder({ extensions, onInit }: IBuilderOption = {}) {
  const config = new FormlyConfig();
  config.addConfig({
    types: [
      {
        name: 'formly-group',
        component: mockComponent({ selector: 'formly-group' }),
      },
      {
        name: 'formly-template',
        component: mockComponent({ selector: 'formly-template' }),
      },
    ],
    extensions: [
      { name: 'core', extension: new CoreExtension(config) },
      { name: 'validation', extension: new FieldValidationExtension(config) },
      { name: 'form', extension: new FieldFormExtension() },
      { name: 'expression', extension: new FieldExpressionExtension() },
    ].filter(({ name }) => !extensions || extensions.includes(name)),
  });
  onInit && onInit(config);

  return new FormlyFormBuilder(config, null, null, null);
}
