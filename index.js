import express from 'express';
import userRoute from './api/routes/authRoute';

const app = express();
app.use(express.json());


// mongoose.connect(
//   process.env.MONGO_DB || process.env.MONGO_TEST_DB,
//   {
//     useNewUrlParser: true,
//   },
// )
//   .then(() => console.log('Connected to mongodb'))
//   .catch((err) => console.log('Failed to connect', err));

app.use(userRoute);

export default app;
