import { TwitterTweetEmbed } from 'react-twitter-embed'

export default () => <>
  <h2>LON</h2>

  <div className='tweets'>
    <TwitterTweetEmbed tweetId='1425831886060802056' options={{ theme: "dark" }} />
    <TwitterTweetEmbed tweetId='1429464857263239174' options={{ theme: "dark" }} />
    <TwitterTweetEmbed tweetId='1469924091708993536' options={{ theme: "dark" }} />
    <TwitterTweetEmbed tweetId='1470417761612734465' options={{ theme: "dark" }} />
    <TwitterTweetEmbed tweetId='1476165285476708353' options={{ theme: "dark" }} />
    <TwitterTweetEmbed tweetId='1477480446657437700' options={{ theme: "dark" }} />
    <TwitterTweetEmbed tweetId='1479083414209048578' options={{ theme: "dark" }} />
    <TwitterTweetEmbed tweetId='1483129180187672577' options={{ theme: "dark" }} />
    <TwitterTweetEmbed tweetId='1488170066613272577' options={{ theme: "dark" }} />
  </div>
</>