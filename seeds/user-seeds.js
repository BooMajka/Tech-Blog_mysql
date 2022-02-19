const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'maya',
    email: 'maya@gmail.com',
    password: '123'
  }
]

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;