import type { Metadata } from "next";
import { H2, LI, P, Strong, UL } from "@/components/article-ui";
import {
  ADDRESS_DISPLAY,
  CNPJ,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_URL,
} from "@/lib/blog/site";

const TITLE = `Política de Privacidade | ${SITE_NAME}`;
const DESCRIPTION =
  "Como o Instituto Frauches coleta, usa e protege dados pessoais de visitantes e pacientes, em conformidade com a LGPD.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/politica-de-privacidade` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: `${SITE_URL}/politica-de-privacidade`,
    siteName: SITE_NAME,
  },
};

const LAST_UPDATED = "6 de setembro de 2026";

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold text-neutral-900">
        Política de Privacidade
      </h1>
      <p className="mb-10 text-sm text-neutral-500">
        Última atualização: {LAST_UPDATED}
      </p>

      <P>
        Esta Política de Privacidade explica como o{" "}
        <Strong>Instituto Frauches</Strong> (CNPJ {CNPJ}), com sede em{" "}
        {ADDRESS_DISPLAY}, coleta, usa, compartilha e protege dados pessoais
        de visitantes deste site e de pessoas que preenchem formulários de
        contato ou anúncios ligados a ele, em conformidade com a Lei Geral de
        Proteção de Dados (Lei nº 13.709/2018, LGPD).
      </P>
      <P>
        Para os fins desta política, o Instituto Frauches é o{" "}
        <Strong>controlador</Strong> dos dados pessoais tratados.
      </P>

      <H2 id="quais-dados-coletamos">Quais dados coletamos</H2>
      <P>Podemos coletar as seguintes categorias de dados:</P>
      <UL>
        <LI>
          <Strong>Dados fornecidos por você</Strong>, ao preencher um
          formulário de contato, formulário de anúncio (por exemplo,
          formulário de cadastro do Meta/Facebook Ads ou do Google Ads) ou ao
          falar pelo WhatsApp: nome, telefone, e, quando aplicável, e-mail e
          mensagens trocadas.
        </LI>
        <LI>
          <Strong>Dados de navegação</Strong>, coletados automaticamente por
          cookies e tecnologias semelhantes: páginas visitadas, tempo de
          navegação, origem do acesso (ex.: um anúncio específico), tipo de
          dispositivo e navegador, endereço IP aproximado.
        </LI>
        <LI>
          <Strong>Dados de saúde eventualmente informados por você</Strong>,
          caso opte por descrever, em mensagem ou formulário, sua condição
          capilar (ex.: grau de calvície, histórico de tratamentos). Esses
          são dados sensíveis nos termos da LGPD e só são tratados com base
          no seu consentimento explícito ao enviar essa informação, para a
          finalidade exclusiva de avaliar seu caso e responder ao seu
          contato.
        </LI>
      </UL>

      <H2 id="para-que-usamos">Para que usamos esses dados</H2>
      <UL>
        <LI>Responder a dúvidas e agendar avaliações e consultas.</LI>
        <LI>
          Entrar em contato sobre o andamento de um atendimento já iniciado.
        </LI>
        <LI>
          Medir o desempenho de campanhas de anúncios (Meta/Facebook Ads,
          Google Ads) e entender quais páginas e conteúdos são mais úteis
          para quem visita o site.
        </LI>
        <LI>
          Cumprir obrigações legais e regulatórias aplicáveis à atividade
          médica.
        </LI>
      </UL>
      <P>
        Não usamos seus dados para nenhuma finalidade diferente das listadas
        acima sem informar você antes.
      </P>

      <H2 id="cookies-e-ferramentas-de-terceiros">
        Cookies e ferramentas de terceiros
      </H2>
      <P>
        Este site usa cookies e tags de terceiros para medir tráfego e o
        resultado de campanhas de anúncios:
      </P>
      <UL>
        <LI>
          <Strong>Google Analytics e Google Ads</Strong> (Google LLC), para
          estatísticas de uso do site e mensuração de campanhas.
        </LI>
        <LI>
          <Strong>Meta Ads / Facebook</Strong> (Meta Platforms, Inc.), para
          mensuração de campanhas e, quando você preenche um formulário
          vinculado a um anúncio do Facebook ou Instagram, para o
          recebimento desses dados de cadastro.
        </LI>
      </UL>
      <P>
        Essas empresas podem processar os dados de acordo com suas próprias
        políticas de privacidade, atuando como operadoras dos dados que
        compartilhamos com elas para essas finalidades específicas. Você pode
        gerenciar ou bloquear cookies diretamente nas configurações do seu
        navegador, o que pode limitar algumas funcionalidades do site.
      </P>

      <H2 id="compartilhamento-de-dados">Compartilhamento de dados</H2>
      <P>
        Não vendemos dados pessoais. Compartilhamos dados apenas com: (1) as
        plataformas de anúncio e análise citadas acima, para as finalidades
        descritas; (2) prestadores de serviço que apoiam a operação deste
        site (ex.: hospedagem); e (3) autoridades públicas, quando exigido
        por lei ou ordem judicial.
      </P>

      <H2 id="por-quanto-tempo-guardamos">Por quanto tempo guardamos os dados</H2>
      <P>
        Guardamos os dados pelo tempo necessário para cumprir a finalidade
        para a qual foram coletados, ou pelo prazo exigido por obrigações
        legais e regulatórias (incluindo normas de guarda de prontuário
        médico, quando aplicável a um atendimento já iniciado), o que for
        maior. Depois disso, os dados são eliminados ou anonimizados.
      </P>

      <H2 id="seus-direitos">Seus direitos como titular de dados</H2>
      <P>
        Nos termos da LGPD, você pode solicitar a qualquer momento:
      </P>
      <UL>
        <LI>Confirmação de que tratamos seus dados, e acesso a eles.</LI>
        <LI>Correção de dados incompletos, inexatos ou desatualizados.</LI>
        <LI>
          Anonimização, bloqueio ou eliminação de dados desnecessários ou
          tratados em desconformidade com a lei.
        </LI>
        <LI>Portabilidade dos dados a outro fornecedor de serviço.</LI>
        <LI>Informação sobre com quem compartilhamos seus dados.</LI>
        <LI>
          Revogação do consentimento e eliminação dos dados tratados com base
          nele, a qualquer momento.
        </LI>
      </UL>
      <P>
        Para exercer qualquer um desses direitos,{" "}
        <a
          href={WHATSAPP_URL}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          fale com a gente pelo WhatsApp
        </a>
        . Responderemos dentro de um prazo razoável.
      </P>

      <H2 id="seguranca">Segurança</H2>
      <P>
        Adotamos medidas técnicas e administrativas razoáveis para proteger
        os dados pessoais que tratamos contra acessos não autorizados e
        situações de perda, alteração ou vazamento.
      </P>

      <H2 id="menores-de-idade">Dados de menores de idade</H2>
      <P>
        Este site e os formulários de contato ligados a ele não se destinam a
        menores de 18 anos. Não coletamos intencionalmente dados de crianças
        ou adolescentes.
      </P>

      <H2 id="alteracoes-desta-politica">Alterações desta política</H2>
      <P>
        Podemos atualizar esta política periodicamente, para refletir
        mudanças em nossas práticas ou na legislação. A data no topo da
        página indica a versão mais recente.
      </P>

      <H2 id="contato">Contato</H2>
      <P>
        Dúvidas sobre esta política ou sobre o tratamento dos seus dados
        podem ser enviadas pelo{" "}
        <a
          href={WHATSAPP_URL}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp do Instituto Frauches
        </a>
        .
      </P>
    </main>
  );
}
