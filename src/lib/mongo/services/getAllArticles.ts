import mongoose from "mongoose"
import { Post } from "../schemas/Post"
import 'dotenv/config'


export const getArticles = async() => {
    await mongoose.connect(process.env.MONGO_URL!)
    const articles = await Post.find({}).sort({ date: -1 }).limit(50)
    await mongoose.disconnect()
    return articles
}