export default [1, 2, 3].map(i => {
  return {
    id: `${i}`,
    title: `Title ${i}`,
    video: `Video ${i}`,
    votes: `Votes ${i}`,
    textBody: `TextBody ${i}`,
  }
})
