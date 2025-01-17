import type { Component } from 'vue'
import type {
  UnknownObject,
  IComponentSize,
  IButtonProps,
  StringObject,
  DeepKeyof,
  IRowProps,
  IColProps,
} from './index'

/** Form Props */
export interface IFormProps<T = StringObject> extends IRowProps {
  modelValue: T
  columns: IFormColumns<T>
  menu?: IFormMenuColumns
  rules?: StringObject
  inline?: boolean
  labelPosition?: 'right' | 'left' | 'top'
  labelWidth?: string
  labelSuffix?: string
  hideRequiredAsterisk?: boolean
  showMessage?: boolean
  inlineMessage?: boolean
  statusIcon?: boolean
  validateOnRuleChange?: boolean
  size?: IComponentSize
  disabled?: boolean
}

export interface FormColumn<T = StringObject> extends IColProps, StringObject {
  /** whether column has a slot */
  slot?: boolean
  /** component name */
  component?: string | Component
  /** props for component */
  props?: UnknownObject
  /** sub-form */
  children?: IFormColumns<T>
  /** max number of sub-form */
  max?: number
  /** keys of model that passed to form */
  prop: DeepKeyof<T>
  /** label name */
  label?: string
  /** width of label, e.g. '50px'. Width auto is supported */
  labelWidth?: string
  /** whether the field is required or not, will be determined by validation rules if omitted */
  required?: boolean
  /** validation rules of form */
  rules?: StringObject | StringObject[]
  /** field error message, set its value and the field will validate error and show this message immediately */
  error?: string
  /** whether to show the error message */
  showMessage?: boolean
  /** inline style validate message */
  inlineMessage?: boolean
  /** control the size of components in this form-item */
  size?: IComponentSize
}

/** Form Columns Option */
export type IFormColumns<T = StringObject> = FormColumn<T>[]

/** Form Menu Option */
export interface FormMenu {
  /** show submit button */
  submit?: boolean
  /** text of submit button */
  submitText?: string
  /** props of submit button */
  submitProps?: IButtonProps
  /** show reset button */
  reset?: boolean
  /** text of reset button */
  resetText?: string
  /** props of reset button */
  resetProps?: IButtonProps
}

/** Form Menu Option */
export type IFormMenuColumns = StringObject & FormMenu

export type IFormSubmit = (
  done: () => void,
  isValid: boolean,
  invalidFields?: StringObject
) => void

export interface IFormValidateCallback<T = StringObject> {
  (isValid: boolean, invalidFields?: StringObject): void
}

export interface IFormValidateFieldCallback<T = StringObject> {
  (message?: string, invalidFields?: StringObject): void
}

/** Form Expose Methods */
export interface IFormExpose<T = StringObject> {
  /** validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted */
  validate: (callback?: IFormValidateCallback<T>) => Promise<boolean>
  /** reset all the fields and remove validation result */
  resetFields: () => void
  /** clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared */
  clearValidate: (props?: DeepKeyof<T> | Array<DeepKeyof<T>>) => void
  /** validate one or several form items */
  validateField: (
    props: DeepKeyof<T> | Array<DeepKeyof<T>>,
    cb: IFormValidateFieldCallback<T>
  ) => void
}
