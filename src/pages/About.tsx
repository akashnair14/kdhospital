import { motion } from 'framer-motion'
import { ShieldCheck, Award, HeartPulse, History, Users2, Target, Heart, Eye, Zap } from 'lucide-react'
import { hospitalInfo } from '../data/hospitalInfo'
import SEO from '../components/SEO'

const stats = [
    { label: "Years of Excellence", value: "25+", icon: History },
    { label: "Expert Doctors", value: "100+", icon: Users2 },
    { label: "Successful Surgeries", value: "50k+", icon: HeartPulse },
    { label: "Patient Satisfaction", value: "99%", icon: Award },
]

const values = [
    { title: "Compassion", description: "Treating every patient with kindness and empathy.", icon: Heart },
    { title: "Integrity", description: "Upholding the highest ethical standards in all we do.", icon: ShieldCheck },
    { title: "Innovation", description: "Embracing new technologies to improve patient care.", icon: Zap },
    { title: "Excellence", description: "Striving for the best possible clinical outcomes.", icon: Award },
]

const management = [
    { name: "Mr. Kunal Desai", role: "Managing Director", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
    { name: "Dr. Arvind Sharma", role: "Medical Director", image: "https://images.unsplash.com/photo-1612349317150-e410f624c427?q=80&w=400&auto=format&fit=crop" },
    { name: "Mrs. Shweta Singh", role: "Chief Operating Officer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
    { name: "Dr. Sanjay Gupta", role: "Special Project Head", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop" },
]

export default function About() {
    return (
        <div className="flex flex-col w-full min-h-screen pt-20">
            <SEO
                title="About Us"
                description="Discover the history, mission, and values of KD Hospital. With 25+ years of excellence and 100+ expert doctors, we are committed to providing premium healthcare in Ahmedabad."
                keywords="about KD Hospital, hospital mission, healthcare values, history of KD hospital, hospital management"
            />
            {/* Header Section */}
            <section className="relative py-24 bg-slate-900 overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-l-full blur-3xl translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-secondary/5 rounded-r-full blur-3xl -translate-x-1/2"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-secondary font-bold tracking-widest uppercase mb-4 block"
                    >
                        Learn Our Story
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight"
                    >
                        About <span className="text-primary">{hospitalInfo.name}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
                    >
                        Revolutionizing healthcare through medical innovation and compassionate care for over two decades.
                    </motion.p>
                </div>
            </section>

            {/* Hospital Overview & History */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
                                    alt="Hospital Building"
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 text-white">
                                    <p className="text-3xl font-bold">25+ Years</p>
                                    <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Of Trusted Service</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl z-0"></div>
                            <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl z-0"></div>
                        </motion.div>

                        <div className="flex flex-col">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-secondary font-bold tracking-widest uppercase mb-4"
                            >
                                Our Roots
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight"
                            >
                                A Legacy of Medical <span className="text-primary">Excellence</span>
                            </motion.h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    Established in 1999, {hospitalInfo.name} began with a simple yet profound mission: to provide the highest quality of healthcare with a human touch. What started as a small clinic has transformed into a prestigious multi-specialty regional hub.
                                </p>
                                <p>
                                    Our history is defined by patient-first thinking. From being the first in the region to adopt robotic-assisted surgery to our award-winning pediatric wing, every milestone has been driven by our commitment to your well-being.
                                </p>
                                <p>
                                    Today, we stand as a beacon of trust, equipped with world-class technology and a team of globally recognized specialists who work tirelessly to ensure the best possible outcomes for every patient who walks through our doors.
                                </p>
                            </div>

                            <div className="flex gap-4 mt-10">
                                <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl flex items-center gap-4 flex-1">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                                        <History size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">Since 1999</p>
                                        <p className="text-sm text-slate-500">Established Foundation</p>
                                    </div>
                                </div>
                                <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl flex items-center gap-4 flex-1">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shrink-0">
                                        <Award size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">NABH Accredited</p>
                                        <p className="text-sm text-slate-500">Quality Benchmark</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <Target size={40} />
                            </div>
                            <h3 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Mission</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                To deliver compassionate, state-of-the-art medical care that enhances the quality of life for our patients. We aim to achieve this through continuous innovation, medical education, and a dedicated team focused on patient safety and comfort.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-slate-900 p-12 rounded-[3.5rem] shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors"></div>
                            <div className="w-20 h-20 bg-secondary/10 rounded-3xl flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                <Eye size={40} />
                            </div>
                            <h3 className="text-3xl font-extrabold text-white mb-6 tracking-tight">Our Vision</h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                To be the most trusted and preferred healthcare partner in the region, recognized for our commitment to clinical excellence, research, and for providing a healing environment that embodies the core values of humanity.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-secondary font-bold tracking-widest uppercase mb-4 block"
                        >
                            Our Values
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
                        >
                            The Principles That <span className="text-primary">Drive Us</span>
                        </motion.h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <v.icon size={30} />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Management Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-secondary font-bold tracking-widest uppercase mb-4 block"
                            >
                                Our Management
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
                            >
                                Leadership Behind <span className="text-primary">Our Success</span>
                            </motion.h2>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {management.map((m, i) => (
                            <motion.div
                                key={m.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="aspect-[4/5] relative overflow-hidden bg-slate-100">
                                    <img
                                        src={m.image}
                                        alt={m.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                                </div>
                                <div className="p-8 text-center bg-white relative z-10 border-t border-slate-50">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{m.name}</h3>
                                    <p className="text-secondary font-bold text-xs uppercase tracking-widest">{m.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section Overlay */}
            <section className="py-20 bg-slate-900 relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center flex flex-col items-center"
                            >
                                <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-primary mb-6 border border-white/10 group">
                                    <stat.icon size={30} />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.value}</h3>
                                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
