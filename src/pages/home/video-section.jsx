import { useState } from "react";
import mainvideo from "/videos/mainvideo.mp4";
import { ArrowIcon } from "../../assets/svg";
import { Link } from "react-router-dom";

export default function VideoSection() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <section
            className="above-glow relative overflow-hidden group"
            onMouseMove={handleMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {/* Background video */}
            <video
                className="home-video object-cover w-full h-auto"
                src={mainvideo}
                width={1440}
                height={766}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
            ></video>

            {visible && (
                <Link
                to="/work"
                    className=" absolute z-10 bg-white text-black font-semibold px-6 py-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-400 ease-out cursor-pointer flex items-center justify-center gap-3"
                    style={{
                        left: `${pos.x}px`,
                        top: `${pos.y}px`,
                    }}
                >
                    All  Works
                    <ArrowIcon />
                </Link>
            )}
        </section>
    );
}
