import { HeartPulse, Bone, Brain, Baby, Flower2, Microscope, Ambulance } from 'lucide-react'

export interface Department {
    id: string;
    title: string;
    overview: string;
    conditions: string[];
    procedures: string[];
    doctors: { name: string; role: string; image: string; id: string }[];
    facilities: string[];
    color: string;
    icon: any;
    description: string;
}

export const departmentsData: Record<string, Department> = {
    "cardiology": {
        id: "cardiology",
        title: "Cardiology Department",
        description: "Advanced heart care including diagnosis, treatment, and surgery by top cardiologists.",
        overview: "Our Cardiology department provides comprehensive heart care using the latest technology and techniques. From diagnosis to complex surgeries, we are committed to your heart's health.",
        conditions: ["Coronary Artery Disease", "Heart Failure", "Arrhythmias", "Valvular Heart Disease", "Hypertension"],
        procedures: ["Angioplasty", "Bypass Surgery", "ECHOs", "TMTs", "Pacemaker Implantation"],
        doctors: [
            { id: "arvind-sharma", name: "Dr. Arvind Sharma", role: "Chief Cardiologist", image: "https://images.unsplash.com/photo-1612349317150-e410f624c427?q=80&w=400&auto=format&fit=crop" }
        ],
        facilities: ["Advanced Cath Lab", "Cardiac ICU", "Non-invasive Cardiology Lab", "Holter Monitoring"],
        color: "rose",
        icon: HeartPulse
    },
    "orthopedics": {
        id: "orthopedics",
        title: "Orthopedic Department",
        description: "Comprehensive care for bones, joints, ligaments, tendons, muscles, and nerves.",
        overview: "Specialized care for bones, joints, and ligaments using minimally invasive and robotic-assisted techniques for faster recovery.",
        conditions: ["Joint Pain", "Fractures", "Sports Injuries", "Arthritis", "Scoliosis"],
        procedures: ["Knee Replacement", "Hip Replacement", "Arthroscopy", "Spine Fixation", "Fracture Surgery"],
        doctors: [
            { id: "rajesh-kumar", name: "Dr. Rajesh Kumar", role: "Orthopedic Surgeon", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop" }
        ],
        facilities: ["Digital Ortho-Suite", "Robotic Surgery Wing", "Physiotherapy Center", "Sports Medicine Lab"],
        color: "blue",
        icon: Bone
    },
    "neurology": {
        id: "neurology",
        title: "Neurology Department",
        description: "Expert care for complex brain, spine, and nervous system disorders by top neurosurgeons.",
        overview: "Providing expert care for complex neurological conditions of the brain, spine, and nervous system with precision and care.",
        conditions: ["Stroke", "Epilepsy", "Parkinson's Disease", "Multiple Sclerosis", "Alzheimer's Disease"],
        procedures: ["Brain Surgery", "Spine Surgery", "EEGs", "EMGs", "Sleep Studies"],
        doctors: [
            { id: "vikram-singh", name: "Dr. Vikram Singh", role: "Lead Neurologist", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop" }
        ],
        facilities: ["Neuromonitoring Lab", "Stroke Unit", "Stroke Recovery Center", "Advance MRI/CT"],
        color: "indigo",
        icon: Brain
    },
    "pediatrics": {
        id: "pediatrics",
        title: "Pediatrics Department",
        description: "Specialized medical care for infants, children, and adolescents ensuring healthy growth.",
        overview: "Dedicated to the health and well-being of children from birth through adolescence, providing expert care in a child-friendly environment.",
        conditions: ["Common Infections", "Growth Disorders", "Childhood Asthma", "Immunization", "Congenital Disorders"],
        procedures: ["Well-child Checkups", "Vaccinations", "Pediatric Surgery", "Developmental Screening", "Neonatal Intensive Care"],
        doctors: [
            { id: "meera-patel", name: "Dr. Meera Patel", role: "Senior Pediatrician", image: "https://images.unsplash.com/photo-1594824416965-9f18a5621c1f?q=80&w=400&auto=format&fit=crop" }
        ],
        facilities: ["Neonatal ICU (NICU)", "Pediatric ICU (PICU)", "Child Play Area", "Vaccination Center"],
        color: "purple",
        icon: Baby
    },
    "gynecology": {
        id: "gynecology",
        title: "Gynecology Department",
        description: "Expert women's health services from routine checkups to advanced specialized treatments.",
        overview: "Comprehensive women's healthcare services, supporting women through every stage of life with expertise and compassion.",
        conditions: ["PCOS", "Endometriosis", "High-Risk Pregnancy", "Menopause", "Fibroids"],
        procedures: ["Laparoscopic Surgery", "Natural Birthing", "Hysterectomy", "Antenatal Care", "Colposcopy"],
        doctors: [
            { id: "sneha-desai", name: "Dr. Sneha Desai", role: "Lead Gynecologist", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop" }
        ],
        facilities: ["Modern LDR Rooms", "Fetal Medicine Center", "Advanced IVF Lab", "Gynae Endoscopy Suite"],
        color: "pink",
        icon: Flower2
    },
    "general-surgery": {
        id: "general-surgery",
        title: "General Surgery Department",
        description: "Modern surgical procedures focusing on abdominal contents and other core system issues.",
        overview: "Our General Surgery department offers a wide range of surgical interventions using the most advanced minimally invasive techniques.",
        conditions: ["Hernia", "Gallstones", "Appendicitis", "Piles", "Abdominal Trauma"],
        procedures: ["Laparoscopic Cholecystectomy", "Hernia Repair", "Appendectomy", "Thyroid Surgery", "Colorectal Surgery"],
        doctors: [
            { id: "rajesh-kumar", name: "Dr. Rajesh Kumar", role: "Senior Surgeon", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop" }
        ],
        facilities: ["Modular Operation Theatres", "Post-operative Care Unit", "Day Care Surgery Unit", "24/7 Surgical Emergency"],
        color: "emerald",
        icon: Microscope
    }
};
