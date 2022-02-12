const { Post } = require('../models');

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    description:
      "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.",
    user_id: 1,
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;