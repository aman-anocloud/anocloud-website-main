'use client'


import Link from 'next/link'
import { CheckCircle, Users, Zap, Globe, Award } from 'lucide-react'
import SlideInSection from '@/components/SlideInSection'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

const MotionDiv = motion.div

export default function PartnershipApplyPage() {
  // Contact form uses ContactForm component below

  const partnershipTypes = [
    {
      id: "01",
      title: "Reseller / Channel Partner",
      desc: "Expand your portfolio by reselling our cutting-edge AI, cloud, and security solutions to drive revenue growth.",
      icon: Users,
      color: "text-blue-500",
    },
    {
      id: "02",
      title: "Technology Integration",
      desc: "Seamlessly integrate our advanced technologies into your products for enhanced innovation and customer value.",
      icon: Zap,
      color: "text-green-500",
    },
    {
      id: "03",
      title: "Strategic Alliance",
      desc: "Forge long-term collaborations to co-develop and co-market transformative IT services that shape the future.",
      icon: Globe,
      color: "text-purple-500",
    },
    {
      id: "04",
      title: "Other Opportunities",
      desc: "Discover custom partnership models tailored to your unique business goals and ecosystem needs.",
      icon: Award,
      color: "text-orange-500",
    },
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: "Proven Expertise",
      desc: "Leverage our 30+ years of IT innovation to deliver exceptional solutions to your clients.",
    },
    {
      icon: CheckCircle,
      title: "Revenue Acceleration",
      desc: "Unlock new growth channels through co-selling, marketing support, and performance incentives.",
    },
    {
      icon: CheckCircle,
      title: "Global Reach",
      desc: "Tap into our extensive network of 20+ solution partners and 200+ subject matter experts.",
    },
    {
      icon: CheckCircle,
      title: "Dedicated Support",
      desc: "Receive personalized enablement, training, and ongoing collaboration from our partner success team.",
    },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <SlideInSection>
        <section className="relative py-20" style={{ backgroundColor: '#eef3f2ff' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#005241]/10 to-[#003b2d]/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
            {/* Left Content */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-left text-[#003b2d]">
                Partner with <span className="text-[#005241]">AnoCloud</span>
              </h1>
              <p className="text-xl text-gray-700">
                Join forces with a leader in AI, security, and cloud innovation. Together, we&apos;ll empower businesses worldwide with resilient, intelligent solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#apply" className="bg-[#005241] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#003b2d] transition shadow-lg">
                  Become a Partner
                </Link>
                <Link href="/services" className="border-2 border-[#005241] text-[#005241] px-8 py-4 rounded-full font-semibold hover:bg-[#005241] hover:text-white transition shadow-lg">
                  Explore Solutions
                </Link>
              </div>
            </MotionDiv>

            {/* Right Image */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center items-center"
            >
              <div className="relative w-full max-w-md">
                <Image
                  src="/partnership1.png" // Replace with a professional partnership illustration (e.g., handshake, network, or abstract tech collab)
                  alt="Strategic Partnership Illustration"
                  width={500}
                  height={400}
                  className="object-contain rounded-2xl shadow-2xl"
                />
              </div>
            </MotionDiv>
          </div>
        </section>
      </SlideInSection>

      {/* Trusted Partners Section */}
      <SlideInSection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-[#003b2d]">Our Ecosystem of Partners</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We&apos;re proud to collaborate with industry leaders, driving innovation and delivering unmatched value to our shared customers.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
                {[
                  { name: 'Google Cloud', src: '/partners/google.webp' },
                  { name: 'Microsoft AI Cloud', src: '/partners/azure.jpg' },
                  { name: 'Amazon Web Services', src: '/partners/aws.png' },
                  { name: 'Databricks', src: '/partners/databricks.png' },
                  { name: 'Adobe', src: '/partners/adobe.png' },
                  { name: 'Aquila', src: '/partners/aquila.webp' },
                  { name: 'E2E Cloud', src: '/partners/e2ecloud.png' },
                  { name: 'Redington', src: '/partners/redington.png' },
                  { name: 'Ivalue', src: '/partners/ivalue.avif' },
                  { name: 'Google For Education', src: '/partners/googleforeducation.png' },
                ].map((partner, index) => (
                  <MotionDiv
                    key={partner.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 bg-white rounded-xl shadow-md w-full h-[120px] flex items-center justify-center hover:shadow-xl transition-shadow"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      width={160}
                      height={64}
                      className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
          </div>
        </section>
      </SlideInSection>

      {/* Partnership Types Section */}
      <SlideInSection>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-500 uppercase tracking-wide">Partnership Opportunities</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Tailored Paths to Success
                </h2>
              </div>
              <Link href="#apply">
                <button className="bg-[#005241] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#003b2d] transition shadow-lg">
                  Apply Today
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <MotionDiv
                  key={type.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#005241] hover:shadow-xl transition-all duration-300 h-full"
                >
                  <type.icon className={`w-12 h-12 mb-4 ${type.color} group-hover:scale-110 transition-transform`} />
                  <div className="text-sm font-semibold text-gray-500 mb-2">{type.id}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#005241] transition-colors">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.desc}</p>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </section>
      </SlideInSection>

      {/* Benefits Section */}
      <SlideInSection>
        <section className="py-20 bg-[#f8f9fa]">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-[#003b2d]">Why Partner with Us?</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Unlock unparalleled opportunities to grow your business through strategic collaboration and shared success.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <benefit.icon className="w-10 h-10 text-[#005241] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
          </div>
        </section>
      </SlideInSection>

      {/* Application Form Section */}
      <SlideInSection>
        <section className="py-20 bg-white" id="apply">
          <div className="max-w-7xl mx-auto px-6">
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-16 items-start"
            >
              {/* Left: Partnership Form */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Collaborate?</h2>
                  <p className="text-gray-600">
                    Submit your application today. Our partnership team will review and connect within 48 hours to explore synergies.
                  </p>
                </div>

                <ContactForm
                  title="Partnership Application"
                  defaultService="Partnership Application"
                  additionalFields={[
                    { name: 'company', label: 'Company name *', required: true },
                    { name: 'contactName', label: 'Contact person *', required: true },
                    { name: 'phone', label: 'Phone' },
                    { name: 'website', label: 'Company website (optional)' },
                    { name: 'type', label: 'Partnership Type *', type: 'select', options: ['Reseller / Channel Partner', 'Technology Integration', 'Strategic Alliance', 'Other'], required: true },
                    { name: 'message', label: 'Tell us about your company and how we can collaborate *', type: 'textarea', required: true },
                  ]}
                  extraActions={(f) => (
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full">
                      <button
                        type="button"
                        onClick={() => {
                          const summary = `Company: ${f.company || ''}\nContact: ${f.contactName || ''}\nEmail: ${f.email || ''}\nPhone: ${f.phone || ''}\nWebsite: ${f.website || ''}\nType: ${f.type || ''}\nMessage:\n${f.message || ''}`
                          navigator.clipboard.writeText(summary).then(() => alert('Copied to clipboard!'))
                        }}
                        className="border-2 border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition flex-1"
                      >
                        Copy Details
                      </button>
                    </div>
                  )}
                />
              </div>

              {/* Right: Quote & Benefits */}
              <div className="space-y-8 md:pl-8">
                <MotionDiv
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-[#005241] to-[#003b2d] text-white p-8 rounded-2xl"
                >
                  <blockquote className="text-lg italic mb-4">
                    &quot;Partnering with AnoCloud has revolutionized our service offerings, enabling us to deliver AI-powered solutions at scale.&quot;
                  </blockquote>
                  <div className="text-right">
                    <p className="font-semibold">Industry Leader</p>
                    <p className="text-sm opacity-90">Strategic Partner</p>
                  </div>
                </MotionDiv>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Join 50+ Thriving Partners</h3>
                  <p className="text-gray-600">Experience accelerated growth, exclusive resources, and a supportive community dedicated to your success.</p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </section>
      </SlideInSection>
    </main>
  )
}