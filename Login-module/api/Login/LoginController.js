//get Albums songs list 
const {LoginModel:{get_login}} = require('../../commons/db')

const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");




exports.get_login = (req, res) => {
  const body = req.body;
  console.log("boddduuuu data ", body);

  get_login(body.email, (err, results) => {
    console.log("results data ", results);
    const [resultData] = results;
    console.log("resultData : ", resultData);

    if (err) {
      console.log(err);
    }
    if (!results || (resultData === null)) {
      return res.json({
        success: 0,
        message: "Invalid email or password"
      });
    }
    const result = bcrypt.compareSync(body.password, resultData.password);

    if (result) {
      //   results.password = undefined;
      const jsontoken = sign({ result: results }, "qwe1234", {
        expiresIn: "1h"
      });
      console.log(jsontoken);
      return res.json({
        success: 1,
        message: "login successfully",
        token: jsontoken,
        name: resultData.name,
        id: resultData.id

      });
    } else {
      return res.json({
        success: 0,
        message: "Invalid email or password"
      });
    }
  })

}
