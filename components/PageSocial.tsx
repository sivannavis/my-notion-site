import * as React from 'react'

import cs from 'classnames'

import * as config from '@/lib/config'

import styles from './PageSocial.module.css'

interface SocialLink {
  name: string
  title: string
  icon: React.ReactNode
  href?: string
}

const socialLinks: SocialLink[] = [
  config.twitter && {
    name: 'twitter',
    href: `https://twitter.com/${config.twitter}`,
    title: `Twitter @${config.twitter}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z' />
      </svg>
    )
  },

  config.github && {
    name: 'github',
    href: `https://github.com/${config.github}`,
    title: `GitHub @${config.github}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
      </svg>
    )
  },

  config.linkedin && {
    name: 'linkedin',
    href: `https://www.linkedin.com/in/${config.linkedin}`,
    title: `LinkedIn ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z' />
      </svg>
    )
  },

  config.scholar && {
    name: 'scholar',
    href: `https://scholar.google.com/citations?user=${config.scholar}`,
    title: `Google Scholar ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d="M10.93 2.045c-.547.366-3.22 2.14-5.938 3.945C2.272 7.794.05 9.286.05 9.304c0 .019.136.11.305.2.167.096 2.85 1.583 5.965 3.31l5.656 3.143.144-.074c.082-.04 2.169-1.232 4.642-2.642l4.493-2.568.027 7.947h2.668V9.319l-3.46-2.32c-4.664-3.124-8.392-5.586-8.484-5.606-.045-.008-.527.287-1.076.652M5.355 16.633l.014 2.005 3.31 1.987 3.31 1.982 3.337-2 3.332-2.005V16.62c0-1.092-.013-1.983-.027-1.983s-1.318.782-2.9 1.741l-3.306 1.996-.431.256-1.32-.791a604.12 604.12 0 0 1-3.286-1.979l-2.005-1.21c-.024-.008-.032.883-.027 1.983" />
      </svg>
    )
  },

  config.insta && {
    name: 'insta',
    href: `https://www.instagram.com/${config.insta}`,
    title: `Instagram ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>
        <path d="M57.526 28.111c-16.254 0-29.364 13.11-29.364 29.363 0 16.254 13.11 29.364 29.364 29.364 16.253 0 29.363-13.11 29.363-29.364 0-16.253-13.11-29.363-29.363-29.363zm0 48.453c-10.504 0-19.09-8.56-19.09-19.09 0-10.528 8.56-19.09 19.09-19.09 10.528 0 19.09 8.562 19.09 19.09 0 10.53-8.587 19.09-19.09 19.09zM94.939 26.91a6.833 6.833 0 0 1-6.849 6.849 6.833 6.833 0 0 1-6.849-6.849 6.85 6.85 0 0 1 13.698 0zm19.448 6.951c-.435-9.174-2.53-17.301-9.251-23.997C98.44 3.17 90.313 1.074 81.139.614c-9.456-.537-37.797-.537-47.252 0-9.15.434-17.276 2.53-23.997 9.225S1.099 24.66.639 33.836c-.537 9.455-.537 37.796 0 47.252.434 9.174 2.53 17.3 9.251 23.996 6.721 6.696 14.822 8.792 23.997 9.252 9.455.536 37.796.536 47.252 0 9.174-.435 17.301-2.53 23.997-9.252 6.695-6.695 8.79-14.822 9.25-23.996.537-9.456.537-37.771 0-47.227zM102.17 91.233c-1.993 5.01-5.852 8.868-10.887 10.887-7.538 2.99-25.427 2.3-33.758 2.3-8.332 0-26.246.664-33.76-2.3-5.008-1.993-8.867-5.852-10.886-10.887-2.99-7.539-2.3-25.427-2.3-33.759 0-8.33-.664-26.245 2.3-33.758 1.993-5.01 5.852-8.868 10.887-10.887 7.539-2.99 25.427-2.3 33.759-2.3 8.33 0 26.245-.665 33.758 2.3 5.01 1.993 8.868 5.852 10.887 10.887 2.99 7.538 2.3 25.427 2.3 33.758 0 8.332.69 26.246-2.3 33.76z" />
      </svg>
    )
  },

  config.bandcamp && {
    name: 'bandcamp',
    href: `https://${config.insta}.bandcamp.com`,
    title: `BandCamp ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'>
        <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm48.2 326.1h-181L199.9 178h181l-84.7 156.1z"/>
      </svg>
    )
  },

  config.newsletter && {
    name: 'newsletter',
    href: `${config.newsletter}`,
    title: `Newsletter ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M12 .64L8.23 3H5V5L2.97 6.29C2.39 6.64 2 7.27 2 8V18C2 19.11 2.9 20 4 20H20C21.11 20 22 19.11 22 18V8C22 7.27 21.61 6.64 21.03 6.29L19 5V3H15.77M7 5H17V9.88L12 13L7 9.88M8 6V7.5H16V6M5 7.38V8.63L4 8M19 7.38L20 8L19 8.63M8 8.5V10H16V8.5Z' />
      </svg>
    )
  },

  config.youtube && {
    name: 'youtube',
    href: `https://www.youtube.com/${config.youtube}`,
    title: `YouTube ${config.youtube}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z' />
      </svg>
    )
  }
].filter(Boolean)

export const PageSocial: React.FC = () => {
  return (
    <div className={styles.pageSocial}>
      {socialLinks.map((action) => (
        <a
          className={cs(styles.action, styles[action.name])}
          href={action.href}
          key={action.name}
          title={action.title}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={styles.actionBg}>
            <div className={styles.actionBgPane} />
          </div>

          <div className={styles.actionBg}>{action.icon}</div>
        </a>
      ))}
    </div>
  )
}
