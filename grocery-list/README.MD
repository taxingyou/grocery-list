{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red155\green162\blue177;\red36\green36\blue35;}
{\*\expandedcolortbl;;\cssrgb\c67059\c69804\c74902;\cssrgb\c18824\c18824\c18039;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 # \uc0\u55357 \u57042  AI Grocery List\
\
A smart grocery list app powered by Claude AI that understands natural language input.\
\
## Features\
\
- \uc0\u55358 \u56598  **Natural Language Processing**: Say "I need ingredients for tacos" and get a complete list\
- \uc0\u55357 \u56510  **Local Storage**: Your list persists between sessions\
- \uc0\u55357 \u56561  **Mobile Friendly**: Works great on phones and tablets\
- \uc0\u55357 \u56580  **Offline Fallback**: Still works without AI by splitting items with commas\
- \uc0\u55357 \u56523  **Easy Sharing**: Copy list to share via messages or notes\
\
## Setup Instructions\
\
### Prerequisites\
1. Claude API key from [Anthropic Console](https://console.anthropic.com)\
2. GitHub account\
3. Vercel account\
\
### Deploy to Vercel\
\
1. **Fork/Clone this repository**\
\
2. **Deploy to Vercel**:\
   ```bash\
   # Install Vercel CLI (optional)\
   npm i -g vercel\
   \
   # Deploy\
   vercel\
   ```\
   \
   Or use the Vercel Dashboard:\
   - Go to [vercel.com](https://vercel.com)\
   - Import this repository\
   - Add environment variable: `ANTHROPIC_API_KEY`\
   - Deploy!\
\
3. **Environment Variable**:\
   - Name: `ANTHROPIC_API_KEY`\
   - Value: Your Claude API key\
\
## Local Development\
\
```bash\
# Install dependencies\
npm install\
\
# Create .env file\
echo "ANTHROPIC_API_KEY=your-key-here" > .env\
\
# Run locally\
vercel dev\
```\
\
## Usage Examples\
\
- "We need milk, eggs, and bread"\
- "Ingredients for spaghetti dinner"\
- "Get stuff for breakfast tomorrow"\
- "I want to make chocolate chip cookies"\
- "We're out of coffee and sugar"\
\
## File Structure\
\
```\
\uc0\u9500 \u9472 \u9472  api/\
\uc0\u9474    \u9492 \u9472 \u9472  grocery.js      # Serverless function for Claude API\
\uc0\u9500 \u9472 \u9472  index.html          # Frontend interface\
\uc0\u9500 \u9472 \u9472  package.json        # Dependencies\
\uc0\u9500 \u9472 \u9472  vercel.json         # Vercel configuration\
\uc0\u9492 \u9472 \u9472  README.md          # This file\
```\
\
## Customization\
\
### Change AI Model\
Edit `api/grocery.js` line 31:\
```javascript\
model: 'claude-3-opus-20240229'  // For more powerful responses\
```\
\
### Adjust Styling\
Edit the CSS in `index.html` to match your preferences.\
\
## Costs\
\
- **Claude API**: ~$0.25-1.00/month for family use\
- **Vercel**: Free tier is perfect for personal use\
\
## Troubleshooting\
\
**AI not working?**\
- Check your API key is correctly set in Vercel\
- Ensure you've redeployed after adding the key\
\
**Items not saving?**\
- Check browser allows localStorage\
- Try a different browser\
\
## License\
\
MIT - Feel free to use and modify!}