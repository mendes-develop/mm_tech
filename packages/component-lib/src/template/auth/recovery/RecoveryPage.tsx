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
import { RecoveryHook } from "../components/RecoveryHook";
import { Button } from "@/components/ui/button";
 

export function RecoveryPage(){
	const {onSubmit, form, isLoading} = RecoveryHook()

    return(
        <section className="min-h-screen bg-[#25508C] flex items-center">
        <Card className=" border-spacing-1 shadow-xl w-full mx-auto max-w-md">
           <div className="flex justify-center m-4">
             <img src="" alt="SUA LOGO AQUI"/>
           </div>
					 <CardContent className="mt-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Esqueceu sua senha?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Digite seu e-mail e enviaremos intruções para redefinir sua senha
            </p>
            <Form {...form}>
              <form className="mt-2" onSubmit={form.handleSubmit(onSubmit)}>
                <div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }: any) => (
                      <FormItem>
                        <FormLabel>
                          E-mail<b className="text-red-600">*</b>
                        </FormLabel>
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
                <Button className="mt-4 w-full" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="animate-spin h-4 w-4 mr-2" />
                  ) : null}
                  Alterar senha
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
            <p className=" mt-4 text-xs text-gray-500">
              <a
                className=" text-blue-800 font-bold hover:underline"
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