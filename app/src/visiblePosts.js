const videos = [
  {
      data: 'https://cdn.filestackcontent.com/3UBzjCZKQXKYlPJQsarL',
      file: {
        type: 'video/quicktime'
      }
  },
  {
      data: 'https://cdn.filestackcontent.com/3UBzjCZKQXKYlPJQsarL',
      file: {
        type: 'video/quicktime'
      }
  },
  {
      data: 'https://cdn.filestackcontent.com/3UBzjCZKQXKYlPJQsarL',
      file: {
        type: 'video/quicktime'
      }
  },

]

export default [0, 1, 2].map(i => {
  return {
    id: `${i}`,
    title: `Title ${i}`,
    video: videos[i],
    votes: {up: (i + 1) * 2.4, down: (i + 1) * 1.1},
    textBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  }
})
