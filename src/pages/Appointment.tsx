import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Calendar,
    Clock,
    User,
    Phone,
    Mail,
    FileText,
    CheckCircle2,
    ArrowRight,
    Stethoscope,
    Building2,
    MessageSquare,
    Smartphone,
    Bell
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

// Mock Data for Logic
const DEPARTMENTS = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Gynecology",
    "General Surgery"
]

const DOCTORS = [
    { id: '1', name: 'Dr. Arvind Sharma', department: 'Cardiology', specialty: 'Chief Cardiologist' },
    { id: '2', name: 'Dr. Meera Patel', department: 'Pediatrics', specialty: 'Senior Pediatrician' },
    { id: '3', name: 'Dr. Rajesh Kumar', department: 'Orthopedics', specialty: 'Orthopedic Surgeon' },
    { id: '4', name: 'Dr. Sneha Desai', department: 'Gynecology', specialty: 'Lead Gynecologist' },
    { id: '5', name: 'Dr. Vikram Singh', department: 'Neurology', specialty: 'Neurologist' },
    { id: '6', name: 'Dr. Amit Verma', department: 'Cardiology', specialty: 'Interventional Cardiologist' },
    { id: '7', name: 'Dr. Priya Shah', department: 'General Surgery', specialty: 'Laparoscopic Surgeon' }
]

const TIME_SLOTS = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM"
]

