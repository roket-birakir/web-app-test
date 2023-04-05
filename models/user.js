import db from "../db.js";

class User {
    static login(email) {
        const user = db.find(value => value.email === email);

        if(user) {
            return user;
        } else {
            return;
        }
    }
}
export default User;