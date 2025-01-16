export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'CityZen RP',
      description: 'CityZen RP est un serveur FiveM avancé qui ne focus pas seulement sur le criminel ou le civil, mais aussi sur une histoire qui entour l\'environement de jeu.',
    },
    theme: {
      customizable: false,
      color: 'blue',
      radius: 0.50
    },
    header: {
      title: 'CityZen RP',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.png',
        dark: '/logo.png',
      },
      nav: [{
        title: 'Documentation',
        to: '/getting-started/install',
      }, {
        title: 'Lore',
        to: '/lore',
      }],
      links: [{
        icon: 'akar-icons:tiktok-fill',
        to: 'https://www.tiktok.com/@cityzenv2',
        target: '_blank',
      }, {
        icon: 'akar-icons:discord-fill',
        to: 'https://discord.gg/7ptA67gAX2',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: true,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [{
        icon: 'akar-icons:tiktok-fill',
        to: 'https://www.tiktok.com/@cityzenv2',
        target: '_blank',
      }, {
        icon: 'akar-icons:discord-fill',
        to: 'https://discord.gg/7ptA67gAX2',
        target: '_blank',
      }],
    },
    toc: {
      enable: false,
      title: 'On This Page',
      links: [],
    },
    search: {
      enable: false,
      inAside: false,
    }
  }
});