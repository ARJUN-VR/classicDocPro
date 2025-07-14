import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent select-none">
            ClassicDocPro
          </div>
          <div className={`md:flex gap-8 items-center ${isMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-white shadow-lg py-6' : 'hidden md:flex'}`}>
            <a href="#features" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200">Features</a>
            <a href="#pricing" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200">Pricing</a>
            <a href="#contact" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200">Contact</a>
            <button className="ml-0 md:ml-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200" onClick={() => navigate('/home')}>Get Started</button>
          </div>
          <button className="md:hidden flex flex-col gap-1.5 ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="w-7 h-0.5 bg-gray-700 rounded transition-all duration-200"></span>
            <span className="w-7 h-0.5 bg-gray-700 rounded transition-all duration-200"></span>
            <span className="w-7 h-0.5 bg-gray-700 rounded transition-all duration-200"></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen flex items-center">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Transform Your Documents with
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> AI-Powered</span> Processing
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Streamline your document workflow with intelligent automation, real-time collaboration, and advanced analytics. Save hours every day with ClassicDocPro.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-lg">Start Free Trial</button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-200 text-lg">Watch Demo</button>
            </div>
            <div className="flex gap-12 pt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-indigo-600">10K+</h3>
                <p className="text-gray-600 font-medium">Active Users</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-indigo-600">1M+</h3>
                <p className="text-gray-600 font-medium">Documents Processed</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-indigo-600">99.9%</h3>
                <p className="text-gray-600 font-medium">Uptime</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-80 relative overflow-hidden border border-gray-100">
              <div className="flex gap-2 p-4 border-b border-gray-100 bg-gray-50">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>
              <div className="p-8 space-y-4">
                <div className="h-4 bg-gray-200 rounded-lg w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded-lg w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded-lg w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded-lg w-2/3"></div>
                <div className="h-4 bg-gray-200 rounded-lg w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Why Choose ClassicDocPro?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Powerful features designed to revolutionize your document management</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">AI-Powered Processing</h3>
              <p className="text-gray-600 leading-relaxed">Advanced machine learning algorithms automatically extract, classify, and organize your documents with 95% accuracy.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">Process thousands of documents in minutes, not hours. Our optimized engine handles large volumes effortlessly.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-6">🔒</div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Enterprise Security</h3>
              <p className="text-gray-600 leading-relaxed">Bank-level encryption, SOC 2 compliance, and granular access controls keep your data safe and compliant.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-6">👥</div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Team Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">Real-time editing, comments, and version control. Work together seamlessly across teams and departments.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-6">📊</div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Advanced Analytics</h3>
              <p className="text-gray-600 leading-relaxed">Gain insights into your document workflow with detailed analytics, reports, and performance metrics.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-6">🔌</div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Easy Integration</h3>
              <p className="text-gray-600 leading-relaxed">Connect with your existing tools via REST API, webhooks, and native integrations with popular platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Choose the plan that fits your needs</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Starter</h3>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-xl text-gray-500 font-medium">$</span>
                  <span className="text-5xl font-bold text-gray-900">29</span>
                  <span className="text-lg text-gray-500 mb-2">/month</span>
                </div>
              </div>
              <ul className="mb-8 space-y-3 text-gray-600 text-center flex-1">
                <li className="flex items-center justify-center">✓ 1,000 documents/month</li>
                <li className="flex items-center justify-center">✓ Basic AI processing</li>
                <li className="flex items-center justify-center">✓ Email support</li>
                <li className="flex items-center justify-center">✓ Standard templates</li>
                <li className="flex items-center justify-center">✓ 5 team members</li>
              </ul>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-200 w-full">Start Free Trial</button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-indigo-600 flex flex-col items-center scale-105 relative hover:shadow-3xl transition-all duration-300">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">Most Popular</div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Professional</h3>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-xl text-gray-500 font-medium">$</span>
                  <span className="text-5xl font-bold text-gray-900">99</span>
                  <span className="text-lg text-gray-500 mb-2">/month</span>
                </div>
              </div>
              <ul className="mb-8 space-y-3 text-gray-600 text-center flex-1">
                <li className="flex items-center justify-center">✓ 10,000 documents/month</li>
                <li className="flex items-center justify-center">✓ Advanced AI processing</li>
                <li className="flex items-center justify-center">✓ Priority support</li>
                <li className="flex items-center justify-center">✓ Custom templates</li>
                <li className="flex items-center justify-center">✓ Unlimited team members</li>
                <li className="flex items-center justify-center">✓ Advanced analytics</li>
                <li className="flex items-center justify-center">✓ API access</li>
              </ul>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 w-full">Start Free Trial</button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Enterprise</h3>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-xl text-gray-500 font-medium">$</span>
                  <span className="text-5xl font-bold text-gray-900">299</span>
                  <span className="text-lg text-gray-500 mb-2">/month</span>
                </div>
              </div>
              <ul className="mb-8 space-y-3 text-gray-600 text-center flex-1">
                <li className="flex items-center justify-center">✓ Unlimited documents</li>
                <li className="flex items-center justify-center">✓ Custom AI models</li>
                <li className="flex items-center justify-center">✓ 24/7 phone support</li>
                <li className="flex items-center justify-center">✓ White-label solution</li>
                <li className="flex items-center justify-center">✓ Custom integrations</li>
                <li className="flex items-center justify-center">✓ Dedicated account manager</li>
                <li className="flex items-center justify-center">✓ On-premise deployment</li>
              </ul>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-200 w-full">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Document Workflow?</h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">Join thousands of companies already using ClassicDocPro to streamline their operations</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <button className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 text-lg">Start Your Free Trial</button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-200 text-lg">Schedule a Demo</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">ClassicDocPro</h3>
              <p className="text-gray-400 leading-relaxed">Transforming document management with AI-powered solutions.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Product</h4>
              <a href="#features" className="block text-gray-400 hover:text-white mb-3 transition-colors duration-200">Features</a>
              <a href="#pricing" className="block text-gray-400 hover:text-white mb-3 transition-colors duration-200">Pricing</a>
              <a href="#" className="block text-gray-400 hover:text-white mb-3 transition-colors duration-200">API</a>
              <a href="#" className="block text-gray-400 hover:text-white mb-3 transition-colors duration-200">Integrations</a>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <a href="#" className="block text-gray-400 hover:text-white mb-3 transition-colors duration-200">About</a>
              <a href="#" className="block text-gray-400 hover:text-white mb-3 transition-colors duration-200">Blog</a>
              <a href="#" className="block text-gray-400 hover:text-white mb-3 transition-colors duration-200">Careers</a>
              <a href="#" className="block text-gray-400 hover:text-white mb-3 transition-colors duration-200">Contact</a>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <a href="#" className="block text-gray-400 hover:text-white mb-3 transition-colors duration-200">Help Center</a>
              <a href="#" className="block text-gray-400 hover:text-white mb-3 transition-colors duration-200">Documentation</a>
              <a href="#" className="block text-gray-400 hover:text-white mb-3 transition-colors duration-200">Status</a>
              <a href="#" className="block text-gray-400 hover:text-white mb-3 transition-colors duration-200">Security</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            &copy; 2024 ClassicDocPro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage