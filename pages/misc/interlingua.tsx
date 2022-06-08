import { NextSeo } from 'next-seo'

const title = '改良interlingua'
export default () => <>
  <NextSeo title={title} />

  <h2>{title}</h2>

  <p>
    ante dies me trovava un lingua appellate 'interlinuga', kue me nunk apprende
    (數日前にinterlinguaと言ふ國際補助語を知り, 學習中です).

    le esse un lingua phantastik, sed le habe irregularitates apparente traher su origine de linguas natural, sin que me hik kreara dialekto nove
    (素晴らしい言語ですが, 自然言語由來と思しい不規則性が有り, それらを排した獨自方言をここで作ります).
  </p>

  <section>
    <h3>正書法</h3>
    先づは元の對應を見ます.

    <table>
      <tr><th>字</th><th>音</th></tr>
      <tr><td>c (e, i, y)</td><td>[t͡s]</td></tr>
      <tr><td>c</td><td>[k]</td></tr>
      <tr><td>ch (Fr)</td><td>[ʃ]</td></tr>
      <tr><td>ch (El, It)</td><td>[k]</td></tr>
      <tr><td>ch (En, Es)</td><td>[t͡ʃ]</td></tr>
      <tr><td>g (於 -age)</td><td>[ʒ]</td></tr>
      <tr><td>g</td><td>[g]</td></tr>
      <tr><td>qu</td><td>[kw]</td></tr>
      <tr><td>x</td><td>[ks]</td></tr>
      <tr><td>ti</td><td>[t͡si]</td></tr>
    </table>

    ふざけてますね. 直します.

    <table>
      <tr><th>新</th><th>舊</th></tr>
      <tr><td>ti</td><td>[ti]</td></tr>
      <tr><td>g</td><td>[g]</td></tr>
      <tr><td>qu</td><td>[ku]</td></tr>
      <tr><td>x</td><td>[ks]</td></tr>
      <tr><td>c (e, i, y)</td><td>k [k]</td></tr>
      <tr><td>ch (El)</td><td>kh</td></tr>
      <tr><td>ch (It)</td><td>c [k]</td></tr>
      <tr><td>ch (En, Fr, Es) </td><td>c [t͡ʃ]</td></tr>
    </table>
  </section>

  <section>
    <h3>代名詞</h3>

    名詞には性も格變化も有りません. 素晴らしい.<br />
    代名詞には有ります. などて?

    <table>
      <tr>
        <th></th>
        {'我れ,汝れ,彼の男,彼の女,彼の物,何か,我れら,汝れら,彼の男ら,彼の男ら,彼の物ら'.split(',').map(s => <th>{s}</th>)}
      </tr>
      <tr>
        <th>主</th>
        <td>io</td>
        <td>tu</td>
        <td rowSpan='2'>ille</td>
        <td rowSpan='2'>illa</td>
        <td rowSpan='2'>illo</td>
        <td>il</td>
        <td rowSpan='4'>nos</td>
        <td rowSpan='4'>vos</td>
        <td rowSpan='2'>illes</td>
        <td rowSpan='2'>illas</td>
        <td rowSpan='2'>illos</td>
      </tr>
      <tr>
        <th>所</th>
        <td rowSpan='2'>me</td>
        <td rowSpan='2'>te</td>
        <td rowSpan='2'></td>
      </tr>
      <tr>
        <th>斜</th>
        <td>le</td>
        <td>la</td >
        <td>lo</td >
        <td>les</td >
        <td>las</td >
        <td>los</td >
      </tr>
    </table >

    消します.

    < table >
      <tr>
        {'我れ,汝れ,彼れ,我れら,汝れら,彼れら'.split(',').map(s => <th>{s}</th>)}
      </tr>
      <tr>
        {'me,te,le,nos,vos,les'.split(',').map(s => <td>{s}</td>)}
      </tr>
    </table >

    屬格もなるべく < code > de 主格</code > にすると良いでせう.
  </section >

  <section>
    <h2>例</h2>

    <a href='https://www.ohchr.org/en/human-rights/universal-declaration/translations/interlingua'>UDHR</a>

    <table>
      <tr>
        <td style={{ whiteSpace: 'pre-wrap' }}>
          DECLARATION UNIVERSAL DEL DERECTOS HUMAN<br />
          Articulo 1<br />
          <br />
          Tote le esseres human nasce libere e equal in dignitate e in derectos.<br />
          Illes es dotate de ration e de conscientia e debe ager le unes verso le alteres in un spirito de fraternitate.
        </td>
        <td style={{ whiteSpace: 'pre-wrap' }}>
          DEKLARATION UNIVERSAL DEL DEREKTOS HUMAN<br />
          Artikulo 1<br />
          <br />
          Tote ille esseres human naske libere e ekual in dignitate e in derektos.<br />
          Les es dotate de ration e de konskientia e debe ager ille unes verso ille alteres in un spirito de fraternitate.
        </td>
      </tr>
    </table>
  </section>
</>