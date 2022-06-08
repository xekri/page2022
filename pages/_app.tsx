import Head from 'next/head'
import { DefaultSeo } from 'next-seo';
import Layout from '../components/layout'
import '../styles/app.sass'

export default ({ Component, pageProps }) =>
  <Layout>
    <DefaultSeo
      titleTemplate='SUMI - %s'
      defaultTitle='SUMI'
      description=''
      openGraph={{
        type: 'website',
        locale: 'ja_JP',
        url: 'https://2.sumi.space',
        images: [
          {
            url: 'https://2.sumi.space/avatar.gif',
            width: 720,
            height: 720,
            alt: 'avatar lyn logo',
            type: 'image/gif',
          },
        ],
      }}
      twitter={{
        cardType: 'summary',
        handle: '@enkaust',
      }}
    />
    <Head>
      <link rel='icon' type='image/svg' href='/sumi.svg' />
    </Head>
    <Component {...pageProps} />
  </Layout>