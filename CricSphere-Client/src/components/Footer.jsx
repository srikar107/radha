import { Facebook, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Cricket & Turf Tournament</h2>
            <p className="mt-2">Manage your cricket tournaments with ease</p>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tournaments
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Turf Booking
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400">
              <Facebook />
            </a>
            <a href="#" className="hover:text-green-400">
              <Twitter />
            </a>
            <a href="#" className="hover:text-green-400">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Cricket & Turf Tournament Management System. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

