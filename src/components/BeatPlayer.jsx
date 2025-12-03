import { useState, useRef, useEffect } from 'react';
import { Howl } from 'howler';
import { Play, Pause, SkipBack, SkipForward, ShoppingCart, Download } from 'lucide-react';
import { beats } from '../data/beats';

export default function BeatPlayer() {
    const [currentBeat, setCurrentBeat] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const soundRef = useRef(null);

    const playBeat = (beat) => {
        if (currentBeat?.id === beat.id) {
            // Toggle play/pause
            if (isPlaying) {
                soundRef.current.pause();
                setIsPlaying(false);
            } else {
                soundRef.current.play();
                setIsPlaying(true);
            }
        } else {
            // Play new beat
            if (soundRef.current) {
                soundRef.current.unload();
            }

            const sound = new Howl({
                src: [beat.audio],
                html5: true,
                onplay: () => setIsPlaying(true),
                onpause: () => setIsPlaying(false),
                onend: () => {
                    setIsPlaying(false);
                    setProgress(0);
                },
                onseek: () => {
                    // Handle seek if needed
                }
            });

            soundRef.current = sound;
            sound.play();
            setCurrentBeat(beat);
        }
    };

    useEffect(() => {
        let interval;
        if (isPlaying && soundRef.current) {
            interval = setInterval(() => {
                const seek = soundRef.current.seek();
                const duration = soundRef.current.duration();
                setProgress((seek / duration) * 100);
            }, 100);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <section id="beats" className="py-20 bg-dark">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-center">LATEST <span className="text-primary">BEATS</span></h2>

                {/* Player Controls (Sticky Bottom or Top) - Simplified for now as inline list */}

                <div className="grid gap-4">
                    {beats.map((beat) => (
                        <div
                            key={beat.id}
                            className={`flex items-center p-4 rounded-xl transition-all ${currentBeat?.id === beat.id ? 'bg-white/10 border border-primary/50' : 'bg-white/5 hover:bg-white/10'
                                }`}
                        >
                            {/* Cover Art */}
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 mr-4 group cursor-pointer" onClick={() => playBeat(beat)}>
                                <img src={beat.cover} alt={beat.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    {currentBeat?.id === beat.id && isPlaying ? <Pause size={24} /> : <Play size={24} />}
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex-grow min-w-0 mr-4">
                                <h3 className="font-bold text-lg truncate">{beat.title}</h3>
                                <div className="flex gap-3 text-sm text-gray-400">
                                    <span>{beat.bpm} BPM</span>
                                    <span>{beat.key}</span>
                                    <div className="flex gap-1">
                                        {beat.tags.map(tag => (
                                            <span key={tag} className="bg-white/10 px-2 rounded-full text-xs flex items-center">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-xl mr-2">$25.00</span>
                                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-colors" onClick={() => window.open('https://buy.stripe.com/test_5kQ28rabogGq4qw7BC9fW00', '_blank')}>
                                    <ShoppingCart size={18} />
                                    <span className="hidden sm:inline">Lease</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sticky Player Bar (Optional, if currently playing) */}
            {currentBeat && (
                <div className="fixed bottom-0 left-0 right-0 bg-dark/95 backdrop-blur-lg border-t border-white/10 p-4 z-40">
                    <div className="container mx-auto flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 w-1/4">
                            <img src={currentBeat.cover} alt={currentBeat.title} className="w-12 h-12 rounded bg-gray-800" />
                            <div className="hidden sm:block">
                                <h4 className="font-bold text-sm">{currentBeat.title}</h4>
                                <span className="text-xs text-gray-400">Producer Name</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-1/2">
                            <div className="flex items-center gap-6 mb-2">
                                <button className="text-gray-400 hover:text-white"><SkipBack size={20} /></button>
                                <button
                                    className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                                    onClick={() => playBeat(currentBeat)}
                                >
                                    {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
                                </button>
                                <button className="text-gray-400 hover:text-white"><SkipForward size={20} /></button>
                            </div>
                            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden cursor-pointer">
                                <div
                                    className="h-full bg-primary transition-all duration-100"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>

                        <div className="w-1/4 flex justify-end">
                            <button
                                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold"
                                onClick={() => window.open('https://buy.stripe.com/test_5kQ28rabogGq4qw7BC9fW00', '_blank')}
                            >
                                LEASE $25.00
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
