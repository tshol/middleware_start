const db = require("../models");

exports.getDetails = (req, res) => {
  const { busName, phoneNo, email, hardestPart, amount, otherInfo,busLocation } = req.body;
  // console.log(head, subHead, description)
  const stmt =
    "call add_details(:busName,:phoneNo,:email,:hardestPart,:amount,:otherInfo,:busLocation)";
  db.sequelize
    .query(stmt, {
      replacements: {
        busName,
        phoneNo,
        email,
        hardestPart,
        amount,
        otherInfo,
        busLocation
      },
    })
    .then((results) => res.json({ results }))
    .catch((err) => res.status(500).json({ err }));
};
