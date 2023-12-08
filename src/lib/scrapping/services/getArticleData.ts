import cheerio from "cheerio";
import axios from "axios";
import { ArtcleUrls, Article } from "../types";
import "dotenv/config";

const mainUrl = process.env.POSTS_URL!

export async function getArticleData({url, mainPicture}: ArtcleUrls): Promise<Article | undefined> {
    try {
        const { data } = await axios.get(mainUrl + url)
        const $ = cheerio.load(data)
        const title = $("article header h1").text()
        const content = $("article .text-content").text()
        const article: Article = { url, mainPicture, content, title }
        return article
    } catch(err) {
        console.log(err)
    }
}
// (async() => {
//     const article = await getArticleData({url})
//     if(!article?.content) return
//     console.log(genereteRequestText(article?.content))
// })()
