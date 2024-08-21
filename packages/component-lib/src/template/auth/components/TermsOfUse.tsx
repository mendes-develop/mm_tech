import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export default function TermsOfUse({ children }: any) {
    return (
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="max-w-sm sm:max-w-xl gab-4">
          <DialogHeader className="items-center">
            <DialogTitle>TERMO DE USO</DialogTitle>
          </DialogHeader>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem className="my-1" value="item-1">
              <AccordionTrigger className="bg-[#3a71ec] text-white rounded-md flex justify-center p-2">
                1. DAS DISPOSIÇÕES INICIAIS E TERMOS GERAIS{" "}
              </AccordionTrigger>
              <AccordionContent className="p-2 text-justify">
                <p>
                  1.1) Os "Termos de Uso" presentes neste documento referem-se à
                  plataforma -smartgabinete.com.br• Silas Roberto Mariosa de
                  Vasconcelos propriedade da Prestadora de Servicos, pessoa física
                  sob CPF: 113.432.636-03
                </p>
  
                <p>
                  1.2) O presente documento tem por objetivo regulamentar a
                  relação entre usuários que tenham qualquer tipo de interação com
                  a plataforma, incluindo, mas não se limitando a seus serviços
                  prestados via plataforma web e aplicativo acessados por meio de
                  computadores, dispositivos móveis ou qualquer outra tecnologia
                  hábil.
                </p>
  
                <p>
                  1.3) A Smart Gabinete é sediada no Brasil, controla a sua rede
                  de serviços de acordo com a legislação brasileira e não se
                  responsabiliza pela adequação de seus serviços em outros países.
                </p>
  
                <p>
                  1.4) Os "Termos de Uso" são um tipo de contrato de adesão,
                  portanto ao clicar em "Li e aceito", por meio de ação
                  voluntária, o usuário aceita os Termos de Uso aqui presentes e
                  se compromete a segui-los de acordo com a legislação brasileira,
                  assim como se reconhece responsável pelo reconhecimento do teor
                  dos termos aqui apresentados.
                </p>
  
                <p>
                  1.5) Os Termos de Uso e a Política de Privacidade são documentos
                  complementares e qualquer usuário da plataforma estará sujeito a
                  eles, portanto é fundamental a leitura de ambos os documentos.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="my-1" value="item-2">
              <AccordionTrigger className="bg-[#3a71ec] text-white rounded-md flex justify-center p-2">
                2. DO CONCEITOS PRÉVIOS
              </AccordionTrigger>
              <AccordionContent className="p-2 text-justify">
                <p>
                  Estes são os conceitos fundamentais para que você entenda o
                  presente Termo de uso.
                </p>
  
                <p>
                  <strong>Conecta Gabinete:</strong> Pessoa jurídica de direito
                  privado, devidamente registrada sob o CNPJ no
                  33.058.350/0001-68, que presta serviços de gestão demandados da
                  administração pública.
                </p>
  
                <p>
                  <strong>Usuário:</strong> Pessoa física que acessa a plataforma
                </p>
  
                <p>
                  <strong>Usuário de Pessoa Física:</strong> tem acesso ao website
                  e aplicativo da Conecta Gabinete para, de forma prática,
                  solicitar uma demonstração funcionalidade da plataforma, entrar
                  em contato com a empresa ou fazer uso dos serviços
                  disponibilizados na plataforma por meio de sua conta pessoal;
                </p>
  
                <p>
                  <strong>Website/Site:</strong> local na internet, identificado
                  por um nome de domínio (nesse caso @cnctegabinete.com.br);
                </p>
  
                <p>
                  <strong>Aplicativo:</strong> aplicativos oficiais da Conecta
                  Gabinete, disponíveis nas plataformas Android e IOS.
                </p>
  
                <p>
                  <strong>Base de Clientes/Dados:</strong> Base de dados que
                  compila todas as informações às quais o usuário de pessoa
                  jurídica terá acesso. Se referem às informações dos usuários que
                  aceitaram o compartilhamento de seus dados e que poderão ser
                  acessados pelo usuário de pessoa jurídica em questão.
                </p>
  
                <p>
                  <strong>Cadastro:</strong> registro de informações a respeito do
                  usuário, que ficam armazenadas no Banco de Dados, a fim de
                  garantir a segurança e utilização do serviço dentro do website e
                  do aplicativo;
                </p>
  
                <p>
                  <strong>Exclusão:</strong> cancelamento, por parte do usuário,
                  do serviço prestado pela Conecta Gabinete e exclusão dos seus
                  dados da Base de Clientes.
                </p>
  
                <p>
                  As definições trazidas pela Lei 13.709/2018 complementam as
                  definições aqui apresentadas.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="my-1" value="item-3">
              <AccordionTrigger className="bg-[#3a71ec] text-white rounded-md flex justify-center p-2">
                3. DO SERVIÇO PRESTADO
              </AccordionTrigger>
              <AccordionContent className="p-2 text-justify">
                <p>
                  3.1) A plataforma tem por objetivo apresentar a Conecta
                  Gabinete, os serviços prestados pela mesma, facilitar o contato
                  entre possíveis clientes com a empresa e, por meio das contas
                  privadas, fornecer os serviços contratados de gestão de
                  mandatos.
                </p>
  
                <p>
                  3.1.1) Novas funcionalidades podem ser adicionadas, editadas ou
                  excluídas sem a necessidade de aviso prévio, desde que não
                  violem os presentes Termos de Uso.
                </p>
  
                <p>
                  3.2) Para entrar em contato com a Conecta Gabinete, o usuário
                  deve enviar sua mensagem pela aba "Contato", informando seu nome
                  completo, e-mail, cidade e o assunto a ser tratado.
                </p>
  
                <p>
                  3.2.1) Após preencher todos os dados requisitados corretamente,
                  uma resposta para a mensagem será enviada para o e-mail do
                  cadastro.
                </p>
  
                <p>
                  3.3) Para solicitar uma demonstração da Conecta Gabinete, o
                  usuário deve fornecer seu nome completo, e-mail, cidade,
                  telefone, cargo político e discorrer brevemente sobre os
                  desafios enfrentados no mandato.
                </p>
  
                <p>
                  3.4) Para fazer uso dos serviços fornecidos pela Conecta
                  Gabinete, o usuário deve realizar seu login e entrar em sua
                  conta pessoal. No caso de usuários novos, para criar uma conta
                  na plataforma, o usuário deverá informar seu nome completo,
                  e-mail, cidade, telefone, cargo político e elaborar uma senha.
                </p>
  
                <p>
                  3.5) A partir do momento em que um usuário novo é cadastrado na
                  base, seus dados ficam armazenados no banco de dados da Conecta
                  Gabinete. Esses dados só poderão ser acessados pela Conecta
                  Gabinete.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="my-1" value="item-4">
              <AccordionTrigger className="bg-[#3a71ec] text-white rounded-md flex justify-center p-2">
                4. DAS RESPONSABILIDADES DA PLATAFORMA
              </AccordionTrigger>
              <AccordionContent className="p-2 text-justify">
                <p>
                  4.1) A Conecta Gabinete é responsável pelos arquivos baixados na
                  plataforma e seu funcionamento, bem como o gerenciamento do
                  respectivo site e dados coletados dos usuários.
                </p>
  
                <p>
                  4.2) A plataforma Conecta Gabinete se compromete a não
                  compartilhar as informações do usuário da plataforma de forma
                  não explicitada nestes Termos de Uso e nas Políticas de
                  Privacidade, tendo em vista proteger o usuário e garantir o uso
                  seguro da plataforma, atingindo os objetivos fins do serviço.
                </p>
  
                <p>
                  4.3) A plataforma Conecta Gabinete busca sempre o devido
                  funcionamento de seus serviços e trata a segurança como uma de
                  suas prioridades. Desta forma, busca se atualizar e utilizar
                  procedimentos adequados para garantir a segurança dos dados que
                  coleta, embora não possa garantir que todas suas funcionalidades
                  estarão acessíveis de forma ininterrupta, assim como não possa
                  ser garantida a plena segurança da rede, a performance e a plena
                  funcionalidade de seus serviços.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="my-1" value="item-5">
              <AccordionTrigger className="bg-[#3a71ec] text-white rounded-md flex justify-center p-2">
                5. DAS RESPONSABILIDADES DA PLATAFORMA
              </AccordionTrigger>
              <AccordionContent className="p-2 text-justify">
                <p>
                  5.1) O usuário é responsável pela correta utilização do site e
                  pelo cumprimento dos presentes Termos de Uso e Políticas de
                  Privacidade.
                </p>
  
                <p>
                  5.2) Os usuários comprometem-se a operar e utilizar a plataforma
                  dentro dos limites da legislação brasileira e do princípio da
                  boa-fé, sendo vedada a utilização da mesma para fins ilegais.
                </p>
  
                <p>
                  5.3) Os usuários comprometem-se a fornecer dados pessoais
                  verídicos para o correto funcionamento da plataforma.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="my-1" value="item-6">
              <AccordionTrigger className="bg-[#3a71ec] text-white rounded-md flex justify-center p-2">
                6. DAS REGRAS DE USO
              </AccordionTrigger>
              <AccordionContent className="p-2 text-justify">
                <p>
                  6.1) Ao concordar com os presentes termos, o Usuário passa a
                  aceitar receber e-mails da Conecta Gabinete com conteúdos
                  informativos e acerca dos serviços prestados pela mesma. Bem
                  como, contrai o dever de respeitar as regras estabelecidas pela
                  Conecta Gabinete para o uso do Site.
                </p>
  
                <p>
                  6.2) O Usuário reconhece que, em qualquer circunstância, será o
                  único e exclusivo responsável pela utilização da plataforma,
                  identificado a partir de seu endereço IP (Internet Protocolo) e
                  comprometendo-se a não utilizar a plataforma da Conecta Gabinete
                  para propósitos ilegais, isentando a Conecta Gabinete de
                  qualquer responsabilidade pelo uso do Site e do aplicativo feito
                  pelo usuário.
                </p>
  
                <p>
                  6.3) A administração da Conecta Gabinete reserva-se o direito
                  de, em caso de descumprimento dos presentes Termos de Uso ou da
                  legislação brasileira, bloquear o acesso do Usuário sem
                  notificação, em qualquer momento e sem nenhum tipo de
                  compromisso com o Usuário.
                </p>
  
                <p>
                  6.4) O site e o aplicativo da Conecta Gabinete são
                  disponibilizados para acesso do Usuário por prazo indeterminado,
                  declarando-se ao usuário que o site e o aplicativo da Conecta
                  Gabinete podem ser retirados do ar a qualquer tempo, a critério
                  exclusivo da administração.
                </p>
  
                <p>
                  6.5) A Conecta Gabinete poderá utilizar essas informações para
                  entrar em contato com o Usuário.
                </p>
  
                <p>
                  6.6) Caso o Usuário precise relatar qualquer problema,
                  dificuldade ou sugestão à Conecta Gabinete, basta entrar em
                  contato pelo e-mail.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="my-1" value="item-7">
              <AccordionTrigger className="bg-[#3a71ec] text-white rounded-md flex justify-center p-2">
                7. DA EXCLUSÃO DO CADASTRO
              </AccordionTrigger>
              <AccordionContent className="p-2 text-justify">
                <p>
                  7.1)O Usuário poderá solicitar a exclusão do seu cadastro no
                  banco de dados da Conecta Gabinete. Para isso deverá efetuar uma
                  solicitação através do e-mail Igpd@conectagabinete.com.br,
                  fornecendo detalhes do cadastro a ser excluído e comprovando a
                  titularidade dos dados pessoais.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="my-1" value="item-8">
              <AccordionTrigger className="bg-[#3a71ec] text-white rounded-md flex justify-center p-2">
                8. DA PRIVACIDADE
              </AccordionTrigger>
              <AccordionContent className="p-2 text-justify">
                <p>
                  8.1)Consulte em nossa Política de Privacidade as informações
                  sobre como coletamos, utilizamos e compartilhamos informações
                  sobre usuários de nossa Plataforma e Serviços.
                </p>
                <p>
                  8.2)A Política de Privacidade é parte integrante do presente
                  documento, sendo que ambos seroo aplicados e interpretados em
                  conjunto. Em caso de divergência entre os Termos de Uso e a
                  Política de Privacidade, ou outros documentos, prevalecerá o
                  disposto nestes Termos de Uso.
                </p>
                <p>
                  8.3)As informações pessoais do usuário elou qualquer informaçdo
                  enviada pelo usuário à Conecta Gabinete poderdo ser
                  compartilhadas organizações, com empresas, autoridades públicas
                  ou mesmo indivíduos se a administração da Conecta Gabinete tiver
                  de cumprir ordem judicial ou de autoridade administrativa
                  competente ou entender que isso é necessário para: Cumprirnorma
                  legal ou determinaçdo judicial; Impedir fraudes; Prevenir ou
                  auxiliar na investigaçdo de atos ilícitos, por questóes de
                  segurança da Conecta Gabinete ou de terceiros; Proteger a
                  Conecta Gabinete e seus clientes de eventuais danos.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="my-1" value="item-9">
              <AccordionTrigger className="bg-[#3a71ec] text-white rounded-md flex justify-center p-2">
                9. DA VIOLAÇÃO DOS TERMOS DE USO
              </AccordionTrigger>
              <AccordionContent className="p-2 text-justify">
                <p>
                  9.1) A infração a qualquer das disposições contidas nestes
                  Termos de Uso podem sujeitar o Usuário, mas noo limitando-se, às
                  seguintes penalidades, não necessariamente nesta ordem:
                </p>
                <p>9.1.1) Advertência;</p>
                <p>9.1.2) Bloqueio do acesso do Usuário;</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="my-1" value="item-10">
              <AccordionTrigger className="bg-[#3a71ec] text-white rounded-md flex justify-center p-2">
                10. DA ALTERAÇÃO DOS TERMOS DE USO
              </AccordionTrigger>
              <AccordionContent className="p-2 text-justify">
                <p>
                  10.1) Podendo ser feitas modificações nestes Termos. Caso isso
                  ocorra, o Usuário poderá ser avisado através de e-mail ou
                  diretamente no próprio site. A versão mais recente dos Termos e
                  Condições de Uso pode ser analisada a qualquer momento nas
                  páginas onde ocorrerão coleta de dados.
                </p>
                <p>
                  10.2) É recomendável que o Usuário verifique regularmente se há
                  atualizações. A continuação do uso, por sua parte, dos serviços
                  após qualquer notificação de nossa parte confirmará que você
                  concorda com os Termos alterados. Caso não concorde com os
                  Termos modificados, recomendamos gentilmente que solicite a
                  exclusão do seu cadastro.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="my-1" value="item-11">
              <AccordionTrigger className="bg-[#3a71ec] text-white rounded-md flex justify-center p-2">
              11. DAS DENÚNCIAS
              </AccordionTrigger>
              <AccordionContent className="p-2 text-justify">
                <p>
                11.1) Na hipótese de um Usuário considerar que existem informações, fatos ou circunstâncias que constituem atividade ilícita ou contrária aos presentes Termos de Uso na plataforma Conecta Gabinete, deverá efetuar denúncia do conteúdo, através do e-mail Igpd@conectagabinete.com.br contendo todas as informações necessárias para que a administração da Conecta Gabinete tome as medidas cabíveis.
                </p>
                <p>
                11.2) O contato para Denúncia poderá ser usado sempre que o Usuário encontre algum conteúdo ou atividade que viole os presentes Termos de Uso ou a legislação brasileira.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="my-1" value="item-12">
              <AccordionTrigger className="bg-[#3a71ec] text-white rounded-md flex justify-center p-2">
              12. DAS DISPOSIÇÕES FINAIS
              </AccordionTrigger>
              <AccordionContent className="p-2 text-justify">
                <p>
                12.1) As normas aqui descritas estão em conformidade com a legislação brasileira e com a Lei Geral de Proteção de Dados (LGPD).
                </p>
                <p>
                12.2) Eventuais conflitos entre as partes seroo primordialmente resolvidos por medição entre as mesmas. Em caso de discussão judicial, as partes podem optar por audiência conciliatória. Neste caso, fica eleito o foro da comarca da Capital de  Blumenau/SC como único competente para a resolução de eventuais conflitos.
                </p>
                <p>
                12.3) Se qualquer parte deste Termo não for possível de ser executada, a parte restante permanecerá em total vigência
  e efeito. Se a plataforma Conecta Gabinete falhar em executar qualquer parte destes Termos, isso não será considerado como uma renúncia ou criação de uma nova obrigação, nem impedirá a Conecta Gabinete de exigir que sejam cumpridos quaisquer direitos estabelecidos no presente instrumento.
                </p>
                <p>
                12.4) Sempre apreciamos receber feedback de Usuários e outras sugestoes sobre nossos produtos e serviços, mas esteja ciente de que podemos usá-los sem qualquer restriçdo ou obrigaçdo de remunerá-lo, e noo temos o dever de mantê-los sob confidencialidade.
                </p>
                <p>
                12.5) O usuário poderá esclarecer qualquer dúvida sobre os presentes Termos de Uso, bem como sobre a Política de Privacidade, entrando em contato diretamente com a Conecta Gabinete, através do e-mail 'gpd@çqnectqgqbinete.çom.br.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <DialogDescription>
            Para mais informações ou dúvidas, envie um e-mail para:
            contato@smartgabinete.com.br
          </DialogDescription>
          <div className="relative my-2">
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
        </DialogContent>
      </Dialog>
    );
  }
  