import mongoose from 'mongoose';

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
    console.error('Error');
    throw new Error('Database connection required');
}

mongoose.connect(mongoUri);

export default mongoose.connection;
