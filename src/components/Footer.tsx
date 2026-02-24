import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, HeartPulse, Facebook, Twitter, Instagram, Linkedin, ExternalLink, ArrowRight, PhoneCall } from 'lucide-react'
import { hospitalInfo } from '../data/hospitalInfo'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-slate-900 border-t border-slate-800 font-sans relative overflow-hidden">
            {/* Background Ornaments */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-secondary/5 to-transparent z-0 pointer-events-none"></div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16 md:py-20 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

                {/* Brand Column (Col Span 4) */}
                <div className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col gap-6 lg:pr-8">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="p-2.5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl border border-primary/10">
                            <HeartPulse size={36} className="text-secondary" strokeWidth={2.5} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-extrabold tracking-tight m-0 text-white leading-none">
                                <span className="text-primary">KD</span> Hospital
                            </h2>
                            <p className="text-[10px] text-secondary font-bold m-0 mt-0.5 uppercase tracking-widest">{hospitalInfo.tagline}</p>
                        </div>
                    </Link>

                    <p className="text-slate-400 text-[15px] leading-relaxed mt-2">
                        A premium multi-specialty healthcare facility dedicated to providing advanced medical care with compassion, excellence, and state-of-the-art technology. Your health is our priority.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md focus:ring-2 focus:ring-primary focus:outline-none">
                            <Facebook size={18} />
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md focus:ring-2 focus:ring-primary focus:outline-none">
                            <Twitter size={18} />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md focus:ring-2 focus:ring-primary focus:outline-none">
                            <Instagram size={18} />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-md focus:ring-2 focus:ring-primary focus:outline-none">
                            <Linkedin size={18} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>
                </div>

                {/* Quick Links Column (Col Span 2) */}
                <div className="col-span-1 lg:col-span-2">
                    <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                        Quick Links
                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></span>
                    </h3>
                    <ul className="space-y-4 text-[15px] font-medium text-slate-400">
                        <li><Link to="/" className="hover:text-white hover:translate-x-1 inline-block transition-all flex hidden items-center"><ArrowRight size={14} className="mr-2 text-primary opacity-0 hover:opacity-100" />Home</Link></li>
                        <li><Link to="/about" className="hover:text-primary transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" /> About Us</Link></li>
                        <li><Link to="/doctors" className="hover:text-primary transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Our Doctors</Link></li>
                        <li><Link to="/blog" className="hover:text-primary transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Health Blog</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Contact</Link></li>
                        <li><Link to="/careers" className="hover:text-primary transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity" /> Careers <span className="ml-2 text-[10px] bg-secondary/20 text-secondary px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Hiring</span></Link></li>
                    </ul>
                </div>

                {/* Services Column (Col Span 3) */}
                <div className="col-span-1 lg:col-span-3">
                    <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                        Excellence Centers
                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full"></span>
                    </h3>
                    <ul className="space-y-4 text-[15px] font-medium text-slate-400">
                        <li><Link to="/services/cardiology" className="hover:text-secondary transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />Cardiology & Heart Care</Link></li>
                        <li><Link to="/services/neurology" className="hover:text-secondary transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />Neurosciences</Link></li>
                        <li><Link to="/services/orthopedics" className="hover:text-secondary transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />Orthopedics & Joint Rep.</Link></li>
                        <li><Link to="/services/oncology" className="hover:text-secondary transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />Comprehensive Oncology</Link></li>
                        <li><Link to="/services/pediatrics" className="hover:text-secondary transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />Pediatrics & Neonatology</Link></li>
                        <li><Link to="/services" className="hover:text-primary text-primary transition-colors flex items-center group font-semibold mt-2">View all services <ExternalLink size={14} className="ml-1" /></Link></li>
                    </ul>
                </div>

                {/* Contact Info Column (Col Span 3) */}
                <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-6">
                    <h3 className="text-white font-bold text-lg mb-2 relative inline-block self-start">
                        Reach Us
                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full"></span>
                    </h3>

                    <ul className="space-y-5 text-[15px] text-slate-300">
                        <li className="flex gap-4 group cursor-default">
                            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div className="flex flex-col pt-1">
                                <span className="text-white font-bold mb-1">Our Location</span>
                                <span className="leading-snug">{hospitalInfo.address}</span>
                                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-sm font-semibold text-primary hover:underline mt-2 inline-flex items-center gap-1">Get Directions <ExternalLink size={12} /></a>
                            </div>
                        </li>

                        <li className="flex gap-4 group">
                            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-secondary group-hover:bg-secondary/10 transition-colors shrink-0">
                                <Mail size={20} />
                            </div>
                            <div className="flex flex-col pt-1 w-full flex-wrap break-all">
                                <span className="text-white font-bold mb-1">Email Support</span>
                                <a href={`mailto:${hospitalInfo.email}`} className="hover:text-secondary transition-colors truncate">{hospitalInfo.email}</a>
                            </div>
                        </li>

                        <li className="flex gap-4 group">
                            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors shrink-0">
                                <Phone size={20} />
                            </div>
                            <div className="flex flex-col pt-1">
                                <span className="text-white font-bold mb-1">General Inquiries</span>
                                <a href={`tel:${hospitalInfo.phone}`} className="hover:text-primary transition-colors text-lg font-semibold">{hospitalInfo.phone}</a>
                            </div>
                        </li>
                    </ul>

                    <Link to="/emergency" className="mt-2 bg-red-500/10 border border-red-500/20 text-red-50 p-5 rounded-xl flex flex-col items-start hover:bg-red-500/20 transition-colors relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 opacity-10 text-red-500 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500">
                            <PhoneCall size={100} />
                        </div>
                        <span className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1 shadow-sm flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div> 24/7 Emergency</span>
                        <span className="font-extrabold text-2xl text-white tracking-tight drop-shadow-md z-10">{hospitalInfo.emergency}</span>
                    </Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800 bg-slate-950 relative z-10">
                <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row justify-between items-center gap-4 text-[14px] text-slate-500 font-medium">
                    <p className="text-center lg:text-left">
                        &copy; {currentYear} <span className="text-slate-300 font-bold tracking-tight">KD Hospital</span>. All rights reserved. Built with ❤️ for care.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
