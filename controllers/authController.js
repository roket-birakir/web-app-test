import User from "../models/user.js";

export const getLoginController = (req, res) => {
  res.render("auth/login");
};
export const postLoginController = async (req, res) => {
  const { email, password } = req.body;
  res.locals.formData = req.body;
  let error;

  if (!email) {
    error = "E-posta alanı zorunludur.";
  } else if (!password) {
    error = "Şifre alanı zorunludur.";
  } else {
    const user = await User.login(email);
    if (user) {
      req.session.user_id = user.id;
      req.session.username = user.username;
      console.log(user.id)
      console.log(user.username)
      res.redirect("/");
    } else {
      error = "Böyle bir hesap bulunamadı.";
    }
  }
  if (error) res.render("auth/login", { error });
};
