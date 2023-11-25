const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://batravansh162:4K0svos3QDQzbR3S@cluster0.twrss5j.mongodb.net/ecommerce?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
