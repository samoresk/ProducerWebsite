import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradient/Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-purple-900/20 to-dark z-0" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay z-0" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    PREMIUM BEATS FOR<br />
                    <span className="text-primary">NEXT LEVEL</span> ARTISTS
                </motion.h1>

                <motion.p
                    className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Professional quality instrumentals ready for your next hit.
                    Instant delivery. Secure checkout.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a
                        href="#beats"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary/25"
                    >
                        <Play fill="currentColor" size={20} />
                        LISTEN NOW
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
