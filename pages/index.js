import { useEffect, useRef } from "react";

export default function Home() {
  const cursorRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const parallax = parallaxRef.current;

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      const x = (window.innerWidth / 2 - e.clientX) / 25;
      const y = (window.innerHeight / 2 - e.clientY) / 25;
      parallax.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="container">
      {/* Cursor personalizado */}
      <div className="cursor" ref={cursorRef}></div>

      {/* Texto com Parallax 3D */}
      <div className="content">
        <h1 className="title" ref={parallaxRef}>Se você me ama da uma risadinha</h1>
        <p className="subtitle">
          Você é muito especial para mim 
        </p>
      </div>

      {/* Elementos flutuantes */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      <style jsx>{`
        .container {
          height: 100vh;
          overflow: hidden;
          background: linear-gradient(120deg, #1a1a1d, #101014, #1b0e33);
          background-size: 400% 400%;
          animation: gradientShift 10s ease infinite;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          perspective: 1000px;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Cursor customizado */
        .cursor {
          position: fixed;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.2), transparent);
          pointer-events: none;
          mix-blend-mode: difference;
          transform: translate(-50%, -50%);
          transition: transform 0.07s linear;
          z-index: 999;
        }

        /* Conteúdo central */
        .content {
          text-align: center;
          z-index: 10;
        }

        .title {
          font-size: 60px;
          font-weight: 900;
          letter-spacing: 1px;
          background: linear-gradient(90deg, #8a7bff, #c772ff, #72f5ff);
          -webkit-background-clip: text;
          color: transparent;
          text-shadow: 0 0 20px rgba(147, 72, 255, 0.5);
          transition: 0.2s ease-out;
        }

        .subtitle {
          margin-top: 20px;
          font-size: 22px;
          opacity: 0.8;
          animation: glow 3s infinite ease-in-out;
        }

        @keyframes glow {
          0%   { text-shadow: 0 0 0px #ffffff55; }
          50%  { text-shadow: 0 0 15px #ffffffaa; }
          100% { text-shadow: 0 0 0px #ffffff55; }
        }

        /* Orbes flutuantes */
        .orb {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
          animation: float 10s infinite ease-in-out;
        }

        .orb1 {
          background: #8a7bff;
          top: 10%;
          left: 15%;
          animation-duration: 12s;
        }

        .orb2 {
          background: #ff72e3;
          bottom: 15%;
          right: 15%;
          animation-duration: 15s;
        }

        .orb3 {
          background: #72f5ff;
          top: 50%;
          right: 35%;
          animation-duration: 18s;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
