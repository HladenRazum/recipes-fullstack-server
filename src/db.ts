import * as mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const CONNECTION_URI = process.env.CONNECTION_URI;

const connectDB = async () => {
   try {
      const conn = await mongoose.connect(CONNECTION_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      } as mongoose.ConnectOptions);

      console.log(`MongoDB Connected: ${conn.connection.host}`);
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
};

export { connectDB };
