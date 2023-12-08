import { Schema, model } from "mongoose";
import { Article } from "../../scrapping/types";

export interface PostTypesSchema extends Article {
  createdAt: Date 
  posted: boolean
} 

const PostSchema = new Schema<PostTypesSchema>({
    url: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    title: String,
    content: String,
    mainPicture: String,
    posted: Boolean
  });

export const Post = model('Post', PostSchema);
