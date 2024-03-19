import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  BookBorrowed: string[];
  status: number;
}

const UserSchema: Schema = new Schema({
  id: { type: Number, required: true},
  name: { type: String, required: true},
  email: { type: String, required: true, validate:{validator:(value:string)=>{return value.includes('@');},message:'not a valid email.'}},
  phone: { type: String, required: true, validate:{validator:(value:string)=>{return (value.length==10||value.length==9);},message:'not a valid phone number.'}},
  password: { type: String, required: true, validate:{validator:(value:string)=>{return value.length>2;},message:'password must contain at least 3 chars.'}},
  BookBorrowed: { type: String, required: true},
  status: { type: Number, required: true,validate:{validator:(value:number)=>{return (value == 0||value == 1);},message:'status must be 0 or 1.'} }
});

// Instance method
UserSchema.methods.getUserInfo = function() {
  return `name: ${this.name}, email: ${this.email}, phone: ${this.phone}, password: ${this.password}, BookBorrowed: ${this.BookBorrowed}, status: ${this.status}`;
};

// // Static method
// ProductSchema.statics.findByPriceRange = function(min: number, max: number) {
//   return this.find({ price: { $gte: min, $lte: max } });
// };

export default mongoose.model<User>('User', UserSchema);
