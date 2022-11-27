import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '9fb4d37f1fe44c6d85e88bc5c521eb4f',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'b74133af-844e-4972-b144-c12554ed8914',

  // basic site info (required)
  name: 'Siwen (Sivan) Ding',
  domain: 'sivan.fun',
  author: 'Siwen (Sivan) Ding',

  // open graph metadata (optional)
  description: 'Siwen Ding Personal Website',

  // social usernames (optional)
  twitter: 'NavissivanD',
  github: 'sivannavis',
  linkedin: 'sivanding',
  scholar: '8MbQVPsAAAAJ',
  insta: '_cfbdsir2149_0403',
  bandcamp: 'wavefunction',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/foo': '067dd719a912471ea9a3ac10710e7fdf',
    '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Home',
      pageId: '9fb4d37f1fe44c6d85e88bc5c521eb4f'
    },
    {
      title: 'Projects',
      url: 'http://sivan.fun/3f4ccaed96c540beb778140c36945dbb',
      // pageId: '3f4ccaed96c540beb778140c36945dbb'
    },
    {
      title: 'Music',
      pageId: '5038cf6fecd142499c0e666029e0bc99'
    },
    {
      title: 'SideNotes',
      pageId: '306ed3dbbfc54773a9ecd8c09f1d8a47'
    },
  ]
})
