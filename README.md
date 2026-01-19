<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/10I-90wnydwq-ZW3oJPuhamSD6kvNRY2u

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy on Vercel

This project is configured to work optimally with Vercel. To deploy:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in Vercel
3. Configure environment variables in Vercel dashboard:
   - `GEMINI_API_KEY`: Your Gemini API key
   - `NEXT_PUBLIC_APP_URL`: Your Vercel app URL
   - `NEXT_PUBLIC_SIRINE_AVATAR_URL`: https://sirine-avatar.vercel.app/
4. Deploy!

### Microphone Configuration

The microphone feature for the Sirine avatar is already configured in this project:

- The `vercel.json` file includes the necessary permissions for microphone access
- The iframe in `Header.tsx` has all required attributes for microphone functionality
- Make sure users allow microphone access when prompted by the browser

If you encounter microphone issues on Vercel:
1. Ensure your site is served over HTTPS (Vercel does this by default)
2. Check that the `vercel.json` file is deployed with your project
3. Verify that users are allowing microphone permissions in their browser
