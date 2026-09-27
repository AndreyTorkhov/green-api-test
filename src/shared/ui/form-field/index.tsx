import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import type { IFormFieldProps } from "./interfaces";

export function FormField(props: IFormFieldProps) {
  const { id, label, error, hint, ...inputProps } = props;
  const description = [hint && `${id}-hint`, error && `${id}-error`]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        {...inputProps}
        id={id}
        aria-invalid={!!error}
        aria-describedby={description || undefined}
      />
      {hint && (
        <p id={`${id}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
