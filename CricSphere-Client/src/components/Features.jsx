import { Users, Calendar, MapPin, Award, CreditCard, BarChart2, MessageCircle } from "lucide-react"

// eslint-disable-next-line react/prop-types
const FeatureItem = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
    {icon}
    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-center text-gray-600">{description}</p>
  </div>
)

const Features = () => {
  const features = [
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "User Management",
      description: "Secure registration and role-based access for players, managers, and turf owners.",
    },
    {
      icon: <Calendar className="h-12 w-12 text-green-600" />,
      title: "Tournament Management",
      description: "Create and organize local tournaments with automated fixture scheduling.",
    },
    {
      icon: <MapPin className="h-12 w-12 text-green-600" />,
      title: "Turf Booking",
      description: "List and book turfs for practice sessions or private matches.",
    },
    {
      icon: <Award className="h-12 w-12 text-green-600" />,
      title: "Live Scoring",
      description: "Real-time score updates and detailed post-match reports.",
    },
    {
      icon: <CreditCard className="h-12 w-12 text-green-600" />,
      title: "Secure Payments",
      description: "Integrated payment system for bookings and registrations.",
    },
    {
      icon: <BarChart2 className="h-12 w-12 text-green-600" />,
      title: "Analytics",
      description: "Performance analytics and leaderboards for players and teams.",
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-green-600" />,
      title: "Communication",
      description: "In-app messaging and notifications for all users.",
    },
  ]

  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

