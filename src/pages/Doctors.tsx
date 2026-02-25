import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, Award, GraduationCap, Calendar, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { doctorsData } from '../data/doctorsData'

export default function Doctors() {
    const [searchQuery, setSearchQuery] = useState('')

    const doctors = Object.values(doctorsData)

    const filteredDoctors = useMemo(() => {
        return doctors.filter(doc =>
            doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doc.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doc.degrees.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [searchQuery, doctors])

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
                            Connect with our state-certified specialists committed to providing world-class patient care.
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
                                placeholder="Search by doctor name or specialty..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl py-5 pl-14 pr-32 text-white focus:outline-none focus:border-primary transition-all shadow-xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Doctors Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    {filteredDoctors.length === 0 ? (
                        <div className="text-center py-20">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">No doctors found matching your search.</h3>
                            <button
                                onClick={() => setSearchQuery('')}
                                className="text-primary font-bold hover:underline"
                            >
                                Clear search and view all
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {filteredDoctors.map((doctor, index) => (
                                <motion.div
                                    key={doctor.id}
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
                                        <div className="space-y-4 mb-8 flex-1">
                                            <div className="flex items-center gap-3 text-slate-600 text-sm font-semibold">
                                                <GraduationCap size={18} className="text-primary shrink-0" />
                                                <span>{doctor.degrees}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                                                <Award size={18} className="text-slate-400 shrink-0" />
                                                <span>{doctor.experience} Experience</span>
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

                                        <div className="flex gap-3">
                                            <Link to={`/doctors/${doctor.id}`} className="flex-1">
                                                <button className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-bold transition-all">
                                                    <UserRound size={20} />
                                                    Profile
                                                </button>
                                            </Link>
                                            <Link to="/appointment" className="flex-1">
                                                <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5">
                                                    <Calendar size={20} />
                                                    Book
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
