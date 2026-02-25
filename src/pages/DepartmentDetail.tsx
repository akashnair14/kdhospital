import { motion } from 'framer-motion'
import { CheckCircle2, Users, Microscope, Calendar, ShieldCheck, ArrowRight, Stethoscope } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { departmentsData } from '../data/departmentsData'
import SEO from '../components/SEO'

const colorMap: Record<string, any> = {
    rose: {
        bg: "bg-rose-500",
        lightBg: "bg-rose-50",
        border: "border-rose-100",
        text: "text-rose-500",
        gradient: "from-rose-500 to-rose-600"
    },
    indigo: {
        bg: "bg-indigo-500",
        lightBg: "bg-indigo-50",
        border: "border-indigo-100",
        text: "text-indigo-500",
        gradient: "from-indigo-500 to-indigo-600"
    },
    blue: {
        bg: "bg-blue-500",
        lightBg: "bg-blue-50",
        border: "border-blue-100",
        text: "text-blue-500",
        gradient: "from-blue-500 to-blue-600"
    },
    purple: {
        bg: "bg-purple-500",
        lightBg: "bg-purple-50",
        border: "border-purple-100",
        text: "text-purple-500",
        gradient: "from-purple-500 to-purple-600"
    },
    pink: {
        bg: "bg-pink-500",
        lightBg: "bg-pink-50",
        border: "border-pink-100",
        text: "text-pink-500",
        gradient: "from-pink-500 to-pink-600"
    },
    emerald: {
        bg: "bg-emerald-500",
        lightBg: "bg-emerald-50",
        border: "border-emerald-100",
        text: "text-emerald-500",
        gradient: "from-emerald-500 to-emerald-600"
    }
}

export default function DepartmentTemplate() {
    const { id } = useParams<{ id: string }>()
    const data = id ? departmentsData[id] : null

    if (!data) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen pt-20">
                <SEO title="Department Not Found" description="The requested medical department could not be found." />
                <h1 className="text-2xl font-bold mb-4">Department Not Found</h1>
                <Link to="/services" className="text-primary font-bold hover:underline">Back to Services</Link>
            </div>
        )
    }

    const { title, overview, conditions, procedures, doctors, facilities, color } = data
    const theme = colorMap[color] || colorMap.blue

    return (
        <div className="flex flex-col w-full min-h-screen pt-20">
            <SEO
                title={title}
                description={overview}
                keywords={`${title}, KD Hospital Ahmedabad, medical services`}
            />
            {/* dynamic Header */}
            <section className={`py-24 ${theme.bg} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 rounded-l-full blur-3xl translate-x-1/2"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        {overview}
                    </motion.p>
                </div>
            </section>

            {/* Content Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Conditions & Procedures */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <ShieldCheck className={theme.text} />
                                    Conditions We Treat
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {conditions.map((c: string) => (
                                        <div key={c} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                            <CheckCircle2 size={18} className={theme.text} />
                                            <span className="font-medium text-slate-700">{c}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Microscope className={theme.text} />
                                    Advanced Procedures
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {procedures.map((p: string) => (
                                        <div key={p} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                            <CheckCircle2 size={18} className={theme.text} />
                                            <span className="font-medium text-slate-700">{p}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Facilities */}
                        <div className={`${theme.lightBg} p-10 md:p-12 rounded-[3.5rem] border ${theme.border}`}>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                <Users className={theme.text} />
                                Specialized Facilities
                            </h3>
                            <div className="space-y-6">
                                {facilities.map((f: string) => (
                                    <div key={f} className="flex items-start gap-4">
                                        <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center ${theme.text} shadow-sm shrink-0`}>
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{f}</h4>
                                            <p className="text-sm text-slate-500 mt-1">Equipped with the latest medical technology for optimal results.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Doctors Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-12 text-center tracking-tight">Our Leading Specialists</h3>
                    <div className="flex justify-center flex-wrap gap-8">
                        {doctors.map((doc: any, i: number) => (
                            <motion.div
                                key={doc.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center max-w-sm group"
                            >
                                <div className="aspect-square w-48 mb-6 rounded-[2rem] overflow-hidden">
                                    <img src={doc.image} alt={doc.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">{doc.name}</h4>
                                <p className="text-primary font-bold text-sm mb-4">{doc.role}</p>
                                <Link to={`/doctors/${doc.id}`} className="text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
                                    View Full Profile <ArrowRight size={14} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 container mx-auto px-4">
                <div className={`bg-gradient-to-r ${theme.gradient} rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl`}>
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready for a Consultation?</h2>
                        <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-medium">Book an appointment with our departmental experts today and get the care you deserve.</p>
                        <Link to="/appointment">
                            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-12 py-8 rounded-2xl font-bold text-xl shadow-xl shadow-black/10 group">
                                <Calendar className="mr-3 w-6 h-6" />
                                Schedule Appointment
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
