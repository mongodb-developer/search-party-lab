// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// Change here to customise config

// Name of the Github Repo
const workshopName = 'vector-search-lab';
// Change this if hosting outside mongodb-developer
const organizationName = "joellord";

// Main page config
const title = "Join the Search Party!";
const tagLine = "Exploring MongoDB’s Advanced Search Features";
const startButtonTitle = "Enter Lab";

// Main Page Features
const featureList = [
  {
    title: 'Queries',
    illustration: 'img/docu.svg',
    description: `
        Query like a pro
    `,
  },
  {
    title: 'Atlas Search',
    illustration: 'img/typing.gif',
    description: `
        Add full-text search to your app
    `,
  },
  {
    title: 'Vector Search',
    illustration: 'img/expanded-leafy.png',
    description: `
        Semantic search with vectors
    `,
  },
];

// UTM stuff

const utmAdvocateName = `joel.lord`;
const utmWorkshopName = 'vector_search_lab'

const utmParams = `utm_campaign=devrel&utm_source=workshop&utm_medium=cta&utm_content=${utmWorkshopName}&utm_term=${utmAdvocateName}`;

// Footer links (probably no need to change them)

const footerLinks = [
  {
    label: 'Try MongoDB Atlas',
    href: `https://www.mongodb.com/try?${utmParams}`,
  },
  {
    label: 'Forums',
    href: `https://www.mongodb.com/community/forums/${utmParams}`,
  },
  {
    label: 'Developer Center',
    href: `https://www.mongodb.com/developer/${utmParams}`,
  },
  {
    label: 'MongoDB University',
    href: `https://learn.mongodb.com/${utmParams}`,
  },
  {
    label: `© ${new Date().getFullYear()} MongoDB, Inc.`,
    href: "#",
  },
];

///////////////////////////////////////////////////////////////////////////////
// DON'T CHANGE ANYTHING BELOW UNLESS YOU KNOW WHAT YOU'RE DOING             //
///////////////////////////////////////////////////////////////////////////////

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `${title}`,
  tagline: `${tagLine}`,
  url: `https://${workshopName}.github.io`,
  baseUrl: `/${workshopName}/`,
  projectName: `${organizationName}.github.io`,
  organizationName: `${organizationName}`,
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  customFields: {
    startButtonTitle: `${startButtonTitle}`,
    featureList: featureList,
    utmParams
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `https://github.com/${organizationName}/${workshopName}/blob/main`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-ZJ28V71VTQ',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        }
      },
      navbar: {
        logo: {
          alt: 'MongoDB Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
          className: 'navbar-logo',
          width: '135px',
          height: '100%'
        },
        items: [
          {
            href: `https://github.com/${organizationName}/${workshopName}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: footerLinks,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'swift', 'kotlin'],
      },
    }),
};

module.exports = config;
