
import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

const userSchema = new Schema({
    // _id: ObjectId,
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
})
const adminSchema = new Schema({
    // _id: ObjectId,
    email: String,
    password: String,
    firstName: String,
    lastName: String
})

const courseSchema = new Schema({
    // _id: ObjectId,
    title: String,
    desc: String,
    price: Number,
    imgUrl: String,
    adminId: ObjectId
})

const purchaseSchema = new Schema({
    // _id: ObjectId,
    userId: ObjectId,
    courseId: ObjectId
})

const userModel = mongoose.Model('user', userSchema)
const adminModel = mongoose.Model('user', adminModel)
const courseModel = mongoose.Model('user', courseModel)
const purchaseModel = mongoose.Model('user', purchaseModel)