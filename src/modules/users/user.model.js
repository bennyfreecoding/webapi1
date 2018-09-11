import moogoose, {Schema} from 'mongoose';
import validator from 'validator';
import {passwordReg} from './user.validations'

const UserSchema = new Schema ({
  email:{
    type:String,
    unique:true,
    required:[true,'Email is required!'],
    trim:true,
    validate:{
      validator(email){
        return validator.isEmail(email);
      },
      message: '{VALUE} is not a valid email!'
    }
  },
  firstName:{
    type: String,
    required: [true,'First name is required!'],
    trim: true
    },
  astName:{
    type: String,
    required: [true,'Last name is required!'],
    trim: true
  },
  password:{
    type: String,
    required: [true,'Password name is required!'],
    trim: true,
    minlength: [6,'Password need to b longer!'],
    validate: {
      validator(password){
        return passwordReg.test(password);
      },
      message: '{VALUE} is not a valid password!'
    }
  },
});

export default mongoose.model('User',UserSchema)
