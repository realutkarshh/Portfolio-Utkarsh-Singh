// components/QuestionMarquee.tsx
"use client"

const text = "Have Questions to Ask ?"

export default function QuestionMarquee() {
  return (
    <div className="inline-flex overflow-hidden">
      {/* Track is 2x wide and loops smoothly */}
      <div className="flex whitespace-nowrap animate-question-marquee">
        {/* First copy */}
        <MarqueeChunk text={text} />
        {/* Second copy */}
        <MarqueeChunk text={text} />
      </div>
    </div>
  )
}

function MarqueeChunk({ text }: { text: string }) {
  return (
    <div className="flex mb-20">
      <span className="mx-4 text-4xl sm:text-2xl lg:text-7xl font-light text-gray-900">
        {text}
      </span>
      <span className="mx-1 text-4xl text-gray-400 lg:text-7xl">•</span>
      <span className="mx-4 text-4xl sm:text-base font-light text-gray-900 lg:text-7xl">
        {text}
      </span>
      <span className="mx-1 text-4xl text-gray-400 lg:text-7xl">•</span>
      <span className="mx-4 text-4xl sm:text-base font-light text-gray-900 lg:text-7xl">
        {text}
      </span>
      <span className="mx-1 text-4xl text-gray-400 lg:text-7xl">•</span>
    </div>
  )
}
