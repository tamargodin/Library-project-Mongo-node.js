import mongoose, { Schema, Document } from 'mongoose';

export interface Book extends Document {
  id: number;
  title: string;
  author: string;
  genre: string;
  publicationYear: number;
  AvailableCopies: number;
}

const BookSchema: Schema = new Schema({
  id: { type: Number, required: true},
  title: { type: String, required: true},
  author: { type: String, required: true},
  genre: { type: String, required: true},
  publicationYear: { type: Number, required: true},
  AvailableCopies: { type: Number, required: true}
});

// Instance method
BookSchema.methods.getBookInfo = function() {
  return `title: ${this.title}, author: ${this.author}, genre: ${this.genre}, publicationYear: ${this.publicationYear}, AvailableCopies: ${this.AvailableCopies}`;
};

// Static method
// ProductSchema.statics.findByPriceRange = function(min: number, max: number) {
//   return this.find({ price: { $gte: min, $lte: max } });
// };

export default mongoose.model<Book>('Book', BookSchema);