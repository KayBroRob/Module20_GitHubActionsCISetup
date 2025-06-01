import mongoose from 'mongoose';

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
    console.error('Error');
}

mongoose.connect(mongoUri);

export default mongoose.connection;
