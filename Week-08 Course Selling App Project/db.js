import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

const userSchema = new Schema({
    _id: ObjectId,
    email: String,
    password: String,
    firstName: String,
    lastName: String
})
const adminSchema = new Schema({
    _id: ObjectId,
    email: String,
    password: String,
    firstName: String,
    lastName: String
})
const courseSchema = new Schema({
    _id: ObjectId,
    email: String,
    password: String,
    firstName: String,
    lastName: String
})

const purchaseSchema = new Schema({
    _id: ObjectId,
    email: String,
    password: String,
    firstName: String,
    lastName: String
})