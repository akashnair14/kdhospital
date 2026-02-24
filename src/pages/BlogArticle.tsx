import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Share2, MessageSquare, Clock, Tag } from 'lucide-react'
import { blogPosts } from '../data/blogData'
import { Button } from '@/components/ui/button'

export default function BlogArticle() {
    const { id } = useParams<{ id: string }>()
    const post = blogPosts.find(p => p.id === id)

    if (!post) {
        return (
            <div className="min-h-screen pt-40 pb-20 text-center">
                <h2 className="text-3xl font-bold mb-6">Article Not Found</h2>
                <Link to="/blog">
                    <Button>Back to Blog</Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full min-h-screen pt-20 bg-white">
            {/* Article Header */}
            <section className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-20 blur-sm scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-4 transition-all">
                            <ArrowLeft size={20} /> Back to Insights
                        </Link>

                        <div className="flex flex-wrap items-center gap-4 mb-8">
                            <span className="bg-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-lg border border-primary/30">
                                {post.category}
                            </span>
                            <div className="flex items-center gap-2 text-slate-400 text-sm font-bold">
                                <Clock size={16} /> 6 Min Read
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-white mb-10 leading-[1.1] tracking-tighter">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-between gap-8 border-t border-white/10 pt-10">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary font-black text-xl border border-secondary/30">
                                    {post.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg leading-none mb-1">{post.author}</p>
                                    <p className="text-slate-500 text-sm font-medium">Medical Consultant</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="text-right hidden sm:block">
                                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Published On</p>
                                    <p className="text-white font-bold">{post.date}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 transition-all">
                                        <Share2 size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-[3.5rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100 -mt-32 relative z-20"
                        >
                            <article
                                className="prose prose-slate prose-lg max-w-none 
                                    prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight
                                    prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
                                    prose-strong:text-slate-900 prose-strong:font-bold
                                    prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                                    prose-img:rounded-[2rem] prose-img:shadow-2xl"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            <div className="mt-16 pt-16 border-t border-slate-100">
                                <div className="flex flex-wrap items-center justify-between gap-8">
                                    <div className="flex items-center gap-3">
                                        <Tag size={20} className="text-primary" />
                                        <div className="flex gap-2">
                                            {["Health", "Wellness", "Medicine"].map(t => (
                                                <span key={t} className="bg-slate-50 text-slate-500 text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-100">#{t}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Button variant="outline" className="rounded-xl border-slate-200 gap-2">
                                            <MessageSquare size={18} /> Discuss
                                        </Button>
                                        <Button className="rounded-xl gap-2 shadow-lg shadow-primary/20">
                                            Keep Reading <ArrowLeft className="rotate-180" size={18} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Related Articles or Newsletter */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Never Miss a Medical Update</h2>
                        <p className="text-slate-500 mb-10 font-medium">Get the latest healthcare news and expert advice delivered directly to your inbox every month.</p>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 bg-white border border-slate-200 rounded-2xl py-5 px-8 focus:outline-none focus:border-primary transition-all font-semibold"
                            />
                            <Button className="py-5 px-10 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20">
                                Subscribe Now
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
