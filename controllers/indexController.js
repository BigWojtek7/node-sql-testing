const path = require('path');
const db = require('../db/queries');

exports.usernames_get = async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log(`Usernames: ${usernames}`);
  res.send(`Usernames: ${usernames.map((user) => user.username).join(', ')} <a href="/new">Add new username </a>`);
};

exports.new_username_get = (req, res) => {
  res.sendFile(path.join(__dirname, '../public/new_user.html'));
};

exports.new_username_post = async (req, res) => {
  console.log(req.body, '1')
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect('/');
};
