export type FormState<TValues extends Record<string, unknown>> = {
  success: boolean;
  errors: Record<string, string[]>;
  messages: string[];
  values: TValues;
};

export type Formify<T> = {
  [K in keyof T]: string;
}