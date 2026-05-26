import Link from "next/link";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Our Impact", href: "/impact" },
    { label: "Blog", href: "/blog" },
  ],
  "Get Involved": [
    { label: "Donate Now", href: "/donate" },
    { label: "Volunteer", href: "/get-involved#volunteer" },
    { label: "Partner With Us", href: "/get-involved#partner" },
    { label: "Corporate Giving", href: "/get-involved#corporate" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const socials = [
  { label: "FB", href: "#", title: "Facebook" },
  { label: "IG", href: "#", title: "Instagram" },
  { label: "X", href: "#", title: "X / Twitter" },
  { label: "YT", href: "#", title: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-[#C9A84C]/10">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-[#C9A84C] rounded-full flex items-center justify-center">
                <span className="text-[#C9A84C] text-xs font-bold tracking-widest">SC</span>
              </div>
              <div className="leading-tight">
                <p className="text-white font-bold text-sm tracking-widest uppercase">Sacred Cipher</p>
                <p className="text-[#C9A84C] text-[10px] tracking-widest uppercase">Mission</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              We believe every life holds a sacred code. Our mission is to uplift communities,
              unlock human potential, and create sustainable change through education,
              innovation, and compassion.
            </p>
            <div className="flex gap-3">
              {socials.map(({ label, href, title }) => (
                <a
                  key={title}
                  href={href}
                  aria-label={title}
                  title={title}
                  className="w-9 h-9 border border-[#C9A84C]/30 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all duration-200 text-xs font-bold tracking-wider"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6 pb-3 border-b border-[#C9A84C]/20">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-[#C9A84C] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-12 pt-8 border-t border-[#C9A84C]/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Mail, text: "info@sacredciphermission.org" },
            { icon: Phone, text: "+1 (555) 000-0000" },
            { icon: MapPin, text: "15 Countries & Growing" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-gray-400 text-sm">
              <Icon size={14} className="text-[#C9A84C] shrink-0" />
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Sacred Cipher Mission. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            Made with <Heart size={10} className="text-[#C9A84C]" fill="#C9A84C" /> for communities worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
