import Link from "next/link"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { href: "/men", label: "Men" },
  { href: "/women", label: "Women" },
  { href: "/kids", label: "Kids" },
  { href: "/appointment", label: "Appointment" },
]

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="absolute top-16 left-0 right-0 bg-white z-30 shadow-md border-t border-gray-100">
      <nav className="flex flex-col items-start max-w-screen-xl mx-auto">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-lg py-3 px-6 hover:text-blue-600 w-full border-b border-gray-100"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}



