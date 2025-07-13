export type EmailTemplateProps<T extends Record<string, unknown>> = T & {
  previewMode: boolean;
};
