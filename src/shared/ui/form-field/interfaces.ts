import type { ComponentProps } from "react";
import { Input } from "@/shared/ui/input";

export interface IFormFieldProps extends ComponentProps<typeof Input> {
  id: string;
  label: string;
  error?: string;
  hint?: string;
}
