import type { FormEventHandler } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { ICreateChatFormValues } from "../../interfaces";

export interface ICreateChatFormProps {
  form: UseFormReturn<ICreateChatFormValues>;
  onSubmit: FormEventHandler<HTMLFormElement>;
}
