import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Mail, MapPin, HeartPulse, Menu, PhoneCall, Calendar } from 'lucide-react'
import { hospitalInfo } from '../data/hospitalInfo'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Doctors', path: '/doctors' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <header className="w-full bg-white shadow-sm border-b border-gray-100 flex flex-col z-50 sticky top-0">
            {/* Top Bar - Hidden on Mobile */}
            <div className="bg-slate-900 text-slate-300 py-2.5 text-xs lg:text-sm hidden md:block w-full">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="flex gap-6">
                        <a href={`tel:${hospitalInfo.phone}`} className="flex items-center gap-2 font-medium hover:text-white transition-colors">
                            <Phone size={14} className="text-secondary" /> {hospitalInfo.phone}
                        </a>
                        <a href={`mailto:${hospitalInfo.email}`} className="flex items-center gap-2 font-medium hover:text-white transition-colors">
                            <Mail size={14} className="text-secondary" /> {hospitalInfo.email}
                        </a>
                        <span className="flex items-center gap-2 font-medium">
                            <MapPin size={14} className="text-primary" /> {hospitalInfo.address}
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <Link to="/emergency" className="font-semibold text-white bg-red-600/90 hover:bg-red-600 flex items-center gap-2 px-4 py-1 rounded-full shadow-sm transition-colors cursor-pointer">
                            <PhoneCall size={14} className="animate-pulse" /> Emergency: {hospitalInfo.emergency}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto py-4 flex justify-between items-center bg-white px-4 h-20">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 shrink-0">
                    <div className="p-2 md:p-2.5 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/5">
                        <HeartPulse size={34} className="text-primary" strokeWidth={2.5} />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight m-0 text-slate-900 leading-none">
                            <span className="text-primary">KD</span> Hospital
                        </h1>
                        <p className="text-[10px] md:text-xs text-secondary font-bold m-0 mt-0.5 uppercase tracking-widest">{hospitalInfo.tagline}</p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`transition-colors hover:text-primary relative py-2 ${location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                                }`}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* CTA Buttons - Desktop */}
                <div className="hidden lg:flex items-center gap-3">
                    <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-bold hidden xl:flex">
                        <PhoneCall className="w-4 h-4 mr-2" />
                        {hospitalInfo.phone}
                    </Button>
                    <Link to="/appointment">
                        <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 font-bold">
                            <Calendar className="w-4 h-4 mr-2" />
                            Book Appointment
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Trigger */}
                <div className="lg:hidden flex items-center gap-2">
                    {/* Mobile CTA */}
                    <Link to="/appointment">
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-white h-9 px-3 mr-2 sm:mr-4 font-bold">
                            Book
                        </Button>
                    </Link>

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden lg:hidden">
                                <Menu className="w-6 h-6 text-slate-700" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-slate-100 flex flex-col p-6">
                            <SheetHeader className="pb-6 border-b border-slate-100 mb-6 text-left">
                                <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setIsOpen(false)}>
                                    <div className="p-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                                        <HeartPulse size={28} className="text-primary" />
                                    </div>
                                    <div>
                                        <SheetTitle className="text-xl font-extrabold m-0 leading-none">
                                            <span className="text-primary">KD</span> Hospital
                                        </SheetTitle>
                                        <p className="text-[10px] text-secondary font-bold m-0 mt-0.5 uppercase tracking-wider">{hospitalInfo.tagline}</p>
                                    </div>
                                </Link>
                            </SheetHeader>

                            {/* Mobile Nav Links */}
                            <nav className="flex flex-col gap-5 flex-1 mt-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-lg font-semibold transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-slate-700 hover:text-primary'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            {/* Mobile Footer Info */}
                            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-4">
                                <Link to="/emergency" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 w-full bg-red-50 text-red-600 rounded-lg py-3 font-bold border border-red-100">
                                    <PhoneCall size={18} className="animate-pulse" /> Emergency
                                </Link>
                                <Link to="/appointment" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full bg-primary py-6 text-md font-bold">
                                        <Calendar className="w-5 h-5 mr-2" /> Book Appointment
                                    </Button>
                                </Link>
                                <div className="text-center text-sm text-slate-500 mt-4 font-medium">
                                    {hospitalInfo.phone}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
