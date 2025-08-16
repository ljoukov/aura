import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserCircleIcon, 
  LightBulbIcon, 
  SparklesIcon 
} from '@heroicons/react/24/solid';

const AuraDemo: React.FC = () => {
  const [callProgress, setCallProgress] = useState(0.0);

  const getSentimentColor = () => {
    if (callProgress > 0.6) return 'bg-green-500';
    return 'bg-yellow-500';
  };

  const getSentimentLabel = () => {
    if (callProgress > 0.6) return 'Positive! ✅';
    return 'Neutral 🤔';
  };

  const getSentimentTextColor = () => {
    if (callProgress > 0.6) return 'text-green-400';
    return 'text-yellow-400';
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto flex flex-col gap-4">
        
        {/* Header Card - Always Visible */}
        <motion.div 
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <UserCircleIcon className="h-12 w-12 text-slate-300" />
            <div className="flex flex-col">
              <div className="text-xl font-bold text-slate-100">Dr. Evans</div>
              <div className="text-sm text-slate-400">Apex Logistics</div>
            </div>
          </div>
        </motion.div>

        {/* Prospect Profile Card */}
        <AnimatePresence>
          {callProgress > 0.1 && (
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <LightBulbIcon className="h-5 w-5 text-blue-300" />
                <span className="text-slate-100 font-semibold">Aura Personality Insight</span>
              </div>
              <div className="flex gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  Analytical
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  Driver
                </span>
              </div>
              <p className="text-slate-300 text-sm">
                Focus on ROI & hard data. Keep small talk minimal.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Sentiment Meter */}
        <AnimatePresence>
          {callProgress > 0.25 && (
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-3">
                <span className="text-slate-100 font-semibold">Live Sentiment</span>
              </div>
              <div className="mb-2">
                <div className="bg-slate-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full ${getSentimentColor()}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(callProgress * 100, 100)}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              <div className={`text-sm font-medium ${getSentimentTextColor()}`}>
                {getSentimentLabel()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Aura Nudge Card - The Main Event */}
        <AnimatePresence>
          {callProgress > 0.75 && (
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 ring-2 ring-green-500/50 shadow-lg shadow-green-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <SparklesIcon className="h-8 w-8 text-yellow-400" />
                <span className="text-slate-100 font-bold text-lg">
                  Aura Nudge: OBJECTION DETECTED
                </span>
              </div>
              <div className="text-orange-300 font-medium mb-3">
                Skepticism detected in tone. Pivot from Price to Value.
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <p className="text-green-400 font-medium">
                  Mention the Gartner report: "15% operational cost reduction."
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Time Slider Controller */}
        <div className="mt-8 px-2">
          <div className="mb-2">
            <span className="text-slate-400 text-sm">Call Progress</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={callProgress}
            onChange={(e) => setCallProgress(parseFloat(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #10b981 0%, #10b981 ${callProgress * 100}%, #374151 ${callProgress * 100}%, #374151 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>Start</span>
            <span>End Call</span>
          </div>
        </div>

        <style jsx>{`
          .slider::-webkit-slider-thumb {
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #10b981;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(16, 185, 129, 0.3);
          }
          .slider::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #10b981;
            cursor: pointer;
            border: none;
            box-shadow: 0 4px 8px rgba(16, 185, 129, 0.3);
          }
        `}</style>
      </div>
    </div>
  );
};

export default AuraDemo;