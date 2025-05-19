
import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

mongoose.connect('mongodb+srv://rajscripts100x:Fd34oovuyS5NIYsJ@cluster0.mqrp3kn.mongodb.net/10xDev')

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

const userModel = mongoose.model('user', userSchema)
const adminModel = mongoose.model('admin', adminSchema)
const courseModel = mongoose.model('course', courseSchema)
const purchaseModel = mongoose.model('purchase', purchaseSchema)

export {
    userModel, adminModel, courseModel, purchaseModel
};