import mongoose from "mongoose"
import { Post } from "../schemas/Post"
import 'dotenv/config'
import { Article } from "../../scrapping/types"

export const addArticles = async(articles: Article[]) => {
    await mongoose.connect(process.env.MONGO_URL!)
    await Post.insertMany(articles.map(elem => ({...elem, posted: false})))
    await mongoose.disconnect()
}