import { motion } from 'framer-motion'
import { GraduationCap, Award, Stethoscope, Clock, Calendar, ShieldCheck, MapPin, ArrowLeft } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { doctorsData } from '../data/doctorsData'
import SEO from '../components/SEO'

export default function DoctorProfile() {
    const { id } = useParams<{ id: string }>()
    const doctor = id ? doctorsData[id] : doctorsData["arvind-sharma"]

    if (!doctor) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen pt-20">
                <SEO
                    title="Profile Not Found"
                    description="The requested doctor profile could not be found. Please check our doctors directory."
                />
                <h1 className="text-2xl font-bold mb-4">Doctor Profile Not Found</h1>
                <Link to="/doctors" className="text-primary font-bold hover:underline">Back to Doctors</Link>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full min-h-screen pt-20 pb-20 bg-slate-50">
            <SEO
                title={`${doctor.name} - ${doctor.role}`}
                description={`${doctor.name} is a ${doctor.role} at KD Hospital. ${doctor.bio.substring(0, 150)}...`}
                keywords={`${doctor.name}, ${doctor.specialization}, KD Hospital doctors, ${doctor.role}`}
            />
            {/* Breadcrumb/Back */}
            <div className="container mx-auto px-4 py-8">
                <Link to="/doctors" className="inline-flex items-center text-slate-500 hover:text-primary font-bold text-sm transition-colors group">
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Doctors Directory
                </Link>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column: Profile Card */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-[3rem] p-8 shadow-2xl shadow-slate-200 border border-slate-100 sticky top-32"
                        >
                            <div className="aspect-square rounded-[2.5rem] overflow-hidden mb-8 shadow-lg">
                                <img src={doctor.image} alt={doctor.name} loading="lazy" className="w-full h-full object-cover" />
                            </div>
                            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{doctor.name}</h1>
                            <p className="text-primary font-bold text-lg mb-6 uppercase tracking-wider">{doctor.role}</p>

                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm">
                                        <MapPin size={20} />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-600">{doctor.location}</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-600">NABH Certified Expert</span>
                                </div>
                            </div>

                            <Link to="/appointment">
                                <Button className="w-full py-8 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                                    <Calendar size={24} />
                                    Book Appointment
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: details */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Bio Section */}
                        <motion.section
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-[3rem] p-10 md:p-12 shadow-xl border border-slate-100"
                        >
                            <h2 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                                <Stethoscope className="text-primary" />
                                Professional Biography
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                {doctor.bio}
                            </p>
                        </motion.section>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Education Section */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100"
                            >
                                <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                                    <GraduationCap className="text-primary" />
                                    Education
                                </h2>
                                <ul className="space-y-6">
                                    {doctor.education.map((edu: string, i: number) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                                            <span className="text-slate-600 font-medium">{edu}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.section>

                            {/* Experience Section */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100"
                            >
                                <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                                    <Award className="text-primary" />
                                    Experience Highlights
                                </h2>
                                <ul className="space-y-6">
                                    {doctor.experience_list.map((exp: string, i: number) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0"></div>
                                            <span className="text-slate-600 font-medium">{exp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.section>
                        </div>

                        {/* specialties & Timings */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Specialties */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-slate-900 rounded-[3rem] p-10 shadow-xl text-white"
                            >
                                <h2 className="text-2xl font-extrabold mb-8 flex items-center gap-3">
                                    <ShieldCheck className="text-secondary" />
                                    Core Specialties
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {doctor.specialties.map((spec: string) => (
                                        <span key={spec} className="px-5 py-2.5 bg-white/10 rounded-full text-sm font-bold border border-white/5">
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </motion.section>

                            {/* Consultation Timings */}
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-indigo-600 rounded-[3rem] p-10 shadow-xl text-white"
                            >
                                <h2 className="text-2xl font-extrabold mb-8 flex items-center gap-3">
                                    <Clock className="text-white" />
                                    Consultation Timings
                                </h2>
                                <div className="space-y-6">
                                    {doctor.timings.map((time: any, i: number) => (
                                        <div key={i} className="flex flex-col gap-1 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                            <span className="font-bold text-white/60 text-xs uppercase tracking-widest">{time.days}</span>
                                            <span className="text-lg font-bold">{time.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        </div>

                        {/* Bottom CTA */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-primary rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                            <h3 className="text-3xl font-extrabold mb-6">Need a Consultation with {doctor.name}?</h3>
                            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">Get expert medical advice and personalized care from one of our top-rated specialists.</p>
                            <Link to="/appointment">
                                <Button className="bg-white text-primary hover:bg-slate-100 px-12 py-7 rounded-2xl font-bold text-lg">
                                    Schedule Visit Now
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
