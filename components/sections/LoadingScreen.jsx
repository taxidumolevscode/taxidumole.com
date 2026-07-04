import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="animate-pulse mb-4 flex items-center justify-center">
          <Camera size={48} strokeWidth={1} />
        </div>
        <motion.h1 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
          className="h-0.5 bg-white w-32 mx-auto mb-4"
        />
        <p className="font-light tracking-[0.3em] text-sm uppercase w-full">Taxi du Môle</p>
      </motion.div>
    </div>
  );
}
