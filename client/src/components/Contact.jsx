import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters'
    return e
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('loading')
    try {
      await axios.post('/api/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-indigo-400 font-mono text-sm mb-3 tracking-widest uppercase">Get In Touch</p>
          <h2 className="section-title text-white">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-4">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info cards */}
          <div className="md:col-span-2 space-y-4 reveal">
            {[
              { icon: '📧', label: 'Email', value: 'shailesh972185@gmail.com', href: 'mailto:hello@yourname.dev' },
              { icon: '💼', label: 'LinkedIn', value: '/in/yourname', href: 'https://linkedin.com' },
              { icon: '🐙', label: 'GitHub', value: '@shailesh9721', href: 'https://github.com' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass glow-border rounded-2xl p-5 flex items-center gap-4 hover:border-indigo-500/40 transition-all duration-300 group block"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono mb-0.5">{item.label}</p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Availability card */}
            <div className="card-glass rounded-2xl p-5 border border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-semibold">Currently Available</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Open to freelance projects, contract work, and full-time opportunities.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 reveal">
            <form onSubmit={handleSubmit} className="card-glass glow-border rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField label="er.shailesh" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} error={errors.name} />
                <InputField label="Email Address" name="email" type="email" placeholder="john@email.com" value={form.email} onChange={handleChange} error={errors.email} />
              </div>
              <InputField label="Subject" name="subject" placeholder="Project Inquiry" value={form.subject} onChange={handleChange} error={errors.subject} />
              <div>
                <label className="block text-sm text-slate-400 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all resize-none ${
                    errors.message ? 'border-red-500/50' : 'border-white/10'
                  }`}
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-emerald-400 text-sm text-center">
                  ✓ Message sent! I'll reply within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="rounded-xl bg-red-500/10 border border-red-500/30 p-4 text-red-400 text-sm text-center">
                  ✗ Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-primary text-white font-semibold justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function InputField({ label, name, type = 'text', placeholder, value, onChange, error }) {
  return (
    <div>
      <label className="block text-sm text-slate-400 font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all ${
          error ? 'border-red-500/50' : 'border-white/10'
        }`}
      />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  )
}
