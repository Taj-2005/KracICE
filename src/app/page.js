"use client";

import React, { useState, useEffect } from 'react';
import { ChevronRight, Brain, MessageCircle, FileText, Zap, CheckCircle, Star, Upload, Play, Users, Target, TrendingUp } from 'lucide-react';

export default function KracICELanding() {
  const [selectedTone, setSelectedTone] = useState('friendly');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tones = [
    { id: 'friendly', name: 'Friendly Study Buddy', desc: 'Encouraging and supportive' },
    { id: 'pro', name: 'Pro Tutor', desc: 'Professional and focused' },
    { id: 'hype', name: 'Hype Coach', desc: 'Energetic and motivating' }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Tutor",
      subtitle: "Personalized learning paths",
      desc: "Get custom study plans tailored to your strengths and weaknesses"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Doubt-Solving",
      subtitle: "Instant AI answers to questions",
      desc: "Upload your doubts and get instant, detailed explanations"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Mock Tests",
      subtitle: "Practice with real exam scenarios",
      desc: "Simulate actual exam conditions with AI-powered test series"
    }
  ];

  const benefits = [
    "Smarter prep with AI-driven insights",
    "Faster progress with personalized learning",
    "Tailored guidance for your exam goals",
    "24/7 doubt support and mentorship"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <header className="relative z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-blue-600 text-xs font-bold">AI</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">KracICE</h1>
              <p className="text-xs text-blue-600">India's Exam-Cracking AI</p>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-500/5"></div>
        <div className="max-w-6xl mx-auto px-4 py-20 relative">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Logo Upload Area */}
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="text-white text-2xl font-bold">❄️🧠</div>
                </div>
                <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Upload className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              India's <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Exam-Cracking</span> AI
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Smarter prep. Powered by AI. Designed for India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center group">
                Try KracICE Now
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                10,000+ Students
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                4.8/5 Rating
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2" />
                JEE • NEET • UPSC
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What KracICE Offers</h2>
            <p className="text-xl text-gray-600">AI-powered tools designed for competitive exam success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-blue-600 font-medium mb-3">{feature.subtitle}</p>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why AI?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Traditional coaching can't adapt to your unique learning style. Our AI does.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-yellow-300" />
                  <span className="text-lg">Learns from your mistakes and adapts</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-yellow-300" />
                  <span className="text-lg">Tracks progress in real-time</span>
                </div>
                <div className="flex items-center">
                  <Brain className="w-6 h-6 mr-3 text-yellow-300" />
                  <span className="text-lg">Provides personalized insights</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold mb-4">3x Faster Learning</h3>
                  <p className="text-blue-100">Students using KracICE show 3x faster improvement compared to traditional methods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Students Choose KracICE</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                <CheckCircle className="w-8 h-8 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-lg text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tone Selector Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your AI's Personality</h2>
            <p className="text-xl text-gray-600">Customize how KracICE speaks to you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tones.map((tone) => (
              <button
                key={tone.id}
                onClick={() => setSelectedTone(tone.id)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  selectedTone === tone.id
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tone.name}</h3>
                <p className="text-gray-600">{tone.desc}</p>
                {selectedTone === tone.id && (
                  <div className="mt-4 text-blue-600 font-medium">✓ Selected</div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to ace your exams?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students who are already cracking competitive exams with AI
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center mx-auto group">
            Try KracICE Now
            <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-blue-200">
            <span>✓ Free trial available</span>
            <span>✓ No credit card required</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">AI</span>
              </div>
              <div>
                <span className="font-bold">KracICE</span>
                <p className="text-sm text-gray-400">India's Exam-Cracking AI</p>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 KracICE. Made with ❤️ for Indian students.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}