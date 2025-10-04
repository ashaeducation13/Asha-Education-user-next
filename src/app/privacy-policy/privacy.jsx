import React from 'react';
import { Calendar, Shield, AlertCircle, FileText, Users, Globe, Eye, Lock, Database } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-red-100 py-2">
        <div className="containers mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600 mt-1">asha.education</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="containers mx-auto pt-4">
        {/* Introduction Card */}
        <div className="bg-white rounded-xl shadow-sm border border-red-100 p-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg  flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Privacy Matters</h2>
              <p className="text-gray-600 leading-relaxed">
                This Privacy Policy describes how asha.education ("we", "us", or "our") collects, uses, and protects
                your information when you use our website and services.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Policy Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Data We Collect</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect the following types of information:
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <ul className="text-red-700 space-y-1">
                  <li>• <strong>Personal Info:</strong> Name, Phone Number, Email address etc.</li>
                  <li>• <strong>Usage Data:</strong> Metrics like pages viewed, time spent, device details, via cookies/services like Google Analytics</li>
                  <li>• <strong>Cookies:</strong> Small files to track site usage and preferences (e.g., accepting cookies)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">How We Use Your Data</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Data is used to:
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <ul className="text-red-700 space-y-1">
                  <li>• Notify you of updates or announcements</li>
                  <li>• Improve Site content and features</li>
                  <li>• Monitor and analyse usage trends</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Legal Basis</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Our legal basis for processing your data includes:
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <ul className="text-red-700 space-y-1">
                  <li>• Consent (for newsletter, cookies)</li>
                  <li>• Legitimate interest in maintaining and improving the Site</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Data Sharing & Disclosure</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not share your personal information with third parties, except when legally required or for
                maintenance (e.g., hosting services under confidentiality).
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <Lock className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Security Measures</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures (e.g., encryption, access controls)
                to protect your data.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">6</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Data Retention</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain personal data as needed for its original purpose or as required by law. Unused info is
                deleted after a reasonable period.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">7</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Cookies & Tracking</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                You can accept or decline cookies. Disabling cookies may limit Site functionality.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">8</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Your Rights</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <ul className="text-red-700 space-y-1">
                  <li>• Access your data</li>
                  <li>• Rectify inaccuracies</li>
                  <li>• Delete your data</li>
                  <li>• Restrict or object to processing</li>
                  <li>• Lodge a complaint with your supervisory authority</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To exercise rights, please contact us.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">9</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Children's Privacy</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Site is not intended for children under 16. We do not knowingly collect data from minors.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">10</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Third‐Party Links</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                The Site may contain external links. We aren't responsible for third-party content or privacy practices.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">11</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">International Data Transfers</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                If you're outside [Jurisdiction] and we transfer your data internationally, we'll use appropriate
                safeguards to comply with applicable law.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">12</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Changes to this Policy</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                asha.education may update this Privacy Policy. Notice of significant changes will be provided
                (e.g., via email). Continued use implies acceptance.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">📧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:admission@asha.education" className="text-blue-600 hover:underline">
                      admission@asha.education
                    </a>
                  </p>

                  <p className="text-gray-700 w-[60%]">
                    <strong>Address:</strong><br />
                    6th Floor, Lightbridge Hiranandani Business Park<br />
                    Saki Vihar Road, Andheri (East) - Saki Naka, Chandivali<br />
                    Andheri East - 400076<br />
                    Mumbai
                  </p>

                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-12 bg-white rounded-xl shadow-sm border border-red-100 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-red-500" />
              <span className="text-gray-600">asha.education</span>
            </div>
            <div className="text-sm text-gray-500">
              © 2025 asha.education. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}