import { motion } from 'framer-motion'
import { Search, MapPin, Award, GraduationCap, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const doctors = [
    {
        name: "Dr. Arvind Sharma",
        specialization: "Chief Cardiologist",
        experience: "15+ Years",
        image: "https://images.unsplash.com/photo-1612349317150-e410f624c427?q=80&w=800&auto=format&fit=crop",
        degrees: "MD, DM (Cardiology), FACC",
        location: "Block A - First Floor",
        availability: "Mon - Fri, 09:00 AM - 04:00 PM"
    },
    {
        name: "Dr. Meera Patel",
        specialization: "Senior Pediatrician",
        experience: "12+ Years",
        image: "https://images.unsplash.com/photo-1594824416965-9f18a5621c1f?q=80&w=800&auto=format&fit=crop",
        degrees: "MBBS, MD (Pediatrics)",
        location: "Block B - Ground Floor",
        availability: "Mon - Sat, 10:00 AM - 02:00 PM"
    },
    {
        name: "Dr. Rajesh Kumar",
        specialization: "Orthopedic Surgeon",
        experience: "20+ Years",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
        degrees: "MS (Orthopedics), FRCS",
        location: "Block C - Second Floor",
        availability: "Tue - Sat, 11:00 AM - 06:00 PM"
    },
    {
        name: "Dr. Sneha Desai",
        specialization: "Lead Gynecologist",
        experience: "10+ Years",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
        degrees: "MBBS, MS (Obstetrics & Gynae)",
        location: "Block B - First Floor",
        availability: "Mon - Fri, 08:30 AM - 03:00 PM"
    },
    {
        name: "Dr. Vikram Singh",
        specialization: "Neurologist",
        experience: "18+ Years",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
        degrees: "MD, DM (Neurology)",
        location: "Block A - Third Floor",
        availability: "Mon, Wed, Fri, 10:00 AM - 05:00 PM"
    },
    {
        name: "Dr. Anjali Rao",
        specialization: "Ophthalmologist",
        experience: "8+ Years",
        image: "https://images.unsplash.com/photo-1594824416965-9f18a5621c1f?q=80&w=800&auto=format&fit=crop",
        degrees: "MBBS, MS (Ophthalmology)",
        location: "Block D - First Floor",
        availability: "Tue, Thu, Sat, 09:00 AM - 01:00 PM"
    }
]

export default function Doctors() {
    return (
        <div className="flex flex-col w-full min-h-screen pt-20">
            <SEO
                title="Our Doctors"
                description="Meet our highly qualified team of doctors and specialists at KD Hospital. Search by department or name to find the right healthcare professional for you."
                keywords="doctors Ahmedabad, medical specialists, cardiologist, pediatrician, neurologist, orthopedic surgeon"
            />
            {/* Header */}
            <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 rounded-l-full blur-3xl"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-secondary font-bold tracking-widest uppercase mb-4 block"
                        >
                            Find Your Doctor
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight"
                        >
                            Expert Care from Qualified <span className="text-primary">Professionals</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-xl leading-relaxed mb-10"
                        >
                            Connect with over 100+ state-certified specialists committed to providing world-class patient care.
                        </motion.p>

                        {/* Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="relative max-w-2xl group flex items-center"
                        >
                            <Search className="absolute left-5 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Search by doctor name, specialty, or condition..."
                                className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl py-5 pl-14 pr-32 text-white focus:outline-none focus:border-primary transition-all shadow-xl"
                            />
                            <button className="absolute right-2 bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all">
                                Search
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Doctors Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {doctors.map((doctor, index) => (
                            <motion.div
                                key={doctor.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-md text-primary font-bold text-xs px-3 py-1.5 rounded-full shadow-sm">
                                            {doctor.specialization}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{doctor.name}</h3>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3 text-slate-600 text-sm font-semibold">
                                            <GraduationCap size={18} className="text-primary shrink-0" />
                                            <span>{doctor.degrees}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                                            <Award size={18} className="text-slate-400 shrink-0" />
                                            <span>{doctor.experience} experience</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                                            <Calendar size={18} className="text-secondary shrink-0" />
                                            <span className="text-slate-700 font-semibold">{doctor.availability}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                                            <MapPin size={18} className="text-slate-400 shrink-0" />
                                            <span>{doctor.location}</span>
                                        </div>
                                    </div>

                                    <Link to="/appointment">
                                        <button className="w-full group/btn flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5">
                                            <Calendar size={20} />
                                            Book Appointment
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
