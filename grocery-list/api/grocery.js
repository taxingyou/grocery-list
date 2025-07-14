{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red155\green162\blue177;\red36\green36\blue35;}
{\*\expandedcolortbl;;\cssrgb\c67059\c69804\c74902;\cssrgb\c18824\c18824\c18039;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // api/grocery.js - Vercel Serverless Function\
// This handles the Claude API calls securely\
\
import Anthropic from '@anthropic-ai/sdk';\
\
const anthropic = new Anthropic(\{\
  apiKey: process.env.ANTHROPIC_API_KEY,\
\});\
\
export default async function handler(req, res) \{\
  // Enable CORS\
  res.setHeader('Access-Control-Allow-Origin', '*');\
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');\
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');\
\
  if (req.method === 'OPTIONS') \{\
    return res.status(200).end();\
  \}\
\
  if (req.method !== 'POST') \{\
    return res.status(405).json(\{ error: 'Method not allowed' \});\
  \}\
\
  try \{\
    const \{ input \} = req.body;\
\
    if (!input) \{\
      return res.status(400).json(\{ error: 'No input provided' \});\
    \}\
\
    // Call Claude API\
    const message = await anthropic.messages.create(\{\
      model: 'claude-3-haiku-20240307', // Using Haiku for speed and cost efficiency\
      max_tokens: 300,\
      temperature: 0,\
      system: `You are a helpful grocery list assistant. Extract grocery items from natural language input. Include quantities when mentioned. Be smart about understanding context - if someone says "ingredients for tacos", list common taco ingredients like ground beef, tortillas, cheese, lettuce, tomatoes, salsa. If they mention a recipe or meal, extract all the likely ingredients. Respond ONLY with a JSON object containing an array of items.`,\
      messages: [\
        \{\
          role: 'user',\
          content: `Extract grocery items from this text and respond with ONLY a JSON object in this format: \{"items": ["item 1", "item 2"]\}\
\
Examples:\
- "I need milk and eggs" -> \{"items": ["milk", "eggs"]\}\
- "ingredients for spaghetti" -> \{"items": ["spaghetti pasta", "tomato sauce", "ground beef", "onion", "garlic", "parmesan cheese"]\}\
- "stuff for breakfast" -> \{"items": ["eggs", "bread", "butter", "orange juice", "cereal", "milk"]\}\
\
Text: "$\{input\}"`\
        \}\
      ]\
    \});\
\
    // Parse the response\
    const responseText = message.content[0].text;\
    const parsed = JSON.parse(responseText);\
\
    res.status(200).json(parsed);\
  \} catch (error) \{\
    console.error('Error:', error);\
    \
    // Fallback to simple parsing if API fails\
    const items = input.split(/[,;]/)\
      .map(item => item.trim())\
      .filter(item => item.length > 0);\
    \
    res.status(200).json(\{ items, fallback: true \});\
  \}\
\}\
}