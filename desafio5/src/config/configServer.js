import mongoose from 'mongoose';

const url = "mongodb+srv://nicoasis7:wlJ6fKMqSrbdpMc7@cluster0.2yrsmeq.mongodb.net/?retryWrites=true&w=majority";


const connectToDB = () => {
    try {
        mongoose.connect(url)
        console.log('connected to DB e-commerce')
    } catch (error) {
        console.log(error);
    }
};

export default connectToDB

