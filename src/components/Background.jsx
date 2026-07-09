import { useEffect, useRef } from 'react'

// Fondo ambiental: partículas conectadas en canvas + blobs de gradiente en CSS.
// Se atenúa automáticamente en tema claro vía la clase `.bg-ambient` (ver App.css).
function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let rafId
    let dots = []

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function init() {
      dots = []
      const n = Math.min(70, Math.floor((canvas.width * canvas.height) / 18000))
      for (let i = 0; i < n; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.5 + 0.4,
          hue: Math.random() < 0.6 ? 260 + Math.random() * 45 : 210 + Math.random() * 30,
          a: Math.random() * 0.5 + 0.2,
        })
      }
    }

    function frame() {
      const W = canvas.width
      const H = canvas.height
      ctx.clearRect(0, 0, W, H)

      for (let i = 0; i < dots.length; i++) {
        const p = dots[i]
        p.x = (p.x + p.vx + W) % W
        p.y = (p.y + p.vy + H) % H

        for (let j = i + 1; j < dots.length; j++) {
          const q = dots[j]
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 130) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `hsla(263, 68%, 65%, ${(1 - d / 130) * 0.12})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 78%, 68%, ${p.a})`
        ctx.fill()
      }

      rafId = requestAnimationFrame(frame)
    }

    resize()
    init()
    frame()

    const onResize = () => {
      resize()
      init()
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="bg-particles" />
}

export default function Background() {
  return (
    <div className="bg-ambient" aria-hidden="true">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />
      <Particles />
    </div>
  )
}
