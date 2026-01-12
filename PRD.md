# Programming Quiz Platform

An interactive web-based programming quiz platform that helps developers test and improve their coding knowledge across multiple programming languages and frameworks with personalized progress tracking.

**Experience Qualities**:
1. **Engaging** - Gamified quiz experience with instant feedback that makes learning programming concepts feel rewarding and addictive
2. **Educational** - Clear explanations and helpful hints that teach rather than just test, building real understanding
3. **Progressive** - Adaptive difficulty and tracked progress that shows growth over time, motivating continued learning

**Complexity Level**: Complex Application (advanced functionality, likely with multiple views)
This is a feature-rich educational platform requiring user authentication, multi-topic content management, progress persistence, quiz state management, scoring systems, and multiple interactive views for different learning modes.

## Essential Features

### User Authentication & Profile System
- **Functionality**: GitHub-based user authentication with persistent profiles storing quiz history, scores, and preferences
- **Purpose**: Enables personalized learning paths and progress tracking across sessions
- **Trigger**: User clicks "Sign In" or attempts to take a quiz
- **Progression**: User sees profile card → GitHub user info displayed → Access to personalized dashboard with stats
- **Success criteria**: User profile persists across sessions, displays avatar/username, shows accurate quiz statistics

### Topic Selection & Navigation
- **Functionality**: Browse and select from 6+ programming topics (JavaScript, TypeScript, React, Python, Django, CSS, etc.) with difficulty filtering and sorting options
- **Purpose**: Allows users to focus on specific technologies they want to learn or practice, filter by difficulty level, and sort by various criteria
- **Trigger**: User lands on dashboard or clicks topic selector
- **Progression**: View topic grid with icons → Apply difficulty filters (Easy/Medium/Hard) → Sort by name, difficulty, or progress → See progress per topic → Click topic → Enter quiz mode for that topic
- **Success criteria**: All topics visible, filtering works correctly, sorting options function properly, progress indicators accurate, smooth navigation between topics

### Interactive Quiz Engine
- **Functionality**: Multiple-choice questions with code snippets, syntax highlighting, and instant validation
- **Purpose**: Test knowledge and teach through immediate feedback with explanations
- **Trigger**: User selects a topic and clicks "Start Quiz"
- **Progression**: Question displayed with code → User selects answer → Instant feedback (correct/incorrect) → Explanation shown → Next question or results
- **Success criteria**: Questions render properly, code is syntax-highlighted, validation is accurate, explanations are clear

### Progress Tracking & Statistics
- **Functionality**: Visual dashboard showing completion rates, scores, streaks, and topic mastery levels
- **Purpose**: Motivate continued learning by visualizing improvement and achievements
- **Trigger**: User completes quiz or views dashboard
- **Progression**: Dashboard loads → Charts/stats animate in → User sees overall progress and per-topic breakdown → Identifies areas to improve
- **Success criteria**: Progress persists across sessions, statistics are accurate, visualizations are clear and motivating

### Quiz Results & Review
- **Functionality**: Detailed results screen showing score, correct/incorrect answers, and performance analysis
- **Purpose**: Reinforce learning by reviewing mistakes and understanding correct solutions
- **Trigger**: User completes all questions in a quiz
- **Progression**: Final question submitted → Results calculated → Score displayed with breakdown → Option to review answers or retake
- **Success criteria**: Accurate scoring, clear answer review, option to retry or select new topic

## Edge Case Handling

- **No User Login**: Guest mode allows exploring topics and sample questions, but prompts login to save progress
- **Empty Progress**: First-time users see welcome message with tutorial overlay explaining how to get started
- **No Matching Filters**: When filters result in no topics, show helpful message with suggestion to adjust filters
- **Quiz Interruption**: Progress automatically saves on each question, allowing users to resume where they left off
- **Invalid Answers**: All inputs validated before submission, disabled state prevents multiple submissions
- **No Internet**: Offline state detected with friendly message, last loaded content remains accessible
- **Rapid Clicking**: Button debouncing prevents double submissions and state conflicts
- **404 Errors**: Custom styled 404 page matching app design, redirects users back to dashboard on GitHub Pages

## Design Direction

The design should evoke the feeling of a modern code editor meets gaming platform - technical and precise yet playful and rewarding. Think VS Code's sophistication combined with Duolingo's encouragement. Dark-themed with vibrant accent colors that celebrate correct answers and gently guide through incorrect ones. The interface should feel like a developer's natural environment while being welcoming to learners at all levels.

## Color Selection

A dark, code-editor inspired palette with vibrant accent colors that create energy and focus.

