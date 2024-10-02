module.exports = {
    proxy: "http://localhost:3000",
    port: 3001,
    files: ["views/**/*.*", "public/**/*.*"],
    notify: false,
    open: false
  };