import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, UL, LI, Strong, Callout, Figure } from "@/components/article-ui";
import { AUTHOR, WHATSAPP_URL } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "graftis-contagem-ao-vivo-transplante-capilar",
  title: "Graftis: controle de qualidade no transplante capilar",
  description:
    "Conheça o Graftis, sistema próprio do Instituto Frauches para contagem folicular ao vivo e controle de qualidade durante o transplante capilar.",
  publishedAt: "2026-07-26",
  updatedAt: "2026-07-26",
  readingTime: 5,
  category: "Tecnologia",
  author: AUTHOR,
  coverImage: {
    src: "/blog/graftis-contagem-ao-vivo-transplante-capilar/cover.jpg",
    alt: "Tela do Graftis mostrando o resumo geral de folículos extraídos durante um transplante capilar",
  },
};

export default function Article() {
  return (
    <>
      <P>
        Todo transplante capilar depende de um número que o paciente quase nunca
        vê de perto: quantos folículos foram realmente extraídos, quantos fios
        eles representam, e qual a taxa de perda durante a extração. No
        Instituto Frauches, esse número é acompanhado em tempo real por um
        sistema que desenvolvemos internamente, o <Strong>Graftis</Strong>.
        Neste artigo explico o que ele faz e por que criamos uma ferramenta
        própria em vez de depender só de anotação manual.
      </P>

      <H2 id="o-que-e">O que é o Graftis</H2>
      <P>
        O Graftis é um sistema de contagem folicular ao vivo, usado durante a
        cirurgia por toda a equipe ao mesmo tempo: cada auxiliar registra, no
        próprio celular, os folículos que vai extraindo, e esse número aparece
        atualizado instantaneamente para todo mundo, incluindo o médico. Antes
        de existir esse sistema (numa versão anterior chamada "Contagem ao
        Vivo", depois "Foliq"), esse controle era feito em papel ou em planilha,
        com o risco natural de erro de soma e de demora para saber o total
        durante a própria cirurgia.
      </P>
      <H2 id="como-funciona">Como funciona durante a cirurgia</H2>
      <P>
        A extração é dividida em quatro quadrantes (temporal direito, temporal
        esquerdo, occipital direito e occipital esquerdo), a mesma lógica
        usada na avaliação da área doadora. Cada folículo extraído é
        classificado no ato: quantos fios tem, se veio íntegro ou com algum
        grau de transecção. O sistema soma tudo automaticamente e mostra, a
        qualquer momento, o total geral e o total de cada quadrante
        separadamente, sem que ninguém precise parar a cirurgia para fazer
        conta.
      </P>
      <P>
        Isso também vale para as pré-incisões nas áreas receptoras: cada região
        (linha frontal, entradas, topete, coroa, escalpo) tem seu próprio
        contador, e o app soma tudo para comparar depois com o total extraído.
        Essa comparação (pré-incisões abertas contra folículos efetivamente
        implantados) é um dos números que uso para avaliar se o planejamento da
        área receptora bateu com a extração real daquele dia.
      </P>
      <P>
        Cada auxiliar acessa a cirurgia pelo próprio celular, só com o link
        daquele caso específico, sem precisar de cadastro. Quem organiza a
        agenda cirúrgica (no meu caso, eu) tem login próprio e só enxerga as
        próprias cirurgias, nunca as de outro médico que eventualmente use o
        mesmo sistema. Isso permite ter três, quatro celulares registrando ao
        mesmo tempo durante uma extração longa, todos vendo o mesmo total
        atualizado a cada poucos segundos, sem planilha compartilhada nem
        anotação em papel para depois consolidar.
      </P>
      <Figure
        src="/blog/graftis-contagem-ao-vivo-transplante-capilar/pre-incisoes.png"
        alt="Tela do Graftis mostrando as pré-incisões por área da região receptora, com contagem de unidades foliculares de 1, 2 e 3 fios"
        width={900}
        height={1000}
        caption="Cada área da região receptora tem seu próprio contador de pré-incisões, incluindo a distribuição por número de fios."
      />

      <H2 id="comparacao-mamba">Comparando a contagem manual com o aparelho</H2>
      <P>
        Além da contagem manual da equipe, uso um densitômetro (Mamba) que dá
        uma leitura própria da extração. O Graftis registra essa leitura por
        quadrante e calcula, sozinho, a diferença entre o que o aparelho leu e
        o que a equipe contou à mão naquele mesmo quadrante. Divergência grande
        entre os dois números é um sinal de alerta que vale investigar ainda
        durante a cirurgia, não só depois que ela termina.
      </P>
      <P>
        O sistema também calcula o ritmo de extração em folículos por hora, de
        duas formas: pela contagem manual e pela leitura do aparelho. Como
        cada médico extrai numa ordem diferente de quadrantes, o Graftis usa o
        horário real de cada marcação para descobrir sozinho qual quadrante
        veio antes de qual, em vez de assumir uma ordem fixa.
      </P>
      <Figure
        src="/blog/graftis-contagem-ao-vivo-transplante-capilar/quadrante-mamba.png"
        alt="Tela do Graftis comparando a leitura do densitômetro Mamba com a contagem manual de um quadrante, mostrando a diferença percentual"
        width={900}
        height={1000}
        caption="Comparação, quadrante a quadrante, entre a leitura do densitômetro e a contagem manual da equipe."
      />

      <H2 id="relatorio-final">Relatório final e histórico de cirurgias</H2>
      <P>
        Ao finalizar, a cirurgia inteira fica resumida numa única tela: tempo
        de extração, tempo de pré-incisões, tempo total do procedimento,
        folículos por categoria, taxas de transecção e a diferença final entre
        pré-incisões e extração. Esse resumo pode ser salvo como PDF e faz
        parte do prontuário daquele caso.
      </P>
      <P>
        Como cada cirurgia fica registrada, também consigo acompanhar
        indicadores ao longo do tempo, comparando o volume médio de folículos
        por cirurgia, o índice de fios por folículo e as taxas de transecção
        entre casos. Isso ajuda a manter um padrão de qualidade consistente,
        em vez de avaliar cada cirurgia isoladamente.
      </P>
      <Figure
        src="/blog/graftis-contagem-ao-vivo-transplante-capilar/resumo-final.png"
        alt="Tela de resumo final de uma cirurgia no Graftis, com tempos, resumo geral e distribuição de folículos por categoria"
        width={900}
        height={922}
        caption="Resumo final da cirurgia: tempos, resumo geral e distribuição de folículos por categoria, tudo numa tela só."
      />

      <P>
        O nome do sistema mudou ao longo do tempo (de "Contagem ao Vivo" para
        "Foliq", e agora Graftis), mas a lógica interna é a mesma desde o
        início: qualquer correção feita durante a cirurgia, como reabrir um
        quadrante já fechado para ajustar um número, recalcula sozinha todos
        os totais que dependem dele, sem precisar refazer conta nenhuma na
        mão.
      </P>

      <H2 id="por-que-importa">Por que isso importa para você</H2>
      <P>
        Esse nível de controle não muda o resultado biológico do transplante,
        que continua dependendo da sua área doadora, da técnica cirúrgica e da
        cicatrização individual de cada paciente, e varia de pessoa para
        pessoa. O que ele muda é a base de decisão durante a cirurgia: com
        números conferidos em tempo real, dá para ajustar a estratégia de
        extração e distribuição no mesmo dia, em vez de descobrir uma
        divergência só na revisão do dia seguinte.
      </P>
      <UL>
        <LI>
          <Strong>Menos erro de soma manual</Strong>, porque a conta é sempre
          automática.
        </LI>
        <LI>
          <Strong>Auditoria cruzada em tempo real</Strong> entre a contagem da
          equipe e a leitura do aparelho.
        </LI>
        <LI>
          <Strong>Comparação objetiva</Strong> entre o planejamento da área
          receptora e o que foi de fato extraído.
        </LI>
        <LI>
          <Strong>Histórico organizado</Strong> de cada cirurgia, útil tanto
          para o seu acompanhamento quanto para manter o padrão de qualidade
          da equipe.
        </LI>
      </UL>
      <P>
        Se você é médico e quer entender melhor como o Graftis funciona na
        prática, também posso mostrar o sistema numa conversa.{" "}
        <a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer">
          <Strong>Fale comigo pelo WhatsApp</Strong>
        </a>
        .
      </P>

      <Callout>
        Este conteúdo tem caráter educativo e não substitui uma consulta
        médica. O Graftis é uma ferramenta interna de organização e controle
        de qualidade da equipe cirúrgica; o resultado do transplante capilar
        continua dependendo de avaliação individual, técnica cirúrgica e
        biologia de cada paciente.
      </Callout>

      <P>
        Quer entender como esse controle se aplica ao seu caso?{" "}
        <a href={WHATSAPP_URL} className="underline" target="_blank" rel="noopener noreferrer">
          <Strong>Agende uma avaliação pelo WhatsApp</Strong>
        </a>
        .
      </P>
      <P>
        Este artigo faz parte do nosso{" "}
        <Link href="/blog/guia-transplante-capilar" className="underline">
          guia completo do transplante capilar
        </Link>
        .
      </P>
    </>
  );
}
