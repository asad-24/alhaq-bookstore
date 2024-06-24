import mongoose from 'mongoose';

export const purchaseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
    index: true // Index for faster query
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
        index: true // Index for faster query
      },
      productName: {
        type: String,
        required: true,
        trim: true
      },
      productPrice: {
        type: Number,
        required: true,
        min: 0
      }
    }
  ],
  screenshotUrl: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

export default Purchase;
