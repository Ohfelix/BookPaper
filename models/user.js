import { Schema, model, models } from "mongoose";



const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is require']
    },
    username: {
        type: String,
        required: [true, 'Username is require'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-z)-9._]+(?<![_.])$/,
    "   U SERNAME INVALID, IT SHOULD CONTAIN 8-20 ALPHANUMERIC LETTERS AND BE UNIQUE !"    ]
    },
    Image: {
        type: String,
    }
});

const User = models.User || model ("User", UserSchema);

export default User;