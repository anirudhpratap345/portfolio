# Anirudh Pratap Singh - Portfolio

A modern, minimal personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Inspired by kritika.cc design principles.

## Features

- **Clean, Minimal Design**: Notion-style layout with ample whitespace
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered fade-in effects
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Performance Optimized**: Fast loading and smooth interactions

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd anirudh-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── AboutSection.tsx     # About section with profile
│   ├── ProjectsSection.tsx  # Projects showcase
│   ├── SkillsSection.tsx    # Skills display
│   └── Footer.tsx           # Footer with social links
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Customization

### Content Updates

- **About Section**: Edit the text in `components/AboutSection.tsx`
- **Projects**: Modify the projects array in `components/ProjectsSection.tsx`
- **Skills**: Update the skills array in `components/SkillsSection.tsx`
- **Social Links**: Update URLs in `components/Footer.tsx`

### Styling

- **Colors**: Modify the Tailwind color classes throughout components
- **Typography**: Update font weights and sizes in component classes
- **Spacing**: Adjust padding and margins using Tailwind spacing utilities
- **Animations**: Customize Framer Motion transitions in each component

## Design Principles

- **Minimalism**: Clean, uncluttered design with focus on content
- **Whitespace**: Generous spacing for better readability
- **Typography**: Clear hierarchy with Inter font family
- **Responsiveness**: Mobile-first approach with progressive enhancement
- **Accessibility**: Semantic HTML and proper ARIA labels

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions, reach out to Anirudh Pratap Singh.
