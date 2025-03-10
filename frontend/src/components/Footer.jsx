export default function Footer() {
    return (
      <footer className="bottom-0 mt-10 w-full bg-gray-800 text-white py-4 text-center">
        <div className="mx-auto grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2">Helpful Links</h3>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Recent Posts</h3>
            <p>Top for 2025</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-5 justify-center">
              <a href="#" className="bg-blue-600 p-2 rounded">FB</a>
              <a href="#" className="bg-blue-500 p-2 rounded">TW</a>
              <a href="#" className="bg-blue-400 p-2 rounded">IG</a>
            </div>
          </div>
        </div>
        <p className="text-sm">&copy; 2025 Dashboard Inc.</p>
      </footer>
    );
  }
  