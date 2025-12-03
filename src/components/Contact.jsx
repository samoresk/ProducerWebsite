import { Mail, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gradient-to-t from-black to-dark">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8">LET'S <span className="text-primary">WORK</span></h2>
                <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                    Need a custom beat? Mixing and mastering? Or just want to say hello?
                    Hit me up on social media or send an email.
                </p>

                <div className="flex justify-center gap-8 mb-16">
                    <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                        <Instagram size={24} />
                    </a>
                    <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                        <Twitter size={24} />
                    </a>
                    <a href="mailto:contact@producer.com" className="p-4 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                        <Mail size={24} />
                    </a>
                </div>

                <form className="max-w-md mx-auto text-left space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                        <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Tell me about your project..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-colors mt-4">
                        SEND MESSAGE
                    </button>
                </form>
            </div>
        </section>
    );
}
