# 🛒 AI Grocery List

A smart grocery list app powered by Claude AI that understands natural language input.

## Features

- 🤖 **Natural Language Processing**: Say "I need ingredients for tacos" and get a complete list
- 💾 **Local Storage**: Your list persists between sessions
- 📱 **Mobile Friendly**: Works great on phones and tablets
- 🔄 **Offline Fallback**: Still works without AI by splitting items with commas
- 📋 **Easy Sharing**: Copy list to share via messages or notes

## Setup Instructions

### Prerequisites
1. Claude API key from [Anthropic Console](https://console.anthropic.com)
2. GitHub account
3. Vercel account

### Deploy to Vercel

1. **Fork/Clone this repository**

2. **Deploy to Vercel**:
   ```bash
   # Install Vercel CLI (optional)
   npm i -g vercel
   
   # Deploy
   vercel
   ```
   
   Or use the Vercel Dashboard:
   - Go to [vercel.com](https://vercel.com)
   - Import this repository
   - Add environment variable: `ANTHROPIC_API_KEY`
   - Deploy!

3. **Environment Variable**:
   - Name: `ANTHROPIC_API_KEY`
   - Value: Your Claude API key

## Local Development

```bash
# Install dependencies
npm install

# Create .env file
echo "ANTHROPIC_API_KEY=your-key-here" > .env

# Run locally
vercel dev
```

## Usage Examples

- "We need milk, eggs, and bread"
- "Ingredients for spaghetti dinner"
- "Get stuff for breakfast tomorrow"
- "I want to make chocolate chip cookies"
- "We're out of coffee and sugar"

## File Structure

```
├── api/
│   └── grocery.js      # Serverless function for Claude API
├── index.html          # Frontend interface
├── package.json        # Dependencies
├── vercel.json         # Vercel configuration
└── README.md          # This file
```

## Customization

### Change AI Model
Edit `api/grocery.js` line 31:
```javascript
model: 'claude-3-opus-20240229'  // For more powerful responses
```

### Adjust Styling
Edit the CSS in `index.html` to match your preferences.

## Costs

- **Claude API**: ~$0.25-1.00/month for family use
- **Vercel**: Free tier is perfect for personal use

## Troubleshooting

**AI not working?**
- Check your API key is correctly set in Vercel
- Ensure you've redeployed after adding the key

**Items not saving?**
- Check browser allows localStorage
- Try a different browser

## License

MIT - Feel free to use and modify!
