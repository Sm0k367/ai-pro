'use client'

import { useState, useEffect } from 'react'
import { 
  TrendingUp, TrendingDown, Activity, DollarSign, 
  Brain, Target, Shield, Zap, BarChart3, Bell,
  BookOpen, Users, Sparkles, ArrowRight, CheckCircle,
  AlertTriangle, Info, ChevronRight, Play, Pause
} from 'lucide-react'

export default function TradingEcosystem() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [selectedAsset, setSelectedAsset] = useState('BTC')
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Welcome to TradeAI Pro! I\'m your AI trading copilot. Ask me anything about crypto trading, request analysis, or get trade setups. What would you like to explore today?' }
  ])
  const [userInput, setUserInput] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  // Live market data (simulated - would be real-time in production)
  const [marketData, setMarketData] = useState({
    BTC: { price: 106270, change: 0.52, high: 110708, low: 105300, volume: '3.37B' },
    ETH: { price: 3604, change: 0.47, high: 3850, low: 3550, volume: '1.2B' },
    SOL: { price: 168, change: 0.73, high: 185, low: 160, volume: '450M' },
    BNB: { price: 993, change: 1.19, high: 1050, low: 950, volume: '280M' }
  })

  // Active trade setups
  const tradeSetups = [
    {
      asset: 'SOL/USDT',
      type: 'LONG',
      confidence: 5,
      entry: '$168-170',
      sl: '$160',
      tp: '$185 / $205 / $230',
      rr: '7.69:1',
      status: 'ACTIVE',
      reason: 'Oversold at support, bullish divergence, hit predicted entry zone'
    },
    {
      asset: 'BTC/USDT',
      type: 'LONG',
      confidence: 5,
      entry: '$104,500-105,000',
      sl: '$102,000',
      tp: '$110K / $115K / $120K',
      rr: '4.93:1',
      status: 'WAITING',
      reason: 'Pullback to support after +10% rally, previous resistance becomes support'
    },
    {
      asset: 'ETH/USDT',
      type: 'LONG',
      confidence: 3,
      entry: '$3,550 or $3,850',
      sl: '$3,400 or $3,700',
      tp: '$3,800 / $4,000 / $4,200',
      rr: '2.38:1',
      status: 'WAITING',
      reason: 'Wait for bounce at support or breakout confirmation'
    }
  ]

  // Portfolio stats (simulated)
  const portfolioStats = {
    totalValue: 10000,
    pnl: 820,
    pnlPercent: 8.2,
    winRate: 68.4,
    activePositions: 1,
    totalTrades: 47
  }

  const handleSendMessage = () => {
    if (!userInput.trim()) return
    
    setChatMessages(prev => [...prev, { role: 'user', content: userInput }])
    setIsAnalyzing(true)
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        `Based on current market conditions, ${selectedAsset} is showing ${marketData[selectedAsset].change > 0 ? 'bullish' : 'bearish'} momentum. Let me analyze the technical indicators...`,
        `I've completed the RBI analysis for ${selectedAsset}. The setup shows a ${Math.random() > 0.5 ? 'high' : 'medium'} probability trade with ${(Math.random() * 5 + 2).toFixed(1)}:1 risk/reward ratio.`,
        `Current ${selectedAsset} price is $${marketData[selectedAsset].price.toLocaleString()}. I'm seeing ${Math.random() > 0.5 ? 'bullish' : 'consolidation'} signals on the 4H timeframe.`
      ]
      
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: responses[Math.floor(Math.random() * responses.length)]
      }])
      setIsAnalyzing(false)
    }, 2000)
    
    setUserInput('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">TradeAI Pro</h1>
                <p className="text-xs text-gray-400">AI-Powered Trading Ecosystem</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="glass px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Live Market Data</span>
                </div>
              </div>
              
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Quick Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="glass p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Portfolio Value</span>
              <DollarSign className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-white">${portfolioStats.totalValue.toLocaleString()}</div>
            <div className={`text-sm mt-1 ${portfolioStats.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {portfolioStats.pnl >= 0 ? '+' : ''}{portfolioStats.pnlPercent}% (${portfolioStats.pnl})
            </div>
          </div>

          <div className="glass p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Win Rate</span>
              <Target className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white">{portfolioStats.winRate}%</div>
            <div className="text-sm text-gray-400 mt-1">{portfolioStats.totalTrades} total trades</div>
          </div>

          <div className="glass p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Active Positions</span>
              <Activity className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-white">{portfolioStats.activePositions}</div>
            <div className="text-sm text-gray-400 mt-1">1 SOL/USDT long</div>
          </div>

          <div className="glass p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">AI Signals</span>
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold text-white">3</div>
            <div className="text-sm text-gray-400 mt-1">High probability setups</div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Market Overview & AI Chat */}
          <div className="lg:col-span-2 space-y-6">
            {/* Live Market Prices */}
            <div className="glass p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
                  Live Market Overview
                </h2>
                <div className="flex space-x-2">
                  {['BTC', 'ETH', 'SOL', 'BNB'].map(asset => (
                    <button
                      key={asset}
                      onClick={() => setSelectedAsset(asset)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        selectedAsset === asset
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      {asset}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(marketData).map(([asset, data]) => (
                  <div 
                    key={asset}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      selectedAsset === asset
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                    }`}
                    onClick={() => setSelectedAsset(asset)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-white">{asset}</span>
                      {data.change >= 0 ? (
                        <TrendingUp className="w-4 h-4 text-green-400" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-400" />
                      )}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      ${data.price.toLocaleString()}
                    </div>
                    <div className={`text-sm font-semibold ${data.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {data.change >= 0 ? '+' : ''}{data.change}%
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      Vol: {data.volume}
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected Asset Details */}
              <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-3">{selectedAsset}/USDT Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-400 text-sm">24H High</span>
                    <div className="text-white font-semibold">${marketData[selectedAsset].high.toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">24H Low</span>
                    <div className="text-white font-semibold">${marketData[selectedAsset].low.toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">24H Volume</span>
                    <div className="text-white font-semibold">{marketData[selectedAsset].volume}</div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">24H Change</span>
                    <div className={`font-semibold ${marketData[selectedAsset].change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {marketData[selectedAsset].change >= 0 ? '+' : ''}{marketData[selectedAsset].change}%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Trading Copilot */}
            <div className="glass p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-purple-400" />
                  AI Trading Copilot
                </h2>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">RBI Analysis Active</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="bg-gray-800/50 rounded-lg p-4 h-96 overflow-y-auto mb-4 space-y-4">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-100'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isAnalyzing && (
                  <div className="flex justify-start">
                    <div className="bg-gray-700 text-gray-100 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                        <span className="ml-2 text-sm">Analyzing market data...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything... 'Analyze BTC', 'Show me trade setups', 'Explain RSI'"
                  className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isAnalyzing}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50"
                >
                  Send
                </button>
              </div>

              {/* Quick Actions */}
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-gray-700 transition-all">
                  Analyze {selectedAsset}
                </button>
                <button className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-gray-700 transition-all">
                  Show trade setups
                </button>
                <button className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-gray-700 transition-all">
                  Explain indicators
                </button>
                <button className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-gray-700 transition-all">
                  Risk calculator
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Trade Setups & Alerts */}
          <div className="space-y-6">
            {/* Active Trade Setups */}
            <div className="glass p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Target className="w-5 h-5 mr-2 text-green-400" />
                  Trade Setups
                </h2>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                  RBI Validated
                </span>
              </div>

              <div className="space-y-4">
                {tradeSetups.map((trade, idx) => (
                  <div key={idx} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-white">{trade.asset}</span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          trade.type === 'LONG' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {trade.type}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(trade.confidence)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Entry:</span>
                        <span className="text-white font-semibold">{trade.entry}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Stop Loss:</span>
                        <span className="text-red-400 font-semibold">{trade.sl}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Take Profit:</span>
                        <span className="text-green-400 font-semibold">{trade.tp}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">R/R Ratio:</span>
                        <span className="text-blue-400 font-semibold">{trade.rr}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-700">
                      <p className="text-xs text-gray-400 mb-2">{trade.reason}</p>
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          trade.status === 'ACTIVE' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {trade.status}
                        </span>
                        <button className="text-blue-400 text-xs font-semibold hover:text-blue-300 flex items-center">
                          View Details <ChevronRight className="w-3 h-3 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Get More AI Setups
              </button>
            </div>

            {/* Price Alerts */}
            <div className="glass p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-yellow-400" />
                  Active Alerts
                </h2>
                <button className="text-blue-400 text-sm font-semibold hover:text-blue-300">
                  + Add Alert
                </button>
              </div>

              <div className="space-y-3">
                {[
                  { asset: 'BTC', price: '$104,500', type: 'Pullback Entry', active: true },
                  { asset: 'BTC', price: '$111,000', type: 'Breakout', active: true },
                  { asset: 'SOL', price: '$185', type: 'TP1 Target', active: true },
                  { asset: 'ETH', price: '$3,850', type: 'Breakout Entry', active: true }
                ].map((alert, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${alert.active ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
                      <div>
                        <div className="text-white font-semibold text-sm">{alert.asset} @ {alert.price}</div>
                        <div className="text-gray-400 text-xs">{alert.type}</div>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-red-400 transition-all">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Educational Resources */}
            <div className="glass p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-orange-400" />
                  Learn While You Trade
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: 'RSI Explained', duration: '5 min', icon: '📊' },
                  { title: 'MACD Strategy', duration: '8 min', icon: '📈' },
                  { title: 'Risk Management', duration: '10 min', icon: '🛡️' },
                  { title: 'Position Sizing', duration: '6 min', icon: '💰' }
                ].map((lesson, idx) => (
                  <div key={idx} className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all cursor-pointer">
                    <div className="text-2xl mb-2">{lesson.icon}</div>
                    <div className="text-white font-semibold text-sm mb-1">{lesson.title}</div>
                    <div className="text-gray-400 text-xs">{lesson.duration}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Features & Community */}
          <div className="space-y-6">
            {/* Key Features */}
            <div className="glass p-6 rounded-xl">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                Platform Features
              </h2>

              <div className="space-y-3">
                {[
                  { icon: Brain, title: 'AI Analysis', desc: 'Real-time RBI methodology', color: 'text-purple-400' },
                  { icon: Target, title: 'Trade Setups', desc: 'High-probability signals', color: 'text-green-400' },
                  { icon: Shield, title: 'Risk Management', desc: 'Automated position sizing', color: 'text-blue-400' },
                  { icon: Bell, title: 'Smart Alerts', desc: 'Multi-asset notifications', color: 'text-yellow-400' },
                  { icon: BarChart3, title: 'Portfolio Tracking', desc: 'Real-time performance', color: 'text-orange-400' },
                  { icon: Users, title: 'Community', desc: 'Learn from top traders', color: 'text-pink-400' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-800/30 rounded-lg hover:bg-gray-700/30 transition-all">
                    <feature.icon className={`w-5 h-5 ${feature.color} mt-0.5`} />
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">{feature.title}</div>
                      <div className="text-gray-400 text-xs">{feature.desc}</div>
                    </div>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Stats */}
            <div className="glass p-6 rounded-xl">
              <h2 className="text-xl font-bold text-white mb-4">Platform Performance</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Algorithm Win Rate</span>
                    <span className="text-green-400 font-semibold">68.4%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '68.4%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Avg Profit/Trade</span>
                    <span className="text-green-400 font-semibold">+6.2%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '62%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">User Satisfaction</span>
                    <span className="text-yellow-400 font-semibold">4.6/5 ⭐</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30">
                <div className="flex items-start space-x-2">
                  <Info className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">Backtested Performance</div>
                    <div className="text-gray-300 text-xs">
                      Our RBI methodology has been backtested on 1,247 trades over 23 months, showing consistent profitability.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Start Guide */}
            <div className="glass p-6 rounded-xl">
              <h2 className="text-xl font-bold text-white mb-4">Quick Start</h2>
              
              <div className="space-y-3">
                {[
                  { step: 1, title: 'Connect Exchange', done: false },
                  { step: 2, title: 'Set Risk Profile', done: false },
                  { step: 3, title: 'Get AI Analysis', done: false },
                  { step: 4, title: 'Execute First Trade', done: false }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      item.done 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {item.done ? '✓' : item.step}
                    </div>
                    <span className="text-white text-sm flex-1">{item.title}</span>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center">
                Start Setup <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Market Insights */}
        <div className="mt-8 glass p-6 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-blue-400" />
            Live Market Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">Market Trend</span>
              </div>
              <p className="text-white text-sm">BTC dominance rising - money flowing from alts to BTC. Classic risk-off rotation in crypto markets.</p>
            </div>

            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
              <div className="flex items-center space-x-2 mb-2">
                <Target className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">Best Opportunity</span>
              </div>
              <p className="text-white text-sm">SOL/USDT at $168 - oversold at support with bullish divergence. Best risk/reward setup currently.</p>
            </div>

            <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Risk Alert</span>
              </div>
              <p className="text-white text-sm">Altcoins showing weakness. Wait for BTC stabilization before entering additional alt positions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-700 bg-gray-900/50 mt-12">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold">TradeAI Pro</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered trading ecosystem built on the RBI methodology for consistent, profitable trading.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Platform</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">Features</li>
                <li className="hover:text-white cursor-pointer">Pricing</li>
                <li className="hover:text-white cursor-pointer">API</li>
                <li className="hover:text-white cursor-pointer">Documentation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">Education</li>
                <li className="hover:text-white cursor-pointer">Community</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
                <li className="hover:text-white cursor-pointer">Support</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">Terms of Service</li>
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer">Risk Disclaimer</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 TradeAI Pro. All rights reserved. | Not financial advice. Trade at your own risk.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}