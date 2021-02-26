const { model, Schema } = require("mongoose");
const bcrypt = require('bcryptjs');

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: [true, "Email. should be unique"],
    },
    password: {
      type: String,
      required: [true, "Password required"],
      select: false,
      minlength: 6,
    }
  },
  {
      timestamps: true
  }
);


UserSchema.pre('save', async function(next) {
  if(!this.isModified('password')){
    next();
  };
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPasswords = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
}

module.exports = model('User', UserSchema);
