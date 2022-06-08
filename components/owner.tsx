export default () => {
  return <>
    <div style={{ textAlign: 'center' }}>
      <img src='/avatar.gif' alt='avatar' width='200px' style={{ borderRadius: '50%', border: '1px solid' }} />
    </div>

    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <ul>
        <li>軟件工程師</li>
        <li>語學趣味者
          <ul>
            <li>TOEIC L&R 810/990 (2017): B2相當</li>
            <li>英檢 準1級 2555/3000 (2021): B2相當</li>
            <li>HSK 4級 235/300 (2021): A2相當</li>
            <li>FR, YUE: A1未滿</li>
          </ul>
        </li>
        <li>男性愛者</li>
        <li>自由主義者</li>
      </ul>
    </div>

    <div className='evenly' style={{ marginTop: '1em' }}>
      <a href='https://twitter.com/intent/user?user_id=759648849786920960'>
        <img src='twitter-logo-01282021/Twitter logo/SVG/Logo white.svg' alt='twitter icon' width='48px' />
      </a>

      <a href='https://discordapp.com/users/335857821629546496'>
        <img src='Discord-Logo-White.svg' alt='discord icon' width='48px' />
      </a>

      <a href='https://twitter.com/intent/user?user_id=759648849786920960'>
        <img src='GitHub-Mark/PNG/GitHub-Mark-Light-64px.png' alt='github icon' width='48px' />
      </a>
    </div>
  </>
}