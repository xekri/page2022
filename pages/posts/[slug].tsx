import matter from "gray-matter"
import ReactMarkdown from 'react-markdown'

export default function Post(props) {
  return <>
    <h2>POSTS</h2>
    <section>
      <h3>{props.meta.date} «{props.meta.title}»</h3>
      <ReactMarkdown>
        {props.content}
      </ReactMarkdown>
    </section >
  </>
}

export async function getStaticPaths() {
  const slugs = (context => {
    const data = context.keys().map(key => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      return slug
    })
    return data
  })(require.context('../../data', true, /\.md$/))

  const paths = slugs.map((slug) => `/posts/${slug}`)

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const data = await import(`../../data/${slug}.md`)
  const document = matter(data.default)

  return {
    props: {
      meta: document.data,
      content: document.content,
    }
  }
}