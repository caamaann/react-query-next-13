/* eslint-disable @next/next/no-head-element */
'use client'

// Please use favicon generator at https://www.favicon-generator.org/

import React from 'react'

const color = '#111111' // set primary color

interface IProps {
  title: string
  description: string
  richlink: string
  url: string
}

function SEO({title, description, richlink, url}: IProps) {
  return (
    <head>
      <meta name="language" content="english" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="robots" content="index,follow" />

      <title>{`${title} | Salman`}</title>
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <link rel="apple-touch-icon" href="/icons/apple-icon.png" />
      <meta name="title" content={`${title} | Salman`} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`${title} | Salman`} />
      <meta property="og:description" content={description} />
      <meta name="og:image" content={`${url}${richlink}`} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={`${title} | Salman`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${url}${richlink}`} />
      <meta name="msapplication-TileColor" content={color} />
      <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
      <meta name="theme-color" content={color} />
      <meta name="facebook-domain-verification" content="0xcv74bvdvbqlfrgc6kvhtgn2uixxa" />
      <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/icons/manifest.json" />
    </head>
  )
}

SEO.defaultProps = {
  title: 'Salman',
  description: 'Salman Learning Page',
  richlink: '/icons/richlink.jpg',
  url: process.env.SITE_URL ?? '/',
}

export default SEO
