'use client'

import ArrowRight from '@/assets/arrow-right.svg';
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll ({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

const translateY = useTransform (scrollYProgress, [0, 1], [150, -150]);
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="relative">
          <h2 className="text-center mt-5 text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Sign up for free today
          </h2>
          <p className="mx-auto text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5 max-w-xl">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts
          </p>
          {/* Aparecerán solo en pantallas medianas (md) y más grandes */}
          <motion.img
            src={starImage.src}
            alt="Star Image"
            width={360}
            className="absolute -left-[280px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring Image"
            width={360}
            className="absolute -right-[200px] -top-[18px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
            Get for free
          </button>
          <button className="bg-transparent text-black px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
