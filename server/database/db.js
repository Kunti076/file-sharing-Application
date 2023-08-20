import mongoose from 'mongoose';


const DBConnection = async() => {
  const MONODB_URI = `mongodb+srv://kuntimeena:eNVIumkE0LzBZWYc@cluster0.jnltpkv.mongodb.net/file-sharing`;
    try {
   await mongoose.connect(MONODB_URI, { useNewUrlParser: true});
    console.log('Database connected successfully');   
} catch (error) {
        console.error('Error while connecting with the database', error.message);
         
    }
}

export default DBConnection;