import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, PhoneCall, ShieldPlus, Users, Stethoscope, ArrowRight, HeartPulse, Activity, Baby, Pill, Ambulance, Flower2, HeartHandshake, ShieldCheck, Microscope, CircleDollarSign, Building2, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { hospitalInfo } from '../data/hospitalInfo'
import SEO from '../components/SEO'
import { Button } from '@/components/ui/button'

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
}

const services = [
    {
        title: "Cardiology",
        description: "Advanced heart care including diagnosis, treatment, and surgery by top cardiologists.",
        icon: HeartPulse,
        link: "/services/cardiology",
        colorClass: "bg-white text-rose-500 border-rose-100 group-hover:bg-rose-500 group-hover:text-white"
    },
    {
        title: "Orthopedics",
        description: "Comprehensive care for bones, joints, ligaments, tendons, muscles, and nerves.",
        icon: Activity,
        link: "/services/orthopedics",
        colorClass: "bg-white text-blue-500 border-blue-100 group-hover:bg-blue-500 group-hover:text-white"
    },
    {
        title: "Pediatrics",
        description: "Specialized medical care for infants, children, and adolescents ensuring healthy growth.",
        icon: Baby,
        link: "/services/pediatrics",
        colorClass: "bg-white text-purple-500 border-purple-100 group-hover:bg-purple-500 group-hover:text-white"
    },
    {
        title: "Gynecology",
        description: "Expert women's health services from routine checkups to advanced specialized treatments.",
        icon: Flower2,
        link: "/services/gynecology",
        colorClass: "bg-white text-pink-500 border-pink-100 group-hover:bg-pink-500 group-hover:text-white"
    },
    {
        title: "General Medicine",
        description: "Primary healthcare services focusing on prevention, diagnosis, and treatment of adult diseases.",
        icon: Pill,
        link: "/services/general-medicine",
        colorClass: "bg-white text-teal-500 border-teal-100 group-hover:bg-teal-500 group-hover:text-white"
    },
    {
        title: "Emergency Care",
        description: "24/7 rapid response and trauma care with state-of-the-art emergency resuscitation facilities.",
        icon: Ambulance,
        link: "/emergency",
        colorClass: "bg-white text-red-500 border-red-100 group-hover:bg-red-500 group-hover:text-white"
    }
]

const doctors = [
    {
        name: "Dr. Arvind Sharma",
        specialization: "Chief Cardiologist",
        experience: "15+ Years Experience",
        image: "https://images.unsplash.com/photo-1612349317150-e410f624c427?q=80&w=800&auto=format&fit=crop",
        link: "/doctors/arvind-sharma"
    },
    {
        name: "Dr. Meera Patel",
        specialization: "Senior Pediatrician",
        experience: "12+ Years Experience",
        image: "https://images.unsplash.com/photo-1594824416965-9f18a5621c1f?q=80&w=800&auto=format&fit=crop",
        link: "/doctors/meera-patel"
    },
    {
        name: "Dr. Rajesh Kumar",
        specialization: "Orthopedic Surgeon",
        experience: "20+ Years Experience",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
        link: "/doctors/rajesh-kumar"
    },
    {
        name: "Dr. Sneha Desai",
        specialization: "Lead Gynecologist",
        experience: "10+ Years Experience",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
        link: "/doctors/sneha-desai"
    }
]

const features = [
    {
        title: "Experienced Doctors",
        description: "Our team consists of highly qualified professionals with decades of clinical experience.",
        icon: Users,
    },
    {
        title: "Advanced Technology",
        description: "Equipped with the latest medical machinery for precise diagnosis and treatments.",
        icon: Microscope,
    },
    {
        title: "24x7 Emergency",
        description: "Round-the-clock rapid response trauma center and intensive care units.",
        icon: Ambulance,
    },
    {
        title: "Patient-Centric Care",
        description: "Compassionate approach focusing on your comfort, recovery, and overall well-being.",
        icon: HeartHandshake,
    },
    {
        title: "Affordable Treatment",
        description: "World-class healthcare services offered at transparent and reasonable costs.",
        icon: CircleDollarSign,
    },
    {
        title: "Modern Infrastructure",
        description: "Hygienic, spacious, and stress-free environment designed for optimal healing.",
        icon: Building2,
    }
]

