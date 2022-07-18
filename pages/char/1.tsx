import Image from 'next/image'
import Link from 'next/link'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { NextSeo } from 'next-seo'
import style from './style.module.sass'

const title = 'SUZULI & MITULU'
export default () => <>
  <NextSeo
    title={title}
    originGraph={{
      images: [{
        url: '/char-1/20220716-bk.png'
      }]
    }}
  />
  <h2>{title}</h2>
  <div style={{ textAlign: 'center', marginBottom: '16px' }}>
    <Link href='/char-1/20220716-bk.png'>
      <img src='/char-1/20220716-bk.png' style={{ width: '50%', backgroundImage: 'linear-gradient(transparent, transparent, #FFF4)' }} />
    </Link>
  </div>
  <section>
    <h3>SPECIFICATION</h3>

    <p>以下の値は目安であり, 各描寫の際には自由に變動します.</p>

    <table style={{ maxWidth: '75%' }}>
      <tr>
        <th></th>
        <td style={{ textAlign: "center" }}>
          <img src="/suzuli.svg" width="64px" />
        </td>
        <td style={{ textAlign: "center" }}>
          <img src="/mitulu.svg" width="64px" />
        </td>
      </tr>
      <tr>
        <th>名</th>
        <td>硯 (suzuli)</td>
        <td>盈 (mitulu)</td>
      </tr>
      <tr>
        <th>外見</th>
        <td>上圖右</td>
        <td>上圖左</td>
      </tr>
      <tr>
        <th>年齡</th>
        <td>23</td>
        <td>21</td>
      </tr>
      <tr>
        <th>身長/m</th>
        <td>1.75</td>
        <td>1.85</td>
      </tr>
      <tr>
        <th>體質量/kg</th>
        <td>70</td>
        <td>80</td>
      </tr>
      <tr>
        <th>髮色</th>
        <td>薄灰色</td>
        <td>黒色</td>
      </tr>
      <tr>
        <th>所在</th>
        <td colSpan={2}>日本共和國 / 武蔵縣</td>
      </tr>
      <tr>
        <th>身分</th>
        <td>葦原大學大學院 情報科學院 理論計算機科專攻</td>
        <td>葦原大學 理學部 數學科</td>
      </tr>
      <tr>
        <th>性</th>
        <td>男 (外性器と性激素に基づく), 男性愛, polyamory</td>
        <td>男 (外性器と性激素に基づく), 男性愛, monoamory</td>
      </tr>
      <tr>
        <th>陰莖</th>
        <td>最大230mm, 下反り, 半剝け</td>
        <td>最大210mm, 上反り, 半剝け</td>
      </tr>
      <tr>
        <th>言語</th>
        <td>日本語 (東京方言), 英語 (general american), 粵語</td>
        <td>日本語 (京都方言), 英語 (received pronunciation), ふらんす語</td>
      </tr>
      <tr>
        <th>主題色</th>
        <td>黒色 <span>□</span>, 紅色 <span style={{ color: 'crimson' }}>■</span></td>
        <td>白色 <span style={{ color: 'white' }}>■</span>, 青綠色 <span style={{ color: 'turquoise' }}>■</span></td>
      </tr>
      <tr>
        <th>服飾</th>
        <td>
          素朴, 無彩, ぴあす (<a href='https://twitter.com/enkaust/status/1239962725746454528'>耳</a>, <a href='https://en.wikipedia.org/wiki/Prince_Albert_(genital_piercing)'>prince albert</a>)
        </td>
        <td>(未定)</td>
      </tr>
      <tr>
        <th>趣味</th>
        <td>讀書, 鋼琴</td>
        <td>映畫鑑賞, 筋力鍛錬</td>
      </tr>
      <tr>
        <th>愛讀書</th>
        <td>«better never to have been»</td>
        <td>«l'être et le néant»</td>
      </tr>
      <tr>
        <th>性格</th>
        <td>合理的, 沈着, 孤高, 淫蕩</td>
        <td>合理的, 快活, 社交的, 一途</td>
      </tr>
      <tr>
        <th>思想</th>
        <td>義務論的自由主義, 親自殺主義</td>
        <td>選好的功利主義, 反出生主義</td>
      </tr>
      <tr>
        <th>他方からの呼稱</th>
        <td>硯君 suzuli-kun</td>
        <td>盈 mitulu</td>
      </tr>
      <tr>
        <th>他</th>
        <td>
          <ul>
            <li>自淫は平均1回/週</li>
            <li>可攻可受だが受くを好む</li>
            <li>首を絞めらるを好む</li>
            <li>性行爲中は甘えたがり</li>
            <li>大麻とLSDを好む</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>自淫は平均.5回/日</li>
            <li>可攻可受だが受くを好む</li>
            <li>乳頭が弱い</li>
            <li>寂しがり</li>
            <li>酒精に弱い</li>
          </ul>
        </td>
      </tr>
    </table>
  </section >

  <section>
    <h3>BACKGROUND</h3>
    <p>
      盈は硯を大學圖書館で數度 見掛け一方的に認識してゐた.
      暫くして盈が硯に聲を掛けて知り合って以來, 穩やかな友人關係を續けてゐる.
    </p>
    <p>
      盈は社交的で學内に築いた多くの友人關係を樂しんでゐるが, 入り組んだ人間關係を器用に立ち回る事を煩はしく思ふ時が有る.
      硯と會話を重ねる内に人に阿らない毅然とした彼の態度を盈は好み始めた.
    </p>
    <p>
      盈は多くの週末を硯の家で過ごす.
      二人はカウチに竝び麥酒や大麻のジョイントを喫しながら映畫を觀る事が多い.
      時にはそれぞれの專門である程序設計や數學の話をする.
    </p>
    <p>
      夜は大抵, 性交した後に同じ寢床で寢る.
      本來は硯も盈も受けを望むが, 硯は攻めに回って盈を樂しませる事に吝かでない.
      硯は年齢や學年に基づく上下關係と言った物に價値を認めないが, 盈に對しては甘やかす兄の樣な立場を取り勝ちである.
    </p>
    <p>
      盈が戀人を作り會ふ回數が少なくなる期間がしばしば有るが, 全く會はなくなるわけではない.
      盈が樂しそうに惚氣けるのに耳を傾ける事を硯は嫌ってゐない.
      その間硯はいつもと特に變はらぬ性生活を送り多數の相手と性交する.
    </p>
  </section>

  <section>
    <h3>ARTS</h3>
    <div className={style.tweets}>
      <TwitterTweetEmbed tweetId='1548324710231916549' options={{ theme: "dark" }} />
      <TwitterTweetEmbed tweetId='1488869489685012485' options={{ theme: "dark" }} /> {/*<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">【R-18🔞】skeb納品しました。リクエストありがとうございました！<a href="https://t.co/MUKQZBYvja">https://t.co/MUKQZBYvja</a> <a href="https://t.co/UlIjonaXpG">pic.twitter.com/UlIjonaXpG</a></p>&mdash; はいき｜𝗛𝗔𝗜𝗞𝗜 (@haiki396g) <a href="https://twitter.com/haiki396g/status/1488869489685012485?ref_src=twsrc%5Etfw">February 2, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>*/}
      <TwitterTweetEmbed tweetId='1479281810123390978' options={{ theme: "dark" }} /> {/*<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Skebありがとうございました！<a href="https://t.co/sdYui5BcE1">https://t.co/sdYui5BcE1</a><a href="https://twitter.com/hashtag/Skeb?src=hash&amp;ref_src=twsrc%5Etfw">#Skeb</a> <a href="https://t.co/nSLnroOfRg">pic.twitter.com/nSLnroOfRg</a></p>&mdash; ᴘᴏᴢᴏɴ²🔞 (@Pozonuun) <a href="https://twitter.com/Pozonuun/status/1479281810123390978?ref_src=twsrc%5Etfw">January 7, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>*/}
      <TwitterTweetEmbed tweetId='1454814733920464900' options={{ theme: "dark" }} /> {/*<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">急遽描いたものですがこれでゆるしてくｄさい <a href="https://t.co/RI31p4pqZN">pic.twitter.com/RI31p4pqZN</a></p>&mdash; 司ろう。 (@shi46_u) <a href="https://twitter.com/shi46_u/status/1454814733920464900?ref_src=twsrc%5Etfw">October 31, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>*/}
      <TwitterTweetEmbed tweetId='1421131605460979718' options={{ theme: "dark" }} />
      <TwitterTweetEmbed tweetId='1416882380334243841' options={{ theme: "dark" }} /> {/*<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">れんちゅ <a href="https://t.co/sG1zv9pJIJ">pic.twitter.com/sG1zv9pJIJ</a></p>&mdash; 絹豆腐📛 (@toufu0128) <a href="https://twitter.com/toufu0128/status/1416882380334243841?ref_src=twsrc%5Etfw">July 18, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>*/}
      <TwitterTweetEmbed tweetId='1415714345334415360' options={{ theme: "dark" }} /> {/*<blockquote class="twitter-tweet"><p lang="und" dir="ltr">? <a href="https://t.co/J2GFIIL8mm">pic.twitter.com/J2GFIIL8mm</a></p>&mdash; † (@ttqss) <a href="https://twitter.com/ttqss/status/1415714345334415360?ref_src=twsrc%5Etfw">July 15, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>*/}
      <TwitterTweetEmbed tweetId='1413499483258638341' options={{ theme: "dark" }} /> {/**/}
      <TwitterTweetEmbed tweetId='1409123563672510469' options={{ theme: "dark" }} /> {/*<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">skebで描かせてもらったよそ様のキャラ、めちゃ好みだったので楽しかった<br>残像ちんの修正がどうすればよいのか全然わからなかった、これも勉強ですね。。。 <a href="https://t.co/tsTvNadjCd">pic.twitter.com/tsTvNadjCd</a></p>&mdash; 🔞さぶこ (@sabu_ur) <a href="https://twitter.com/sabu_ur/status/1409123563672510469?ref_src=twsrc%5Etfw">June 27, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>*/}
      <TwitterTweetEmbed tweetId='1401933201350664197' options={{ theme: "dark" }} /> {/**/}
      <TwitterTweetEmbed tweetId='1391770750495850498' options={{ theme: "dark" }} /> {/**/}
      <TwitterTweetEmbed tweetId='1391226423579398152' options={{ theme: "dark" }} /> {/*<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">sumi(@sumiqj)様のOC(片方)立ち絵納品いたしました。ご依頼ありがとうございました。 <a href="https://t.co/9HAeUnqZpK">pic.twitter.com/9HAeUnqZpK</a></p>&mdash; イオン (@1122ion) <a href="https://twitter.com/1122ion/status/1391226423579398152?ref_src=twsrc%5Etfw">May 9, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>*/}
      <TwitterTweetEmbed tweetId='1371471958886391819' options={{ theme: "dark" }} /> {/*<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">お待ｯｯｯｯｯｯｯｯたせしました！！！！！スプラッタホラー映画を見てる2人を納品させていただきましたー！！！ 楽しかったあ<br>ありがとうございました❣️<a href="https://t.co/jmW8NfkKzB">https://t.co/jmW8NfkKzB</a> <a href="https://twitter.com/hashtag/Skeb?src=hash&amp;ref_src=twsrc%5Etfw">#Skeb</a> <a href="https://twitter.com/hashtag/Commission?src=hash&amp;ref_src=twsrc%5Etfw">#Commission</a> <a href="https://twitter.com/skeb_jp?ref_src=twsrc%5Etfw">@skeb_jp</a>より <a href="https://t.co/X3cgkxsomH">pic.twitter.com/X3cgkxsomH</a></p>&mdash; たま魂👼 (@mkotan) <a href="https://twitter.com/mkotan/status/1371471958886391819?ref_src=twsrc%5Etfw">March 15, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>*/}
      <TwitterTweetEmbed tweetId='1346045769820749824' options={{ theme: "dark" }} /> {/*<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">素鉄さんのコミッション「このOCのイラストを依頼します: <a href="https://t.co/3bpB9Jucli">https://t.co/3bpB9Jucli</a> nishikimaru/works/3<br>背景・服装などは (有れば) 冬っぽいと...」 <a href="https://t.co/fhlDhps7F4">https://t.co/fhlDhps7F4</a> <a href="https://twitter.com/hashtag/Skeb?src=hash&amp;ref_src=twsrc%5Etfw">#Skeb</a> <a href="https://twitter.com/hashtag/Commission?src=hash&amp;ref_src=twsrc%5Etfw">#Commission</a> <a href="https://twitter.com/skeb_jp?ref_src=twsrc%5Etfw">@skeb_jp</a>より</p>&mdash; 素鉄 (@suteetsu) <a href="https://twitter.com/suteetsu/status/1346045769820749824?ref_src=twsrc%5Etfw">January 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>*/}
      <div className={style.nontweet}>
        {/*<TwitterTweetEmbed tweetId='1337004643235160064' options={{ theme: "dark" }} />*/}
        <blockquote className="twitter-tweet" data-theme="dark"><p>skeb納品しましたーーー！！！！！リクエストありがとうございます！！！！！目隠れ髭は最高だな………今週の標語は「そのちんちん透けるよ」です<a href="https://t.co/qvVdZyiJ5e">https://t.co/qvVdZyiJ5e</a> <a href="https://twitter.com/hashtag/Skeb?src=hash&amp;ref_src=twsrc%5Etfw">#Skeb</a> <a href="https://twitter.com/hashtag/Commission?src=hash&amp;ref_src=twsrc%5Etfw">#Commission</a> <a href="https://twitter.com/skeb_jp?ref_src=twsrc%5Etfw">@skeb_jp</a>より <a href="https://t.co/kE4mOPkESK">pic.twitter.com/kE4mOPkESK</a></p>&mdash; たま魂👼 (@mkotan) <a href="https://twitter.com/mkotan/status/1337004643235160064?ref_src=twsrc%5Etfw">December 10, 2020</a></blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
      <TwitterTweetEmbed tweetId='1336289586549407745' options={{ theme: "dark" }} /> {/**/}
      <TwitterTweetEmbed tweetId='1333099976650579973' options={{ theme: "dark" }} /> {/**/}
      <TwitterTweetEmbed tweetId='1330337966095544320' options={{ theme: "dark" }} /> {/**/}
      <div className={style.nontweet}>
        {/*<TwitterTweetEmbed tweetId='1318916428586627073' options={{ theme: "dark" }} />*/}
        <blockquote className="twitter-tweet" data-theme="dark"><p>共感を得られなかったグロかわ狼フード <a href="https://t.co/MxQJZq1Ls4">pic.twitter.com/MxQJZq1Ls4</a></p>&mdash; 絹豆腐📛 (@momentoufuR18) <a href="https://twitter.com/momentoufuR18/status/1318916428586627073?ref_src=twsrc%5Etfw">October 21, 2020</a></blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
      <TwitterTweetEmbed tweetId='1314648291636703232' options={{ theme: "dark" }} /> {/**/}
      <TwitterTweetEmbed tweetId='1316746721121058817' options={{ theme: "dark" }} /> {/**/}
      <TwitterTweetEmbed tweetId='1313459340506853376' options={{ theme: "dark" }} /> {/**/}
      <TwitterTweetEmbed tweetId='1303539039505506305' options={{ theme: "dark" }} /> {/**/}
      <TwitterTweetEmbed tweetId='1297245606977523712' options={{ theme: "dark" }} /> {/**/}
      <div className={style.nontweet}>
        <img src='/char-1/20200804.png'></img>
        @toufu0128
      </div>
      <TwitterTweetEmbed tweetId='1290307240197386246' options={{ theme: "dark" }} /> {/**/}
      <div className={style.nontweet}>
        {/*<TwitterTweetEmbed tweetId='1289200726829195264' options={{ theme: "dark" }} />*/}
        <blockquote className="twitter-tweet" data-theme="dark"><p>🔞NFSW🔞<br />skeb納品しました！穴まで描きたかった〜〜〜〜ッ！<br />リクエストありがとうございました🌞<a href="https://t.co/cqMdrGNWyZ">https://t.co/cqMdrGNWyZ</a> <a href="https://t.co/kYUK5iYora">pic.twitter.com/kYUK5iYora</a></p>&mdash; たま魂👼 (@mkotan) <a href="https://twitter.com/mkotan/status/1289200726829195264?ref_src=twsrc%5Etfw">July 31, 2020</a></blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
      <div className={style.nontweet}>
        {/*<TwitterTweetEmbed tweetId='1286677524563365888' options={{ theme: "dark" }} />*/}
        <blockquote className="twitter-tweet" data-theme="dark"><p><a href="https://twitter.com/sumimq?ref_src=twsrc%5Etfw">@sumimq</a> スミくんはぴば♥ <a href="https://t.co/LnbuWVojri">pic.twitter.com/LnbuWVojri</a></p>&mdash; 斎川 (@ti17_) <a href="https://twitter.com/ti17_/status/1286677524563365888?ref_src=twsrc%5Etfw">July 24, 2020</a></blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
      <div className={style.nontweet}>
        {/*<TwitterTweetEmbed tweetId='1281632927529332736' options={{ theme: "dark" }} />*/}
        <blockquote className="twitter-tweet" data-theme="dark"><p>Commission<a href="https://t.co/GCP58cuKd5">https://t.co/GCP58cuKd5</a> <a href="https://t.co/5sHvE7QLqa">pic.twitter.com/5sHvE7QLqa</a></p>&mdash; ミネむら (@minefarmkun) <a href="https://twitter.com/minefarmkun/status/1281632927529332736?ref_src=twsrc%5Etfw">July 10, 2020</a></blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
      <TwitterTweetEmbed tweetId='1270015188935172097' options={{ theme: "dark" }} /> {/**/}
      <TwitterTweetEmbed tweetId='1266767231813214208' options={{ theme: "dark" }} /> {/**/}
      <TwitterTweetEmbed tweetId='1253513328783065088' options={{ theme: "dark" }} /> {/**/}
      <TwitterTweetEmbed tweetId='1250046521636085761' options={{ theme: "dark" }} /> {/**/}
      <TwitterTweetEmbed tweetId='1249605824080539648' options={{ theme: "dark" }} /> {/**/}
      <div className={style.nontweet}>
        <img src='/char-1/20200408-1.jpg' ></img>
        @nikuda2929, 有償
      </div>
      <div className={style.nontweet}>
        <img src='/char-1/20191011.jpg' ></img>
        @shi46_u
      </div>
      <TwitterTweetEmbed tweetId='1180149743692812288' options={{ theme: "dark" }} /> {/**/}
      <TwitterTweetEmbed tweetId='1167690971410309120' options={{ theme: "dark" }} /> {/**/}
      <TwitterTweetEmbed tweetId='1157737672439320576' options={{ theme: "dark" }} /> {/**/}
      <div className={style.nontweet}>
        <img src='/char-1/20190726.jpg'></img>
        @AI67448472
      </div>
      <TwitterTweetEmbed tweetId='1151805582556352513' options={{ theme: "dark" }} /> {/**/}
      <div className={style.nontweet}>
        <img src='/char-1/20190423.png'></img>
      </div>
      <div className={style.nontweet}>
        {/*<TwitterTweetEmbed tweetId='1069800047636856832' options={{ theme: "dark" }} />*/}
        <img src='/char-1/20181204.jpg'></img>
        <blockquote className="twitter-tweet" data-theme="dark"><p>わかんなかったとこは, 捏造した <a href="https://t.co/MPDLpSVi1Q">pic.twitter.com/MPDLpSVi1Q</a></p>&mdash; 一人 (@nasu_zoi) <a href="https://twitter.com/nasu_zoi/status/1069800047636856832?ref_src=twsrc%5Etfw">2018年12月4日</a></blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
      <div className={style.nontweet}>
        <img src='/char-1/20180801.png'></img>
      </div>
    </div>
  </section>
</>