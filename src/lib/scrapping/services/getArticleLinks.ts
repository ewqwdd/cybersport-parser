import cheerio from "cheerio";
import axios from "axios";
import { ArtcleUrls, Article } from "../types";

export async function getArticleLinks(url: string): Promise<ArtcleUrls[] | undefined> {
    try {
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        const headers = $("article a.link_CocWY")
        const articles: ArtcleUrls[] = []
        headers.each((i, el)=>{
            const attr = el.attribs['href']
            const img = $(el).find('.image_f4Qfq img').attr('src')
            if(attr) articles.push({url: attr, mainPicture: img})
        })
        return articles
    } catch(err) {
        console.log(err)
    }
}

// getArticleLinks()