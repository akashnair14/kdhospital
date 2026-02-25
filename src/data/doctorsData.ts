export interface DoctorProfile {
    id: string;
    name: string;
    role: string;
    specialization: string;
    experience: string;
    degrees: string;
    image: string;
    bio: string;
    education: string[];
    experience_list: string[];
    specialties: string[];
    timings: { days: string; time: string }[];
    location: string;
    availability: string;
}

export const doctorsData: Record<string, DoctorProfile> = {
    "arvind-sharma": {
        id: "arvind-sharma",
        name: "Dr. Arvind Sharma",
        role: "Chief Cardiologist",
        specialization: "Cardiology",
        experience: "15+ Years",
        degrees: "MD, DM (Cardiology), FACC",
        image: "https://images.unsplash.com/photo-1612349317150-e410f624c427?q=80&w=800&auto=format&fit=crop",
        bio: "Dr. Arvind Sharma is a world-renowned cardiologist with over 15 years of experience in interventional cardiology. He has performed over 5,000 successful cardiac procedures and is a pioneer in minimally invasive heart surgeries. His patient-first approach and dedication to clinical excellence have earned him numerous national awards.",
        education: [
            "MD - Internal Medicine, AIIMS New Delhi",
            "DM - Cardiology, PGIMER Chandigarh",
            "Fellowship in Interventional Cardiology, Mount Sinai New York",
            "FACC - Fellow of American College of Cardiology"
        ],
        experience_list: [
            "15+ Years of Clinical Practice",
            "Ex-Senior Consultant at Max Healthcare",
            "Head of Cardiology at KD Hospital since 2018",
            "Visiting Faculty at various International Medical Institutes"
        ],
        specialties: [
            "Interventional Cardiology",
            "Heart Failure Management",
            "Electrophysiology",
            "Valvular Heart Disease",
            "Hypertension Management"
        ],
        timings: [
            { days: "Monday - Friday", time: "09:00 AM - 04:00 PM" },
            { days: "Saturday", time: "10:00 AM - 01:00 PM (Emergency Only)" }
        ],
        location: "Block A, First Floor, Room 102",
        availability: "Mon - Fri, 09:00 AM - 04:00 PM"
    },
    "meera-patel": {
        id: "meera-patel",
        name: "Dr. Meera Patel",
        role: "Senior Pediatrician",
        specialization: "Pediatrics",
        experience: "12+ Years",
        degrees: "MBBS, MD (Pediatrics)",
        image: "https://images.unsplash.com/photo-1594824416965-9f18a5621c1f?q=80&w=800&auto=format&fit=crop",
        bio: "Dr. Meera Patel is a compassionate pediatrician dedicated to providing the highest quality healthcare for infants, children, and adolescents. With over 12 years of experience, she specializes in child nutrition, vaccinations, and adolescent medicine.",
        education: [
            "MBBS - Government Medical College",
            "MD - Pediatrics, Grant Medical College Mumbai",
            "Fellowship in Neonatology"
        ],
        experience_list: [
            "12+ Years of Clinical Practice",
            "Former Resident at AIIMS",
            "Senior Pediatrician at KD Hospital since 2019"
        ],
        specialties: [
            "Neonatology",
            "Child Nutrition",
            "Adolescent Medicine",
            "Vaccination",
            "Asthma Management"
        ],
        timings: [
            { days: "Monday - Saturday", time: "10:00 AM - 02:00 PM" }
        ],
        location: "Block B, Ground Floor, Room 005",
        availability: "Mon - Sat, 10:00 AM - 02:00 PM"
    },
    "rajesh-kumar": {
        id: "rajesh-kumar",
        name: "Dr. Rajesh Kumar",
        role: "Orthopedic Surgeon",
        specialization: "Orthopedics",
        experience: "20+ Years",
        degrees: "MS (Orthopedics), FRCS",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
        bio: "Dr. Rajesh Kumar is a senior orthopedic surgeon with 20+ years of experience in joint replacements, trauma surgery, and sports medicine. He is known for his precision and excellent surgical outcomes.",
        education: [
            "MBBS - Madras Medical College",
            "MS - Orthopedics, KMC Manipal",
            "FRCS - Royal College of Surgeons, Edinburgh"
        ],
        experience_list: [
            "20+ Years of Orthopedic Surgery",
            "Ex-Chief Surgeon at Apollo Hospitals",
            "Lead Orthopedic Surgeon at KD Hospital"
        ],
        specialties: [
            "Total Knee Replacement",
            "Hip Replacement",
            "Arthroscopy",
            "Complex Trauma Surgery",
            "Sports Medicine"
        ],
        timings: [
            { days: "Tuesday - Saturday", time: "11:00 AM - 06:00 PM" }
        ],
        location: "Block C, Second Floor, Room 208",
        availability: "Tue - Sat, 11:00 AM - 06:00 PM"
    },
    "sneha-desai": {
        id: "sneha-desai",
        name: "Dr. Sneha Desai",
        role: "Lead Gynecologist",
        specialization: "Gynecology",
        experience: "10+ Years",
        degrees: "MBBS, MS (Obstetrics & Gynae)",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
        bio: "Dr. Sneha Desai provides comprehensive women's health services. She is an expert in high-risk pregnancy management and laparoscopic gynecological surgeries.",
        education: [
            "MBBS - BJ Medical College Ahmedabad",
            "MS - Obstetrics & Gynecology, Mumbai University",
            "Diploma in Advanced Gynae Laparoscopy"
        ],
        experience_list: [
            "10+ Years in Women's Health",
            "Specialist in High-Risk Pregnancies",
            "Consultant at KD Hospital"
        ],
        specialties: [
            "Antenatal Care",
            "High-Risk Pregnancy",
            "Gynae Laparoscopy",
            "Infertility Treatment",
            "Menopausal Care"
        ],
        timings: [
            { days: "Monday - Friday", time: "08:30 AM - 03:00 PM" }
        ],
        location: "Block B, First Floor, Room 112",
        availability: "Mon - Fri, 08:30 AM - 03:00 PM"
    },
    "vikram-singh": {
        id: "vikram-singh",
        name: "Dr. Vikram Singh",
        role: "Neurologist",
        specialization: "Neurology",
        experience: "18+ Years",
        degrees: "MD, DM (Neurology)",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
        bio: "Dr. Vikram Singh is a senior neurologist specializing in stroke management, epilepsy, and neurodegenerative disorders. He has over 18 years of experience in managing complex neurological cases.",
        education: [
            "MD - Internal Medicine",
            "DM - Neurology, NIMHANS Bangalore"
        ],
        experience_list: [
            "18+ Years of Neurology Practice",
            "Senior Consultant at KD Hospital"
        ],
        specialties: [
            "Stroke Care",
            "Epilepsy Management",
            "Movement Disorders",
            "Neuro-rehabilitation"
        ],
        timings: [
            { days: "Mon, Wed, Fri", time: "10:00 AM - 05:00 PM" }
        ],
        location: "Block A - Third Floor",
        availability: "Mon, Wed, Fri, 10:00 AM - 05:00 PM"
    },
    "anjali-rao": {
        id: "anjali-rao",
        name: "Dr. Anjali Rao",
        role: "Ophthalmologist",
        specialization: "Ophthalmology",
        experience: "8+ Years",
        degrees: "MBBS, MS (Ophthalmology)",
        image: "https://images.unsplash.com/photo-1594824416965-9f18a5621c1f?q=80&w=800&auto=format&fit=crop",
        bio: "Dr. Anjali Rao is an expert ophthalmologist specializing in cataract surgeries and retinal disorders. She is dedicated to preserving and restoring vision through advanced surgical techniques.",
        education: [
            "MBBS",
            "MS - Ophthalmology"
        ],
        experience_list: [
            "8+ Years of Ophthalmic Surgery",
            "Specialist at KD Hospital"
        ],
        specialties: [
            "Cataract Surgery",
            "Retinal Disorders",
            "LASIK",
            "Glaucoma Treatment"
        ],
        timings: [
            { days: "Tue, Thu, Sat", time: "09:00 AM - 01:00 PM" }
        ],
        location: "Block D - First Floor",
        availability: "Tue, Thu, Sat, 09:00 AM - 01:00 PM"
    }
};
