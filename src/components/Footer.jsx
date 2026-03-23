export default function Footer() {
  return (
    <footer className="w-full py-20 px-8 bg-[var(--espresso)] border-t border-[var(--brass)]/10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-2xl mx-auto gap-8">
        <div className="text-lg font-black text-[var(--cream)] uppercase font-epilogue tracking-widest">Siddharth Sharma</div>
        <p className="font-epilogue tracking-widest text-[10px] uppercase text-[var(--cream)] opacity-80">© {new Date().getFullYear()} SIDDHARTH SHARMA. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-10 font-epilogue tracking-widest text-[10px] uppercase text-[var(--cream)] opacity-80">
          <a className="hover:text-[var(--cream)] transition-all duration-300 hover:opacity-100" href="https://www.linkedin.com/in/siddharth-sharma-ba693a294" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-[var(--cream)] transition-all duration-300 hover:opacity-100" href="https://github.com/Siddharth-73" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-[var(--cream)] transition-all duration-300 hover:opacity-100" href="https://x.com/N3RO_73" target="_blank" rel="noreferrer">X (Twitter)</a>
        </div>
      </div>
    </footer>
  );
}
