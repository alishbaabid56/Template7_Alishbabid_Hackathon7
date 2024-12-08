import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Vision */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-xl font-bold text-blue-600">MORENT</h2>
            <p className="mt-2 text-sm">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          {/* About Section */}
          <div className="w-1/2 sm:w-1/4 lg:w-auto mb-6">
            <h3 className="text-lg font-semibold">About</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/how-it-works" className="hover:text-blue-600">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/featured" className="hover:text-blue-600">
                  Featured
                  </Link>
              </li>
              <li>
                <Link href="/partnership" className="hover:text-blue-600">
                  Partnership
                </Link>
              </li>
              <li>
                <Link href="/business-relation" className="hover:text-blue-600">
                  Business Relation
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="w-1/2 sm:w-1/4 lg:w-auto mb-6">
            <h3 className="text-lg font-semibold">Community</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/events" className="hover:text-blue-600">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-600">
                  Blog
                </Link>
                </li>
              <li>
                <Link href="/podcast" className="hover:text-blue-600">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/invite-a-friend" className="hover:text-blue-600">
                  Invite a friend
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="w-1/2 sm:w-1/4 lg:w-auto mb-6">
            <h3 className="text-lg font-semibold">Socials</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/discord" className="hover:text-blue-600">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/instagram" className="hover:text-blue-600">
                  Instagram
                </Link>
              </li>
              <li>
              <Link href="/twitter" className="hover:text-blue-600">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="/facebook" className="hover:text-blue-600">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-4 flex flex-wrap justify-between text-sm">
          <p>©2022 MORENT. All rights reserved</p>
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="hover:text-blue-600">
              Privacy & Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-blue-600">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}