const testimonials = [
    {
        id: 1,
        name: "Rahul Verma",
        text: "The care I received at KD Hospital was exceptional. The doctors were incredibly patient and took the time to logically explain my treatment plan. The facilities are truly world-class.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Priya Singh",
        text: "I was admitted for an emergency procedure and the speed at which their team responded saved my life. Everyone from the nurses to the chief surgeon showed tremendous compassion.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Amit Desai",
        text: "KD Hospital's pediatric department is fantastic. My daughter was very anxious, but the friendly staff made her feel completely at ease. Highly recommend them for family healthcare.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    }
]

export default function Home() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    useEffect(() => {
        const timer = setInterval(nextTestimonial, 8000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="w-full flex flex-col min-h-screen">
            <SEO
                title="Home"
                description="Welcome to KD Hospital, a premium multi-specialty healthcare facility offering advanced cardiac, orthopedic, and neurological treatments in Ahmedabad. Your health is our priority."
                keywords="KD Hospital, best hospital in Ahmedabad, multi-specialty hospital, cardiac care, orthopedic treatments, neurology, emergency care 24/7"
            />
            {/* Premium Hero Section */}
            <section className="relative w-full min-h-[90vh] flex items-center bg-slate-50 overflow-hidden font-sans pt-10 pb-20 md:py-0">
                {/* Medical Blue Gradient Background Overlays */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/10 via-primary/5 to-transparent z-0 pointer-events-none"></div>
                <div className="absolute -top-[30%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-secondary/5 blur-[120px] mix-blend-multiply pointer-events-none"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[120px] mix-blend-multiply pointer-events-none"></div>

                {/* Diagonal Soft Shape */}
                <div className="absolute bottom-0 right-0 w-[80%] h-[60%] bg-white/40 skew-y-[-6deg] transform origin-bottom-right z-0 pointer-events-none"></div>

                <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
                    {/* Text Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-2xl lg:pr-8 xl:pr-16 relative z-20 mt-10 md:mt-0"
                    >
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-8 mt-4 lg:mt-0">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">{hospitalInfo.name}</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6"
                        >
                            Advanced Care with <br className="hidden md:block" />
                            <span className="relative whitespace-nowrap">
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Compassion.</span>
                                <svg className="absolute w-full h-4 -bottom-1 left-0 z-0 text-primary/20" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
                            We provide world-class medical excellence with a patient-first approach. State-of-the-art facilities guided by leading specialists.
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link to="/appointment" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-xl shadow-primary/20 group font-bold">
                                    <Calendar className="w-5 h-5 mr-3" />
                                    Book Appointment
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link to="/emergency">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg rounded-xl shadow-sm border-2 border-slate-200 hover:border-red-500/30 hover:bg-red-50 text-slate-700 hover:text-red-600 group font-bold bg-white">
                                    <PhoneCall className="w-5 h-5 mr-3 text-red-500 group-hover:animate-pulse" />
                                    Emergency Call
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Trust Badges - Mobile / Tablet mostly, but also visible on desktop if needed, though they are integrated nicely */}
                        <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200/60">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                                    <ShieldPlus size={20} />
                                </div>
                                <span className="font-semibold text-slate-700 text-sm leading-tight">24x7<br />Emergency</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Users size={20} />
                                </div>
                                <span className="font-semibold text-slate-700 text-sm leading-tight">Experienced<br />Specialists</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-600 shrink-0">
                                    <Stethoscope size={20} />
                                </div>
                                <span className="font-semibold text-slate-700 text-sm leading-tight">Advanced<br />Equipment</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Hero Imagery - Desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="relative hidden lg:block h-full min-h-[600px] w-full z-10"
                    >
                        {/* Soft backdrop shape */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50 z-0"></div>

                        {/* Main Image Container */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[550px] aspect-[4/5] z-10">
                            <div className="w-full h-full relative z-10 rounded-[2.5rem] bg-white p-3 shadow-2xl shadow-primary/10 ring-1 ring-slate-100 rotate-2 hover:rotate-0 transition-all duration-700 overflow-hidden group">
                                <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-slate-100">
                                    <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop" alt="Doctor providing compassionate care" loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                                    {/* Image Overlays */}
                                    <div className="absolute bottom-6 left-6 text-white max-w-[80%]">
                                        <p className="font-bold text-xl mb-1">Dr. Sharma</p>
                                        <p className="text-sm text-slate-200 font-medium opacity-90">Chief of Surgery</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements behind image */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] z-0 opacity-60"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzYjgyZjYiLz48L3N2Zz4=')] z-0 opacity-30"></div>
                        </div>

                        {/* Floating Trust Card 1 */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute top-[15%] -left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex flex-col items-center gap-2 z-30"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
                                <HeartPulse size={24} />
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-black text-slate-900 leading-none mb-1">10k+</p>
                                <p className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">Happy Patients</p>
                            </div>
                        </motion.div>

                        {/* Floating Trust Card 2 */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[25%] -left-16 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl shadow-secondary/10 border border-white/50 flex items-center gap-4 z-30"
                        >
                            <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 shadow-md shadow-secondary/30">
                                <ShieldPlus size={24} />
                            </div>
                            <div className="pr-2">
                                <p className="text-sm font-bold text-slate-900 mb-0.5">NABH Accredited</p>
                                <p className="text-xs text-slate-500 font-medium">Quality Healthcare</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services summary section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold text-secondary tracking-widest uppercase mb-3 block"
                        >
                            Our Departments
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 drop-shadow-sm tracking-tight"
                        >
                            Excellence in Healthcare
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-600 text-lg md:text-xl"
                        >
                            We provide comprehensive medical care tailored to your specific needs, leveraging the latest technology and top medical talent.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Services Cards */}
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Link to={service.link} className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100 flex flex-col items-start transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 hover:bg-white hover:-translate-y-2 group h-full">
                                    <div className={`w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-8 transition-colors duration-300 border ${service.colorClass}`}>
                                        <service.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-8 flex-1 text-[15px]">{service.description}</p>
                                    <div className="text-sm font-bold text-slate-900 flex items-center gap-2 group-hover:text-primary transition-colors mt-auto w-full pt-6 border-t border-slate-100">
                                        Learn more <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="text-center mt-16"
                    >
                        <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-slate-700 bg-white border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-50 hover:text-primary hover:border-primary/30 transition-all group shadow-sm hover:shadow-md">
                            View All Departments
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Doctors highlight section */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-sm font-bold text-primary tracking-widest uppercase mb-3 block"
                            >
                                Our Experts
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl md:text-5xl font-extrabold text-slate-900 drop-shadow-sm tracking-tight"
                            >
                                Meet Our Specialists
                            </motion.h2>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link to="/doctors" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group">
                                View Full Directory <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {doctors.map((doctor, index) => (
                            <motion.div
                                key={doctor.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 flex flex-col"
                            >
                                <div className="aspect-square w-full overflow-hidden bg-slate-100 relative">
                                    <img src={doctor.image} alt={doctor.name} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                                        <Link to={doctor.link} className="bg-white text-slate-900 font-bold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary hover:text-white">
                                            View Profile
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col items-center text-center flex-1">
                                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{doctor.name}</h3>
                                    <p className="text-secondary font-bold text-sm mb-3">{doctor.specialization}</p>
                                    <p className="text-slate-500 text-sm mb-4 font-medium flex-1">{doctor.experience}</p>
                                    <div className="w-12 h-1 bg-slate-100 rounded-full group-hover:bg-primary transition-colors duration-300"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-slate-50 to-transparent z-0 pointer-events-none"></div>
                <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        {/* Left Content Area */}
                        <div className="lg:col-span-5 flex flex-col items-start">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-sm font-bold text-secondary tracking-widest uppercase mb-3 block"
                            >
                                Why Choose KD Hospital
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight"
                            >
                                Your Health is Our <span className="text-primary block">Greatest Priority</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-slate-600 text-lg mb-8 leading-relaxed"
                            >
                                At KD Hospital, we blend profound medical expertise with genuine compassion. We are committed to achieving the highest standards of healthcare quality to ensure you recover swiftly and safely in a supportive environment.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex gap-4"
                            >
                                <div className="flex bg-slate-50 border border-slate-100 p-4 rounded-2xl items-center gap-4 shadow-sm relative overflow-hidden min-w-[200px] group">
                                    <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                                    <ShieldCheck size={36} className="text-secondary relative z-10 shrink-0" strokeWidth={1.5} />
                                    <div className="relative z-10">
                                        <p className="font-extrabold text-xl font-sans text-slate-900">100%</p>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Safe & Secure</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Grid Area */}
                        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 lg:ml-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="bg-white p-6 rounded-3xl border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 text-slate-600 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-300">
                                        <feature.icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[100px] z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold text-secondary tracking-widest uppercase mb-3 block"
                        >
                            Patient Stories
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 drop-shadow-sm tracking-tight"
                        >
                            Listen to Our Patients
                        </motion.h2>
                    </div>

                    <div className="max-w-4xl mx-auto relative cursor-grab active:cursor-grabbing">
                        {/* Quote icon background decoration */}
                        <Quote className="absolute -top-10 -left-6 md:-left-12 w-24 h-24 text-slate-200/50 rotate-180 z-0" />

                        <div className="relative min-h-[300px] md:min-h-[250px] flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTestimonial}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 items-center text-center md:text-left z-10 w-full"
                                >
                                    <div className="shrink-0 relative">
                                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                                            <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10 translate-y-2"></div>
                                    </div>

                                    <div className="flex-1">
                                        <Quote className="w-8 h-8 text-primary/40 mb-4 mx-auto md:mx-0" />
                                        <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium mb-6 italic">
                                            "{testimonials[currentTestimonial].text}"
                                        </p>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900">{testimonials[currentTestimonial].name}</h4>
                                            <p className="text-sm font-bold text-secondary uppercase tracking-wider mt-1">Patient</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex justify-center items-center mt-10 gap-6">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 z-20"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentTestimonial(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === currentTestimonial ? "w-8 bg-primary" : "w-2 bg-slate-300 hover:bg-slate-400"}`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 z-20"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency CTA Banner */}
            <section className="bg-red-600 text-white relative overflow-hidden py-16">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-700 to-transparent z-0 pointer-events-none"></div>
                <div className="absolute top-10 left-10 w-48 h-48 bg-white/10 rounded-full blur-2xl z-0"></div>

                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 border-4 border-red-500 shadow-xl">
                            <Ambulance className="w-8 h-8 text-red-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-4xl font-extrabold mb-2 tracking-tight">24x7 Emergency Care Available</h2>
                            <p className="text-red-100 text-lg md:text-xl font-medium">Compassionate trauma care whenever you need it.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                        <div className="bg-red-800/50 backdrop-blur-md px-6 py-4 rounded-xl border border-red-500 mb-4 sm:mb-0 text-center sm:text-left">
                            <p className="text-red-200 text-sm font-bold uppercase tracking-wider mb-1">Emergency Hotline</p>
                            <p className="text-2xl md:text-3xl font-black tabular-nums tracking-tight">9999999999</p>
                        </div>
                        <Link to="/emergency">
                            <button className="inline-flex items-center justify-center bg-white text-red-600 font-bold px-8 py-5 rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all text-lg hover:-translate-y-1 active:translate-y-0 group">
                                <PhoneCall className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                                Find Emergency Care
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final Appointment CTA Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full max-h-[400px] bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-[3rem] blur-2xl z-0"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="bg-slate-900 rounded-[3rem] p-12 md:p-20 shadow-2xl overflow-hidden relative"
                    >
                        {/* Decorative elements inside CTA */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight relative z-10">
                            Book Your Visit Today
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto relative z-10">
                            Take the first step towards better health. Schedule an appointment with our expert medical team and experience care that puts you first.
                        </p>

                        <div className="relative z-10">
                            <Link to="/appointment">
                                <Button size="lg" className="bg-primary hover:bg-white hover:text-primary text-white px-10 py-7 text-xl rounded-2xl shadow-xl shadow-primary/20 group font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-1">
                                    <Calendar className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                                    Book Appointment
                                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
