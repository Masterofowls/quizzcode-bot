# CodeQuizz - Master Programming Concepts

An interactive web application for mastering programming concepts through quizzes. Features multiple programming topics, difficulty filtering, progress tracking, and a beautiful dark-themed interface.

## 🚀 Features

- **Multiple Programming Topics**: JavaScript, TypeScript, React, Python, Django, CSS, and more
- **Difficulty Levels**: Filter topics by Easy, Medium, or Hard difficulty
- **Progress Tracking**: Track your quiz completion, accuracy, and current streak
- **User Authentication**: Sign in with GitHub to save your progress
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Beautiful UI**: Dark theme with cyan accents and smooth animations

## 📦 Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **Shadcn UI v4** components
- **Phosphor Icons** for iconography
- **GitHub Spark** for user authentication and persistence

## 🛠️ Development

### Prerequisites
- Node.js 20+
- npm

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages.

### Quick Setup

1. **Enable GitHub Pages**:
   - Go to Repository Settings → Pages
   - Select **GitHub Actions** as the source

2. **Push to main branch**:
```bash
git push origin main
```

3. **Access your site**:
```
https://[your-username].github.io/spark-template/
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 📚 Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # Shadcn UI components
│   ├── TopicCard.tsx
│   ├── QuizQuestion.tsx
│   └── ...
├── lib/             # Utilities and data
│   ├── quizData.ts  # Quiz questions and topics
│   ├── types.ts     # TypeScript types
│   └── utils.ts     # Helper functions
├── hooks/           # Custom React hooks
├── styles/          # CSS styles
├── App.tsx          # Main application component
└── index.css        # Global styles and theme
```

## 🎨 Customization

### Adding New Topics

Edit `src/lib/quizData.ts` to add new quiz topics and questions.

### Changing Theme Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --background: oklch(0.15 0.01 260);
  --primary: oklch(0.45 0.15 290);
  --accent: oklch(0.75 0.15 195);
  /* ... */
}
```

## 📄 License

The Spark Template files and resources from GitHub are licensed under the terms of the MIT license, Copyright GitHub, Inc.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Built with ❤️ using [GitHub Spark](https://githubnext.com/projects/spark)
