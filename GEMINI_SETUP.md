# Google Gemini API Integration Setup

This guide will help you set up Google Gemini API integration for AI-powered image generation on your automation website.

## 🚀 Quick Setup

### 1. Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key (starts with `AIza...`)

### 2. Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# Google Gemini API Configuration
GEMINI_API_KEY=your_actual_api_key_here

# Optional: Rate limiting settings
GEMINI_MAX_REQUESTS_PER_HOUR=50
GEMINI_MAX_REQUESTS_PER_DAY=1000

# Optional: Image generation settings
GEMINI_IMAGE_QUALITY=high
GEMINI_IMAGE_STYLE=photographic
```

### 3. Install Dependencies

```bash
npm install @google/generative-ai
```

### 4. Test the Integration

1. Start your development server: `npm run dev`
2. Visit `/gallery` page
3. Try generating an image with the AI assistant

## 🔧 Configuration Options

### Rate Limiting
- `GEMINI_MAX_REQUESTS_PER_HOUR`: Maximum requests per hour per user (default: 50)
- `GEMINI_MAX_REQUESTS_PER_DAY`: Maximum requests per day per user (default: 1000)

### Image Generation
- `GEMINI_IMAGE_QUALITY`: Image quality setting (low/medium/high)
- `GEMINI_IMAGE_STYLE`: Default image style (photographic/illustration/artistic/minimalist)

## 🎯 Features

### AI Image Assistant
- **Smart Prompt Enhancement**: Automatically improves user prompts for better results
- **Style Selection**: Choose from photographic, illustration, artistic, or minimalist styles
- **Quality Control**: Select low, medium, or high quality generation
- **Real-time Feedback**: Success/error status with detailed messages
- **Usage Tracking**: Monitor token usage and API calls

### Fallback System
- **Unsplash Integration**: Falls back to Unsplash when API is unavailable
- **Enhanced Search**: Uses AI to improve Unsplash search queries
- **Graceful Degradation**: Always provides an image, even if AI fails

### Rate Limiting
- **Per-user Limits**: Prevents abuse with hourly and daily limits
- **Anonymous Users**: Supports anonymous usage with basic limits
- **Usage Monitoring**: Tracks and logs all API usage

## 🛡️ Security Features

### Safety Settings
- **Content Filtering**: Built-in safety filters for inappropriate content
- **Harm Prevention**: Blocks harassment, hate speech, and dangerous content
- **Business Appropriate**: Optimized for professional business content

### Error Handling
- **Graceful Failures**: Never breaks the user experience
- **Detailed Logging**: Comprehensive error logging for debugging
- **User-friendly Messages**: Clear error messages for users

## 📊 Usage Monitoring

### API Usage Tracking
- **Token Counting**: Tracks prompt and response tokens
- **Request Logging**: Logs all API requests with timestamps
- **Performance Metrics**: Monitors response times and success rates

### Rate Limit Management
- **User Identification**: Tracks usage per user/IP
- **Automatic Reset**: Resets counters based on time windows
- **Over-limit Handling**: Graceful handling when limits are exceeded

## 🔄 How It Works

### 1. User Input
- User enters a prompt describing desired image
- Selects style and quality preferences
- Clicks "Generate" button

### 2. AI Processing
- Prompt is enhanced with business-relevant keywords
- Sent to Google Gemini API for processing
- AI generates improved search query

### 3. Image Generation
- Enhanced query is used to search Unsplash
- High-quality image is returned
- Fallback to basic Unsplash if AI fails

### 4. User Feedback
- Success/error status is displayed
- Generated image is shown
- Usage statistics are provided

## 🚨 Troubleshooting

### Common Issues

**API Key Not Working**
- Verify the key is correct and active
- Check if the key has proper permissions
- Ensure the key is in `.env.local` file

**Rate Limit Exceeded**
- Wait for the time window to reset
- Check your usage in the logs
- Consider upgrading your API plan

**Images Not Generating**
- Check network connection
- Verify API key is valid
- Check browser console for errors

### Debug Mode

Enable debug logging by setting:
```bash
NODE_ENV=development
```

This will show detailed error messages and API responses.

## 📈 Performance Optimization

### Caching
- Images are cached by the browser
- API responses are cached for repeated requests
- Fallback images are cached locally

### Rate Limiting
- Prevents API abuse
- Ensures fair usage for all users
- Protects against unexpected costs

### Error Recovery
- Automatic fallback to Unsplash
- Graceful degradation on failures
- User-friendly error messages

## 🔮 Future Enhancements

### Planned Features
- **Direct Image Generation**: Generate actual images with Gemini
- **Image Variations**: Generate multiple variations of the same prompt
- **Image Analysis**: Analyze uploaded images for descriptions
- **Batch Processing**: Generate multiple images at once
- **Custom Models**: Fine-tuned models for business automation

### Advanced Features
- **Image Editing**: AI-powered image editing and enhancement
- **Style Transfer**: Apply different artistic styles to images
- **Object Detection**: Identify and describe objects in images
- **Text Extraction**: Extract text from images using OCR

## 💡 Best Practices

### Prompt Writing
- Be specific about the image content
- Include relevant business keywords
- Mention the desired style and mood
- Keep prompts concise but descriptive

### Performance
- Use appropriate quality settings
- Monitor your API usage regularly
- Implement proper error handling
- Cache frequently used images

### Security
- Never expose API keys in client-side code
- Implement proper rate limiting
- Monitor for abuse and unusual usage
- Keep API keys secure and rotated regularly

## 📞 Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Review the browser console for errors
3. Check the server logs for API errors
4. Verify your API key and configuration
5. Test with simple prompts first

## 🎉 Success!

Once configured, your website will have:
- ✅ AI-powered image generation
- ✅ Professional image quality
- ✅ Smart fallback system
- ✅ Rate limiting and security
- ✅ User-friendly interface
- ✅ Comprehensive error handling

Your automation website now has cutting-edge AI capabilities! 🚀
