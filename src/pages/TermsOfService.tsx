import { motion } from 'framer-motion'
import { Gavel, AlertTriangle, CalendarCheck, Ban, Scale, ShieldAlert } from 'lucide-react'
import SEO from '../components/SEO'

const terms = [
    {
        title: "Medical Disclaimer",
        icon: AlertTriangle,
        content: "The content on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician for any medical condition."
    },
    {
        title: "Emergency Situations",
        icon: ShieldAlert,
        content: "DO NOT use this website for medical emergencies. If you have a medical emergency, call our emergency hotline immediately or visit the nearest emergency room."
    },
    {
        title: "Appointment Policies",
        icon: CalendarCheck,
        content: "Appointments are subject to doctor availability. We require at least 24 hours notice for cancellations. KD Hospital reserves the right to reschedule or cancel appointments due to unforeseen clinical emergencies."
    },
    {
        title: "User Conduct",
        icon: Ban,
        content: "You agree to provide accurate information when using our forms and services. Any attempt to disrupt the website's security or use it for unauthorized purposes is strictly prohibited."
    },
    {
        title: "Limitation of Liability",
        icon: Scale,
        content: "KD Hospital shall not be liable for any indirect, incidental, or consequential damages arising out of your use or inability to use this website or its services."
    },
    {
        title: "Governing Law",
        icon: Gavel,
        content: "These terms are governed by and construed in accordance with the laws of the jurisdiction in which KD Hospital operates, without regard to its conflict of law principles."
    }
]

export default function TermsOfService() {
    return (
        <div className="flex flex-col w-full min-h-screen pt-20 bg-white">
            <SEO
                title="Terms of Service"
                description="The legal terms and conditions for using KD Hospital's website and medical services."
            />
            {/* Header */}
            <section className="py-24 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <span className="text-secondary font-black uppercase tracking-widest text-xs mb-4 block">Legal Agreement</span>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Terms of <span className="text-primary">Service</span></h1>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                            Please read these terms carefully before using our digital healthcare platform and services.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Terms List */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto grid gap-12">
                        {terms.map((term, i) => (
                            <motion.div
                                key={term.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="flex gap-8 items-start">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all duration-300">
                                        <term.icon size={28} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-primary transition-colors">{term.title}</h2>
                                        <p className="text-slate-500 leading-relaxed font-medium">
                                            {term.content}
                                        </p>
                                    </div>
                                </div>
                                {i < terms.length - 1 && <div className="mt-12 h-px bg-slate-100"></div>}
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 max-w-2xl mx-auto text-center p-12 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                        <h3 className="text-2xl font-bold mb-4 relative z-10">Last Updated</h3>
                        <p className="text-primary font-black text-xl mb-6 relative z-10">October 30, 2024</p>
                        <p className="text-slate-400 text-sm font-medium relative z-10">By continuing to use our services, you acknowledge that you have read and understood these terms.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
