import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Catalyst Ministries</h3>
            <p className="text-gray-400">
              A 501(c)(3) ministry founded in 2003, committed to igniting change through 
              prison ministry, international outreach, and spreading the Gospel of Jesus Christ.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/prison-ministry" className="text-gray-400 hover:text-white transition-colors">
                  Prison Ministry
                </Link>
              </li>
              <li>
                <Link href="/productions" className="text-gray-400 hover:text-white transition-colors">
                  Productions
                </Link>
              </li>
              <li>
                <Link href="/worship" className="text-gray-400 hover:text-white transition-colors">
                  Praise & Worship
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                <a href="tel:239-247-2330" className="hover:text-white transition-colors">
                  239-247-2330
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
                <a 
                  href="mailto:catalystministriesfl@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                  catalystministriesfl@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400 mb-4">
            <p>&copy; {currentYear} Catalyst Ministries Florida. All rights reserved. 501(c)(3) Nonprofit Organization</p>
          </div>
          
          {/* Built By Credit */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Built by</span>
            <a 
              href="https://www.aidreambuilders.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity group"
            >
              <Image
                src="/images/aidreambuilderslogo.png"
                alt="AiDreamBuilders"
                width={24}
                height={24}
                className="object-contain group-hover:scale-110 transition-transform"
              />
              <span className="font-semibold text-gray-400 group-hover:text-white transition-colors">
                AiDreamBuilders.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
