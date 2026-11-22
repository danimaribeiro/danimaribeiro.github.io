// Texto em português do Brasil para as páginas do Monge Docs. Mesma estrutura de en.mjs.
// Os nomes dos botões (Iniciar gravação, Parar, Desfocar) são os da própria extensão.
import { checkedOn } from '../facts.mjs';

export default (f) => {
  const { scribe, tango } = f.competitors;
  const p = f.pricing;
  const open = f.openSource.live;

  const us = {
    price: `Grátis. O Pro custa US$ ${p.proPerMonth} por mês.`,
    exportFile: 'Grátis e sem conta: Markdown com imagens ou PDF. O botão Copiar também cola no Notion, no Google Docs ou no Confluence.',
    freePlan: `Gravações e guias ilimitados no seu computador. ${p.freeShareLinks} links de compartilhamento.`,
    storage: 'No seu navegador. Um guia só é enviado quando você publica um link de compartilhamento dele.',
    screenshots: 'Grátis: desfocar, caixa, seta, balão, recortar.',
    ai: `Grátis com a sua própria chave, ou ${p.freeHostedGuidesPerMonth} guias por mês na nossa. Ilimitado no Pro.`,
    ownKey: 'Sim: Gemini ou OpenAI.',
    languages: 'A extensão e os guias que ela escreve funcionam em português, inglês ou espanhol, em todos os planos.',
    desktop: 'Não. O Monge Docs grava páginas da web no Chrome.',
    teams: 'Não há espaço de trabalho compartilhado. Cada pessoa tem a sua biblioteca.',
    source: `Público, sob a licença ${f.openSource.licence}.`,
  };
  const pickUs = (first) => [
    first,
    'Você quer o guia em um arquivo Markdown ou PDF sem pagar por isso.',
    'Você prefere que as suas capturas de tela não fiquem no servidor de outra empresa.',
    'Você escreve guias em português ou espanhol.',
    open && 'Você quer ler o código que lida com as suas capturas de tela.',
  ];
  const checked = (c, key) =>
    `Os preços e limites do ${c.name} foram lidos em ${checkedOn(key, 'pt-BR')}, na <a href="${c.pricingUrl}">página de preços</a> e na <a href="${c.helpUrl}">central de ajuda</a> do produto, ambas em inglês. Podem ter mudado desde então. Confira lá antes de decidir.`;

  return {
    langName: 'Português',
    skip: 'Ir para o conteúdo',
    nav: { privacy: 'Privacidade', install: 'Usar no Chrome', languages: 'Idioma' },

    landing: {
      title: 'Monge Docs: guias passo a passo a partir dos seus cliques',
      description:
        'O Monge Docs é uma extensão do Chrome que grava uma tarefa enquanto você a faz e escreve o guia, com uma captura de tela para cada passo. Exportar é grátis e as gravações ficam no seu navegador.',
      h1: ['Grave uma tarefa uma vez.', 'Receba o guia passo a passo.'],
      lede: 'O Monge Docs é uma extensão do Chrome. Faça a tarefa em qualquer site enquanto ele grava, clique em Parar, e ele escreve o guia para você, com uma captura de tela para cada passo.',
      install: 'Usar no Chrome',
      installNote: 'Grátis. Você não precisa de conta para gravar, editar ou exportar.',
      seeGuide: 'Veja um guia que ele fez',
      clipLabel: 'Gravação de tela: uma tarefa de quatro passos é gravada em uma página de exemplo, o botão Parar é clicado e o guia escrito aparece.',
      clipCaption: 'Gravado na página de exemplo que vem com a extensão.',

      howTitle: 'Como funciona',
      steps: [
        {
          title: 'Grave a tarefa',
          body: 'Abra o site que você quer documentar, clique no ícone do Monge Docs e depois em Iniciar gravação. Cliques, textos digitados, seleções e mudanças de página viram passos. Cada um recebe uma captura de tela feita logo antes do clique.',
          alt: 'Um aplicativo de exemplo sendo gravado, com o gravador do Monge Docs à direita listando os passos capturados até ali.',
        },
        {
          title: 'Clique em Parar',
          body: 'O guia é escrito na sua frente: um título e, para cada passo, um subtítulo e uma ou duas frases. Você não preenche nenhum formulário antes. Ele escreve em português, inglês ou espanhol.',
          alt: 'O editor do Monge Docs com o guia pronto: um título, passos numerados e uma captura de tela abaixo de cada um.',
        },
        {
          title: 'Ajuste e compartilhe',
          body: 'Reescreva qualquer frase. Desfoque ou marque partes de uma captura de tela. Depois copie o guia para o Notion ou o Google Docs, exporte em Markdown ou PDF, ou publique um link que qualquer pessoa pode abrir.',
          alt: 'O editor de capturas de tela, com uma parte da imagem marcada e outra desfocada.',
        },
      ],

      guideTitle: 'Um guia que ele fez',
      guideIntro: 'Este é o guia da gravação acima, como o Monge Docs escreveu. Nada foi editado depois.',
      guideShared: 'Abrir como página compartilhada',

      localTitle: 'Suas gravações ficam no seu navegador',
      localBody: [
        'Gravações, capturas de tela e guias ficam guardados no seu computador, não nos nossos servidores. Só saem dele quando você pede: para escrever um guia com IA, para publicar um link de compartilhamento ou para gerar um vídeo.',
        'Você pode usar a sua própria chave do Gemini ou da OpenAI. Nesse caso, o pedido de IA vai direto do seu navegador para o provedor e nunca passa por nós.',
        'A <a href="{privacy}">política de privacidade</a> (em inglês) lista exatamente o que é enviado, e quando.',
      ],

      alsoTitle: 'Também vem junto',
      also: [
        ['Sua marca em todos os guias', 'Defina logo, cores e fonte uma vez. Eles valem para o guia na tela, o PDF e a página compartilhada.'],
        ['Um vídeo narrado da mesma gravação', 'Transforme os passos em um vídeo com narração, sem gravar a tela de novo.'],
        ['Três idiomas', 'A extensão e os guias que ela escreve funcionam em português, inglês e espanhol.'],
      ],

      pricingTitle: 'Preços',
      pricingIntro: 'Gravar, editar e exportar é grátis e vai continuar sendo. O Pro é para quem prefere não cuidar de uma chave de IA.',
      free: {
        name: 'Grátis',
        price: 'US$ 0',
        items: [
          'Gravação, edição e exportação ilimitadas: Markdown, PDF, copiar e colar',
          'Guias com IA ilimitados usando a sua chave do Gemini ou da OpenAI',
          `Ou ${p.freeHostedGuidesPerMonth} guias com IA por mês na nossa IA, sem chave`,
          `${p.freeShareLinks} links de compartilhamento`,
        ],
      },
      pro: {
        name: 'Pro',
        price: `US$ ${p.proPerMonth}`,
        per: 'por mês',
        items: ['Tudo do plano Grátis', 'Guias com IA ilimitados, sem chave para cuidar', 'Links de compartilhamento ilimitados'],
        how: 'Você assina de dentro da extensão, quando precisar.',
      },

      openSourceTitle: 'Código aberto',
      openSourceBody: `A extensão e o servidor são públicos, sob a licença ${f.openSource.licence}. Você pode ler o que ela faz com as suas capturas de tela, ou rodar tudo por conta própria.`,
      openSourceLink: 'Ler o código no GitHub',

      compareTitle: 'Comparando ferramentas?',
      compareIntro: 'Páginas lado a lado, com a data em que os preços da outra ferramenta foram conferidos.',
      compareLinks: { scribe: 'Monge Docs ou Scribe', tango: 'Monge Docs ou Tango' },

      closingTitle: 'Experimente no seu próximo tutorial',
      closingBody: 'Instalar leva um minuto, e na primeira vez a extensão conduz você por uma gravação de exemplo.',
    },

    compareCommon: {
      tableTitle: 'Lado a lado',
      pickTitle: 'Qual combina com você',
      closingTitle: 'Veja você mesmo',
      closingBody: 'O Monge Docs é grátis para instalar. Gravar, editar e exportar não exige conta.',
      back: 'O que o Monge Docs faz',
      marks: '{name} é marca registrada do seu titular. O Monge Docs não tem vínculo com ela.',
    },

    compare: {
      scribe: {
        name: scribe.name,
        title: open ? 'Monge Docs ou Scribe: uma alternativa de código aberto, com exportação grátis' : 'Monge Docs ou Scribe: exportação grátis, gravações no seu navegador',
        description: `Como o Monge Docs se compara ao Scribe para criar guias passo a passo: preço, exportação grátis, onde as gravações ficam, edição de capturas de tela e idiomas. Preços do Scribe conferidos em ${checkedOn('scribe', 'pt-BR')}.`,
        h1: 'Monge Docs ou Scribe',
        lede: 'Os dois gravam o que você faz no navegador e transformam em um guia passo a passo com capturas de tela. O Scribe é o produto maior, feito para equipes e empresas. O Monge Docs é uma extensão pequena para quem quer o guia em um arquivo que fica com você.',
        rows: [
          ['Preço', us.price, `O plano Basic é grátis. O Pro Personal custa US$ ${scribe.proPersonal.monthly} por usuário por mês, ou US$ ${scribe.proPersonal.yearly} no plano anual. O Pro Team custa US$ ${scribe.proTeam.monthly} por usuário por mês, ou US$ ${scribe.proTeam.yearly} no plano anual, a partir de ${scribe.proTeam.minSeats} usuários.`],
          ['Exportar para arquivo', us.exportFile, 'Nos planos Pro: PDF, HTML, Markdown, Word. O plano grátis compartilha por link e por incorporação.'],
          ['No plano grátis', us.freePlan, `Até ${scribe.freeSharedGuides} guias compartilhados ao mesmo tempo.`],
          ['Onde as gravações ficam', us.storage, 'Na nuvem do Scribe.'],
          ['Desfocar e marcar capturas de tela', us.screenshots, 'Nos planos Pro.'],
          ['Texto escrito por IA', us.ai, 'Os passos são escritos automaticamente em todos os planos. Reescrever com IA é dos planos Pro.'],
          ['Sua própria chave de IA', us.ownKey, 'Não é oferecido, pelo que diz a central de ajuda do Scribe.'],
          ['Idiomas', us.languages, 'O aplicativo é em inglês. Traduzir guias é um recurso do plano Enterprise.'],
          ['Aplicativos de desktop', us.desktop, 'Sim, nos planos Pro.'],
          ['Equipes', us.teams, 'Sim. O Scribe é organizado em torno de equipes.'],
          open && ['Código-fonte', us.source, 'Não é publicado.'],
        ],
        checked: checked(scribe, 'scribe'),
        pickThem: {
          title: 'Scribe, se',
          items: [
            'Várias pessoas precisam trabalhar nos mesmos guias, em um mesmo espaço.',
            'Você precisa gravar aplicativos de desktop, não só páginas da web.',
            `Você quer o produto estabelecido: a extensão dele para o Chrome tem ${scribe.storeUsers / 1e6} milhões de usuários.`,
          ],
        },
        pickUs: {
          title: 'Monge Docs, se',
          items: pickUs('Você trabalha sozinho, ou distribui os guias como arquivos e links.'),
        },
      },

      tango: {
        name: tango.name,
        title: open ? 'Monge Docs ou Tango: uma alternativa de código aberto, com guias ilimitados' : 'Monge Docs ou Tango: guias ilimitados e exportação grátis',
        description: `Como o Monge Docs se compara ao Tango para criar guias passo a passo: preço, limites do plano grátis, exportação, onde as gravações ficam e idiomas. Preços do Tango conferidos em ${checkedOn('tango', 'pt-BR')}.`,
        h1: 'Monge Docs ou Tango',
        lede: 'Os dois gravam o que você faz no navegador e transformam em um guia passo a passo com capturas de tela. O Tango é feito para equipes, com orientação na própria tela além dos guias. O Monge Docs é uma extensão pequena para quem quer o guia em um arquivo que fica com você.',
        rows: [
          ['Preço', us.price, `Há um plano grátis. O Pro custa US$ ${tango.proSmall.monthly} por usuário por mês, ou US$ ${tango.proSmall.yearly} no plano anual, para um ou dois usuários. Para ${tango.proTeam.minUsers} ou mais, custa US$ ${tango.proTeam.monthly}, ou US$ ${tango.proTeam.yearly} no plano anual.`],
          ['Exportar para arquivo', us.exportFile, 'Exportar em PDF, HTML e Markdown é do Pro. O plano grátis compartilha por link e por incorporação, e copia o guia como HTML.'],
          ['No plano grátis', us.freePlan, `${tango.freeWorkflows} workflows na biblioteca da equipe e até ${tango.freeUsers} usuários. Dá para continuar capturando rascunhos além disso.`],
          ['Onde as gravações ficam', us.storage, 'Na nuvem do Tango.'],
          ['Desfocar e marcar capturas de tela', us.screenshots, 'Setas, formas e texto em todos os planos. Desfocar é do Pro.'],
          ['Texto escrito por IA', us.ai, 'As descrições dos passos são escritas automaticamente em todos os planos. Outros conteúdos gerados por IA são do Pro.'],
          ['Sua própria chave de IA', us.ownKey, 'Não é oferecido, pelo que diz a central de ajuda do Tango.'],
          ['Idiomas', us.languages, 'O aplicativo e os passos que ele escreve são em inglês. Traduzir workflows é um recurso do plano Enterprise.'],
          ['Aplicativos de desktop', us.desktop, 'Sim, no Pro, para Mac e Windows.'],
          ['Equipes', us.teams, `Sim: um espaço de trabalho compartilhado, com até ${tango.freeUsers} usuários no plano grátis.`],
          open && ['Código-fonte', us.source, 'Não é publicado.'],
        ],
        checked: checked(tango, 'tango'),
        pickThem: {
          title: 'Tango, se',
          items: [
            'Várias pessoas precisam trabalhar nos mesmos guias, em um mesmo espaço.',
            'Você quer uma orientação que conduza as pessoas pela tarefa na própria página.',
            'Você precisa gravar aplicativos de desktop, não só páginas da web.',
          ],
        },
        pickUs: {
          title: 'Monge Docs, se',
          items: pickUs(`Você vai fazer mais de ${tango.freeWorkflows} guias e prefere não pagar por usuário.`),
        },
      },
    },

    footer: {
      made: 'O Monge Docs é feito por <a href="/">Danimar Ribeiro</a>.',
      contact: 'Dúvidas ou problemas: <a href="mailto:{email}">{email}</a>.',
      home: 'Monge Docs',
      privacy: 'Política de privacidade (em inglês)',
    },
  };
};
