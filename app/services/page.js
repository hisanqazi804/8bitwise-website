import SeoAndSchema from "@/components/SeoAndSchema"
import ServiceCard from "@/components/ServiceCard"

const SERVICES = [
  { title: "Web Development", desc: "Custom websites with modern stacks." },
  { title: "AI Integration", desc: "Automate workflows with AI-powered tools." },
  { title: "Digital Strategy", desc: "Tailored strategies to boost growth." },
  {
    title: "Subscription-Based Automations",
    desc: "From incoming call handling to auto-appointments, tailor-made workflows. Book by calling us directly.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <SeoAndSchema pageTitle="Services - 8Bitwise Digital Agency" />
      <div className="container mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Our Services
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </>
  )
}
