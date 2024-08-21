import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const recoverySchema = z.object({
  email: z.string().email("Formato de e-mail inválido"),
});

type SchemaRecovery = z.infer<typeof recoverySchema>;

function RecoverySchema(data?: SchemaRecovery) {
  const form = useForm<SchemaRecovery>({
    resolver: zodResolver(recoverySchema),
    defaultValues: {
      email: data?.email || "",
    },
  });
  return form;
}

export function RecoveryHook() {
  const [isLoading, setIsLoading] = useState(false);
  const form = RecoverySchema();

  const onSubmit = async (formData: SchemaRecovery) => {};

  return {
    isLoading,
    onSubmit,
    form,
  };
}
