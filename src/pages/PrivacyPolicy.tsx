import { motion } from 'framer-motion'
import { ShieldCheck, Eye, Lock, FileText, UserCheck, Bell } from 'lucide-react'
import SEO from '../components/SEO'

const sections = [
    {
        title: "Information We Collect",
        icon: Eye,
        content: "We collect information that you provide directly to us, including sensitive medical history, contact details, and insurance information, to provide comprehensive healthcare services."
    },
    {
        title: "How We Use Your Information",
        icon: UserCheck,
        content: "Your data is primarily used for medical treatment, coordinating care, billing, and clinical quality improvement. We may also use it for health-related communications and appointment reminders."
    },
    {
        title: "Data Protection & Security",
        icon: Lock,
        content: "We implement industry-standard encryption and security protocols to protect your electronic health records (EHR). Access is strictly restricted to authorized medical and administrative personnel."
    },
    {
        title: "Sharing of Information",
        icon: ShieldCheck,
        content: "We do not sell your personal information. Data may be shared with healthcare partners (laboratories, specialists) only when necessary for your continued treatment and as permitted by law."
    },
    {
        title: "Your Privacy Rights",
        icon: FileText,
        content: "You have the right to access your medical records, request amendments, and receive an accounting of disclosures. You can also request restrictions on how certain information is shared."
    },
    {
        title: "Updates to This Policy",
        icon: Bell,
        content: "We may update this privacy policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly for the latest information."
    }
]

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col w-full min-h-screen pt-20 bg-slate-50">
            <SEO
                title="Privacy Policy"
                description="Our commitment to protecting your medical privacy and personal data at KD Hospital."
            />
            {/* Simple Header */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Privacy <span className="text-primary">Policy</span></h1>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                            Your trust is our most valuable asset. Learn how we protect your personal and medical information.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Area */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        {sections.map((section, i) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-2xl transition-all"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                                    <section.icon size={32} />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{section.title}</h2>
                                    <p className="text-slate-500 leading-relaxed font-medium">
                                        {section.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                        <div className="mt-16 p-10 bg-primary/5 rounded-[2.5rem] border border-primary/10 text-center">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Questions about your privacy?</h3>
                            <p className="text-slate-600 mb-8 font-medium">Our Data Protection Officer is ready to assist you with any concerns regarding your privacy rights.</p>
                            <a href="mailto:privacy@kdhospital.com" className="bg-primary text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-primary/20 transition-all inline-block">
                                Contact Privacy Team
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
