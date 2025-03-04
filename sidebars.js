/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
    tutorialSidebar: [
      {
        type: 'category',
        label: 'Tutorial',
        items: ['hello'],
      },
    ],
     */

  Sidebar: [
    'index',
    {
      type: 'category',
      label: 'Learn',
      link: { type: 'doc', id: 'learn/README' },
      items: [
        {
          type: 'category',
          label: 'JMES Blockchain',
          collapsed: true,
          link: { type: 'doc', id: 'learn/about/README' },
          items: [
            {
              type: 'doc',
              id: 'learn/about/blockchain',
              label: 'Protocol',
            },                       
            {
              type: 'doc',
              id: 'learn/about/whitepaper',
              label: 'Whitepaper',
            },             
          ],
        },   
        {
          type: 'category',
          label: 'Business Layer',
          collapsed: true,
          link: { type: 'doc', id: 'learn/business/README' },
          items: [
            {
              type: 'doc',
              id: 'learn/business/README',
              label: 'Overview',
            },  
            {
              type: 'doc',
              id: 'learn/business/identities',
              label: 'Identities',
            },  
            {
              type: 'doc',
              id: 'learn/business/daos',
              label: 'DAOs',
            },            
            {
              type: 'category',
              label: 'Governance',
              collapsed: true,
              link: { type: 'doc', id: 'learn/business/governance/README' },
              items: [
                {
                  type: 'doc',
                  id: 'learn/business/governance/proposal-types',
                  label: 'Proposal Types',
                },                                     
              ],
            }, 
            {
              type: 'doc',
              id: 'learn/business/official-features',
              label: 'Official Features',
            },                                                   
          ],
        },          
        {
          type: 'category',
          label: 'JMES App',
          collapsed: true,
          link: { type: 'doc', id: 'learn/app/README' },
          items: [
            'learn/app/app-whitepaper',
          ],
        },    
        'learn/fees',
        'learn/glossary',
      ],
    },
    {
      type: 'category',
      label: 'Develop',
      link: { type: 'doc', id: 'develop/README' },
      items: [
        'develop/get-started',
        'develop/which-tools',



        {
          type: 'category',
          label: 'Developer tools',
          collapsed: true,
          items: [
            /*
            {
              type: 'category',
              label: 'Terrain',
              collapsed: true,
              link: { type: 'doc', id: 'develop/terrain/README' },
              items: [
                'develop/terrain/initial-setup',
                'develop/terrain/using-terrain-localterra',
                'develop/terrain/using-terrain-testnet',
                'develop/terrain/mint-an-nft',
                'develop/terrain/cw20-factory',
                'develop/terrain/contract-migration',
              ],
            },
            */
            {
              type: 'category',
              label: 'LocalJMES',
              collapsed: true,
              link: { type: 'doc', id: 'develop/localjmes/README' },
              items: [
              /*
                'develop/localjmes/install-localjmes',
                'develop/localjmes/configure',
                'develop/localjmes/integrations',
                'develop/localjmes/contracts',
                'develop/localjmes/accounts',
              */
              ],
            },
            {
              type: 'category',
              label: 'JMES.js',
              collapsed: true,
              link: { type: 'doc', id: 'develop/feather-js/README' },
              items: [
                /*
                'develop/feather-js/getting-started',
                'develop/feather-js/terra-classic',
                'develop/feather-js/common-examples',
                'develop/feather-js/add-modules',
                'develop/feather-js/coin-and-coins',
                'develop/feather-js/fees',
                'develop/feather-js/ibc',
                'develop/feather-js/keys',
                'develop/feather-js/make-a-connection',
                'develop/feather-js/msgAuthorization',
                'develop/feather-js/multisend',
                'develop/feather-js/numeric',
                'develop/feather-js/query-data',
                'develop/feather-js/smart-contracts',
                'develop/feather-js/transactions',
                'develop/feather-js/wallets',
                'develop/feather-js/Websockets',
                */
              ],
            },
            /*
            {
              type: 'category',
              label: 'Terra.py',
              collapsed: true,
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'develop/terra-py',
                },
              ],
            },
            {
              type: 'category',
              label: 'Wallet Provider',
              collapsed: true,
              items: [
                'develop/wallet-provider/wallet-provider-tutorial',
                'develop/wallet-provider/station-extension',
                'develop/wallet-provider/station-mobile',
                'develop/wallet-provider/sign-bytes',
              ],
            },
            */
            {
              type: 'category',
              label: 'Jmesd',
              collapsed: true,
              items: [
                'develop/jmesd/install-jmesd',
                'develop/jmesd/jmesd-mac',
                'develop/jmesd/using-jmesd',
                'develop/jmesd/commands',
                'develop/jmesd/subcommands',
              ],
            },
          ],
        },
        /*
        {
          type: 'category',
          label: 'Developer guides',
          collapsed: true,
          items: [
            'develop/guides/initial',
            'develop/guides/sign-with-multisig',
            'develop/guides/start-lcd',
            'develop/vesting',
            'develop/open-source',
          ],
        },
        {
          type: 'category',
          label: 'dApp examples',
          collapsed: true,
          items: [
            'develop/examples/tictactoe',
            'develop/examples/nft',
            'develop/examples/token-factory',
            {
              type: 'link',
              label: 'Frontend templates', // The link label
              href: 'https://github.com/terra-money/wallet-provider/', // The external URL
            },
          ],
        },

        */
        {
          type: 'category',
          label: 'JMES Core modules',
          collapsed: true,
          link: { type: 'doc', id: 'develop/module-specifications/README' },
          items: [
            'develop/module-specifications/spec-auth',
            'develop/module-specifications/spec-authz',
            'develop/module-specifications/spec-bank',
            'develop/module-specifications/spec-capability',
            'develop/module-specifications/spec-crisis',
            'develop/module-specifications/spec-distribution',
            'develop/module-specifications/spec-evidence',
            'develop/module-specifications/spec-feegrant',
            'develop/module-specifications/spec-governance',
            'develop/module-specifications/spec-mint',
            'develop/module-specifications/spec-params',
            'develop/module-specifications/spec-slashing',
            'develop/module-specifications/spec-staking',
            'develop/module-specifications/spec-upgrade',
            'develop/module-specifications/spec-wasm',
          ],
        },
        {
          type: 'category',
          label: 'Incubator',
          collapsed: true,
          link: { type: 'doc', id: 'develop/incubator/README' },
          items: [
            {
              type: 'doc',
              id: 'develop/incubator/README',
              label: 'About Incubator',
            },        
            {
              type: 'doc',
              id: 'develop/incubator/incubator-whitepaper',
              label: 'Whitepaper',
            },                              
          ],
        },  
        'develop/resources',
        'develop/swagger',
        'develop/endpoints',
      ],
    },
    {
      type: 'category',
      label: 'Full node',
      link: { type: 'doc', id: 'landing-pages/full-node' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'full-node',
        },
      ],
    },
  ],
};

/*
    {
      type: 'doc',
      id: 'about/protocol',
      label: 'What is Terra?'
    },

        {
      type: 'html',
      value: '<img src="sponsor.png" alt="Sponsor" />', // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    */

module.exports = sidebars;
