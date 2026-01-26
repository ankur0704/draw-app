import { Pencil, Users, Zap, Download, Share2, Layers } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Pencil className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">DrawBoard</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                Start Drawing
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Create Beautiful
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Diagrams & Sketches
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              A powerful, intuitive drawing tool for creating diagrams, wireframes, and illustrations.
              Collaborate in real-time and bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-lg shadow-lg hover:shadow-xl">
                Launch App
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition font-semibold text-lg border-2 border-gray-200">
                View Demo
              </button>
            </div>
          </div>

          <div className="mt-20 relative">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl shadow-2xl border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <Layers className="w-24 h-24 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">Canvas Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make drawing and collaboration effortless
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Pencil className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Intuitive Drawing</h3>
              <p className="text-gray-600 leading-relaxed">
                Simple, powerful tools that feel natural. Create shapes, lines, and freehand drawings with ease.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Real-Time Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Work together seamlessly. See changes instantly as your team creates and edits in real-time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized for performance. No lag, no delays - just smooth, responsive drawing every time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <Download className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Export Anywhere</h3>
              <p className="text-gray-600 leading-relaxed">
                Export your work as PNG, SVG, or JSON. Perfect for presentations, documentation, and more.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Share2 className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Easy Sharing</h3>
              <p className="text-gray-600 leading-relaxed">
                Share your creations with a simple link. Public or private - you control the access.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-7 h-7 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Infinite Canvas</h3>
              <p className="text-gray-600 leading-relaxed">
                Never run out of space. Pan and zoom freely across an unlimited drawing surface.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Creating?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of creators using DrawBoard to bring their ideas to life
          </p>
          <button className="px-10 py-5 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition font-bold text-lg shadow-2xl">
            Launch DrawBoard Now
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Pencil className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold text-white">DrawBoard</span>
            </div>
            <p className="text-sm">
              Built with creativity in mind. © 2024 DrawBoard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
