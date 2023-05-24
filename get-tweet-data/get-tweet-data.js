// Please do not change the name of this function
function getTweetData(tweet) {
  const res = { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: tweet.length };
  console.log({ tweet });
  tweet.split(" ").forEach((x) => {
    if (x[0] === "@" && !res.mentionCount) {
      res.mentionCount++;
      res.mentions.push(x);
      return x;
    }
    if (x[0] === "#" && !res.tagCount) {
      res.tagCount++;
      res.tags.push(x);
      return x;
    }
  });
  return res;
}

module.exports = getTweetData;
