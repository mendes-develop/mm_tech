import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import { Form } from "react-hook-form";
	import { Card, CardContent } from "@/components/ui/card";
  import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { ResetPasswordHook } from "../components/ResetPasswordHook";
import { AlertEmailReset } from "../alertEmailReset/AlertEmailReset";

export function ResetPasswordPage(){
const {onSubmit,form,isLoading, showAlertEmail} = ResetPasswordHook()
  const [showPassword, setShowPassword] = useState(false);

    return(
        <section className="min-h-screen bg-[#25508C] flex items-center">
         <Card className="w-full max-w-md mx-auto border-none shadow-none">
          <CardContent className="mt-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Preencha sua nova senha abaixo:
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Redefinir sua senha
            </p>
            <Form {...form}>
              <form className="mt-2" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="senha"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel asChild>
                        <div className="flex justify-between">
                          <Label>Senha<b className="text-red-600">*</b></Label>
                        </div>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder=""
                            {...field}
                          />
                          {showPassword ? (
                            <EyeOpenIcon
                              className="absolute right-2 top-2 cursor-pointer"
                              onClick={() => setShowPassword(false)}
                            />
                          ) : (
                            <EyeClosedIcon
                              className="absolute right-2 top-2 cursor-pointer"
                              onClick={() => setShowPassword(true)}
                            />
                          )}
                        </div>
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmarSenha"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmar senha</FormLabel>
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder=""
                          {...field}
                        />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="mt-4 w-full" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="animate-spin h-4 w-4 mr-2" />
                  ) : null}
                  Alterar senha
                </Button>
              </form>
              <AlertEmailReset showAlert={showAlertEmail} />
            </Form>
            <div className="relative mt-6">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-100 text-gray-500"></span>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              <a
                className="text-blue-800 font-bold hover:underline"
                href="/login"
              >
                Voltar para login
              </a>
            </p>
          </CardContent>
        </Card>
     </section>
    )
}