import { body } from "express-validator";
const loginValidation = [
    body("email")
    .isEmail()
    .withMessage('Geçerli bir e-posta adresi giriniz.'),
    body("password")
    .isLength({min: 8, max: 16})
    .withMessage("Şifreniz en az 8, en fazla 16 karakter içerebilir.")
];
export default loginValidation;