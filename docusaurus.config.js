require("dotenv").config();
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Docs Vault",
  tagline: "Antjrobles's Second Brain",
  favicon: "img/favicon.ico",

  url: "https://docusaurus.antjrobles.tech",
  baseUrl: "/",

  organizationName: "antjrobles", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsed: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Antjrobles/docusaurus/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-notes",
        path: "docs-notes",
        routeBasePath: "docs-notes",
        sidebarPath: require.resolve("./sidebarsDocsNotes.js"),
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Home",
        logo: {
          alt: "My Site Logo",
          src: "img/AROK.svg",
          width: 40,
          height: 40,
        },
        items: [
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "DAM",
          },
          {
            to: '/docs-notes/intro',
            position: 'left',
            label: 'DOCUMENTATION',
            activeBaseRegex: `/docs-notes/`,
          },
          {
            href: "https://github.com/Antjrobles/docusaurus.git",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} My Second Brain, Inc. Built with Docusaurus by Antonio Robles.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
      },
    }),

  // Añadir script de Umami
  scripts: [
    {
      src: 'https://umami.antjrobles.tech/script.js',
      defer: true,
      'data-website-id': '5ddd3ca3-54da-4526-9e41-835b4bd706a2',
    },
  ],
};

module.exports = config;
