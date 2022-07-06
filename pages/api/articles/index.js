const fs = require('fs');
let articles = require('data/articles.json');

export default function handler(_, res) {
  res.status(200).json(articles);
}
