export default function Footer() {
  return (
    <div className="w-full py-4 px-5 text-center border-t border-white/4">
      <p className="text-cream/15 text-[9px] font-body tracking-widest uppercase">
        Created &amp; designed by{" "}
        <span className="text-cream/20">Vinicio Meléndez</span>
        {" · "}
        <span className="text-cream/20">Grain &amp; Brand Studios LLC</span>
      </p>
      <a
        href="https://www.grainandbrand.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cream/12 text-[8px] font-body tracking-widest hover:text-agave/40 transition-colors"
      >
        www.grainandbrand.com
      </a>
    </div>
  );
}
