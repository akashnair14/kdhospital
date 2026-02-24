export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: "Heart Health" | "Bone Health" | "Child Care" | "Women Health" | "Preventive Care";
    author: string;
    date: string;
    image: string;
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "heart-healthy-tips",
        title: "10 Heart Healthy Tips for Your Daily Routine",
        excerpt: "Simple lifestyle changes can significantly improve your cardiovascular health and longevity. Learn how to protect your heart today.",
        category: "Heart Health",
        author: "Dr. Arvind Sharma",
        date: "Feb 15, 2026",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
        content: `
            <p>Your heart is the most hardworking organ in your body. Taking care of it doesn't always require drastic measures; instead, it's the small, consistent habits that make the biggest difference.</p>
            <h3>1. Get Moving</h3>
            <p>Aim for at least 30 minutes of moderate-intensity exercise most days of the week. This could be a brisk walk, swimming, or cycling.</p>
            <h3>2. Eat Heart-Healthy Fats</h3>
            <p>Replace saturated fats with unsaturated fats found in olive oil, avocados, and nuts. Omega-3 fatty acids, found in fatty fish like salmon, are particularly beneficial.</p>
            <h3>3. Reduce Salt Intake</h3>
            <p>High salt consumption is a major contributor to high blood pressure. Try flavoring your food with herbs and spices instead of salt.</p>
            <h3>4. Manage Stress</h3>
            <p>Chronic stress can damage your heart. Practice relaxation techniques like deep breathing, meditation, or yoga.</p>
            <h3>5. Get Enough Sleep</h3>
            <p>Quality sleep is essential for heart health. Aim for 7-9 hours of restful sleep each night.</p>
        `
    },
    {
        id: "bone-health-nutrition",
        title: "The Essential Guide to Bone Health and Nutrition",
        excerpt: "Strong bones are the foundation of an active life. Discover the key nutrients and exercises for maintaining bone density.",
        category: "Bone Health",
        author: "Dr. Rajesh Kumar",
        date: "Feb 10, 2026",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
        content: `
            <p>Bone health is often overlooked until a fracture occurs. However, building strong bones starts early and continues throughout life through proper nutrition and weight-bearing exercise.</p>
            <h3>Calcium: The Building Block</h3>
            <p>Calcium is vital for bone strength. Dairy products, leafy greens, and fortified foods are excellent sources.</p>
            <h3>Vitamin D: The Catalyst</h3>
            <p>Without Vitamin D, your body cannot effectively absorb calcium. Sunlight exposure and supplements are common ways to ensure adequate levels.</p>
            <h3>Weight-Bearing Exercise</h3>
            <p>Walking, jogging, and weightlifting stimulate bone-forming cells and help maintain bone density as you age.</p>
        `
    },
    {
        id: "child-vaccination-guide",
        title: "A Parent's Guide to Essential Child Vaccinations",
        excerpt: "Keeping up with your child's vaccination schedule is crucial for preventing serious diseases. Here's what you need to know.",
        category: "Child Care",
        author: "Dr. Meera Patel",
        date: "Feb 05, 2026",
        image: "https://images.unsplash.com/photo-1581056316607-ad6d5a5c00d4?q=80&w=800&auto=format&fit=crop",
        content: `
            <p>Vaccinations are one of the most effective ways to protect your child from life-threatening diseases. Following the recommended schedule ensures your child develops immunity at the right time.</p>
            <h3>Why Vaccinate?</h3>
            <p>Vaccines protect not only your child but also the community by reducing the spread of contagious diseases.</p>
            <h3>The Schedule</h3>
            <p>From birth through adolescence, specific vaccines are administered to provide broad protection against illnesses like polio, measles, and hepatitis.</p>
        `
    },
    {
        id: "women-wellness-screening",
        title: "Essential Wellness Screenings Every Woman Should Have",
        excerpt: "Regular health checkups and screenings are vital for early detection and prevention of women-specific health issues.",
        category: "Women Health",
        author: "Dr. Sneha Desai",
        date: "Jan 28, 2026",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
        content: `
            <p>Preventive healthcare is the key to a long and healthy life. For women, certain screenings are essential starting in early adulthood.</p>
            <h3>Mammograms</h3>
            <p>Regular breast cancer screenings are recommended starting at age 40, or earlier if you have a family history.</p>
            <h3>Pap Smears</h3>
            <p>Important for early detection of cervical cancer. Consult your gynecologist for the recommended frequency.</p>
            <h3>Bone Density Scans</h3>
            <p>Especially important after menopause to monitor for signs of osteoporosis.</p>
        `
    },
    {
        id: "preventive-care-basics",
        title: "Understanding the Power of Preventive Healthcare",
        excerpt: "Prevention is always better than cure. Learn how regular checkups can help you stay ahead of potential health problems.",
        category: "Preventive Care",
        author: "Dr. Arvind Sharma",
        date: "Jan 20, 2026",
        image: "https://images.unsplash.com/photo-1576091160550-2173599211d0?q=80&w=800&auto=format&fit=crop",
        content: `
            <p>Preventive care focuses on maintaining health and preventing disease before it starts. It includes checkups, counseling, and screenings.</p>
            <h3>Annual Physicals</h3>
            <p>A comprehensive yearly exam helps your doctor monitor your health trends and catch issues early.</p>
            <h3>Immunizations</h3>
            <p>Flu shots and other routine adult vaccinations are a critical part of preventive health.</p>
            <h3>Lifestyle Counseling</h3>
            <p>Discussing diet, exercise, and smoking cessation with your doctor can significantly reduce your health risks.</p>
        `
    }
];
