import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import TermsOfUse from "./TermsOfUse"

export default function Conditions({ children }: any) {
    return (
        <Dialog >
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-sm sm:max-w-md gab-4">
                <DialogHeader className="">
                    <DialogTitle>Você precisa saber antes de usar o Smart Gabinete?</DialogTitle>
                </DialogHeader>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem className="my-1" value="item-1">
                        <AccordionTrigger className="bg-[#3a71ec] text-white rounded-md flex justify-center p-2">Funcionalidades do Smart Gabinete </AccordionTrigger>
                        <AccordionContent className="p-2 text-justify">
                            A completa funcionalidade depende do adequado lançamento dos dados cadastrais, assim como da ativação de cookies. Recomendamos que você informe todos os dados solicitados, mesmo os indicados como facultativos. Isto ajudará a aperfeiçoar a experiência de uso do Smart Gabinete no futuro. Você terá acesso posterior aos seus dados cadastrais para consulta e ativação, assim como poderá desativar cookies, embora isso possa limitar ou inviabilizar o funcionamento do Smart Gabinete.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className="my-1" value="item-2">
                        <AccordionTrigger className="bg-[#3a71ec] text-white rounded-md flex justify-center p-2">Dados de terceiros </AccordionTrigger>
                        <AccordionContent className="p-2 text-justify">
                            Utilize somente para fins previstos pelas funcionalidade do Smart Gabinete, em observância da Lei Geral de Proteção de Dados. O lançamento, compartilhamento e uso dos dados cadastrados são de sua inteira e exclusiva responsabilidade.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className="my-1" value="item-3">
                        <AccordionTrigger className="bg-[#3a71ec] text-white rounded-md flex justify-center p-2">Compromissos do Smart Gabinete</AccordionTrigger>
                        <AccordionContent className="p-2 text-justify">
                            Respeitamos a sua privacidade e ninguém terá acesso a qualquer dado que você lançar no Smart Gabinete, com exceção de data-centers contratados. Os dados armazenados em data-centers serão mantidos sob condições seguras e confiáveis, respeitando o nosso compromisso de privacidade com você, por meio do emprego de padrões técnicos adequados.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <DialogDescription>
                    Para mais informações ou dúvidas, envie um e-mail para: contato@smartgabinete.com.br
                </DialogDescription>
                <div className="relative my-2">
                    <div aria-hidden="true" className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-gray-100 text-gray-500"></span>
                    </div>
                </div>
                <Label className="flex justify-center gap-1">
                    Acessar na integra o
                    {" "}
                    <TermsOfUse>
                    <a className=" text-blue-800 font-bold hover:underline">
                        termos de uso
                    </a>
                    </TermsOfUse>
                </Label>
            </DialogContent>
        </Dialog>
    )
}