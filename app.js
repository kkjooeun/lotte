const express = require("express")
const path = require("path")
const layouts = require("express-ejs-layouts")
const locale = require("./locales")
const { renderCmn } = require("./middlewares")

const app = express()
const PORT = process.env.PORT || 3000


app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.set("layout", "layout")
app.use(layouts)
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
  return res.redirect("/jp")
})


app.get("/en", renderCmn("en"), (req, res, next) => {
  res.render("home", { name: "home" })
})

app.get("/jp", renderCmn("jp"), (req, res, next) => {
  res.render("home", { name: "home" })
})

app.get("/en/event", renderCmn("en"), (req, res, next) => {
  res.render("event", { name: "event" })
})

app.get("/jp/event", renderCmn("jp"), (req, res, next) => {
  res.render("event", { name: "event" })
})

app.get("/en/booth", renderCmn("en"), (req, res, next) => {
  res.render("booth", { name: "booth" })
})

app.get("/jp/booth", renderCmn("jp"), (req, res, next) => {
  res.render("booth", { name: "booth" })
})

app.get("/en/pop01", renderCmn("en"), (req, res, next) => {
  res.render("pop01", { name: "pop01" })
})

app.get("/jp/pop01", renderCmn("jp"), (req, res, next) => {
  res.render("pop01", { name: "pop01" })
})

app.get("/en/pop02", renderCmn("en"), (req, res, next) => {
  res.render("pop02", { name: "pop02" })
})

app.get("/jp/pop02", renderCmn("jp"), (req, res, next) => {
  res.render("pop02", { name: "pop02" })
})

app.get("/en/pop03", renderCmn("en"), (req, res, next) => {
  res.render("pop03", { name: "pop03" })
})

app.get("/jp/pop03", renderCmn("jp"), (req, res, next) => {
  res.render("pop03", { name: "pop03" })
})

app.use((req, res, next) => {
  res.status(404)
  res.send("404 Error: Page not found")
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${ PORT }`)
})
