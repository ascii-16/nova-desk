type FormState<TValues extends Record<string, unknown>> = {
  success: boolean;
  errors: Record<string, string[]>;
  messages: string[];
  values: TValues;
};