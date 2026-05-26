export function QuoteSection() {
  return (
    <section className="bg-[#111111] py-14 border-y border-[#C9A84C]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-6 max-w-xl">
            <span className="text-[#C9A84C] text-6xl leading-none font-serif mt-2">&ldquo;</span>
            <p className="text-white text-lg md:text-xl leading-relaxed font-light italic">
              We believe every life holds a sacred code.
              <br />
              Our mission is to help the world remember.
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-[#C9A84C] italic text-2xl font-serif mb-1" style={{ fontFamily: "cursive" }}>
              Jarie James
            </div>
            <p className="text-gray-400 text-xs tracking-widest uppercase">Founder &amp; CEO</p>
            <p className="text-gray-400 text-xs tracking-widest uppercase">Sacred Cipher Mission</p>
          </div>
        </div>
      </div>
    </section>
  );
}
