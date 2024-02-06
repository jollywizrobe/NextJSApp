const MONGO_URI = process.env.MONGO_URI;

async function dbConnect() {
  mongoose.connect(MONGO_URI);
}

export default dbConnect;
