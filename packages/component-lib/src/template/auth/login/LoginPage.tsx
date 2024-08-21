import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { LoginHook } from "../components/LoginHook";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { onSubmit, form, isLoading } = LoginHook()

  return (
    <section className="min-h-screen bg-[#25508C] flex items-center">
       <Card className=" border-spacing-1 shadow-xl w-full mx-auto max-w-md">
          <div className="flex justify-center m-4">
            <img src="" alt="SUA LOGO AQUI"/>
          </div>
          <CardContent className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">Acessar painel</h2>
            <p className="mt-2 text-sm text-gray-600">
              Entre com seu e-email e senha abaixo:
            </p>
            <Form {...form}>
              <form className="mt-8 max-w-lg" onSubmit={form.handleSubmit(onSubmit)}>
                <div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }: any) => (
                      <FormItem>
                        <FormLabel>E-mail*</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="seu@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="senha"
                  render={({ field }: any) => (
                    <FormItem>
                      <FormLabel asChild>
                        <div className="flex justify-between">
                          <Label>Senha</Label>
                          <a
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            href="#"
                            tabIndex={-1}
                          >
                            esqueceu a senha?
                          </a>
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
                <Button type="submit" className="mt-4 w-full" disabled={isLoading}>
                  {isLoading ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : null}
                  Acessar
                </Button>
              </form>
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
              {`Ainda não possui cadastro? `}
              <a
                className="text-blue-800 font-bold hover:underline"
                href="/login/singup"
              >
                Criar nova conta.
              </a>{" "}
            </p>
          </CardContent>
        </Card>
    </section>
  );
}
