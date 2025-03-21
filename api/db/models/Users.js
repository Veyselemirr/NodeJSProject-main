const mongoose = require("mongoose");
const Enum = require("../../config/Enum");
const is = require("is_js");
const { DEFAULT_LANG } = require("../../config/Enum");
const CustomError = require("../../lib/Error");
const bcrypt = require("bcrypt-nodejs");

const schema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: String,
    is_active: Boolean,
    first_name: String,
    last_name: String,
    phone_number: String,
    language: { type: String, default: DEFAULT_LANG }
}, {
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})

class Users extends mongoose.Model {

    validPassword(password) {
        return bcrypt.compareSync(password, this.password);
    }

    static validateFieldsBeforeAuth(email, password) {
        if (typeof password !== "string" || password.length < Enum.PASS_LENGTH || is.not.email(email))
            throw new CustomError(Enum.HTTP_CODES.UNAUTHORIZED, "validation error", "E posta veya şifre hatalı");
        return null;
    }
}

schema.loadClass(Users);
module.exports = mongoose.model("users", schema)