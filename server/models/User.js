const { Schema, model } = require("mongoose");

const userSchema = new Schema({
        name: {
            type: String,
            required: [true, "User cannot be empty"],
        },
        email: {
            type: String,
            required: true,
            unique: [true, "Email cannot be empty"],
        },
        password: {
            type: String,
            required: [true, "Password cannot be empty"],
        }
    },

    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

const User = model("User", userSchema);

module.exports = User;