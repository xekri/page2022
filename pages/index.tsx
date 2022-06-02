import matter from "gray-matter"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Link from 'next/link'
import Home from '../components/home'
import Links from '../components/links'

export async function getStaticProps() {
  const posts = (context => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      // FIXME
      const value: any = keys.map(context)[index]
      const document = matter(value.default)
      return {
        meta: document.data,
        slug,
      }
    })
    return data
  })(require.context('../data', true, /\.md$/))

  const postsSorted = posts.sort((a, b) =>
    b.meta.id - a.meta.id
  )

  return {
    props: {
      posts: JSON.parse(JSON.stringify(postsSorted))
    }
  }
}

export default function Index({ posts }) {
  return <Tabs>
    <TabList>
      <Tab><h2>HOME</h2></Tab>
      <Tab><h2>LINKS</h2></Tab>
      <Tab><h2>POSTS</h2></Tab>
    </TabList>

    <TabPanel><Home /></TabPanel>

    <TabPanel><Links /></TabPanel>

    <TabPanel>
      {posts.map(post =>
        <section>
          <h3>
            <Link href={`../posts/${post.slug}`} >{post.meta.date}</Link> {post.meta.title}
          </h3>
          {post.content}
        </section>
      )}
    </TabPanel>
  </Tabs >
}