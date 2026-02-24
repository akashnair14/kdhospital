import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'
import SEO from '../components/SEO'

const categories = ["All", "Heart Health", "Bone Health", "Child Care", "Women Health", "Preventive Care"]

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")

    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
            return matchesCategory && matchesSearch
        })
    }, [selectedCategory, searchQuery])

    return (
        <div className="flex flex-col w-full min-h-screen pt-20 bg-white">
            <SEO
                title="Health Blog & Insights"
                description="Stay updated with the latest health tips, medical research, and wellness advice from the expert doctors at KD Hospital."
                keywords="health blog, medical tips, heart health, bone health, child care, women health, KD Hospital blog"
            />
            {/* Premium Header */}
            <section className="relative py-24 bg-slate-900 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-l-full blur-3xl translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-secondary/5 rounded-r-full blur-3xl -translate-x-1/2"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-secondary font-bold tracking-widest uppercase mb-4 block"
                    >
                        Medical Insights
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight"
                    >
                        KD Health <span className="text-primary italic">Journal</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
                    >
                        Stay informed with the latest medical research, wellness tips, and guidance from our leading specialists.
                    </motion.p>
                </div>
            </section>

            {/* Filter & Search Bar */}
            <section className="py-12 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                        {/* Categories */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${selectedCategory === cat
                                        ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full lg:max-w-md">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:border-primary transition-all text-slate-900 font-medium shadow-sm"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <AnimatePresence mode='wait'>
                        {filteredPosts.length > 0 ? (
                            <motion.div
                                key={selectedCategory + searchQuery}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="grid lg:grid-cols-3 gap-12"
                            >
                                {filteredPosts.map((post, index) => (
                                    <motion.article
                                        key={post.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                                    >
                                        <div className="aspect-[16/10] relative overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                            />
                                            <div className="absolute top-6 left-6">
                                                <span className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg border border-white/50">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-10 flex flex-col flex-1">
                                            <div className="flex items-center gap-6 text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6 border-b border-slate-50 pb-6">
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={14} className="text-primary" />
                                                    <span>{post.date}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <User size={14} className="text-secondary" />
                                                    <span>In {post.author.split(' ').pop()}</span>
                                                </div>
                                            </div>
                                            <h2 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                                                {post.title}
                                            </h2>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1 font-medium">
                                                {post.excerpt}
                                            </p>
                                            <Link to={`/blog/${post.id}`} className="group/link inline-flex items-center font-bold text-slate-900 hover:text-primary transition-colors">
                                                Read Full Article
                                                <div className="ml-3 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all">
                                                    <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                                                </div>
                                            </Link>
                                        </div>
                                    </motion.article>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20"
                            >
                                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                                    <Tag size={40} />
                                </div>
                                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">No articles found</h3>
                                <p className="text-slate-500">Try adjusting your search or category filters.</p>
                                <button
                                    onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                                    className="mt-8 text-primary font-bold hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </div>
    )
}
