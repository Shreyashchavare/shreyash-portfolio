import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-4 p-6 rounded-2xl border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div>
            <p className="text-sm uppercase tracking-wide text-foreground/60">Emails</p>
            <a className="block hover:text-primary" href="mailto:shreyashchavare3110@gmail.com">shreyashchavare3110@gmail.com</a>
            <a className="block hover:text-primary" href="mailto:shreyashchavare14@gmail.com">shreyashchavare14@gmail.com</a>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide text-foreground/60">Phone</p>
            <a className="hover:text-primary" href="tel:+917532889696">+91 7532889696</a>
          </div>
        </div>
        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

