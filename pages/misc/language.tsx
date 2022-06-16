import { NextSeo } from 'next-seo'

const title = '改良interlingua'
export default () => <>
  <NextSeo title={title} />
  <h2>{title}</h2>

  <table>
    <tr>
      <th>language</th>
      <th>status</th>
    </tr>
    <tr>
      <td>JA</td>
      <td>母語.</td>
    </tr>
    <tr>
      <td>EN</td>
      <td>最初の外語. 中學校と高校で學んだ</td>
    </tr>
    <tr>
      <td>DE</td>
      <td>
        中學生の頃に文法書を買って讀んだ. 發音や語順は容易だったが格變化で挫折した.
        大學でも履修したが, 結局覺𛀁なかった.
      </td>
    </tr>
    <tr>
      <td>JBO</td>
      <td></td>
    </tr>
    <tr>
      <td>YUE</td>
      <td></td>
    </tr>
    <tr>
      <td>CMN</td>
      <td></td>
    </tr>
    <tr>
      <td>FR</td>
      <td></td>
    </tr>
    <tr>
      <td>ES</td>
      <td></td>
    </tr>
    <tr>
      <td>FA</td>
      <td></td>
    </tr>
  </table>
</>