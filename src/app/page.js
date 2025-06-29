"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronRight, Brain, MessageCircle, FileText, Zap, CheckCircle, Star, Upload, Play, Users, Target, TrendingUp, Clock, Award, BookOpen, ArrowLeft, Send, Camera, Mic, Home, User, Settings, BarChart3, Timer, RefreshCw, X, Menu } from 'lucide-react';

const mockQuestions = [
  {
    id: 1,
    subject: 'Physics',
    question: 'A ball is thrown vertically upward with an initial velocity of 20 m/s. What is the maximum height reached? (g = 10 m/s²)',
    options: ['10 m', '20 m', '30 m', '40 m'],
    correct: 1,
    difficulty: 'Medium'
  },
  {
    id: 2,
    subject: 'Chemistry',
    question: 'Which of the following is the molecular formula of glucose?',
    options: ['C₆H₁₂O₆', 'C₆H₁₀O₅', 'C₅H₁₀O₅', 'C₆H₁₄O₆'],
    correct: 0,
    difficulty: 'Easy'
  },
  {
    id: 3,
    subject: 'Mathematics',
    question: 'If log₂(x) = 3, then x equals:',
    options: ['6', '8', '9', '12'],
    correct: 1,
    difficulty: 'Medium'
  }
];

const MockTestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(mockQuestions.length).fill(null));
  const [showReport, setShowReport] = useState(false);

  // For timer
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes for example

  useEffect(() => {
    if (showReport) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowReport(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [showReport]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  // Render Report Page
  if (showReport) {
    return (
      <div className="text-black min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Test Report</h1>
          {mockQuestions.map((q, index) => (
            <div key={q.id} className="bg-white p-6 mb-4 rounded-xl shadow border">
              <h2 className="text-lg font-semibold mb-2">
                Q{index + 1}. {q.question}
              </h2>
              <p className="mb-1">
                Your Answer:{' '}
                {answers[index] !== null
                  ? q.options[answers[index]]
                  : <span className="text-red-500">Not Answered</span>}
              </p>
              <p>
                Correct Answer:{' '}
                <span className="font-bold text-green-600">{q.options[q.correct]}</span>
              </p>
              {answers[index] === q.correct ? (
                <p className="text-green-600 font-medium mt-1">✅ Correct</p>
              ) : (
                <p className="text-red-600 font-medium mt-1">❌ Incorrect</p>
              )}
            </div>
          ))}
          <button
            onClick={() => {
              setShowReport(false);
              setCurrentQuestion(0);
              setAnswers(Array(mockQuestions.length).fill(null));
              setTimeLeft(15 * 60);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retake Test
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setCurrentQuestion(0)}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </button>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-orange-600">
                <Timer className="w-5 h-5 mr-2" />
                <span className="font-mono text-lg font-bold">{formatTime(timeLeft)}</span>
              </div>
              <button
                onClick={() => setShowReport(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Submit Test
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">NEET Mock Test - {mockQuestions[currentQuestion].subject}</h1>
              <p className="text-gray-600">Question {currentQuestion + 1} of {mockQuestions.length}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Progress:</span>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / mockQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {mockQuestions[currentQuestion].subject}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                mockQuestions[currentQuestion].difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  mockQuestions[currentQuestion].difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
              }`}>
                {mockQuestions[currentQuestion].difficulty}
              </span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <BookOpen className="w-5 h-5" />
            </button>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed">
            {mockQuestions[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {mockQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  const updated = [...answers];
                  updated[currentQuestion] = index;
                  setAnswers(updated);
                }}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  answers[currentQuestion] === index
                    ? 'border-blue-500 bg-blue-50 text-blue-800'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex text-black items-center">
                  <span className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center text-sm font-medium ${
                    answers[currentQuestion] === index
                      ? 'border-blue-500 bg-blue-500 text-white'
                      : 'border-gray-300'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </button>

          <div className="flex space-x-2">
            {mockQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                  index === currentQuestion
                    ? 'bg-blue-600 text-white'
                    : index < currentQuestion
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentQuestion(Math.min(mockQuestions.length - 1, currentQuestion + 1))}
            disabled={currentQuestion === mockQuestions.length - 1}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default function KracICEWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTone, setSelectedTone] = useState('friendly');
  const [isVisible, setIsVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [doubtText, setDoubtText] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock test timer
  useEffect(() => {
    if (currentPage === 'mocktest' && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentPage, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

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
      desc: "Get custom study plans tailored to your strengths and weaknesses",
      page: 'tutor'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Doubt-Solving",
      subtitle: "Instant AI answers to questions",
      desc: "Upload your doubts and get instant, detailed explanations",
      page: 'doubts'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Mock Tests",
      subtitle: "Practice with real exam scenarios",
      desc: "Simulate actual exam conditions with AI-powered test series",
      page: 'mocktest'
    }
  ];

  const benefits = [
    "Smarter prep with AI-driven insights",
    "Faster progress with personalized learning",
    "Tailored guidance for your exam goals",
    "24/7 doubt support and mentorship"
  ];

  const Header = () => (
    <header className="z-50 bg-white backdrop-blur-md border-b border-blue-100 sticky top-0">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <Image
          src="/logo.jpeg"
          alt='KracICE Logo'
          width={50}
          height={50}
          />
          <div>
            <h1 className="text-xl font-bold text-gray-900">KracICE</h1>
            <p className="text-xs text-blue-600">India's Exam-Cracking AI</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`px-4 py-2 rounded-lg transition-colors ${currentPage === 'tutor' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('tutor')}
            className={`px-4 py-2 rounded-lg transition-colors ${currentPage === 'tutor' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            AI Tutor
          </button>
          <button 
            onClick={() => setCurrentPage('mocktest')}
            className={`px-4 py-2 rounded-lg transition-colors ${currentPage === 'mocktest' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            Mock Tests
          </button>
          <button 
            onClick={() => setCurrentPage('doubts')}
            className={`px-4 py-2 rounded-lg transition-colors ${currentPage === 'doubts' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            Doubts
          </button>
          <button 
            onClick={() => setCurrentPage('dashboard')}
            className={`px-4 py-2 rounded-lg transition-colors ${currentPage === 'dashboard' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            Dashboard
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 px-4 py-4">
          <nav className="space-y-2">
            <button 
              onClick={() => { setCurrentPage('tutor'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-50"
            >
              AI Tutor
            </button>
            <button 
              onClick={() => { setCurrentPage('mocktest'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-50"
            >
              Mock Tests
            </button>
            <button 
              onClick={() => { setCurrentPage('doubts'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-50"
            >
              Doubts
            </button>
            <button 
              onClick={() => { setCurrentPage('dashboard'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-50"
            >
              Dashboard
            </button>
          </nav>
        </div>
      )}
    </header>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="max-w-6xl mx-auto px-4 py-20 relative">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              India's <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Exam-Cracking</span> AI
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Smarter prep. Powered by AI. Designed for India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => setCurrentPage('dashboard')}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center group"
              >
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
              <div 
                key={index} 
                onClick={() => setCurrentPage(feature.page)}
                className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
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
          <button 
            onClick={() => setCurrentPage('dashboard')}
            className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center mx-auto group"
          >
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
    </div>
  );

  const DashboardPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Riya! 👋</h1>
          <p className="text-gray-600">Let's continue your NEET preparation journey</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Study Streak</p>
                <p className="text-2xl font-bold text-orange-500">12 days</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-orange-500" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tests Taken</p>
                <p className="text-2xl font-bold text-blue-500">24</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average Score</p>
                <p className="text-2xl font-bold text-green-500">78%</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Hours Studied</p>
                <p className="text-2xl font-bold text-purple-500">156h</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <button 
                  onClick={() => setCurrentPage('mocktest')}
                  className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:shadow-md transition-all group"
                >
                  <FileText className="w-8 h-8 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900">Take Mock Test</h3>
                  <p className="text-sm text-gray-600">Practice with AI-powered tests</p>
                </button>
                
                <button 
                  onClick={() => setCurrentPage('tutor')}
                  className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:shadow-md transition-all group"
                >
                  <Brain className="w-8 h-8 text-purple-600 mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900">AI Tutor</h3>
                  <p className="text-sm text-gray-600">Get personalized lessons</p>
                </button>
                
                <button 
                  onClick={() => setCurrentPage('doubts')}
                  className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:shadow-md transition-all group"
                >
                  <MessageCircle className="w-8 h-8 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900">Ask Doubts</h3>
                  <p className="text-sm text-gray-600">Get instant AI answers</p>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Physics Mock Test - Wave Optics</p>
                    <p className="text-sm text-gray-600">Scored 85% • 2 hours ago</p>
                  </div>
                  <span className="text-green-600 font-semibold">+5 XP</span>
                </div>
                
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Brain className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Completed Chemistry - Organic Reactions</p>
                    <p className="text-sm text-gray-600">AI Tutor Session • Yesterday</p>
                  </div>
                  <span className="text-green-600 font-semibold">+8 XP</span>
                </div>
                
                <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <MessageCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Asked doubt about Thermodynamics</p>
                    <p className="text-sm text-gray-600">Got AI explanation • 2 days ago</p>
                  </div>
                  <span className="text-green-600 font-semibold">+3 XP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Subject Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Physics</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Chemistry</span>
                    <span className="text-sm text-gray-500">68%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '68%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Biology</span>
                    <span className="text-sm text-gray-500">82%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '82%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Tests */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Tests</h3>
              <div className="space-y-3">
                <div className="p-3 border border-blue-100 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">NEET Mock Test #25</h4>
                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">Tomorrow</span>
                  </div>
                  <p className="text-sm text-gray-600">Full syllabus • 3 hours</p>
                </div>
                
                <div className="p-3 border border-gray-100 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">Physics - Electricity</h4>
                    <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">2 days</span>
                  </div>
                  <p className="text-sm text-gray-600">Chapter test • 1 hour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TutorPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <button 
            onClick={() => setCurrentPage('dashboard')}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AI Tutor</h1>
            <p className="text-gray-600">Your personalized learning companion</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Subjects</h3>
              <div className="space-y-2">
                {['Physics', 'Chemistry', 'Biology', 'Mathematics'].map((subject) => (
                  <button key={subject} className="w-full text-left p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
                    {subject}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Study Plan</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-blue-800">Wave Optics</span>
                    <span className="text-xs text-blue-600">Today</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-1">
                    <div className="bg-blue-600 h-1 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Thermodynamics</span>
                    <span className="text-xs text-gray-500">Tomorrow</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-gray-400 h-1 rounded-full" style={{width: '0%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Physics - Wave Optics</h2>
                    <p className="text-gray-600">Lesson 3 of 12 • Interference of Light</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Video/Content Area */}
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-8 mb-8 text-white text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Young's Double Slit Experiment</h3>
                  <p className="text-blue-100">Understanding the concept of interference patterns</p>
                </div>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Learning
                </button>
              </div>

              {/* Key Concepts */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Concepts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Constructive Interference</h4>
                    <p className="text-sm text-blue-700">When waves combine to create larger amplitude</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Destructive Interference</h4>
                    <p className="text-sm text-green-700">When waves cancel each other out</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Path Difference</h4>
                    <p className="text-sm text-purple-700">Difference in distances traveled by two waves</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Fringe Width</h4>
                    <p className="text-sm text-orange-700">Distance between consecutive bright fringes</p>
                  </div>
                </div>
              </div>

              {/* Practice Questions */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Practice Questions</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Calculate the fringe width for λ = 500nm</h4>
                        <p className="text-sm text-gray-600">Difficulty: Medium • Expected time: 5 min</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Determine the condition for bright fringes</h4>
                        <p className="text-sm text-gray-600">Difficulty: Easy • Expected time: 3 min</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DoubtsPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <button 
            onClick={() => setCurrentPage('dashboard')}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Doubt Solver</h1>
            <p className="text-gray-600">Get instant AI-powered explanations for your questions</p>
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Ask Your Doubt</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
              <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Upload Photo</h3>
              <p className="text-gray-500">Take a picture of your question</p>
            </div>
            
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
              <Mic className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Voice Question</h3>
              <p className="text-gray-500">Ask your doubt by speaking</p>
            </div>
          </div>

          <div className="relative mb-6">
            <textarea
              value={doubtText}
              onChange={(e) => setDoubtText(e.target.value)}
              placeholder="Or type your question here..."
              className="text-black w-full p-4 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <select className="text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Biology</option>
                <option>Mathematics</option>
              </select>
              <select className="text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Class 12</option>
                <option>Class 11</option>
                <option>JEE Level</option>
                <option>NEET Level</option>
              </select>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
              <Send className="w-4 h-4 mr-2" />
              Get Answer
            </button>
          </div>
        </div>

        {/* Recent Doubts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Doubts</h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">Q</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Physics - Thermodynamics</h3>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Solved</span>
              </div>
              
              <p className="text-gray-700 mb-4">
                "What is the efficiency of a Carnot engine operating between 400K and 300K?"
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Brain className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-medium text-blue-800">AI Tutor's Answer</span>
                </div>
                <p className="text-blue-700 text-sm">
                  The efficiency of a Carnot engine is given by η = 1 - (T₂/T₁) where T₁ is the temperature of hot reservoir and T₂ is the temperature of cold reservoir...
                </p>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2">
                  View Full Solution →
                </button>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">Q</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Chemistry - Organic</h3>
                    <p className="text-sm text-gray-500">Yesterday</p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Solved</span>
              </div>
              
              <p className="text-gray-700 mb-4">
                "Explain the mechanism of SN1 and SN2 reactions with examples."
              </p>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Brain className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-medium text-green-800">AI Tutor's Answer</span>
                </div>
                <p className="text-green-700 text-sm">
                  SN1 and SN2 are two different mechanisms for nucleophilic substitution reactions. SN1 follows a two-step mechanism with carbocation intermediate...
                </p>
                <button className="text-green-600 hover:text-green-800 text-sm font-medium mt-2">
                  View Full Solution →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render the appropriate page
  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'mocktest':
        return <MockTestPage />;
      case 'tutor':
        return <TutorPage />;
      case 'doubts':
        return <DoubtsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      {renderPage()}
      
      {/* Footer */}
      {currentPage === 'home' && (
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <Image
                src="/logo.jpeg"
                alt='KracICE Logo'
                width={50}
                height={50}
                />
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
      )}
    </div>
  );
}