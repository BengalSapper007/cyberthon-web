"use client";

import React, {
    useRef,
    useEffect,
    useState,
    TouchEvent,
} from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";

export interface ThreeDCarouselItem {
    id: number;
    title: string;
    brand: string;
    description: string;
    tags: string[];
    imageUrl: string;
    link: string;
}

interface ThreeDCarouselProps {
    items: ThreeDCarouselItem[];
    autoRotate?: boolean;
    rotateInterval?: number;
    title?: string;
    subtitle?: string;
    tagline?: string;
}

const ThreeDCarousel = ({
    items,
    autoRotate = true,
    rotateInterval = 5000,
    title = "EVENT GALLERY",
    subtitle = "/// VISUAL_LOGS",
    tagline = "Relive the intensities of previous Cybertracs events. From high-stakes hackathons to networking masterpieces.",
}: ThreeDCarouselProps) => {
    const [active, setActive] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const isMobile = useIsMobile();
    const minSwipeDistance = 50;

    useEffect(() => {
        if (autoRotate && isInView && !isHovering) {
            const interval = setInterval(() => {
                setActive((prev) => (prev + 1) % items.length);
            }, rotateInterval);
            return () => clearInterval(interval);
        }
    }, [isInView, isHovering, autoRotate, rotateInterval, items.length]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (carouselRef.current) {
            observer.observe(carouselRef.current);
        }
        return () => observer.disconnect();
    }, []);

    const onTouchStart = (e: TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
        setTouchEnd(null);
    };

    const onTouchMove = (e: TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > minSwipeDistance) {
            setActive((prev) => (prev + 1) % items.length);
        } else if (distance < -minSwipeDistance) {
            setActive((prev) => (prev - 1 + items.length) % items.length);
        }
    };

    const getCardAnimationClass = (index: number) => {
        const diff = (index - active + items.length) % items.length;

        if (diff === 0) return "translate-x-0 scale-100 opacity-100 z-30 shadow-[0_0_50px_rgba(34,211,238,0.2)]";
        if (diff === 1 || diff === -(items.length - 1))
            return "translate-x-[45%] scale-90 opacity-40 z-20 blur-[1px]";
        if (diff === items.length - 1 || diff === -1)
            return "translate-x-[-45%] scale-90 opacity-40 z-20 blur-[1px]";

        return "scale-75 opacity-0 z-10";
    };

    return (
        <section id="gallery" className="relative py-24 bg-background overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono tracking-[0.3em] mb-4">
                        {subtitle}
                    </span>
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
                        {title.split(' ').map((word, i) => (
                            <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow-cyan" : ""}>
                                {word}{' '}
                            </span>
                        ))}
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground font-light tracking-wide leading-relaxed">
                        {tagline}
                    </p>
                </motion.div>
            </div>

            <div className="w-full px-4 overflow-visible">
                <div
                    className="relative h-[450px] md:h-[550px] flex items-center justify-center"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    ref={carouselRef}
                >
                    <div className="absolute inset-0 flex items-center justify-center overflow-visible">
                        {items.map((item, index) => (
                            <div
                                key={item.id}
                                className={`absolute w-full max-w-[320px] md:max-w-[450px] transform transition-all duration-700 ease-out cursor-pointer ${getCardAnimationClass(
                                    index
                                )}`}
                                onClick={() => setActive(index)}
                            >
                                <Card className="overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 group hover:border-cyan-500/50 transition-colors duration-500 rounded-2xl flex flex-col h-[400px] md:h-[500px]">
                                    <div
                                        className="relative h-48 md:h-64 overflow-hidden"
                                        style={{
                                            backgroundImage: `url(${item.imageUrl})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                                        {/* Decorative Label */}
                                        <div className="absolute top-4 left-4 font-mono text-[8px] text-cyan-400/60 tracking-widest uppercase py-1 px-2 border border-cyan-500/20 bg-black/40 backdrop-blur-sm rounded">
                                            DATA_REF_{item.id.toString().padStart(2, '0')}
                                        </div>

                                        <div className="absolute bottom-4 left-6 right-6 z-10">
                                            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                                {item.brand}
                                            </h3>
                                            <div className="w-8 h-[2px] bg-cyan-500/50 group-hover:w-16 transition-all duration-500" />
                                        </div>
                                    </div>

                                    <CardContent className="p-6 md:p-8 flex flex-col flex-grow">
                                        <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6 line-clamp-3">
                                            {item.description}
                                        </p>

                                        <div className="mt-auto">
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {item.tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-1 bg-white/5 text-cyan-400/70 border border-white/5 rounded text-[9px] font-mono tracking-wider uppercase"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <a
                                                href={item.link}
                                                className="inline-flex items-center gap-2 text-white/50 text-xs font-display tracking-[0.2em] uppercase hover:text-cyan-400 transition-colors group/link"
                                            >
                                                <span>Explore Log</span>
                                                <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                                            </a>
                                        </div>
                                    </CardContent>

                                    {/* Corner Accents */}
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/5 group-hover:border-cyan-500/50 transition-all" />
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/5 group-hover:border-purple-500/50 transition-all" />
                                </Card>
                            </div>
                        ))}
                    </div>

                    {!isMobile && (
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none z-50">
                            <button
                                className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-500/40 pointer-events-auto transition-all hover:scale-110 active:scale-95"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActive((prev) => (prev - 1 + items.length) % items.length);
                                }}
                                aria-label="Previous"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-500/40 pointer-events-auto transition-all hover:scale-110 active:scale-95"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActive((prev) => (prev + 1) % items.length);
                                }}
                                aria-label="Next"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    )}

                    <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center space-x-4 z-30">
                        {items.map((_, idx) => (
                            <button
                                key={idx}
                                className={`h-[2px] transition-all duration-500 ${active === idx
                                        ? "bg-cyan-500 w-8"
                                        : "bg-white/10 w-4 hover:bg-white/30"
                                    }`}
                                onClick={() => setActive(idx)}
                                aria-label={`Go to item ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThreeDCarousel;
