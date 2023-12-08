import { addArticles } from "../mongo";
import { getArticles } from "../mongo/services/getAllArticles";
import { getArticleData } from "./services/getArticleData";
import { getArticleLinks } from "./services/getArticleLinks";
import { Article } from "./types";
import "dotenv/config";

const mainUrl = process.env.POSTS_URL! + "/tags/dota-2";

export const getAllArticles = async () => {
  try {
    const articleUrls = await getArticleLinks(mainUrl);
    console.log('urls: ', articleUrls)
    if (!articleUrls) return [];
    const dbArticles = await getArticles();
    const promises = articleUrls.map(
      (elem) =>
        new Promise(async (resolve, reject) => {
          setTimeout(() => {
            reject(null);
          }, 60000);
          const found = dbArticles.findIndex(
            (dbElem) => dbElem.url === elem.url
          );
          if (found !== -1) {
            resolve(null)
          }
          const article = await getArticleData({
            url: elem.url,
            mainPicture: elem.mainPicture,
          });
          if (!article) resolve(null);

          resolve(article);
        })
    );
    const values = await Promise.all(promises);
    console.log(values)
    const filtered = values.filter(
      //@ts-ignore
      (elem) => elem != null && elem?.content && elem.title && elem.url
    );
    await addArticles(filtered as Article[]);
    return filtered;
  } catch (err) {
    console.log(err);
  }
};
