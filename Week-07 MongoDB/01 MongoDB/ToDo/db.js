import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//Schema of my db
const User = new Schema({
    username: { type: String, unique: true },             //email
    password: String,
    age: Number,
    name: String
});
const ToDo = new Schema({
    desc: String,
    done: Boolean,
    userId: ObjectId
});

//Models
//let insert data in User using Model and // Prevent OverwriteModelError 
const UserModel = mongoose.models.users || mongoose.model('users', User);
const TodoModel = mongoose.models.todos || mongoose.model('todos', ToDo);

//to user these model in other js file, we need to export this file
export {
    UserModel, TodoModel
};