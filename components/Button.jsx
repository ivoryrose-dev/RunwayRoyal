'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-gold text-primary hover:bg-gold/90 shadow-gold-glow hover:shadow-gold-glow',
  secondary: 'border border-gold text-gold bg-transparent hover:bg-gold/10',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const baseClass =
    'inline-flex items-center justify-center text-center font-medium rounded transition-all duration-300 whitespace-normal focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-white';

  const combinedClass = `${baseClass} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={combinedClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}
