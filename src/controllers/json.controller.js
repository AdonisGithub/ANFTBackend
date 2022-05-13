const fs = require("fs");
const config = require("../../config");
const HttpException = require("@utils/HttpException.utils");

const createJson = async (req, res) => {
  try {
    const newFile = `${Date.now()}.json`;
    const stream = fs.createWriteStream(`${config.dirName}/upload/${newFile}`);
    stream.write(JSON.stringify(req.body));
    res.json({
      type: "success",
      message: "successfull",
      data: newFile,
    });
  } catch (e) {
    throw new HttpException(500, "Server Error");
  }
};
module.exports = {
  createJson,
};
