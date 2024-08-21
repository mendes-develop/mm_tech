import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const loginSchema = z.object({
  email: z.string().email("Formato de e-mail inválido"),
  senha: z.string().min(1, "Preencha sua senha"),
});

type SchemaLogin = z.infer<typeof loginSchema>;

function LoginSchema(data?: SchemaLogin) {
  const form = useForm<SchemaLogin>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: data?.email || "",
      senha: data?.senha || "",
    },
  });
  return form;
}

export function LoginHook() {
  const [isLoading, setIsLoading] = useState(false);
  const form = LoginSchema();

  const onSubmit = async (formData: SchemaLogin) => {};

  return {
    isLoading,
    onSubmit,
    form,
  };
}
