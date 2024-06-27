var filterFunction = require("./mymodule");
var directory = process.argv[2];
var extension = process.argv[3];

filterFunction(directory, extension, (error, list) => {
  if (error) return console.error("Error detected:", error);
  list.forEach((file) => {
    console.log(file);
  });
});
