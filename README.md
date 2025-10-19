# Mama Jiggers Foundation Website

A comprehensive foundation website dedicated to removing jiggers, fighting for human rights, and creating lasting change in health, sanitation, and social justice.

**Live Website**: [https://mamajiggers.org](https://mamajiggers.org)

## About the Foundation

The Mama Jiggers Foundation has evolved from a mission to help families remove jiggers into a comprehensive organization fighting for health, dignity, and human rights across communities. The foundation addresses critical issues affecting vulnerable populations including children, women, widows, widowers, and the elderly.

## Mission & Core Programs

### Health & Medical Care
- **Jigger Removal Program**: Foundational program providing treatment, prevention education, and follow-up care
- **Health & Sanitation Education**: Comprehensive disease prevention and healthy living practices
- **Medical Treatment Services**: Direct healthcare provision to underserved communities

### Human Rights Advocacy
- **Children's Rights Protection**: Education, legal support, and community awareness programs
- **Women's Rights Advocacy**: Fighting for gender equality and women's empowerment
- **Legal Support Services**: Protecting vulnerable community members

### Community Support
- **Widow & Widower Support**: Emotional, financial, and social support for rebuilding lives
- **Elderly Care Programs**: Healthcare and dignity support for wazees (grown men) and elderly women
- **Poverty Alleviation**: Skills training and economic empowerment programs

## Technical Implementation

### Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS + shadcn/ui components
- **UI Components**: Radix UI primitives for accessibility
- **Hosting**: Vercel with automatic deployments
- **Domain**: Custom domain via Namecheap DNS

### Performance Features
- Responsive design (mobile-first approach)
- Optimized images with Next.js Image component
- Fast loading times with Vercel edge network
- SEO optimized with proper meta tags
- Accessible design following WCAG guidelines

## Project Structure

```
mama-jiggers/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # Root layout with metadata
│   ├── globals.css           # Global styles and CSS variables
│   └── favicon.ico           # Site favicon
├── components/
│   ├── ui/                   # shadcn/ui component library
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   └── sections/             # Custom page sections
│       ├── hero.tsx
│       ├── mission.tsx
│       ├── programs.tsx
│       ├── gallery.tsx
│       └── contact.tsx
├── public/
│   └── images/               # Image assets and media
├── lib/
│   └── utils.ts              # Utility functions and helpers
└── styles/
    └── globals.css           # Additional styling
```

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Git for version control

### Local Development Setup

```bash
# Clone the repository
git clone [repository-url]
cd mama-jiggers

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Available Scripts

```bash
# Development with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Code linting
npm run lint

# Type checking
npm run type-check
```

## Content Management

### Updating Site Content

1. **Hero Section**: Edit hero text and call-to-action buttons in `app/page.tsx`
2. **Mission Statement**: Update mission cards in the mission section component
3. **Programs**: Modify program descriptions and details
4. **Contact Information**: Update contact details in the contact section
5. **Impact Statistics**: Edit numbers in the impact section

### Image Management

Replace images in `public/images/`:
- `hero-image.jpg` - Main hero background (recommended: 1920x1080px)
- `community-outreach.jpg` - Program gallery images
- `medical-care.jpg` - Healthcare service images  
- `family-support.jpg` - Community support visuals
- `empowerment.jpg` - Empowerment program photos

**Image Optimization Tips**:
- Use WebP format for better compression
- Optimize images to under 500KB for faster loading
- Maintain aspect ratios for consistent layout

## Deployment & Domain Setup

### Vercel Deployment
The site is automatically deployed to Vercel with:
- **Domain**: Custom domain configuration
- **SSL**: Automatic HTTPS certificate
- **CDN**: Global edge network for fast loading
- **CI/CD**: Automatic deployments from Git repository

### DNS Configuration
- Custom domain configured with external DNS provider
- Nameservers configured for optimal performance
- SSL certificate automatically provisioned

### Deployment Commands

```bash
# Deploy to preview environment
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls
```

## Analytics & Monitoring

### Recommended Integrations
- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics**: User behavior tracking
- **Google Search Console**: SEO monitoring
- **Hotjar**: User experience insights

## Future Enhancements

### Planned Features
- [ ] **Contact Form Integration**: Email functionality with Resend/SendGrid
- [ ] **Donation System**: PayPal, Stripe, and M-Pesa integration
- [ ] **Newsletter Signup**: Mailchimp or ConvertKit integration
- [ ] **Blog Section**: Content management for updates and stories
- [ ] **Volunteer Portal**: Application and management system
- [ ] **Multi-language Support**: Swahili and English versions
- [ ] **Photo Gallery**: Expanded visual storytelling
- [ ] **Event Calendar**: Community event scheduling
- [ ] **Impact Dashboard**: Real-time statistics and reporting

### Technical Improvements
- [ ] **Progressive Web App**: Offline functionality
- [ ] **Advanced SEO**: Schema markup and rich snippets
- [ ] **Social Media Integration**: Sharing and feed widgets
- [ ] **Accessibility Audit**: WCAG 2.1 AA compliance verification
- [ ] **Performance Optimization**: Further speed improvements

## Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Make changes and test locally
4. Commit changes (`git commit -m 'Add new feature'`)
5. Push to branch (`git push origin feature/new-feature`)
6. Create a Pull Request

### Code Standards
- Follow TypeScript best practices
- Use Prettier for code formatting
- Maintain component modularity
- Write meaningful commit messages
- Test responsive design on multiple devices

## Support & Contact

### Technical Support
For website issues, bugs, or feature requests:
- Create an issue in the repository
- Contact the development team
- Check documentation for troubleshooting

### Foundation Contact
- **Website**: [Foundation website](https://mamajiggers.org)
- **Contact**: Available through website contact form
- **Focus Areas**: Jigger removal, human rights, community health

## License & Copyright

© 2025 Mama Jiggers Foundation. All rights reserved.

This website is built with love for the community and dedicated to the mission of building healthier, more equitable communities through health, sanitation, and human rights advocacy.

---

**Mama Jiggers Foundation Website**

*"Every life touched, every family helped, every community transformed - this is the lasting impact of our collective efforts."*
