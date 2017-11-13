"use strict";

let blog = require("./blog.js");

let firebaseKey = "";
let userUid = "";

const setKey = (key) => {
  firebaseKey = key;
  getBlogs();
};

const getBlogs = () => {
  return new Promise ((resolve, reject) => {
    $.ajax(`${firebaseKey.databaseURL}/blogs.json`).then((blogs) => {
        blog.blogBuilder(blogs);
        resolve(blogs);

      }).catch((err) => {
        reject(err);
      });
  });
};

module.exports = {setKey};
