export default function CvPage() {
  const pdfPath = "/Shreyash_Chavare_CV.pdf"; // place your PDF in public/
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-6">Resume</h1>
      <div className="flex gap-3 mb-6">
        <a href={pdfPath} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full bg-accent text-black hover:opacity-90 transition border border-foreground/20 flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 4h7l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M13 4v5h5" stroke="currentColor" strokeWidth="1.6"/>
          </svg>
          <span>Open PDF</span>
        </a>
        <a href={pdfPath} download className="px-5 py-2.5 rounded-full border transition flex items-center gap-2" style={{ borderColor: "var(--border)" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3v12" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.6"/>
            <path d="M5 20h14" stroke="currentColor" strokeWidth="1.6"/>
          </svg>
          <span>Download</span>
        </a>
      </div>
      <div className="rounded-xl overflow-hidden border min-h-[70vh]" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <object data={pdfPath} type="application/pdf" className="w-full h-[80vh] hidden md:block">
          <p className="p-4 text-foreground/80">PDF preview not available. Use the buttons above to open or download.</p>
        </object>
        <div className="md:hidden p-4 text-foreground/80">PDF preview works best on larger screens. Use the buttons above.</div>
      </div>
    </section>
  );
}





