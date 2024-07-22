const { Pool } = require('pg');

// module.exports = new Pool({
//   host: 'localhost',
//   user: 'pusia',
//   database: 'top_users',
//   password: 'podate',
//   port: 5432,
// });

module.exports = new Pool({
  connectionString: 'postgresql://pusia:podate@localhost:5432/top_users',
});
