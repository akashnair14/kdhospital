import { motion } from 'framer-motion'
import {
    PhoneCall,
    Ambulance,
    Clock,
    ShieldAlert,
    Zap,
    HeartPulse,
    Activity,
    Stethoscope,
    ArrowRight,
    MapPin,
    AlertCircle
} from 'lucide-react'
import { hospitalInfo } from '../data/hospitalInfo'
import { Button } from '@/components/ui/button'
import SEO from '../components/SEO'

const serviceHighlights = [
    {
        title: "Trauma Center",
        description: "Level 1 trauma care with specialized surgeons available 24/7 for critical injuries.",
        icon: Zap,
        color: "red"
    },
    {
        title: "Cardiac Emergency",
        description: "Rapid response for heart attacks with immediate angioplasty (Primary PCI) facilities.",
        icon: HeartPulse,
        color: "rose"
    },
    {
        title: "Critical Care (ICU)",
        description: "High-tech intensive care units with dedicated specialists and 1:1 nursing ratio.",
        icon: Activity,
        color: "blue"
    },
    {
        title: "Stroke Unit",
        description: "Advanced stroke management team for rapid thrombolysis and neurological care.",
        icon: ShieldAlert,
        color: "amber"
    }
]

const emergencySteps = [
    {
        num: "01",
        title: "Call Emergency",
        text: "Dial our 24/7 hotline immediately for medical assistance or ambulance."
    },
    {
        num: "02",
        title: "Provide Info",
        text: "Give your location and describe the nature of the medical emergency clearly."
    },
    {
        num: "03",
        title: "Follow Instructions",
        text: "Our medical experts will guide you to provide basic first aid until help arrives."
    },
    {
        num: "04",
        title: "Stay Calm",
        text: "Keep the patient stable and ensure the path is clear for the ambulance team."
    }
]

export default function Emergency() {
    return (
        <div className="flex flex-col w-full min-h-screen pt-20 bg-white">
            <SEO
                title="24/7 Emergency Care"
                description="KD Hospital provides 24/7 emergency and trauma care in Ahmedabad. Level 1 trauma center, ICU-on-wheels ambulance, and rapid response cardiac and stroke units."
                keywords="emergency hospital Ahmedabad, 24/7 trauma care, ambulance service, cardiac emergency, stroke unit, ICU hospital"
            />
            {/* Urgent Hero Section */}
            <section className="relative py-20 bg-red-600 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 rounded-l-full blur-3xl translate-x-1/2"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md mb-8 border border-white/30"
                        >
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">Immediate Response Available</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-black mb-8 tracking-tighter"
                        >
                            24X7 EMERGENCY <span className="text-red-200">TRAUMA CARE</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/10 backdrop-blur-xl rounded-[3rem] p-10 md:p-14 border border-white/20 shadow-2xl inline-block w-full max-w-2xl mb-12"
                        >
                            <p className="text-red-100 font-bold uppercase tracking-widest text-sm mb-4">Emergency Hotline Number</p>
                            <h2 className="text-5xl md:text-7xl font-black mb-10 tabular-nums">{hospitalInfo.emergency}</h2>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href={`tel:${hospitalInfo.emergency}`}
                                    className="bg-white text-red-600 hover:bg-slate-50 font-black px-10 py-6 rounded-2xl text-xl flex items-center justify-center gap-3 shadow-xl transition-all hover:-translate-y-1 active:scale-95 group"
                                >
                                    <PhoneCall className="w-7 h-7 group-hover:animate-pulse" />
                                    CALL NOW
                                </a>
                                <Button variant="outline" className="border-white/50 text-white hover:bg-white/10 px-10 py-6 rounded-2xl text-xl font-bold">
                                    <MapPin className="w-6 h-6 mr-2" />
                                    Find Directions
                                </Button>
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-red-100 text-lg md:text-xl font-medium max-w-2xl mx-auto"
                        >
                            Every second counts in an emergency. Our trauma team is pre-activated the moment you call for an ambulance.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Service Grid Section */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-red-600 font-bold tracking-widest uppercase mb-4 block underline underline-offset-8 decoration-2">Advanced Facilities</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Rapid Response Specializations</h2>
                        <p className="text-slate-600 text-lg">We are equipped with state-of-the-art diagnostic and surgical tools to handle any medical crisis within minutes of arrival.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {serviceHighlights.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all group"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-${service.color}-50 text-${service.color}-600 flex items-center justify-center mb-8 group-hover:bg-${service.color}-600 group-hover:text-white transition-all duration-300`}>
                                    <service.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.description}</p>
                                <div className={`flex items-center gap-2 text-sm font-bold text-${service.color}-600`}>
                                    Available 24x7 <AlertCircle size={14} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ambulance Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase mb-6 tracking-widest border border-blue-100">
                                <Ambulance size={16} /> Advanced Life Support
                            </div>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">Modern <span className="text-primary italic font-serif">Ambulance</span> Fleet</h2>
                            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                                Our "ICU-on-Wheels" ambulances are equipped with ventilators, defibrillators, and advanced cardiac monitors. Driven by experienced pilots and staffed by paramedics.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "GPS Enabled for Real-time Tracking",
                                    "Advanced Resuscitation Equipment",
                                    "Critical Care Paramedic Team",
                                    "Direct Link with Medical Experts",
                                    "Air Ambulance Arrangement Capability"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                                            <ArrowRight size={14} />
                                        </div>
                                        <span className="font-bold text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                <a href={`tel:${hospitalInfo.emergency}`} className="bg-slate-900 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                                    Request Ambulance <ArrowRight size={18} />
                                </a>
                                <div className="flex items-center gap-3 px-6 py-4">
                                    <Clock size={20} className="text-slate-400" />
                                    <span className="text-slate-500 font-medium">Average arrival time: <strong className="text-slate-900">10-15 mins</strong></span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square bg-slate-100 rounded-[4rem] overflow-hidden shadow-2xl relative">
                                <img
                                    src="https://images.unsplash.com/photo-1583344199961-0736173a7f80?q=80&w=1000&auto=format&fit=crop"
                                    alt="Emergency Ambulance Dispatch"
                                    className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-red-600/40 to-transparent"></div>
                            </div>
                            {/* Decorative badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 max-w-xs hidden md:block">
                                <p className="text-4xl font-black text-red-600 mb-2">24x7</p>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Ready for Dispatch</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Protocol Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4">
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">What to do in an <span className="text-primary italic">Emergency</span>?</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10">Follow these critical steps while our team is on the way. Your quick actions can make a huge difference.</p>
                            <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10">
                                <Stethoscope className="text-primary mb-6" size={48} strokeWidth={1.5} />
                                <p className="text-white font-bold text-xl mb-4 italic">"First aid combined with rapid transit saves lives."</p>
                                <p className="text-slate-500 text-sm font-medium">— Emergency Care Protocol</p>
                            </div>
                        </div>

                        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
                            {emergencySteps.map((step, i) => (
                                <motion.div
                                    key={step.num}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all group"
                                >
                                    <span className="text-6xl font-black text-white/10 group-hover:text-primary/20 transition-colors mb-4 block leading-none">{step.num}</span>
                                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-slate-400 font-medium leading-relaxed">{step.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
