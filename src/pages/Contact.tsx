import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, Navigation, ExternalLink } from 'lucide-react'
import { hospitalInfo } from '../data/hospitalInfo'
import { Button } from '@/components/ui/button'
import SEO from '../components/SEO'

export default function Contact() {
    return (
        <div className="flex flex-col w-full min-h-screen pt-20">
            <SEO
                title="Contact Us"
                description="Get in touch with KD Hospital. Find our address, emergency contact numbers, email support, and interactive map for directions to our facility in Ahmedabad."
                keywords="contact KD Hospital, hospital address Ahmedabad, emergency number, medical support email, directions to KD hospital"
            />
            {/* Header Section */}
            <section className="relative py-24 bg-slate-900 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-l-full blur-3xl translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-secondary/5 rounded-r-full blur-3xl -translate-x-1/2"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-secondary font-bold tracking-widest uppercase mb-4 block"
                    >
                        Contact Us
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight"
                    >
                        Get in <span className="text-primary">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
                    >
                        Our dedicated support team is available 24/7 to assist you with any medical inquiries or emergencies.
                    </motion.p>
                </div>
            </section>

            {/* Contact & Form Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-16">
                        {/* Information Column */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <motion.h2
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-12 tracking-tight"
                            >
                                How Can We <span className="text-primary text-4xl block">Help You?</span>
                            </motion.h2>

                            <div className="space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6 items-start group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-1">Our Address</h4>
                                        <p className="text-slate-500 font-medium leading-relaxed">{hospitalInfo.address}</p>
                                        <button className="mt-2 text-primary text-sm font-bold flex items-center gap-2 hover:underline">
                                            <Navigation size={14} /> Get Directions
                                        </button>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="flex gap-6 items-start group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-1">Emergency Numbers</h4>
                                        <p className="text-slate-900 font-extrabold text-2xl mb-1">{hospitalInfo.emergency}</p>
                                        <p className="text-slate-500 font-medium leading-relaxed">{hospitalInfo.phone}</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="flex gap-6 items-start group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-1">Email Support</h4>
                                        <p className="text-slate-500 font-medium leading-relaxed">{hospitalInfo.email}</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="flex gap-6 items-start group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                        <Clock size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-1">Working Hours</h4>
                                        <p className="text-slate-500 font-medium leading-relaxed">Emergency: 24/7 Available</p>
                                        <p className="text-slate-500 font-medium leading-relaxed">OPD: 09:00 AM - 08:00 PM</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Contact Form Column */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7 bg-white rounded-[3.5rem] p-10 md:p-14 shadow-2xl border border-slate-100 relative group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-10 tracking-tight">Send Us a Direct Message</h3>

                            <form className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 px-6 focus:outline-none focus:border-primary transition-all text-slate-900 font-semibold" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 px-6 focus:outline-none focus:border-primary transition-all text-slate-900 font-semibold" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                                    <input type="text" placeholder="How can we help?" className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 px-6 focus:outline-none focus:border-primary transition-all text-slate-900 font-semibold" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                                    <textarea rows={5} placeholder="Type your message here..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 px-6 focus:outline-none focus:border-primary transition-all text-slate-900 font-semibold resize-none"></textarea>
                                </div>
                                <Button className="w-full py-8 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-all hover:shadow-primary/30 active:scale-[0.98]">
                                    <Send size={20} />
                                    Send Message Now
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder Section */}
            <section className="pb-24 pt-12">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 rounded-[4rem] overflow-hidden relative shadow-2xl h-[500px] group"
                    >
                        {/* google map placeholder - using an iframe for realistic feel */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117497.02521915494!2d72.50285973685412!3d23.031758580667793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccd708bc178d1!2sKD%20Hospital%20(Kusum%20Dhirajlal%20Hospital)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            className="w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none md:pointer-events-auto"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>

                        {/* Directions Overlay */}
                        <div className="absolute bottom-10 left-10 z-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] shadow-2xl border border-white/50 max-w-xs"
                            >
                                <h4 className="text-xl font-bold text-slate-900 mb-3">Visit Us Today</h4>
                                <p className="text-slate-600 text-sm mb-6 leading-relaxed">Find us at the heart of medical excellence. Follow the link below for precise navigation.</p>
                                <a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary hover:bg-primary/90 text-white font-bold w-full py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all"
                                >
                                    <Navigation size={18} />
                                    Open in Maps
                                    <ExternalLink size={14} />
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
