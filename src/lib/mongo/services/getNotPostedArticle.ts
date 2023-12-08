import mongoose from "mongoose"
import { Post } from "../schemas/Post"
import 'dotenv/config'


export const getNotPostedArticle = async() => {
    await mongoose.connect(process.env.MONGO_URL!)
    const article = await Post.findOne({posted: false})
    if(article){
      await Post.findOneAndUpdate({url: article.url}, {posted: true})
      await mongoose.disconnect()
      return article
    }
    
  }