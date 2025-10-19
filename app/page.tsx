"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Users, Shield, Droplet, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Heart className="h-7 w-7 text-primary" fill="currentColor" />
              <span className="font-bold text-xl lg:text-2xl text-foreground">
                Mama Jiggers Foundation
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              <a
                href="#mission"
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                Mission
              </a>
              <a
                href="#programs"
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                Programs
              </a>
              <a
                href="#impact"
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                Impact
              </a>
              <a
                href="#contact"
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                Contact
              </a>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Donate
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
              <a
                href="#mission"
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mission
              </a>
              <a
                href="#programs"
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Programs
              </a>
              <a
                href="#impact"
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Impact
              </a>
              <a
                href="#contact"
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                Donate
              </Button>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-20 lg:pb-24 bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance text-foreground">
                Building Healthier Communities
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
                From removing jiggers to fighting for human rights, we're
                dedicated to creating lasting change in health, sanitation, and
                social justice for all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Support Our Mission
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/african-community-health-workers-helping-families-.jpg"
                alt="Community health workers helping families in Kenya"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-16 md:py-20 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground text-balance">
              Our Mission & Vision
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              What started as a mission to help families remove jiggers has
              grown into a comprehensive foundation fighting for health,
              dignity, and human rights across our communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Droplet className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl md:text-2xl text-foreground">
                  Health & Sanitation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Providing essential health services and promoting proper
                  sanitation practices to prevent diseases and improve quality
                  of life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl md:text-2xl text-foreground">
                  Human Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Fighting for children's and women's rights, supporting widows
                  and widowers, and ensuring dignity for all community members.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl md:text-2xl text-foreground">
                  Community Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Helping families overcome poverty, supporting the elderly, and
                  building stronger, more resilient communities together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="programs" className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground text-balance">
              Our Programs
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              Comprehensive programs designed to address the root causes of
              health and social challenges in our communities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Jigger Removal & Prevention",
                description:
                  "Our foundational program providing treatment, prevention education, and follow-up care for jigger infestations affecting families.",
              },
              {
                title: "Children & Women's Rights",
                description:
                  "Advocating for and protecting the rights of children and women through education, legal support, and community awareness programs.",
              },
              {
                title: "Widow & Widower Support",
                description:
                  "Providing emotional, financial, and social support to widows and widowers, helping them rebuild their lives with dignity.",
              },
              {
                title: "Poverty Alleviation",
                description:
                  "Implementing sustainable programs to help families break the cycle of poverty through skills training and economic empowerment.",
              },
              {
                title: "Elderly Care",
                description:
                  "Supporting the elderly in our communities, including wazees (grown men), with healthcare, social support, and dignity in their golden years.",
              },
              {
                title: "Health Education",
                description:
                  "Comprehensive health and sanitation education programs to prevent diseases and promote healthy living practices in communities.",
              },
            ].map((program, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl text-foreground">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground text-balance">
              Our Work in Action
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              See the real impact of our programs through these moments captured
              in our communities. Every image tells a story of hope, healing,
              and transformation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              {
                title: "Community Outreach",
                subtitle: "Health education and support",
                query:
                  "African community health workers conducting outreach program",
              },
              {
                title: "Medical Care",
                subtitle: "Treatment and prevention",
                query:
                  "Healthcare workers providing medical treatment in Kenya",
              },
              {
                title: "Family Support",
                subtitle: "Comprehensive care programs",
                query: "Community workers supporting families in Kenya",
              },
              {
                title: "Empowerment",
                subtitle: "Building stronger communities",
                query: "Empowered community members in Kenya",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative h-[250px] md:h-[300px] rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={`/.jpg?height=300&width=400&query=${item.query}`}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center bg-accent/30 rounded-xl p-6 md:p-8 border border-border">
            <p className="text-base md:text-lg text-foreground italic leading-relaxed">
              Every story matters. Behind every image is a life transformed, a
              family helped, and a community strengthened. Your support makes
              these stories possible.
            </p>
          </div>
        </div>
      </section>

      <section id="impact" className="py-16 md:py-20 lg:py-24 bg-primary/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground text-balance">
              Our Impact
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              Every life touched, every family helped, every community
              transformed - this is the lasting impact of our collective
              efforts.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "5,000+", label: "Families Helped" },
              { number: "50+", label: "Communities Reached" },
              { number: "10,000+", label: "Lives Transformed" },
              { number: "100+", label: "Volunteers" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-xl border border-border shadow-sm"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 md:mb-3">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed text-pretty opacity-95">
            Your support helps us continue our mission of building healthier,
            more equitable communities. Every contribution makes a real
            difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Volunteer With Us
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground text-balance">
              Get in Touch
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
              Ready to support our mission or need our help? We'd love to hear
              from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="bg-card p-6 md:p-8 rounded-xl border border-border">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-foreground">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="pb-6 border-b border-border">
                  <div className="font-semibold mb-2 text-foreground text-lg">
                    Phone
                  </div>
                  <div className="text-muted-foreground mb-1">
                    +254 XXX XXX XXX
                  </div>
                  <div className="text-sm text-muted-foreground/80">
                    Mon-Fri 8AM-5PM
                  </div>
                </div>
                <div className="pb-6 border-b border-border">
                  <div className="font-semibold mb-2 text-foreground text-lg">
                    Email
                  </div>
                  <div className="text-muted-foreground mb-1">
                    info@mamajiggers.org
                  </div>
                  <div className="text-sm text-muted-foreground/80">
                    We'll respond within 24 hours
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-2 text-foreground text-lg">
                    Location
                  </div>
                  <div className="text-muted-foreground mb-1">
                    Nairobi, Kenya
                  </div>
                  <div className="text-sm text-muted-foreground/80">
                    By appointment only
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-xl border border-border">
              <form className="space-y-5">
                <div>
                  <Input placeholder="Your Name" className="h-12" />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    className="resize-none"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 md:mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-7 w-7 text-white" fill="currentColor" />
                <span className="font-bold text-lg md:text-xl">
                  Mama Jiggers Foundation
                </span>
              </div>
              <p className="text-background/80 leading-relaxed">
                Building healthier communities through health, dignity, and
                human rights.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-background/80">
                <li>
                  <a
                    href="#mission"
                    className="hover:text-primary transition-colors"
                  >
                    Mission
                  </a>
                </li>
                <li>
                  <a
                    href="#programs"
                    className="hover:text-primary transition-colors"
                  >
                    Programs
                  </a>
                </li>
                <li>
                  <a
                    href="#impact"
                    className="hover:text-primary transition-colors"
                  >
                    Impact
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Programs</h4>
              <ul className="space-y-3 text-background/80">
                <li>Jigger Removal</li>
                <li>Human Rights</li>
                <li>Poverty Alleviation</li>
                <li>Health Education</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Get Involved</h4>
              <ul className="space-y-3 text-background/80">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Partner With Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; 2025 Mama Jiggers Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
