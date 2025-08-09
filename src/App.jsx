import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { ExternalLink, Twitter, Send, Eye, BarChart3, Bot, Zap, Shield, Cpu, Network, TrendingUp, Activity } from 'lucide-react'
import captainBnbImage from './assets/captain-bnb.jpg'
import robotBnbImage from './assets/robot-bnb.jpg'
import cryptoRobotImage from './assets/crypto-robot.jpg'
import cryptoRobot2Image from './assets/crypto-robot-2.jpg'
import './App.css'

function App() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 200], [1, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Neon Rain Effect Component
  const NeonRain = () => {
    const rainDrops = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
      opacity: 0.3 + Math.random() * 0.7,
      color: Math.random() > 0.5 ? '#F59E0B' : '#3B82F6'
    }))

    return (
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {rainDrops.map((drop) => (
          <motion.div
            key={drop.id}
            className="absolute w-0.5 h-16 rounded-full"
            style={{
              left: `${drop.x}%`,
              background: `linear-gradient(to bottom, ${drop.color}, transparent)`,
              boxShadow: `0 0 6px ${drop.color}`,
              opacity: drop.opacity
            }}
            animate={{
              y: ['-100vh', '100vh']
            }}
            transition={{
              duration: drop.duration,
              delay: drop.delay,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>
    )
  }

  const roadmapItems = [
    {
      phase: "1",
      title: "The Watcher",
      subtitle: "Observing and reacting to what moves on-chain and in the feed",
      features: [
        "Gas and block time anomaly detection",
        "Meme launches and early KOL call tracking", 
        "FUD monitoring and AI-style customer response",
        "Public alerts, recaps, and dashboards via Twitter"
      ],
      icon: Eye,
      color: "from-yellow-400 to-orange-500",
      bgImage: cryptoRobotImage
    },
    {
      phase: "2", 
      title: "The Analyst",
      subtitle: "Building deeper models of tokens, users, and narratives",
      features: [
        "Meme token lifecycle summaries & structured profiles",
        "KOL PnL cards — who called it, how early, how big",
        "Whale & trader behavior mapping",
        "Project sentiment flow + narrative trend snapshots"
      ],
      icon: BarChart3,
      color: "from-blue-400 to-purple-500",
      bgImage: cryptoRobot2Image
    },
    {
      phase: "3",
      title: "The Agent", 
      subtitle: "From public bot to protocol-integrated AI assistant",
      features: [
        "Agent-as-a-Service tools for projects",
        "Real-time social + on-chain monitoring for supported tokens",
        "Private dashboards, alerts, and summaries for project teams",
        "Modular agent infra via MCP / A2A — enabling ecosystem-wide integration"
      ],
      icon: Bot,
      color: "from-green-400 to-blue-500",
      bgImage: robotBnbImage
    }
  ]

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Real-time blockchain scanning with microsecond precision",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Shield,
      title: "Secure Protocol",
      description: "Military-grade encryption protecting your data",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: Cpu,
      title: "AI-Powered",
      description: "Advanced machine learning algorithms for pattern recognition",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: Network,
      title: "Cross-Chain",
      description: "Multi-blockchain support for comprehensive coverage",
      color: "from-purple-400 to-pink-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden relative">
      {/* Neon Rain Background */}
      <NeonRain />
      
      {/* Animated Background Grid */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30"
            animate={{
              x: [0, 200, 0],
              y: [0, -200, 0],
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hexagonal Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
              <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" fill="none" stroke="#F59E0B" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Mouse Follower with BNB Colors */}
      <motion.div
        className="fixed w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 w-full z-40 bg-slate-900/90 backdrop-blur-md border-b border-yellow-500/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <Bot className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              SenatorBNB
            </span>
          </motion.div>
          <div className="flex gap-4">
            <motion.a
              href="https://twitter.com/SenatorBNB"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-yellow-500/20 hover:bg-yellow-500/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter className="w-5 h-5 text-yellow-400" />
            </motion.a>
            <motion.a
              href="https://t.me/SenatorBNB_Announcements"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-yellow-500/20 hover:bg-yellow-500/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5 text-yellow-400" />
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold border-0">
                BUY $Senator
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <motion.div style={{ y: y1, opacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full blur-3xl transform -translate-y-1/2" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              className="flex items-center space-x-2 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-yellow-400 font-semibold tracking-wider">BINANCE SMART CHAIN</span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                ROBOT AI
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                GUARDIAN
              </span>
              <br />
              <span className="text-white">OF BNB CHAIN</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-yellow-200 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Autonomous Oracle Scanning Every Block with Advanced AI Intelligence
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold border-0 px-8 py-4 text-lg">
                  <Bot className="w-5 h-5 mr-2" />
                  BUY $Senator
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg font-bold">
                  <Activity className="w-5 h-5 mr-2" />
                  Live Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ y: y2 }}
          >
            <motion.div
              className="relative z-10"
              animate={{ 
                rotateY: [0, 15, 0, -15, 0],
                rotateX: [0, 10, 0, -10, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative">
                <img 
                  src={robotBnbImage} 
                  alt="Robot BNB Senator" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-2 border-yellow-400/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent rounded-2xl" />
                <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                <div className="absolute bottom-4 left-4 text-xs bg-black/50 px-2 py-1 rounded text-yellow-400 font-mono">
                  STATUS: ACTIVE
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-2xl blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-yellow-400 text-center">
            <div className="text-sm mb-2 font-semibold">SCROLL TO EXPLORE</div>
            <div className="w-6 h-10 border-2 border-yellow-400 rounded-full mx-auto relative">
              <motion.div 
                className="w-1 h-3 bg-yellow-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Advanced Robot Capabilities
            </h2>
            <p className="text-xl text-yellow-200 max-w-4xl mx-auto leading-relaxed">
              Powered by cutting-edge AI technology and blockchain integration
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-yellow-200 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomous Intelligence Section */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Autonomous Crypto Intelligence
            </h2>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              Built to watch, reason, and respond. Powered by MCP and A2A for modular, ecosystem-wide integration.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 backdrop-blur-sm border border-yellow-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-4">
                <Cpu className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-yellow-300">MCP-Driven Chain Consciousness</h3>
              </div>
              <p className="text-lg text-blue-100">
                Autonomous detection of emerging alphas, shifting liquidity, and protocol anomalies with real-time blockchain analysis.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Robot Evolution Roadmap
            </h2>
            <p className="text-xl text-orange-200 max-w-4xl mx-auto leading-relaxed">
              Three phases of AI evolution for complete blockchain dominance
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-yellow-500/20 h-full">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-10">
                    <img src={item.bgImage} alt="" className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="relative z-10 p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-black font-bold text-2xl mr-4`}>
                        {item.phase}
                      </div>
                      <item.icon className="w-10 h-10 text-yellow-400" />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-yellow-200 mb-6 leading-relaxed">{item.subtitle}</p>
                    
                    <ul className="space-y-3">
                      {item.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start text-slate-300"
                        >
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "24/7", label: "Blockchain Monitoring", icon: Activity },
              { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
              { number: "1M+", label: "Transactions Analyzed", icon: TrendingUp },
              { number: "<1ms", label: "Response Time", icon: Zap }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-black" />
                </div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-yellow-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-yellow-500/20 relative z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-blue-900/50" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Bot className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                SenatorBNB
              </h3>
            </div>
            <p className="text-yellow-200 mb-6">Robot AI Guardian of BNB Chain</p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://twitter.com/SenatorBNB"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-yellow-500/20 hover:bg-yellow-500/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-6 h-6 text-yellow-400" />
              </motion.a>
              <motion.a
                href="https://t.me/SenatorBNB_Announcements"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-yellow-500/20 hover:bg-yellow-500/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-6 h-6 text-yellow-400" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App

