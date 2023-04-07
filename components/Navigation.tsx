import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="text-white font-bold text-xl sans italic">Yacell Borges</div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
          
              <Link href="/blog">
                <div className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" title="My Articles">Blog</div>
              </Link>
              <Link href="/about">
                <div className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" title="About Me">About</div>
              </Link>
              <Link href="/projects">
                <div className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" title="Browse through my projects">Projects/PortFolio</div>
              </Link>
              <Link href="/services">
                <div className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" title="My Services">Services</div>
              </Link>
              <Link href="/contact">
                <div className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" title="Contact Me">Contact</div>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
