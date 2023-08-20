import mongoose from 'mongoose';

const { Schema } = mongoose;

export const accountSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: false
  },
  subscription: {
    type: Object,
    required: true
  }
})

const Account = mongoose?.models.Account || mongoose.model('Account', accountSchema);
export default Account;
