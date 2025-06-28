"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";

export default function Home() {
  const slogans = ["Buy BuggyCoin", "Hold and Meme", "Moon Together 🚀"];
  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-0">
      {/* CTA Bar */}
      <div className="w-full bg-yellow-400 text-black text-center py-2 font-bold">
        Join the Buggy Army today 🚀
      </div>

      {/* Join Community button */}
      <a
        href="https://t.me/BuggyCoinCommunity"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-4 bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-500 transition z-50"
      >
        Join Community
      </a>

      {/* Main container */}
      <div className="flex flex-col items-center justify-center p-4">
        {/* Animated logo */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Image
            src="/BuggyCoin_Logo.png"
            alt="BuggyCoin Logo"
            width={150}
            height={150}
          />
        </motion.div>

        {/* Title fade-in */}
        <motion.h1
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Buggy Coin
        </motion.h1>

        <motion.p
          className="text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Fun. Fast. Buggy.
        </motion.p>

        {/* Animated slogan */}
        <motion.p
          key={currentSlogan}
          className="text-lg font-semibold mb-4 text-yellow-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {slogans[currentSlogan]}
        </motion.p>

        {/* Buy button */}
        <motion.a
          href="https://pancakeswap.finance/swap?outputCurrency=0x6382A3C6DB54B43d635A55A8684e4Ff5C3d2D9f4"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-2xl shadow-lg hover:bg-yellow-500 transition">
            Buy Now
          </button>
        </motion.a>

        {/* Animated Counters */}
        <div className="flex gap-6 mt-10 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            <h3 className="text-3xl font-bold">12,345</h3>
            <p className="text-gray-400">Holders</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.5 }}>
            <h3 className="text-3xl font-bold">$2.5M</h3>
            <p className="text-gray-400">Market Cap</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>
            <h3 className="text-3xl font-bold">0</h3>
            <p className="text-gray-400">Burned</p>
          </motion.div>
        </div>

        {/* About, Tokenomics, Roadmap */}
        <motion.div
          className="mt-10 max-w-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-2xl font-semibold mb-2">About BuggyCoin</h2>
          <p className="mb-6">
            Buggy Coin (BUG) is a community-driven meme token designed for fun and engagement on BNB Smart Chain. It aims to connect users through innovative activities and decentralized value.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Tokenomics</h2>
          <p className="mb-6">
            Total Supply: 1,000,000,000 BUG. No tax, no burn. Transparent and community-focused.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Roadmap</h2>
          <motion.ul
            className="list-disc list-inside mb-6 text-left"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
            }}
          >
            {["Launch BuggyCoin (done ✅)", "Website & Social Media", "Liquidity and LP lock", "Community giveaways & contests", "Partnerships and listings"].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <h2 className="text-2xl font-semibold mb-2">How to Buy</h2>
          <p>
            Add BuggyCoin to MetaMask using our contract address, then swap BNB to BUG on PancakeSwap.
          </p>

          {/* Social icons */}
          <div className="flex justify-center gap-6 mt-6 text-2xl">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
              <FaTwitter />
            </a>
            <a href="https://t.me/BuggyCoinOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
              <FaTelegramPlane />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
              <FaDiscord />
            </a>
          </div>
        </motion.div>

        {/* Memes Gallery */}
        <motion.div
          className="mt-12 max-w-4xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Memes Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="rounded overflow-hidden shadow-lg">
                <Image
                  src={`/memes/meme${num}.png`}
                  alt={`Meme ${num}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Join Community form */}
        <motion.div
          className="mt-12 w-full max-w-md text-center bg-yellow-400 text-black rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-xl font-bold mb-2">Join the Community</h2>
          <p className="mb-4">Get updates, join giveaways, and stay in touch with the Buggy Army!</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded"
            />
            <button type="submit" className="bg-black text-yellow-400 font-bold py-2 rounded hover:bg-gray-800 transition">
              Join Now
            </button>
          </form>
        </motion.div>

        <footer className="mt-10 text-gray-500 text-sm">
          © 2025 BuggyCoin. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
