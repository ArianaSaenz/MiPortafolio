
export default function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-10 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 text-center md:text-left">
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Social media</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-300">Instagram</a></li>
            <li><a href="#" className="hover:text-green-300">LinkedIn</a></li>
            <li><a href="#" className="hover:text-green-300">GitHub</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">About</h3>
          <p className="text-sm text-green-100 leading-relaxed">
            I’m Ariana Sáenz, a creative communicator passionate about leadership, 
            innovation, and connecting ideas through meaningful projects.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-green-300">Home</a></li>
            <li><a href="/education" className="hover:text-green-300">Education</a></li>
            <li><a href="/skills" className="hover:text-green-300">Skills</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center text-green-200 text-sm mt-8">
        © 2025 Ariana Sáenz | All rights reserved
      </p>
    </footer>
  );
}