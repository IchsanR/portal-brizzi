import type { z, ZodType } from "zod";

export type FieldConfig = {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
};

export interface CustomFormProps<T extends ZodType<any, any>> {
  schema: T;
  fields: FieldConfig[];
  onSubmit: SubmitHandler<z.infer<T>>;
  submitText?: string;
}