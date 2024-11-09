const {getBlog,postBlog,putBlog,deleteBlog} = require("../Controller/BlogController")
const { login } = require("../Controller/UserController")

const route = require("express").Router()

route.get("/",getBlog)
route.post("/",postBlog)
route.post("/login",login)
route.put("/:id",putBlog)
route.delete("/:id",deleteBlog)

module.exports = route 