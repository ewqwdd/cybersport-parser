import { Telegraf } from "telegraf";
import "dotenv/config";
import { getAllArticles } from "./lib/scrapping/getAllArticles";
import { getNotPostedArticle } from "./lib/mongo";
import { generatePhoto } from "./bot";
import { generateText } from "./bot/generateMessage/generateText";
import { request } from "./lib/openAI/request";
import Scheduler from 'node-schedule'

const bot = new Telegraf(process.env.BOT_TOKEN!);

bot.telegram.setMyCommands([
  {
    command: "fetch",
    description: "Fetch articles",
  },
  {
    command: "post",
    description: "Post articles",
  },
]);

bot.command("fetch", async (ctx) => {
  await fetchArticles();
});

bot.command("post", async (ctx) => {
  await postArticle();
});

const fetchArticles = async () => {
  console.log("Fetching...");
  await getAllArticles();
  console.log("Successfully");
};

const postArticle = async () => {
  try {
    const article = await getNotPostedArticle();
    const parsed = article?.toObject()
    if (!parsed) return;
    const content = await request(parsed.content) || parsed.content
    if (parsed.mainPicture) {
      //@ts-ignore
      await bot.telegram.sendPhoto(...generatePhoto({...parsed, content: content}))
    } else {
      await bot.telegram.sendMessage(...generateText({...parsed, content: content}));
    }
  } catch (err) {
    console.log(err);
  }
};

const postSchedule = Scheduler.scheduleJob('*/5 * * * *', function(){
  postArticle()
});

const fetchSchedule = Scheduler.scheduleJob('*/30 * * * *', function(){
  fetchArticles()
});

bot.launch();
