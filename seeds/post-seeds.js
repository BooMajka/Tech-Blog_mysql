const { Post } = require('../models');

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    description: " Lorem campione.",
    img_url: './img/img-01.jpg',
    user_id: 1,
  },
  {
    title: "This is the title for next post.",
    description: "This is the description for next post",
    img_url: './img/img-02.jpg',
    user_id: 1,
  },
  {
    title: "lorem Ipsum",
    description: "Donec posuere metus vitae ipsum.",
    img_url: './img/img-03.jpg',
    user_id: 1,
  },
  {
    title: "jsgkb HSusahidw hdwihd",
    description: "askjfke dhiwohd",
    img_url: './img/img-04.jpg',
    user_id: 1,
  },
  {
    title: "This is the title for another post.",
    description: "This is the description for another post",
    img_url: './img/img-05.jpg',
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;