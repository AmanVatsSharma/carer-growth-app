"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, X, Calendar, MessageCircle, Clock, Users } from "lucide-react"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300
      setIsVisible(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 p-[2px] rounded-2xl shadow-2xl">
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl overflow-hidden">
              {!isExpanded ? (
                // Collapsed State
                <motion.div
                  className="p-4 cursor-pointer"
                  onClick={() => setIsExpanded(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
                          <img
                            src="https://plus.unsplash.com/premium_photo-1714265046278-51dc8ee55405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Education counselor"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full" />
                      </div>
                      <div>
                        <div className="font-bold font-montserrat text-foreground">Free Expert Counseling</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          500+ students helped this month
                        </div>
                      </div>
                    </div>
                    <div className="text-blue-600 font-bold text-sm">Tap to expand →</div>
                  </div>
                </motion.div>
              ) : (
                // Expanded State
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-black font-montserrat bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Start Your Journey Today!
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsExpanded(false)
                      }}
                      className="text-muted-foreground hover:text-foreground hover:bg-red-100 dark:hover:bg-red-900/20"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-3 mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1714265046278-51dc8ee55405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Your counselor"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-bold">Sarah Johnson, Senior Counselor</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Available now • 15+ years experience
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6">
                    Get expert guidance from our certified counselors. 100% free consultation with personalized roadmap.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold group"
                      onClick={() => {
                        console.log("Book phone call")
                      }}
                    >
                      <Phone className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Call Now
                    </Button>

                    <Button
                      variant="outline"
                      className="border-blue-500/30 text-blue-600 hover:bg-blue-500/10 font-bold group bg-transparent"
                      onClick={() => {
                        console.log("Start chat")
                      }}
                    >
                      <MessageCircle className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                      Chat
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <Calendar className="w-4 h-4 text-green-600" />
                      <span className="text-muted-foreground">Available 24/7 • Response within 5 minutes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span className="text-muted-foreground">Limited slots: Only 3 free sessions left today</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
