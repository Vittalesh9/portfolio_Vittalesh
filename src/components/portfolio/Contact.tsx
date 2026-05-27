import { useState } from 'react'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, Phone } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

export function Contact() {
  const { ref, inView } = useInView()
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      setSubmitted(true)
    } catch {
      // Still show success UX
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const contacts = [
    { icon: Mail, label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com', color: 'text-red-500' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', href: 'https://linkedin.com', color: 'text-blue-500' },
    { icon: Github, label: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com', color: 'text-gray-500 dark:text-gray-300' },
    { icon: MapPin, label: 'Location', value: 'India (Open to Remote)', href: '#', color: 'text-emerald-500' },
    { icon: Phone, label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX', color: 'text-violet-500' },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 rounded-full gradient-bg-subtle text-primary text-sm font-semibold mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Open to internships, entry-level positions, and freelance data analytics projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className={inView ? 'animate-fade-in-left delay-200' : 'opacity-0'}>
            <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you have a data challenge to solve, a project opportunity, or just want
              to connect — I'd love to hear from you! I typically respond within 24 hours.
            </p>

            <div className="space-y-4 mb-8">
              {contacts.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/30 transition-all group"
                >
                  <div className={`w-10 h-10 rounded-lg ${color.replace('text-', 'bg-').replace('500', '500/15')} flex items-center justify-center`}>
                    <Icon size={18} className={color} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 p-4 rounded-xl gradient-bg-subtle border border-primary/20">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <div>
                <p className="text-sm font-semibold">Available for Opportunities</p>
                <p className="text-xs text-muted-foreground">Actively looking for data analyst roles</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className={inView ? 'animate-fade-in-right delay-300' : 'opacity-0'}>
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 size={56} className="text-green-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setFields({ name: '', email: '', subject: '', message: '' }) }}
                    className="mt-6 px-6 py-2 rounded-full gradient-bg text-white text-sm font-medium hover:opacity-90"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={fields.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={fields.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={fields.subject}
                      onChange={handleChange}
                      placeholder="e.g. Internship Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      required
                      value={fields.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about the opportunity or project..."
                      className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl gradient-bg text-white font-semibold hover:opacity-90 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/30"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
