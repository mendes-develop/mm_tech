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
import { EyeClosedIcon, EyeOpenIcon, CheckIcon } from "@radix-ui/react-icons";
import { Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { SignUpHook } from "../components/SignUpHook";
import { Checkbox } from "@/components/ui/checkbox";
import Conditions from "../components/Conditions";

export function SignUpPage() {
  const { onSubmit, form, isLoading, formatarNumeroCelular } = SignUpHook();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    hasLetter: false,
    hasDigit: false,
    isLongEnough: false,
  });

  const handlePasswordChange = (e:any) => {
    const value = e.target.value;
    const hasLetter = /[A-Z]/.test(value);
    const hasDigit = /\d/.test(value);
    const isLongEnough = value.length >= 8;

    setPasswordValidations({
      hasLetter,
      hasDigit,
      isLongEnough,
    });

    form.setValue("senha", value);
  };

  return (
    <section className="min-h-screen bg-[#25508C] flex items-center">
      <Card className="border-spacing-1 shadow-xl w-full mx-auto max-w-md">
        <div className="flex justify-center m-4">
          <img src="" alt="SUA LOGO AQUI" />
        </div>
        <CardContent className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900">Sobre você</h2>
          <p className="mt-2 text-sm text-gray-600">
            Preencha os campos abaixo para criarmos seu usuário
          </p>
          <Form {...form}>
            <form
              className="mt-8 max-w-lg"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="nome"
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel>Nome*</FormLabel>
                    <FormControl>
                      <Input type="nome" placeholder="" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="celular"
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel>Whatsapp/Celular</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="(xx) Xxxxx-xxxx"
                        {...field}
                        onChange={(e) => {
                          let numeroFormatado = e.target.value;
                          numeroFormatado = formatarNumeroCelular(
                            e.target.value
                          );
                          field.onChange(numeroFormatado);
                        }}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="senha"
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel asChild>
                      <div className="flex justify-between">
                        <Label>Senha</Label>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder=""
                          {...field}
                          onChange={(e) => {
                            handlePasswordChange(e);
                            field.onChange(e);
                          }}
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
                    <div className="ml-2 mt-2">
                      <p
                        className={
                          passwordValidations.hasLetter
                            ? "text-green-500 flex items-center"
                            : "text-red-500"
                        }
                      >
                        {passwordValidations.hasLetter && (
                          <CheckIcon className="mr-2" />
                        )}
                        Ao menos uma letra maiúscula
                      </p>
                      <p
                        className={
                          passwordValidations.hasDigit
                            ? "text-green-500 flex items-center"
                            : "text-red-500"
                        }
                      >
                        {passwordValidations.hasDigit && (
                          <CheckIcon className="mr-2" />
                        )}
                        Ao menos um dígito
                      </p>
                      <p
                        className={
                          passwordValidations.isLongEnough
                            ? "text-green-500 flex items-center"
                            : "text-red-500"
                        }
                      >
                        {passwordValidations.isLongEnough && (
                          <CheckIcon className="mr-2" />
                        )}
                        8 caracteres ou mais
                      </p>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
							<div className="flex items-center mt-2">
									<FormField
										control={form.control}
										name="agree"
										render={({ field }) => (
											<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-2">
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<div className="space-y-1 leading-none">
													<FormLabel>Eu concordo com os
														{" "}
														<Conditions>
															<a className=" text-blue-800 font-bold hover:underline">
																termos de uso
															</a>
														</Conditions>
														{" "}
													</FormLabel>
													<FormMessage />
												</div>
											</FormItem>
										)}
									/>
								</div>
              <Button
                type="submit"
                className="mt-4 w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="animate-spin h-4 w-4 mr-2" />
                ) : null}
                Criar conta
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
