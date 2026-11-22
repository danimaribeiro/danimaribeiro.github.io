// Texto en español para las páginas de Monge Docs. Misma estructura que en.mjs.
// Los nombres de los botones (Iniciar grabación, Detener, Difuminar) son los de la extensión.
import { checkedOn } from '../facts.mjs';

export default (f) => {
  const { scribe, tango } = f.competitors;
  const p = f.pricing;
  const open = f.openSource.live;

  const us = {
    price: `Gratis. Pro cuesta US$ ${p.proPerMonth} al mes.`,
    exportFile: 'Gratis y sin cuenta: Markdown con imágenes o PDF. El botón Copiar también pega en Notion, Google Docs o Confluence.',
    freePlan: `Grabaciones y guías ilimitadas en tu computadora. ${p.freeShareLinks} enlaces para compartir.`,
    storage: 'En tu navegador. Una guía solo se sube cuando publicas un enlace para compartirla.',
    screenshots: 'Gratis: difuminar, recuadro, flecha, globo, recortar.',
    ai: `Gratis con tu propia clave, o ${p.freeHostedGuidesPerMonth} guías al mes con la nuestra. Ilimitado en Pro.`,
    ownKey: 'Sí: Gemini u OpenAI.',
    languages: 'La extensión y las guías que escribe funcionan en español, inglés o portugués, en todos los planes.',
    desktop: 'No. Monge Docs graba páginas web en Chrome.',
    teams: 'No hay espacio de trabajo compartido. Cada persona tiene su propia biblioteca.',
    source: `Público, bajo la licencia ${f.openSource.licence}.`,
  };
  const pickUs = (first) => [
    first,
    'Quieres la guía en un archivo Markdown o PDF sin pagar por ello.',
    'Prefieres que tus capturas de pantalla no queden en el servidor de otra empresa.',
    'Escribes guías en español o portugués.',
    open && 'Quieres leer el código que maneja tus capturas de pantalla.',
  ];
  const checked = (c, key) =>
    `Los precios y límites de ${c.name} se leyeron el ${checkedOn(key, 'es')}, en su <a href="${c.pricingUrl}">página de precios</a> y en su <a href="${c.helpUrl}">centro de ayuda</a>, ambos en inglés. Pueden haber cambiado desde entonces. Compruébalos allí antes de decidir.`;

  return {
    langName: 'Español',
    skip: 'Ir al contenido',
    nav: { privacy: 'Privacidad', install: 'Añadir a Chrome', languages: 'Idioma' },

    landing: {
      title: 'Monge Docs: guías paso a paso a partir de tus clics',
      description:
        'Monge Docs es una extensión de Chrome que graba una tarea mientras la haces y escribe la guía, con una captura de pantalla para cada paso. Exportar es gratis y las grabaciones se quedan en tu navegador.',
      h1: ['Graba una tarea una vez.', 'Obtén la guía paso a paso.'],
      lede: 'Monge Docs es una extensión de Chrome. Haz la tarea en cualquier sitio web mientras graba, pulsa Detener, y escribe la guía por ti, con una captura de pantalla para cada paso.',
      install: 'Añadir a Chrome',
      installNote: 'Gratis. No necesitas una cuenta para grabar, editar ni exportar.',
      seeGuide: 'Mira una guía que hizo',
      clipLabel: 'Grabación de pantalla: se graba una tarea de cuatro pasos en una página de ejemplo, se pulsa Detener y aparece la guía escrita.',
      clipCaption: 'Grabado en la página de ejemplo que viene con la extensión.',

      howTitle: 'Cómo funciona',
      steps: [
        {
          title: 'Graba la tarea',
          body: 'Abre el sitio que quieres documentar, haz clic en el icono de Monge Docs y pulsa Iniciar grabación. Los clics, el texto que escribes, las selecciones y los cambios de página se convierten en pasos. Cada uno lleva una captura de pantalla tomada justo antes del clic.',
          alt: 'Una aplicación de ejemplo mientras se graba, con el grabador de Monge Docs a la derecha mostrando los pasos capturados hasta el momento.',
        },
        {
          title: 'Pulsa Detener',
          body: 'La guía se escribe ante tus ojos: un título y, para cada paso, un encabezado y una o dos frases. No rellenas ningún formulario antes. Escribe en español, inglés o portugués.',
          alt: 'El editor de Monge Docs con la guía terminada: un título, pasos numerados y una captura de pantalla debajo de cada uno.',
        },
        {
          title: 'Ajústala y compártela',
          body: 'Reescribe cualquier frase. Difumina o marca partes de una captura de pantalla. Después copia la guía en Notion o Google Docs, expórtala en Markdown o PDF, o publica un enlace que cualquiera puede abrir.',
          alt: 'El editor de capturas de pantalla, con una parte de la imagen marcada y otra difuminada.',
        },
      ],

      guideTitle: 'Una guía que hizo',
      guideIntro: 'Esta es la guía de la grabación de arriba, como la escribió Monge Docs. No se editó nada después.',
      guideShared: 'Abrirla como página compartida',

      localTitle: 'Tus grabaciones se quedan en tu navegador',
      localBody: [
        'Las grabaciones, las capturas de pantalla y las guías se guardan en tu computadora, no en nuestros servidores. Solo salen de ella cuando tú lo pides: para escribir una guía con IA, para publicar un enlace para compartir o para generar un video.',
        'Puedes usar tu propia clave de Gemini u OpenAI. En ese caso, la petición de IA va directo de tu navegador al proveedor y nunca pasa por nosotros.',
        'La <a href="{privacy}">política de privacidad</a> (en inglés) detalla exactamente qué se envía, y cuándo.',
      ],

      alsoTitle: 'También incluye',
      also: [
        ['Tu marca en cada guía', 'Define tu logo, tus colores y tu fuente una vez. Se aplican a la guía en pantalla, al PDF y a la página compartida.'],
        ['Un video narrado de la misma grabación', 'Convierte los pasos en un video con narración, sin volver a grabar la pantalla.'],
        ['Tres idiomas', 'La extensión y las guías que escribe funcionan en español, inglés y portugués.'],
      ],

      pricingTitle: 'Precios',
      pricingIntro: 'Grabar, editar y exportar es gratis y lo seguirá siendo. Pro es para quien prefiere no ocuparse de una clave de IA.',
      free: {
        name: 'Gratis',
        price: 'US$ 0',
        items: [
          'Grabación, edición y exportación ilimitadas: Markdown, PDF, copiar y pegar',
          'Guías con IA ilimitadas con tu propia clave de Gemini u OpenAI',
          `O ${p.freeHostedGuidesPerMonth} guías con IA al mes con nuestra IA, sin clave`,
          `${p.freeShareLinks} enlaces para compartir`,
        ],
      },
      pro: {
        name: 'Pro',
        price: `US$ ${p.proPerMonth}`,
        per: 'al mes',
        items: ['Todo lo del plan Gratis', 'Guías con IA ilimitadas, sin clave de la que ocuparte', 'Enlaces para compartir ilimitados'],
        how: 'Te suscribes desde la propia extensión, cuando lo necesites.',
      },

      openSourceTitle: 'Código abierto',
      openSourceBody: `La extensión y su servidor son públicos, bajo la licencia ${f.openSource.licence}. Puedes leer qué hace con tus capturas de pantalla, o ejecutarlo todo por tu cuenta.`,
      openSourceLink: 'Leer el código en GitHub',

      compareTitle: '¿Comparando herramientas?',
      compareIntro: 'Páginas lado a lado, con la fecha en que se comprobaron los precios de la otra herramienta.',
      compareLinks: { scribe: 'Monge Docs o Scribe', tango: 'Monge Docs o Tango' },

      closingTitle: 'Pruébalo en tu próximo tutorial',
      closingBody: 'Instalarlo lleva un minuto, y la primera vez la extensión te guía por una grabación de ejemplo.',
    },

    compareCommon: {
      tableTitle: 'Lado a lado',
      pickTitle: 'Cuál te conviene',
      closingTitle: 'Compruébalo tú mismo',
      closingBody: 'Monge Docs es gratis de instalar. Grabar, editar y exportar no requiere cuenta.',
      back: 'Qué hace Monge Docs',
      marks: '{name} es una marca registrada de su titular. Monge Docs no tiene relación con ella.',
    },

    compare: {
      scribe: {
        name: scribe.name,
        title: open ? 'Monge Docs o Scribe: una alternativa de código abierto, con exportación gratis' : 'Monge Docs o Scribe: exportación gratis, grabaciones en tu navegador',
        description: `Cómo se compara Monge Docs con Scribe para crear guías paso a paso: precio, exportación gratis, dónde se guardan las grabaciones, edición de capturas de pantalla e idiomas. Precios de Scribe comprobados el ${checkedOn('scribe', 'es')}.`,
        h1: 'Monge Docs o Scribe',
        lede: 'Los dos graban lo que haces en el navegador y lo convierten en una guía paso a paso con capturas de pantalla. Scribe es el producto más grande, pensado para equipos y empresas. Monge Docs es una extensión pequeña para quien quiere la guía en un archivo que se queda contigo.',
        rows: [
          ['Precio', us.price, `El plan Basic es gratis. Pro Personal cuesta US$ ${scribe.proPersonal.monthly} por usuario al mes, o US$ ${scribe.proPersonal.yearly} con pago anual. Pro Team cuesta US$ ${scribe.proTeam.monthly} por usuario al mes, o US$ ${scribe.proTeam.yearly} con pago anual, a partir de ${scribe.proTeam.minSeats} usuarios.`],
          ['Exportar a un archivo', us.exportFile, 'En los planes Pro: PDF, HTML, Markdown, Word. El plan gratis comparte por enlace y por inserción.'],
          ['En el plan gratis', us.freePlan, `Hasta ${scribe.freeSharedGuides} guías compartidas a la vez.`],
          ['Dónde se guardan tus grabaciones', us.storage, 'En la nube de Scribe.'],
          ['Difuminar y marcar capturas de pantalla', us.screenshots, 'En los planes Pro.'],
          ['Texto escrito por IA', us.ai, 'Los pasos se escriben automáticamente en todos los planes. Reescribir con IA es de los planes Pro.'],
          ['Tu propia clave de IA', us.ownKey, 'No se ofrece, según el centro de ayuda de Scribe.'],
          ['Idiomas', us.languages, 'La aplicación está en inglés. Traducir guías es una función del plan Enterprise.'],
          ['Aplicaciones de escritorio', us.desktop, 'Sí, en los planes Pro.'],
          ['Equipos', us.teams, 'Sí. Scribe está organizado en torno a equipos.'],
          open && ['Código fuente', us.source, 'No se publica.'],
        ],
        checked: checked(scribe, 'scribe'),
        pickThem: {
          title: 'Scribe, si',
          items: [
            'Varias personas necesitan trabajar en las mismas guías, en un mismo espacio.',
            'Necesitas grabar aplicaciones de escritorio, no solo páginas web.',
            `Quieres el producto establecido: su extensión para Chrome tiene ${scribe.storeUsers / 1e6} millones de usuarios.`,
          ],
        },
        pickUs: {
          title: 'Monge Docs, si',
          items: pickUs('Trabajas por tu cuenta, o repartes las guías como archivos y enlaces.'),
        },
      },

      tango: {
        name: tango.name,
        title: open ? 'Monge Docs o Tango: una alternativa de código abierto, con guías ilimitadas' : 'Monge Docs o Tango: guías ilimitadas y exportación gratis',
        description: `Cómo se compara Monge Docs con Tango para crear guías paso a paso: precio, límites del plan gratis, exportación, dónde se guardan las grabaciones e idiomas. Precios de Tango comprobados el ${checkedOn('tango', 'es')}.`,
        h1: 'Monge Docs o Tango',
        lede: 'Los dos graban lo que haces en el navegador y lo convierten en una guía paso a paso con capturas de pantalla. Tango está pensado para equipos, con orientación en la propia pantalla además de las guías. Monge Docs es una extensión pequeña para quien quiere la guía en un archivo que se queda contigo.',
        rows: [
          ['Precio', us.price, `Hay un plan gratis. Pro cuesta US$ ${tango.proSmall.monthly} por usuario al mes, o US$ ${tango.proSmall.yearly} con pago anual, para uno o dos usuarios. Para ${tango.proTeam.minUsers} o más cuesta US$ ${tango.proTeam.monthly}, o US$ ${tango.proTeam.yearly} con pago anual.`],
          ['Exportar a un archivo', us.exportFile, 'Exportar en PDF, HTML y Markdown es de Pro. El plan gratis comparte por enlace y por inserción, y copia la guía como HTML.'],
          ['En el plan gratis', us.freePlan, `${tango.freeWorkflows} workflows en la biblioteca del equipo y hasta ${tango.freeUsers} usuarios. Puedes seguir capturando borradores más allá de eso.`],
          ['Dónde se guardan tus grabaciones', us.storage, 'En la nube de Tango.'],
          ['Difuminar y marcar capturas de pantalla', us.screenshots, 'Flechas, formas y texto en todos los planes. Difuminar es de Pro.'],
          ['Texto escrito por IA', us.ai, 'Las descripciones de los pasos se escriben automáticamente en todos los planes. Otros contenidos generados por IA son de Pro.'],
          ['Tu propia clave de IA', us.ownKey, 'No se ofrece, según el centro de ayuda de Tango.'],
          ['Idiomas', us.languages, 'La aplicación y los pasos que escribe están en inglés. Traducir workflows es una función del plan Enterprise.'],
          ['Aplicaciones de escritorio', us.desktop, 'Sí, en Pro, para Mac y Windows.'],
          ['Equipos', us.teams, `Sí: un espacio de trabajo compartido, con hasta ${tango.freeUsers} usuarios en el plan gratis.`],
          open && ['Código fuente', us.source, 'No se publica.'],
        ],
        checked: checked(tango, 'tango'),
        pickThem: {
          title: 'Tango, si',
          items: [
            'Varias personas necesitan trabajar en las mismas guías, en un mismo espacio.',
            'Quieres una orientación que lleve a la gente por la tarea en la propia página.',
            'Necesitas grabar aplicaciones de escritorio, no solo páginas web.',
          ],
        },
        pickUs: {
          title: 'Monge Docs, si',
          items: pickUs(`Vas a hacer más de ${tango.freeWorkflows} guías y prefieres no pagar por usuario.`),
        },
      },
    },

    footer: {
      made: 'Monge Docs es obra de <a href="/">Danimar Ribeiro</a>.',
      contact: 'Dudas o problemas: <a href="mailto:{email}">{email}</a>.',
      home: 'Monge Docs',
      privacy: 'Política de privacidad (en inglés)',
    },
  };
};
