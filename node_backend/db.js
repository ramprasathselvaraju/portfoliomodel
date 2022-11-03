const mongoose = require('mongoose')

const URI ='mongodb+srv://r482760:r482760@cluster0.q4n6gz3.mongodb.net/stock?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
      const connection = await mongoose.connect(
          URI,
          {
              useCreateIndex: true,
              useNewUrlParser: true,
              useFindAndModify: false,
              useUnifiedTopology: true
          }
      )
      console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
      console.log(`MongoDB error when connecting: ${error}`);
  }
}
connectDB()
module.exports = mongoose
