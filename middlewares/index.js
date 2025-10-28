const locale = require("../locales")

const renderCmn = (lang) => (req, res, next) => {
  res.locals.lang = lang
  res.locals.tarLang = lang === "en" ? "jp" : "en"
  res.locals.title = locale[lang]["title"]
  next()
}


module.exports = {
  renderCmn,
}