- **Primary Color**: Deep purple/violet `oklch(0.45 0.15 290)` - Represents creativity and technical expertise, used for primary actions and quiz progress
- **Secondary Colors**: Dark slate backgrounds `oklch(0.15 0.01 260)` and medium gray panels `oklch(0.25 0.02 260)` - Create depth and hierarchy like a layered code editor
- **Accent Color**: Electric cyan `oklch(0.75 0.15 195)` - Attention-grabbing for CTAs, correct answers, and achievements
- **Foreground/Background Pairings**:
  - Background (Deep Slate #1a1a2e `oklch(0.15 0.01 260)`): Light text `oklch(0.95 0 0)` - Ratio 12.5:1 ✓
  - Primary (Purple `oklch(0.45 0.15 290)`): White text `oklch(1 0 0)` - Ratio 6.8:1 ✓
  - Accent (Cyan `oklch(0.75 0.15 195)`): Dark text `oklch(0.15 0 0)` - Ratio 8.2:1 ✓
  - Success (Green `oklch(0.65 0.18 145)`): Dark text `oklch(0.15 0 0)` - Ratio 6.5:1 ✓
  - Destructive (Coral `oklch(0.62 0.21 25)`): Dark text `oklch(0.15 0 0)` - Ratio 5.2:1 ✓

## Font Selection

Typography should feel technical and precise like code, yet approachable for educational content.

- **Primary**: Space Grotesk (headings, UI elements) - A geometric sans with technical character that's still friendly
- **Secondary**: JetBrains Mono (code snippets, monospace needs) - The gold standard for code readability

- **Typographic Hierarchy**:
  - H1 (Page Titles): Space Grotesk Bold/32px/tight letter-spacing (-0.02em)
  - H2 (Section Headers): Space Grotesk Semibold/24px/normal letter-spacing
  - H3 (Card Titles): Space Grotesk Medium/18px/normal letter-spacing
  - Body (Main Text): Space Grotesk Regular/16px/relaxed line-height (1.6)
  - Code (Snippets): JetBrains Mono Regular/14px/normal line-height (1.5)
  - Labels/Small: Space Grotesk Medium/14px/normal letter-spacing

## Animations

Animations should feel snappy and code-like - instant feedback with subtle flourishes that celebrate wins without distracting from content.

Micro-interactions for button states (scale on hover, subtle press feedback). Question transitions slide horizontally like changing tabs in an editor. Correct answers trigger a satisfying green pulse with confetti burst. Incorrect answers get a gentle shake with educational red highlight. Progress bars animate smoothly on completion. Stats counter up on dashboard load for satisfying reveal. Loading states use code-themed skeleton placeholders or typing cursor animation.

## Component Selection

- **Components**:
  - Card: Quiz question containers, topic selection tiles, stats displays
  - Button: All actions (primary for "Submit", secondary for "Skip", destructive for "Reset")
  - Progress: Topic completion bars, quiz progress indicators
  - Tabs: Navigation between dashboard sections (Overview, Topics, History)
  - Badge: Topic tags, difficulty levels, achievement markers, active filter indicators
  - Avatar: User profile display (GitHub integration)
  - Dialog: Quiz completion celebration, explanation modals
  - Separator: Visual breaks between sections
  - ScrollArea: Quiz history lists, long code snippets
  - RadioGroup: Multiple choice answer selection
  - Select: Dropdown for sorting options (by name, difficulty, progress)
  
- **Customizations**:
  - Custom CodeBlock component wrapping code with syntax highlighting (using Prism or similar)
  - Custom StatCard component for animated number counters on dashboard
  - Custom QuizQuestion component with integrated timer and answer feedback
  - Custom TopicCard with hover effects, progress rings, and difficulty badges
  - Custom TopicFilters component with difficulty buttons and sort dropdown

- **States**:
  - Buttons: Default (subtle glow), Hover (scale 1.05 + brighter glow), Active (scale 0.98), Disabled (opacity 0.5)
  - Answer options: Unselected (muted border), Selected (accent border + bg), Correct (green pulse), Incorrect (red shake)
  - Cards: Rest (subtle border), Hover (elevated shadow + border glow), Active/Selected (accent border)

- **Icon Selection**:
  - Code (code snippet icon): Questions/topics
  - CheckCircle: Correct answers
  - XCircle: Incorrect answers  
  - ChartBar: Statistics/progress
  - LightningBolt: Streak counter
  - Trophy: Achievements
  - Play: Start quiz
  - ArrowRight: Next question
  - ArrowLeft: Previous/back
  - User: Profile
  - Star: Favorites/difficulty rating
  - FunnelSimple: Filter toggle
  - Sliders: Sort options
  - SortAscending/SortDescending: Sort direction indicators

- **Spacing**:
  - Section padding: p-6 to p-8
  - Card internal: p-4 to p-6
  - Component gaps: gap-4 (standard), gap-6 (sections), gap-2 (tight groups)
  - Grid gaps: gap-4 (cards), gap-3 (small items)
  - Button padding: px-6 py-3 (primary), px-4 py-2 (secondary)

- **Mobile**:
  - Dashboard grid: 3 columns desktop → 2 columns tablet → 1 column mobile
  - Question layout: Side-by-side code/answers desktop → Stacked mobile
  - Stats dashboard: 4-column grid → 2-column tablet → 1-column mobile
  - Navigation tabs: Horizontal scroll on mobile with snap points
  - Reduce padding/margins by ~30% on mobile (p-6 → p-4, gap-6 → gap-4)
  - Quiz buttons: Full-width on mobile for easier touch targets
