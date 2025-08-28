// components/CustomForm.tsx
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodObject, ZodType } from "zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { CustomFormProps } from "@/types/form";
import type { ZodFirstPartySchemaTypes } from "zod/v3";

function getDefaultValues<T extends ZodType<any, any>>(schema: T): z.infer<T> {
  const shape =
    schema instanceof z.ZodObject ? (schema as ZodObject<any>).shape : {};
  const defaults: Record<string, any> = {};

  for (const key in shape) {
    const def = shape[key] as ZodFirstPartySchemaTypes;

    if (def.isOptional()) {
      defaults[key] = undefined;
    } else if (def._def.typeName === "ZodString") {
      defaults[key] = "";
    } else if (def._def.typeName === "ZodNumber") {
      defaults[key] = 0;
    } else if (def._def.typeName === "ZodBoolean") {
      defaults[key] = false;
    } else {
      defaults[key] = null;
    }
  }

  return defaults as z.infer<T>;
}

export function CustomForm<T extends ZodType<any, any>>({
  schema,
  fields,
  onSubmit,
  submitText = "Submit",
}: CustomFormProps<T>) {
  const form = useForm<any>({
    resolver: zodResolver(schema),
    defaultValues: getDefaultValues(schema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {fields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as any}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input
                    type={field.type || "text"}
                    placeholder={field.placeholder}
                    {...formField}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" className="w-full">
          {submitText}
        </Button>
      </form>
    </Form>
  );
}
