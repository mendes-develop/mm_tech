import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const loginSchema = z.object({
    nome: z.string().min(3, "Nome deve haver ao menos 3 caracteres"),
    celular: z.string(),
  email: z.string().email("Formato de e-mail inválido"),
  senha: z
    .string()
    .min(8, "A senha deve ter ao menos 8 caracteres")
    .refine((value) => /[A-Z]/.test(value), "A senha deve conter ao menos uma letra maiúscula")
    .refine((value) => /\d/.test(value), "A senha deve conter ao menos um dígito"),
  agree: z.boolean()
});

type SchemaSignUp = z.infer<typeof loginSchema>;

function LoginSchema(data?: SchemaSignUp) {
  const form = useForm<SchemaSignUp>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      nome: data?.nome || "",
      celular: data?.celular || "",
      email: data?.email || "",
      senha: data?.senha || "",
      agree: data?.agree || false
    },
  });
  return form;
}

const formatarNumeroCelular = (valor: string) => {
  // Remove todos os caracteres não numéricos
  const apenasNumeros = valor.replace(/[^\d]/g, '');

  // Aplica a formatação desejada
  const parte1 = apenasNumeros.slice(0, 2);
  const parte2 = apenasNumeros.slice(2, 7);
  const parte3 = apenasNumeros.slice(7, 11);

  let numeroFormatado = '';
  
  if (parte1) {
    numeroFormatado += `(${parte1}`;
  }
  if (parte2) {
    numeroFormatado += `) ${parte2}`;
  }
  if (parte3) {
    numeroFormatado += `-${parte3}`;
  }

  return numeroFormatado;
};

export function SignUpHook() {
  const [isLoading, setIsLoading] = useState(false);
  const form = LoginSchema();

  const onSubmit = async (formData: SchemaSignUp) => {};

  return {
    isLoading,
    onSubmit,
    form,
    formatarNumeroCelular
  };
}