export default function Appointment() {
    // Form State
    const [formData, setFormData] = useState({
        department: '',
        doctorId: '',
        date: '',
        timeSlot: '',
        patientName: '',
        phone: '',
        email: '',
        notes: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [bookingSuccess, setBookingSuccess] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})

    // Filtered Doctors
    const filteredDoctors = useMemo(() => {
        if (!formData.department) return []
        return DOCTORS.filter(doc => doc.department === formData.department)
    }, [formData.department])

    // Reset doctor if department changes
    useEffect(() => {
        setFormData(prev => ({ ...prev, doctorId: '' }))
    }, [formData.department])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev }
                delete newErrors[name]
                return newErrors
            })
        }
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {}
        if (!formData.department) newErrors.department = "Please select a department"
        if (!formData.doctorId) newErrors.doctorId = "Please select a doctor"
        if (!formData.date) newErrors.date = "Please select a date"
        if (!formData.timeSlot) newErrors.timeSlot = "Please select a time slot"
        if (!formData.patientName.trim()) newErrors.patientName = "Name is required"
        if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Enter a valid 10-digit phone number"
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Enter a valid email address"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validateForm()) return

        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        setBookingSuccess(true)
    }

    const selectedDoctor = DOCTORS.find(d => d.id === formData.doctorId)

    if (bookingSuccess) {
        return (
            <div className="min-h-screen pt-32 pb-20 bg-slate-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100"
                >
                    <div className="bg-emerald-500 p-10 text-white text-center relative overflow-hidden">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", damping: 12 }}
                            className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <CheckCircle2 size={40} />
                        </motion.div>
                        <h2 className="text-3xl font-extrabold mb-2">Appointment Scheduled!</h2>
                        <p className="text-white/80 font-medium">Confirmation ID: KD-{Math.floor(Math.random() * 90000 + 10000)}</p>
                    </div>

                    <div className="p-10">
                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Patient & Contact</h4>
                                <div className="space-y-2">
                                    <p className="text-slate-900 font-bold flex items-center gap-2"><User size={16} className="text-primary" /> {formData.patientName}</p>
                                    <p className="text-slate-600 text-sm flex items-center gap-2"><Smartphone size={16} /> {formData.phone}</p>
                                    <p className="text-slate-600 text-sm flex items-center gap-2"><Mail size={16} /> {formData.email}</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Medical Details</h4>
                                <div className="space-y-2">
                                    <p className="text-slate-900 font-bold flex items-center gap-2"><Stethoscope size={16} className="text-secondary" /> {selectedDoctor?.name}</p>
                                    <p className="text-slate-600 text-sm font-semibold">{formData.department}</p>
                                    <p className="text-slate-900 font-bold flex items-center gap-2 mt-4 bg-slate-50 p-2 rounded-lg border border-slate-100">
                                        <Calendar size={16} className="text-primary" /> {formData.date} at {formData.timeSlot}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 mb-8">
                            <h4 className="text-amber-800 font-bold flex items-center gap-2 mb-2">
                                <Bell size={18} />
                                Notifications Sent
                            </h4>
                            <div className="flex flex-wrap gap-4 mt-3">
                                <span className="flex items-center gap-2 text-xs font-bold text-amber-700 bg-white px-3 py-1.5 rounded-full border border-amber-200">
                                    <Smartphone size={14} /> SMS Sent
                                </span>
                                <span className="flex items-center gap-2 text-xs font-bold text-amber-700 bg-white px-3 py-1.5 rounded-full border border-amber-200">
                                    <MessageSquare size={14} /> WhatsApp Notification
                                </span>
                                <span className="flex items-center gap-2 text-xs font-bold text-amber-700 bg-white px-3 py-1.5 rounded-full border border-amber-200">
                                    <Mail size={14} /> Email Confirmation
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button onClick={() => setBookingSuccess(false)} variant="outline" className="flex-1 py-7 rounded-2xl font-bold border-2">
                                Book Another
                            </Button>
                            <Button asChild className="flex-1 py-7 rounded-2xl font-bold">
                                <Link to="/">Go to Home</Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full min-h-screen pt-20 bg-slate-50">
            <SEO
                title="Book Appointment"
                description="Schedule your medical appointment at KD Hospital online. Choose your department, doctor, and preferred time slot for a seamless healthcare experience."
                keywords="book doctor appointment, hospital appointment online, KD Hospital booking, medical consultation Ahmedabad"
            />
            {/* Header */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 rounded-l-full blur-3xl"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Book Your <span className="text-primary">Visit</span></h1>
                        <p className="text-slate-400 text-xl max-w-2xl">Skip the queue. Book an appointment with our expert specialists instantly.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 relative -mt-10 mb-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Form Column */}
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-2xl shadow-primary/5 border border-slate-100"
                            >
                                <form onSubmit={handleSubmit} className="space-y-10">
                                    {/* Step 1: choosing specialist */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</div>
                                            <h3 className="text-xl font-bold text-slate-900">Select Department & Doctor</h3>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Specialty Department</label>
                                                <div className="relative">
                                                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <select
                                                        name="department"
                                                        value={formData.department}
                                                        onChange={handleInputChange}
                                                        className={`w-full bg-slate-50 border ${errors.department ? 'border-red-500' : 'border-slate-200'} rounded-2xl py-5 pl-12 pr-5 focus:outline-none focus:border-primary transition-all text-slate-900 font-semibold appearance-none`}
                                                    >
                                                        <option value="">Choose Department</option>
                                                        {DEPARTMENTS.map(dept => <option key={dept} value={dept}>{dept}</option>)}
                                                    </select>
                                                </div>
                                                {errors.department && <p className="text-red-500 text-xs font-bold ml-1">{errors.department}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Consulting Doctor</label>
                                                <div className="relative">
                                                    <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <select
                                                        name="doctorId"
                                                        value={formData.doctorId}
                                                        onChange={handleInputChange}
                                                        disabled={!formData.department}
                                                        className={`w-full bg-slate-50 border ${errors.doctorId ? 'border-red-500' : 'border-slate-200'} rounded-2xl py-5 pl-12 pr-5 focus:outline-none focus:border-primary transition-all text-slate-900 font-semibold appearance-none disabled:opacity-50`}
                                                    >
                                                        <option value="">{formData.department ? 'Choose Doctor' : 'Select Dept First'}</option>
                                                        {filteredDoctors.map(doc => <option key={doc.id} value={doc.id}>{doc.name} ({doc.specialty})</option>)}
                                                    </select>
                                                </div>
                                                {errors.doctorId && <p className="text-red-500 text-xs font-bold ml-1">{errors.doctorId}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 2: Date & Time */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm">2</div>
                                            <h3 className="text-xl font-bold text-slate-900">Choose Date & Time Slot</h3>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Preferred Date</label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <input
                                                        type="date"
                                                        name="date"
                                                        value={formData.date}
                                                        onChange={handleInputChange}
                                                        min={new Date().toISOString().split('T')[0]}
                                                        className={`w-full bg-slate-50 border ${errors.date ? 'border-red-500' : 'border-slate-200'} rounded-2xl py-5 pl-12 pr-5 focus:outline-none focus:border-primary transition-all text-slate-900 font-semibold`}
                                                    />
                                                </div>
                                                {errors.date && <p className="text-red-500 text-xs font-bold ml-1">{errors.date}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Time Slot Availability</label>
                                                <div className="relative">
                                                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <select
                                                        name="timeSlot"
                                                        value={formData.timeSlot}
                                                        onChange={handleInputChange}
                                                        className={`w-full bg-slate-50 border ${errors.timeSlot ? 'border-red-500' : 'border-slate-200'} rounded-2xl py-5 pl-12 pr-5 focus:outline-none focus:border-primary transition-all text-slate-900 font-semibold appearance-none`}
                                                    >
                                                        <option value="">Select Time Slot</option>
                                                        {TIME_SLOTS.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                                                    </select>
                                                </div>
                                                {errors.timeSlot && <p className="text-red-500 text-xs font-bold ml-1">{errors.timeSlot}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 3: Patient Info */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">3</div>
                                            <h3 className="text-xl font-bold text-slate-900">Patient Information</h3>
                                        </div>
                                        <div className="grid md:grid-cols-1 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <input
                                                        type="text"
                                                        name="patientName"
                                                        placeholder="Enter patient's full name"
                                                        value={formData.patientName}
                                                        onChange={handleInputChange}
                                                        className={`w-full bg-slate-50 border ${errors.patientName ? 'border-red-500' : 'border-slate-200'} rounded-2xl py-5 pl-12 pr-5 focus:outline-none focus:border-primary transition-all text-slate-900 font-semibold`}
                                                    />
                                                </div>
                                                {errors.patientName && <p className="text-red-500 text-xs font-bold ml-1">{errors.patientName}</p>}
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        placeholder="10-digit mobile number"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className={`w-full bg-slate-50 border ${errors.phone ? 'border-red-500' : 'border-slate-200'} rounded-2xl py-5 pl-12 pr-5 focus:outline-none focus:border-primary transition-all text-slate-900 font-semibold`}
                                                    />
                                                </div>
                                                {errors.phone && <p className="text-red-500 text-xs font-bold ml-1">{errors.phone}</p>}
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="For confirmation details"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className={`w-full bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-200'} rounded-2xl py-5 pl-12 pr-5 focus:outline-none focus:border-primary transition-all text-slate-900 font-semibold`}
                                                    />
                                                </div>
                                                {errors.email && <p className="text-red-500 text-xs font-bold ml-1">{errors.email}</p>}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Notes / Symptoms (Optional)</label>
                                            <div className="relative">
                                                <FileText className="absolute left-4 top-6 text-slate-400" size={18} />
                                                <textarea
                                                    name="notes"
                                                    rows={4}
                                                    placeholder="Briefly describe your health concern..."
                                                    value={formData.notes}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 pl-12 pr-5 focus:outline-none focus:border-primary transition-all text-slate-900 font-semibold resize-none"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-9 rounded-2xl text-xl font-bold shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 transition-all hover:-translate-y-1 relative overflow-hidden"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                    className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full"
                                                />
                                                Securing Your Slot...
                                            </>
                                        ) : (
                                            <>
                                                Confirm Appointment <ArrowRight size={20} />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </motion.div>
                        </div>

                        {/* Info Column */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                                <h3 className="text-2xl font-bold mb-6">Appointment Guide</h3>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                            <Bell size={20} className="text-secondary" />
                                        </div>
                                        <p className="text-sm text-slate-400"><span className="text-white font-bold">Priority Care:</span> Emergency cases are attended to with absolute priority.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                            <Clock size={20} className="text-primary" />
                                        </div>
                                        <p className="text-sm text-slate-400"><span className="text-white font-bold">Arrive Early:</span> Please arrive 15 minutes before your scheduled slot for registration.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                            <FileText size={20} className="text-indigo-400" />
                                        </div>
                                        <p className="text-sm text-slate-400"><span className="text-white font-bold">Documents:</span> Keep your previous medical records and insurance cards ready.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Need Immediate Help?</h3>
                                <p className="text-slate-500 mb-8 text-sm leading-relaxed">If you are experiencing a medical emergency, please call our 24/7 hotline directly.</p>
                                <a href="tel:+911234567890" className="w-full bg-red-50 text-red-600 font-extrabold py-5 rounded-2xl flex items-center justify-center gap-3 border border-red-100 hover:bg-red-100 transition-colors">
                                    <Phone size={20} />
                                    +91 12345 67890
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
