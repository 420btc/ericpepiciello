import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Mock workshops data
const workshops = [
  {
    id: 1,
    title: "Advanced React Patterns",
    description:
      "Learn advanced React patterns and techniques to build scalable applications. This workshop covers component composition, render props, custom hooks, and state management strategies.",
    date: "April 15, 2025",
    time: "10:00 AM - 2:00 PM",
    duration: "4 hours",
    location: "Online",
    capacity: "30 participants",
    price: "$149",
    image: "/placeholder.svg?height=400&width=800",
    status: "Upcoming",
    slug: "advanced-react-patterns",
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "Frontend Developer",
        company: "TechCorp",
        quote: "This workshop completely changed how I approach component design. Highly recommended!",
      },
    ],
  },
  {
    id: 2,
    title: "TypeScript for JavaScript Developers",
    description:
      "A comprehensive introduction to TypeScript for experienced JavaScript developers. Learn how to leverage TypeScript's type system to write more robust and maintainable code.",
    date: "May 10, 2025",
    time: "9:00 AM - 12:00 PM",
    duration: "3 hours",
    location: "Tech Hub, San Francisco",
    capacity: "25 participants",
    price: "$129",
    image: "/placeholder.svg?height=400&width=800",
    status: "Upcoming",
    slug: "typescript-for-javascript-developers",
    testimonials: [
      {
        name: "Michael Chen",
        role: "Senior Developer",
        company: "StartupX",
        quote: "The perfect balance of theory and practice. I'm now confidently using TypeScript in all my projects.",
      },
    ],
  },
  {
    id: 3,
    title: "Building with Next.js",
    description:
      "Explore the features of Next.js and learn how to build performant web applications. This workshop covers routing, data fetching, server components, and deployment strategies.",
    date: "March 5, 2025",
    time: "1:00 PM - 5:00 PM",
    duration: "4 hours",
    location: "Online",
    capacity: "35 participants",
    price: "$149",
    image: "/placeholder.svg?height=400&width=800",
    status: "Past",
    slug: "building-with-nextjs",
    testimonials: [
      {
        name: "Alex Rivera",
        role: "Product Manager",
        company: "DevStudio",
        quote:
          "The Next.js workshop gave our team the knowledge we needed to migrate our application and improve performance significantly.",
      },
    ],
  },
  {
    id: 4,
    title: "Responsive Web Design Masterclass",
    description:
      "Master the art of responsive web design and create websites that look great on any device. This workshop covers CSS Grid, Flexbox, media queries, and responsive typography.",
    date: "February 20, 2025",
    time: "10:00 AM - 3:00 PM",
    duration: "5 hours",
    location: "Design Center, New York",
    capacity: "20 participants",
    price: "$179",
    image: "/placeholder.svg?height=400&width=800",
    status: "Past",
    slug: "responsive-web-design-masterclass",
    testimonials: [
      {
        name: "Emily Wong",
        role: "UI Designer",
        company: "CreativeAgency",
        quote:
          "This workshop bridged the gap between design and implementation for me. I now have a much better understanding of responsive design principles.",
      },
    ],
  },
  {
    id: 5,
    title: "State Management in React",
    description:
      "Explore different state management solutions in React and learn when to use each approach. This workshop covers Context API, Redux, Zustand, and Jotai.",
    date: "January 15, 2025",
    time: "9:00 AM - 1:00 PM",
    duration: "4 hours",
    location: "Online",
    capacity: "30 participants",
    price: "$149",
    image: "/placeholder.svg?height=400&width=800",
    status: "Past",
    slug: "state-management-react",
    testimonials: [
      {
        name: "David Kim",
        role: "Frontend Engineer",
        company: "TechInnovate",
        quote:
          "The comparisons between different state management libraries were incredibly valuable. I now have a clear strategy for my applications.",
      },
    ],
  },
]

export default function WorkshopsPage() {
  // Separate upcoming and past workshops
  const upcomingWorkshops = workshops.filter((workshop) => workshop.status === "Upcoming")
  const pastWorkshops = workshops.filter((workshop) => workshop.status === "Past")

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Workshops</h1>
          <p className="body-lg text-muted-foreground">
            Hands-on learning experiences to help you master modern web development technologies and techniques.
          </p>
        </div>

        {/* Upcoming Workshops */}
        <div className="mb-20">
          <h2 className="heading-lg mb-10 relative">
            Upcoming Workshops
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">01</span>
          </h2>

          <div className="grid gap-12">
            {upcomingWorkshops.map((workshop) => (
              <Card key={workshop.id} className="overflow-hidden border border-border bg-card">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={workshop.image || "/placeholder.svg"}
                      alt={workshop.title}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="mb-2">
                      <Badge variant="default">Upcoming</Badge>
                    </div>
                    <CardHeader className="p-0 pb-4">
                      <CardTitle className="text-2xl">{workshop.title}</CardTitle>
                      <CardDescription className="line-clamp-2 mt-2">{workshop.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 py-4 space-y-3 flex-grow">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>
                          {workshop.time} ({workshop.duration})
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{workshop.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{workshop.capacity}</span>
                      </div>
                      <div className="text-lg font-bold mt-2">{workshop.price}</div>
                    </CardContent>
                    <CardFooter className="p-0 pt-4">
                      <Button asChild className="w-full">
                        <Link href={`/workshops/${workshop.slug}`}>Register Now</Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Workshops */}
        <div>
          <h2 className="heading-lg mb-10 relative">
            Past Workshops
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">02</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWorkshops.map((workshop) => (
              <Card key={workshop.id} className="group overflow-hidden border border-border bg-card">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 opacity-80"
                  />
                </div>
                <CardHeader className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">Past</Badge>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {workshop.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{workshop.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0 space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{workshop.location}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/workshops/${workshop.slug}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h2 className="heading-lg mb-10 text-center">What Participants Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {workshops.flatMap((workshop) =>
              workshop.testimonials.map((testimonial, index) => (
                <div key={`${workshop.id}-${index}`} className="bg-muted/30 p-8 rounded-lg border border-border">
                  <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-muted overflow-hidden mr-4">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              )),
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-muted/30 p-12 rounded-lg border border-border">
          <h2 className="text-3xl font-bold mb-4">Want a Custom Workshop?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I also offer tailored workshops for teams and organizations. Get in touch to discuss your specific needs and
            goals.
          </p>
          <Button asChild size="lg">
            <Link href="/#contact">Contact Me</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
