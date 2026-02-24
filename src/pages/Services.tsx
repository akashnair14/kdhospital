import { motion } from 'framer-motion'
import { HeartPulse, Activity, Baby, Ambulance, Flower2, Brain, Bone, Microscope } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import SEO from '../components/SEO'

const allServices = [
    {
        title: "Cardiology",
        description: "Specialized heart care and advanced cardiac procedures including bypass and angioplasty.",
        icon: HeartPulse,
        colorClass: "bg-rose-500",
        link: "/services/cardiology"
    },
    {
        title: "Orthopedics",
        description: "Expert bone, joint, and muscle care with advanced robotic surgical options for mobility.",
        icon: Bone,
        colorClass: "bg-blue-500",
        link: "/services/orthopedics"
    },
    {
        title: "Neurology",
        description: "Expert care for complex brain, spine, and nervous system disorders by top neurosurgeons.",
        icon: Brain,
        colorClass: "bg-indigo-500",
        link: "/services/neurology"
    },
    {
        title: "Pediatrics",
        description: "Comprehensive medical services for infants and children ensuring healthy growth markers.",
        icon: Baby,
        colorClass: "bg-purple-500",
        link: "/services/pediatrics"
    },
    {
        title: "Gynecology",
        description: "Dedicated healthcare for women featuring comprehensive prenatal and postnatal care.",
        icon: Flower2,
        colorClass: "bg-pink-500",
        link: "/services/gynecology"
    },
    {
        title: "General Surgery",
        description: "Modern surgical procedures focusing on abdominal contents and other core system issues.",
        icon: Microscope,
        colorClass: "bg-emerald-500",
        link: "/services/general-surgery"
    },
    {
        title: "Emergency",
        description: "24/7 immediate medical attention for life-threatening conditions with rapid response.",
        icon: Ambulance,
        colorClass: "bg-red-500",
        link: "/emergency"
    }
]

export default function Services() {
    return (
        <div className="flex flex-col w-full min-h-screen pt-20 pb-20">
            <SEO
                title="Specialized Services"
                description="Explore our specialized medical services at KD Hospital, including Cardiology, Orthopedics, Neurology, Pediatrics, and 24/7 Emergency Care."
                keywords="cardiology, orthopedics, neurology, pediatrics, medical services, hospital services Ahmedabad"
            />
            {/* Header */}
            <section className="py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6"
                    >
                        Our Specialized Medical <span className="text-primary">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 text-xl max-w-3xl mx-auto"
                    >
                        We offer a comprehensive range of medical services delivered by world-class specialists using the latest medical innovations.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {allServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${service.colorClass} text-white flex items-center justify-center mb-6 shadow-lg shadow-black/5`}>
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">{service.description}</p>
                                <Link to={service.link} className="inline-flex items-center text-primary font-bold text-sm hover:underline">
                                    Learn More <Activity size={14} className="ml-2" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 mt-12">
                <div className="bg-primary rounded-[3rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Need a Specialized Consultation?</h2>
                        <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto font-medium">Our expert doctors are available for in-person and online consultations across all departments.</p>
                        <Link to="/appointment">
                            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 px-10 py-7 rounded-2xl font-bold text-lg shadow-xl shadow-black/10">
                                Book an Appointment
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
