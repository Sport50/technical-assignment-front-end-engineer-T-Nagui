const fs = require('fs');
let articles = require('data/articles.json');

export default async function handler(req, res) {
  const { author, title, body } = req.body;
  if (!author) {
    return res.status(500).json({ message: 'author was not found' });
  }
  if (!title) {
    return res.status(500).json({ message: 'title was not found' });
  }
  if (!body) {
    return res.status(500).json({ message: 'body was not found :p ' });
  }

  const id = articles.length + 1;

  articles.push({
    body,
    title,
    author,
    excerpt: body.substring(0, 100) + '...',
    id: id.toString()
  });

  fs.writeFileSync('data/articles.json', JSON.stringify(articles, null, 4));

  res.status(200).json({
    message: `Article with the id of ${articles.length + 1} is add it`,
    article: id
  });
}
