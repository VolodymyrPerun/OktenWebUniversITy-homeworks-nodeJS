
const {provider} = require('../../dataBase');

module.exports = async (req, res, next) => {
  try {
      const {email, password} = req.body;

      const query = `SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`;
      const [findingUser] = await provider.promise().query(query);

      if(!findingUser.length){
          throw new Error('Incorrect password or email')
      }

      [req.user] = findingUser;
      next()

  }  catch (e) {
      res.status(400).json(e.message);
  }
};