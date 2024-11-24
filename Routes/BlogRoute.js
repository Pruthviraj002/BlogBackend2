const {getBlog,postBlog,putBlog,deleteBlog} = require("../Controller/BlogController")
const { login } = require("../Controller/UserController")
const auth = require("../middleware/auth")

const route = require("express").Router()

route.get("/",getBlog)
route.post("/",auth,postBlog)
route.post("/login",auth,login)
route.put("/:id",auth,putBlog)
route.delete("/:id",auth,deleteBlog)

module.exports = route 