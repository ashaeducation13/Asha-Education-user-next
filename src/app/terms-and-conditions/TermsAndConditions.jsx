import React from 'react';
import { Calendar, Shield, AlertCircle, FileText, Users, Globe } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-red-100">
        <div className="containers mx-auto  py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
              <p className="text-gray-600 mt-1">asha.education</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="containers mx-auto  py-8">
        {/* Introduction Card */}
        <div className="bg-white rounded-xl shadow-sm border border-red-100 p-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Important Notice</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using asha.education ("Site"), you agree to these Terms & Conditions and our Privacy Policy.
                If you disagree, please refrain from using the Site.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using asha.education ("Site"), you agree to these Terms & Conditions and our Privacy Policy.
                If you disagree, please refrain from using the Site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms govern your use of our website and services. By accessing the Site, you acknowledge that you have
                read, understood, and agree to be bound by these Terms.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Changes to Terms</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                asha.education may update these Terms at any time. Updates become effective upon posting.
                Continued use after changes constitutes acceptance.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Permitted Use</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                You may view, download, or print content for personal, non‑commercial use. Reuse beyond this—such
                as reproduction or distribution—requires written permission.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">User Accounts</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Some features may require creating an account. You are responsible for maintaining confidentiality
                of your login information and for all activities under your account.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">5</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">User‑Generated Content</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Any content you submit (comments, suggestions, messages) is non‑confidential and non‑proprietary.
                You grant asha.education a worldwide, royalty‑free license to use, reproduce, adapt, and display
                such content at our discretion.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">6</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Prohibited Conduct</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Users must not:
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <ul className="text-red-700 space-y-1">
                  <li>• Violate any laws or infringe intellectual property rights</li>
                  <li>• Upload harmful code (e.g. viruses)</li>
                  <li>• Interfere with site functionality</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Violations may lead to account suspension or legal action.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">7</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Intellectual Property</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                All content—text, graphics, logos, images—is the property of asha.education or its licensors.
                Unauthorized use is prohibited.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">8</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Disclaimers</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Information is provided "as is" without warranties of accuracy, reliability, or fitness.
                asha.education disclaims responsibility for errors or omissions.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">9</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Limitation of Liability</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                asha.education and its team are not liable for indirect, incidental, or consequential damages
                arising from your use of the Site.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">10</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Indemnity</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify and hold harmless asha.education, its staff, and affiliates from all claims,
                losses, and expenses (including attorneys' fees) arising out of your use of the Site or violation
                of these Terms.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">11</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Governing Law & Disputes</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms are governed by the laws of [Jurisdiction, e.g., India or applicable]. Disputes are
                subject to the exclusive jurisdiction of courts in that region.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">12</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Termination</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                asha.education reserves the right to suspend or terminate access at any time, without notice,
                for violations of these Terms.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section className="bg-white rounded-xl shadow-sm border border-red-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">📧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Questions or notices should be directed to:
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