import React from 'react';
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const LandingPage = ({navigate}) => {
  return (
    <div className="relative min-h-screen bg-[url('/background.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40" />
      <div className="container relative flex min-h-screen items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl rounded-2xl bg-white/95 p-12 text-center backdrop-blur"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Welcome to
          </p>
          <h1 className="mt-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-5xl font-bold text-transparent">
            Paradise nursery
          </h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle.
          </p>
          <Button 
            className="mt-8"
            size="lg"
            onClick={() => navigate("ProductListing")}
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
