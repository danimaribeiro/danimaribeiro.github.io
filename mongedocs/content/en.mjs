// English copy for the Monge Docs pages. Inline HTML is allowed: this text is ours.
// Product words (Start Recording, Stop, Blur) match the extension's own labels.
import { checkedOn } from '../facts.mjs';

export default (f) => {
  const { scribe, tango } = f.competitors;
  const p = f.pricing;
  const open = f.openSource.live;

  // The Monge Docs column is the same on both comparison pages.
  const us = {
    price: `Free. Pro is $${p.proPerMonth} a month.`,
    exportFile: 'Free, with no account: Markdown with images, or PDF. Copy also pastes into Notion, Google Docs, or Confluence.',
    freePlan: `Unlimited recordings and guides on your computer. ${p.freeShareLinks} share links.`,
    storage: 'In your browser. A guide is uploaded only when you publish a share link for it.',
    screenshots: 'Free: blur, box, arrow, callout, crop.',
    ai: `Free with your own key, or ${p.freeHostedGuidesPerMonth} guides a month on ours. Unlimited on Pro.`,
    ownKey: 'Yes: Gemini or OpenAI.',
    languages: 'The extension and the guides it writes are in English, Portuguese, or Spanish, on every plan.',
    desktop: 'No. Monge Docs records web pages in Chrome.',
    teams: 'No shared workspace. Each person has their own library.',
    source: `Public, under ${f.openSource.licence}.`,
  };
  const pickUs = (first) => [
    first,
    'You want the guide as a Markdown file or a PDF without paying for it.',
    'You would rather your screenshots stayed off someone else\'s server.',
    'You write guides in Portuguese or Spanish.',
    open && 'You want to read the code that handles your screenshots.',
  ];
  const checked = (c, key) =>
    `${c.name}'s prices and limits were read on ${checkedOn(key, 'en-GB')}, on <a href="${c.pricingUrl}">its pricing page</a> and in <a href="${c.helpUrl}">its help centre</a>. They may have changed since. Check there before you decide.`;

  return {
    langName: 'English',
    skip: 'Skip to content',
    nav: { privacy: 'Privacy', install: 'Add to Chrome', languages: 'Language' },

    landing: {
      title: 'Monge Docs: step-by-step guides from your clicks',
      description:
        'Monge Docs is a Chrome extension that records a task as you do it and writes the how-to guide, with a screenshot for every step. Export is free and recordings stay in your browser.',
      h1: ['Record a task once.', 'Get the step-by-step guide.'],
      lede: 'Monge Docs is a Chrome extension. Do the task in any website while it records, press Stop, and it writes the how-to guide for you, with a screenshot for every step.',
      install: 'Add to Chrome',
      installNote: 'Free. You need no account to record, edit, or export.',
      seeGuide: 'See a guide it made',
      clipLabel: 'Screen recording: a four-step task is recorded on a practice page, Stop is pressed, and the written guide appears.',
      clipCaption: 'Recorded on the practice page that comes with the extension.',

      howTitle: 'How it works',
      steps: [
        {
          title: 'Record the task',
          body: 'Open the site you want to document, click the Monge Docs icon, and press Start Recording. Clicks, typing, selections, and page changes become steps. Each one gets a screenshot taken just before you click.',
          alt: 'A practice web app being recorded, with the Monge Docs recorder on the right listing the steps captured so far.',
        },
        {
          title: 'Press Stop',
          body: 'The guide is written while you watch: a title, then a heading and a sentence or two for each step. You fill in no form first. It writes in English, Portuguese, or Spanish.',
          alt: 'The Monge Docs editor showing the finished guide: a title, numbered steps, and a screenshot under each one.',
        },
        {
          title: 'Fix it, then share it',
          body: 'Type over any sentence. Blur or mark up parts of a screenshot. Then copy the guide into Notion or Google Docs, export it as Markdown or PDF, or publish a link anyone can open.',
          alt: 'The screenshot editor, with one part of the screenshot marked and another blurred.',
        },
      ],

      guideTitle: 'A guide it made',
      guideIntro: 'This is the guide from the recording above, exactly as Monge Docs wrote it. Nothing was edited afterwards.',
      guideShared: 'Open it as a shared page',

      localTitle: 'Your recordings stay in your browser',
      localBody: [
        'Recordings, screenshots, and guides are stored on your computer, not on our servers. They leave it only when you ask: to write a guide with AI, to publish a share link, or to render a video.',
        'You can use your own Gemini or OpenAI key. Then the AI request goes straight from your browser to that provider and never passes through us.',
        'The <a href="{privacy}">privacy policy</a> lists exactly what is sent, and when.',
      ],

      alsoTitle: 'Also in the box',
      also: [
        ['Your brand on every guide', 'Set your logo, colours, and font once. They apply to the guide on screen, the PDF, and the shared page.'],
        ['A narrated video from the same recording', 'Turn the steps into a video with a voice-over, without recording your screen again.'],
        ['Three languages', 'The extension and the guides it writes work in English, Portuguese, and Spanish.'],
      ],

      pricingTitle: 'Pricing',
      pricingIntro: 'Recording, editing, and export are free and stay free. Pro is for people who would rather not manage an AI key.',
      free: {
        name: 'Free',
        price: '$0',
        items: [
          'Unlimited recording, editing, and export: Markdown, PDF, copy to clipboard',
          'Unlimited AI guides with your own Gemini or OpenAI key',
          `Or ${p.freeHostedGuidesPerMonth} AI guides a month on our AI, with no key`,
          `${p.freeShareLinks} share links`,
        ],
      },
      pro: {
        name: 'Pro',
        price: `$${p.proPerMonth}`,
        per: 'a month',
        items: ['Everything in Free', 'Unlimited AI guides, with no key to manage', 'Unlimited share links'],
        how: 'You upgrade inside the extension, when you need it.',
      },

      openSourceTitle: 'Open source',
      openSourceBody: `The extension and its server are public under the ${f.openSource.licence} licence. You can read what it does with your screenshots, or run it yourself.`,
      openSourceLink: 'Read the code on GitHub',

      compareTitle: 'Comparing tools?',
      compareIntro: 'Side-by-side pages, with the date the other tool\'s prices were checked.',
      compareLinks: { scribe: 'Monge Docs vs Scribe', tango: 'Monge Docs vs Tango' },

      closingTitle: 'Try it on your next how-to',
      closingBody: 'Installing takes a minute, and the first run walks you through a practice recording.',
    },

    compareCommon: {
      tableTitle: 'Side by side',
      pickTitle: 'Which one fits you',
      closingTitle: 'See it for yourself',
      closingBody: 'Monge Docs is free to install. Recording, editing, and export need no account.',
      back: 'What Monge Docs does',
      marks: '{name} is a trademark of its owner. Monge Docs is not affiliated with it.',
    },

    compare: {
      scribe: {
        name: scribe.name,
        title: 'Monge Docs vs Scribe: free export, recordings kept in your browser',
        description: `How Monge Docs compares with Scribe for step-by-step guides: price, free export, where recordings are stored, screenshot editing, and languages. Scribe's prices checked on ${checkedOn('scribe', 'en-GB')}.`,
        h1: 'Monge Docs vs Scribe',
        lede: 'Both record what you do in the browser and turn it into a step-by-step guide with screenshots. Scribe is the larger product, built for teams and companies. Monge Docs is a small extension for people who want the guide as a file they keep.',
        rows: [
          ['Price', us.price, `Basic is free. Pro Personal is $${scribe.proPersonal.monthly} per seat a month, or $${scribe.proPersonal.yearly} billed yearly. Pro Team is $${scribe.proTeam.monthly} per seat a month, or $${scribe.proTeam.yearly} billed yearly, starting at ${scribe.proTeam.minSeats} seats.`],
          ['Export to a file', us.exportFile, 'On Pro plans: PDF, HTML, Markdown, Word. The free plan shares by link and embed.'],
          ['On the free plan', us.freePlan, `Up to ${scribe.freeSharedGuides} guides shared at a time.`],
          ['Where your recordings are stored', us.storage, 'In Scribe\'s cloud.'],
          ['Blur and mark up screenshots', us.screenshots, 'On Pro plans.'],
          ['AI-written text', us.ai, 'The steps are written automatically on every plan. AI rewriting is on Pro plans.'],
          ['Your own AI key', us.ownKey, 'Not offered, as far as Scribe\'s help centre says.'],
          ['Languages', us.languages, 'The app is in English. Translating guides is an Enterprise feature.'],
          ['Desktop apps', us.desktop, 'Yes, on Pro plans.'],
          ['Teams', us.teams, 'Yes. Scribe is built around teams.'],
          open && ['Source code', us.source, 'Not published.'],
        ],
        checked: checked(scribe, 'scribe'),
        pickThem: {
          title: 'Scribe, if',
          items: [
            'Several people need to work on the same guides in one workspace.',
            'You need to record desktop apps, not only web pages.',
            `You want the established product: its Chrome extension has ${scribe.storeUsers / 1e6} million users.`,
          ],
        },
        pickUs: {
          title: 'Monge Docs, if',
          items: pickUs('You work alone, or pass guides around as files and links.'),
        },
      },

      tango: {
        name: tango.name,
        title: 'Monge Docs vs Tango: unlimited guides and free export',
        description: `How Monge Docs compares with Tango for step-by-step guides: price, free plan limits, export, where recordings are stored, and languages. Tango's prices checked on ${checkedOn('tango', 'en-GB')}.`,
        h1: 'Monge Docs vs Tango',
        lede: 'Both record what you do in the browser and turn it into a step-by-step guide with screenshots. Tango is built for teams, with on-screen guidance on top of the guides. Monge Docs is a small extension for people who want the guide as a file they keep.',
        rows: [
          ['Price', us.price, `There is a free plan. Pro is $${tango.proSmall.monthly} per user a month, or $${tango.proSmall.yearly} billed yearly, for one or two users. For ${tango.proTeam.minUsers} or more it is $${tango.proTeam.monthly}, or $${tango.proTeam.yearly} billed yearly.`],
          ['Export to a file', us.exportFile, 'PDF, HTML, and Markdown export are on Pro. The free plan shares by link and embed, and can copy a guide as HTML.'],
          ['On the free plan', us.freePlan, `${tango.freeWorkflows} workflows in the team library, and up to ${tango.freeUsers} users. You can keep capturing drafts beyond that.`],
          ['Where your recordings are stored', us.storage, 'In Tango\'s cloud.'],
          ['Blur and mark up screenshots', us.screenshots, 'Arrows, shapes, and text on every plan. Blur is on Pro.'],
          ['AI-written text', us.ai, 'Step descriptions are written automatically on every plan. Other AI-generated content is on Pro.'],
          ['Your own AI key', us.ownKey, 'Not offered, as far as Tango\'s help centre says.'],
          ['Languages', us.languages, 'The app and the steps it writes are in English. Translating workflows is an Enterprise feature.'],
          ['Desktop apps', us.desktop, 'Yes, on Pro, for Mac and Windows.'],
          ['Teams', us.teams, `Yes: a shared workspace, with up to ${tango.freeUsers} users on the free plan.`],
          open && ['Source code', us.source, 'Not published.'],
        ],
        checked: checked(tango, 'tango'),
        pickThem: {
          title: 'Tango, if',
          items: [
            'Several people need to work on the same guides in one workspace.',
            'You want guidance that walks people through the task on the page itself.',
            'You need to record desktop apps, not only web pages.',
          ],
        },
        pickUs: {
          title: 'Monge Docs, if',
          items: pickUs(`You will make more than ${tango.freeWorkflows} guides and would rather not pay per user.`),
        },
      },
    },

    footer: {
      made: 'Monge Docs is made by <a href="/">Danimar Ribeiro</a>.',
      contact: 'Questions or problems: <a href="mailto:{email}">{email}</a>.',
      home: 'Monge Docs',
      privacy: 'Privacy policy',
    },
  };
};
