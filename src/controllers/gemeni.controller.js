import { GoogleGenerativeAI } from "@google/generative-ai";
/**
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 */

export const generate = async (req, res) => {
  const prompt = req.query.prompt;
  if (!prompt)
    return res.status(400).json({
      msg: "Propmpt must be provided",
      statusCode: 400,
    });
  try {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.status(200).json({
      msg: text,
      statusCode: 200,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Something went wrong",
      statusCode: 500,
    });
  }
};
