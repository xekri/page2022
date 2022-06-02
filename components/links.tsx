import Link from 'next/link'

export default function Links() {
  return <ul>
    <li>website
      <ul>
        <li><Link href='https://0.sumi.space'>12018 (Gulp, Pug)</Link></li>
        <li><Link href='https://www.sumi.space'>12021 (Next.js)</Link></li>
        <li>12022 (Next.js)</li>
      </ul>
    </li>
    <li><Link href='https://sjagci.pages.dev'>將棋 (Elm)</Link></li>
    <li><Link href='https://sumi-yue.herokuapp.com'>粵語ラテン化</Link></li>
    <li>正書法變換
      <ul>
        <li><Link href='https://linguistic.pages.dev/pl'>ポーランド語</Link></li>
        <li><Link href='https://linguistic.pages.dev/sa'>サンスクリット</Link></li>
        <li><Link href='https://linguistic.pages.dev/ar'>アラビア語</Link></li>
        <li><Link href='https://linguistic.pages.dev/nl'>オランダ語</Link></li>
      </ul>
    </li>
  </ul>
}