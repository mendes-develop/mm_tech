import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const loginSchema = z
  .object({
    senha: z.string().min(1, "Adicione uma senha"),
    confirmarSenha: z.string().min(1, "Confirme a senha"),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"],
  });

type SchemaLogin = z.infer<typeof loginSchema>;

function LoginSchema(data?: SchemaLogin) {
  const form = useForm<SchemaLogin>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      senha: data?.senha || "",
      confirmarSenha: data?.confirmarSenha || "",
    },
  });
  return form;
}

export function ResetPasswordHook() {
  const [isLoading, setIsLoading] = useState(false);
  const [showAlertEmail, setShowAlertEmail] = useState(false);

  const form = LoginSchema();

  const onSubmit = async (formData: SchemaLogin) => {
    setIsLoading(true);
    setShowAlertEmail(false);

    try {
        setShowAlertEmail(true)
        form.reset()
    } catch (error) {
        
    }
  };

  return {
    isLoading,
    onSubmit,
    form,
    showAlertEmail
  };
}
