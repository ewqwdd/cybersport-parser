import OpenAI from "openai";
import 'dotenv/config'
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export async function request(content: string) {
  try{
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content}],
      model: "gpt-3.5-turbo-16k",
    });
  
    return completion.choices[0].message.content
  } catch(err) {
    console.log(err)
  }
  
}

// request();
