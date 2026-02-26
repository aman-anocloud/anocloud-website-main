"use client"

import React, { useState } from 'react'

type Props = {
  defaultService?: string
  initialService?: string   // alias used in blog pages
  title?: string
  formType?: 'contact' | 'guest-post'
  additionalFields?: Array<{
    name: string
    label?: string
    type?: 'text' | 'select' | 'textarea' | 'email' | 'tel'
    options?: string[]
    required?: boolean
  }>
  extraActions?: (form: Record<string, string>) => React.ReactNode
}

export default function ContactForm({
  defaultService,
  initialService,
  title = "Let's get in touch",
  formType = 'contact',
  additionalFields = [],
  extraActions
}: Props) {
  const resolvedService = defaultService ?? initialService ?? ''
  const initial: Record<string, string> = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: resolvedService,
    message: '',
  }

  additionalFields.forEach(f => {
    if (!(f.name in initial)) initial[f.name] = ''
  })

  const [form, setForm] = useState<Record<string, string>>(initial)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    const { name, value } = target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!form.email || !form.firstName) {
      setError('Please provide your name and email')
      return
    }

    setLoading(true)

    try {
      const endpoint = formType === 'guest-post' ? '/api/guest-post' : '/api/contact'

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to send submission. Please try again.')
        return
      }

      setSent(true)
      // Reset form after 2 seconds
      setTimeout(() => {
        const resetObj: Record<string, string> = {}
        Object.keys(form).forEach(k => { resetObj[k] = k === 'service' ? resolvedService : '' })
        setForm(resetObj)
        setSent(false)
      }, 2000)
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">{title}</h2>
      {error && <p className="text-sm text-red-600 mb-4 p-3 bg-red-50 rounded-lg">{error}</p>}
      {sent ? (
        <div className="p-4 bg-green-50 rounded-lg text-green-800 border border-green-200">
          <p className="font-semibold">✓ Success!</p>
          <p className="text-sm">Your submission has been sent successfully. We'll get back to you soon!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="firstName" value={form.firstName} onChange={handleChange} type="text" placeholder="First name *" required className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-[#005241] focus:border-transparent transition" />
            <input name="lastName" value={form.lastName} onChange={handleChange} type="text" placeholder="Last name" className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-[#005241] focus:border-transparent transition" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email *" required className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-[#005241] focus:border-transparent transition" />
            <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Phone number" className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-[#005241] focus:border-transparent transition" />
          </div>

          <select name="service" value={form.service} onChange={handleChange} className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-[#005241] focus:border-transparent transition">
            <option value="">Select your service</option>
            <option>Prototype & MVP Development</option>
            <option>Software & Application Development</option>
            <option>Cyber Security & Risk Management</option>
            <option>Data Analytics & Data Engineering</option>
            <option>AI Development & Integration</option>
            <option>Cloud & Infrastructure Modernization</option>
          </select>

          {/* Render any additional custom fields passed by pages */}
          {additionalFields.map((f) => (
            <div key={f.name}>
              {f.type === 'textarea' ? (
                <textarea name={f.name} value={form[f.name]} onChange={handleChange} placeholder={f.label || f.name} rows={4} required={f.required} className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-[#005241] focus:border-transparent transition" />
              ) : f.type === 'select' ? (
                <select name={f.name} value={form[f.name]} onChange={handleChange} required={f.required} className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-[#005241] focus:border-transparent transition">
                  <option value="">{f.label ? `Select ${f.label}` : 'Select'}</option>
                  {(f.options || []).map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              ) : (
                <input name={f.name} value={form[f.name]} onChange={handleChange} type={f.type || 'text'} placeholder={f.label || f.name} required={f.required} className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-[#005241] focus:border-transparent transition" />
              )}
            </div>
          ))}

          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message or Additional Details" rows={5} className="border border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-[#005241] focus:border-transparent transition" />

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-green-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-green-dark transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
            <button
              type="button"
              onClick={() => {
                const resetObj: Record<string, string> = {}
                Object.keys(form).forEach(k => { resetObj[k] = k === 'service' ? resolvedService : '' })
                setForm(resetObj)
                setError('')
              }}
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
              Reset
            </button>
            {extraActions && extraActions(form)}
          </div>
        </form>
      )}
    </div>
  )
}
