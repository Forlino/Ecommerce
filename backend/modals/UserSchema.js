const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Porfavor ingrese su nombre"],
        maxLength: [30, "No se puede mas de 30 letras"],
        minLength: [4, "Su nombre debe tener mas de 4 letras"],
    },
    email: {
        type: String,
        required: [true, "Introduzca su email"],
        unique: true,
        validate: [validator.isEmail, "Porfavor ingrese un email valido"],
    },
    password: {
        type: String,
        required: [true, "Introduzca su contraseña"],
        minLength: [8, "La contraseña debe tener mas de 8 caracteres"],
        select: false,
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    },
    cartData: {
        type: Object,
        default: {},
    },
    role: {
        type: String,
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified()) { 
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});


//JWT TOKEN
UserSchema.methods.generateToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECERET, {
        expiresIn: process.env.JWT_LIFETIME,
    })
}

//compare password
UserSchema.methods.comparePassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
}

// Generating reaset passoword token
UserSchema.methods.getResetPasswordToken = function () {

    // Generating token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hasing and add to token to userSchema 
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;
}
module.exports = mongoose.models.user || mongoose.model("user", UserSchema);