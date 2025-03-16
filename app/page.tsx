import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight, Zap, Shield, BarChart, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-4">
     <header className="container z-40">
  <div className="flex h-20 items-center justify-between py-6">
    <div className="flex items-center justify-start">
      <Link href="/" className="flex items-center space-x-2">
        <Zap className="h-6 w-6" />
        <span className="font-bold inline-block">ZincSaaS</span>
      </Link>
    </div>
    
    <nav className="hidden absolute left-1/2 transform -translate-x-1/2 gap-6 md:flex md:items-center">
      <Link
        href="#features"
        className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
      >
        Features
      </Link>
      <Link
        href="#pricing"
        className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
      >
        Pricing
      </Link>
      <Link
        href="#testimonials"
        className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
      >
        Testimonials
      </Link>
      <Link
        href="#faq"
        className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
      >
        FAQ
      </Link>
    </nav>
    
    <div className="flex items-center gap-2">
      <ModeToggle />
      <Link href="/login">
        <Button variant="ghost" className="hidden md:flex">
          Sign In
        </Button>
      </Link>
      <Link href="/register">
        <Button>Get Started</Button>
      </Link>
    </div>
  </div>
</header>
      <main className="flex-1">
      <section className="flex justify-center items-center min-h-screen py-12">
  <div className="container flex max-w-[64rem] items-center justify-between space-x-0 md:space-x-8">
    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        Streamline Your Workflow with <span className="text-primary">ZincSaaS</span>
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mx-auto md:mx-0">
        The all-in-one platform that helps teams collaborate, manage projects, and deliver results faster than
        ever before.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <Link href="/register">
          <Button size="lg" className="gap-1">
            Start for free <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="#demo">
          <Button size="lg" variant="outline">
            View demo
          </Button>
        </Link>
      </div>
    </div>
    
    <div className="hidden md:flex md:w-1/2 justify-center">
      <Image 
        src="/main.png" 
        alt="ZincSaaS Landing Image" 
        width={500} 
        height={500} 
        className="object-contain max-w-full h-auto"
      />
    </div>
  </div>
</section>

        <section id="features" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Powerful Features</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Everything you need to manage your business, all in one place.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card>
              <CardHeader>
                <BarChart className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Get real-time insights into your business performance with customizable dashboards.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Bank-level security with end-to-end encryption and multi-factor authentication.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Global Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Work with your team from anywhere in the world with real-time collaboration tools.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="pricing" className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Choose the plan that's right for you
            </p>
          </div>
          <div className="mt-12">
            <Tabs defaultValue="monthly" className="mx-auto max-w-[58rem]">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="annually">Annually (Save 20%)</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="monthly" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Starter</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $29<span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                      </div>
                      <CardDescription className="mt-4">Perfect for small teams just getting started</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {["Up to 5 team members", "10GB storage", "Basic analytics", "24/7 support"].map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-primary">
                    <CardHeader>
                      <div className="mb-2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground w-fit mx-auto">
                        Popular
                      </div>
                      <CardTitle>Pro</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $79<span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                      </div>
                      <CardDescription className="mt-4">For growing businesses that need more</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {[
                          "Up to 20 team members",
                          "100GB storage",
                          "Advanced analytics",
                          "24/7 priority support",
                          "Custom integrations",
                        ].map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $199<span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                      </div>
                      <CardDescription className="mt-4">For large organizations with complex needs</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {[
                          "Unlimited team members",
                          "1TB storage",
                          "Enterprise analytics",
                          "24/7 dedicated support",
                          "Custom integrations",
                          "On-premise deployment",
                          "SLA guarantees",
                        ].map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Contact Sales</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="annually" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Starter</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $23<span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                      </div>
                      <CardDescription className="mt-4">Perfect for small teams just getting started</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {["Up to 5 team members", "10GB storage", "Basic analytics", "24/7 support"].map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-primary">
                    <CardHeader>
                      <div className="mb-2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground w-fit mx-auto">
                        Popular
                      </div>
                      <CardTitle>Pro</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $63<span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                      </div>
                      <CardDescription className="mt-4">For growing businesses that need more</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {[
                          "Up to 20 team members",
                          "100GB storage",
                          "Advanced analytics",
                          "24/7 priority support",
                          "Custom integrations",
                        ].map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <div className="mt-4 flex items-baseline text-5xl font-bold">
                        $159<span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                      </div>
                      <CardDescription className="mt-4">For large organizations with complex needs</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {[
                          "Unlimited team members",
                          "1TB storage",
                          "Enterprise analytics",
                          "24/7 dedicated support",
                          "Custom integrations",
                          "On-premise deployment",
                          "SLA guarantees",
                        ].map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Contact Sales</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="testimonials" className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Trusted by Thousands</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              See what our customers have to say about ZincSaaS
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "ZincSaaS has transformed how our team collaborates. We've seen a 40% increase in productivity since implementing it.",
                author: "Sarah Johnson",
                role: "CTO, TechCorp",
              },
              {
                quote:
                  "The analytics features alone are worth the price. We now have insights we never had access to before.",
                author: "Michael Chen",
                role: "Director of Operations, GrowthCo",
              },
              {
                quote: "Customer support is exceptional. Any issues we've had were resolved within hours, not days.",
                author: "Emma Rodriguez",
                role: "Product Manager, StartupX",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="flex flex-col justify-between">
                <CardHeader>
                  <CardDescription className="text-lg">"{testimonial.quote}"</CardDescription>
                </CardHeader>
                <CardFooter>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="faq" className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Find answers to common questions about ZincSaaS
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4 py-12">
            {[
              {
                question: "How does the 14-day free trial work?",
                answer:
                  "You can sign up for a free trial with no credit card required. You'll have full access to all features for 14 days. At the end of your trial, you can choose a plan that fits your needs or your account will automatically switch to the free plan with limited features.",
              },
              {
                question: "Can I change plans later?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new charges will be prorated for the remainder of your billing cycle. If you downgrade, the new rate will apply to your next billing cycle.",
              },
              {
                question: "Is there a limit to how many team members I can add?",
                answer:
                  "The Starter plan allows up to 5 team members, the Pro plan allows up to 20, and the Enterprise plan has no limit on team members.",
              },
              {
                question: "Do you offer discounts for nonprofits or educational institutions?",
                answer:
                  "Yes, we offer special pricing for qualified nonprofits and educational institutions. Please contact our sales team for more information.",
              },
              {
                question: "How secure is my data?",
                answer:
                  "We take security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo security audits. Our platform is SOC 2 Type II compliant and GDPR ready.",
              },
            ].map((faq, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto max-w-[58rem] rounded-lg bg-primary p-8 md:p-12">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] text-primary-foreground sm:text-3xl md:text-4xl">
                Ready to transform your workflow?
              </h2>
              <p className="max-w-[85%] leading-normal text-primary-foreground/80 sm:text-lg sm:leading-7">
                Join thousands of teams already using ZincSaaS to improve their productivity.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" variant="secondary">
                  Start your free trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  Schedule a demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            <p className="text-sm leading-loose text-center md:text-left">
              &copy; {new Date().getFullYear()} ZincSaaS. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

