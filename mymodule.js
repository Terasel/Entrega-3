const fs = require("fs");
const path = require("path");

module.exports = (directory, extension, callback) => {
  fs.readdir(directory, (error, list) => {
    if (error) return callback(error);
    list = list.filter((file) => {
      return path.extname(file) === "." + extension;
    });
    callback(null, list);
  });
};
