// Template-enhanced component
// Generated: 2025-08-19T08:38:16.304Z
// Section: features
// Category: features
// Template ID: features-c001

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Unparalleled Expertise",
      description: "Leverage our team's deep industry knowledge and proven track record to drive transformative change.",
      badge: "Expertise"
    },
    {
      icon: Shield,
      title: "Ironclad Security",
      description: "Safeguard your sensitive data with our enterprise-grade security protocols and compliance certifications.",
      badge: "Security"
    },
    {
      icon: Smartphone,
      title: "Tailored Solutions",
      description: "Enjoy a seamless experience with our responsive, mobile-optimized consulting services.",
      badge: "Customization"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Benefit from our worldwide network and scalable infrastructure to support your global operations.",
      badge: "Reach"
    },
    {
      icon: BarChart3,
      title: "Actionable Insights",
      description: "Make data-driven decisions with our advanced analytics and performance tracking capabilities.",
      badge: "Analytics"
    },
    {
      icon: Palette,
      title: "Brand Alignment",
      description: "Elevate your brand identity with our comprehensive branding and design services.",
      badge: "Branding"
    },
    {
      icon: Code2,
      title: "Developer-Friendly",
      description: "Empower your team with our intuitive APIs, extensive documentation, and powerful tools.",
      badge: "Technology"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Enjoy 24/7 access to our expert team, ensuring you always have the assistance you need.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Privacy-Focused",
      description: "Rest assured that your sensitive information is protected with our strict data privacy protocols.",
      badge: "Privacy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Consulting Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Elevate Your Business
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              with Our Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover how our comprehensive consulting solutions can transform your organization
            and unlock sustainable growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your business with our expert consulting services?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Schedule a Consultation
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}