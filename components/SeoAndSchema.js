import Head from "next/head"

export default function SeoAndSchema({ pageTitle }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "8Bitwise Digital Agency",
    "url": "https://8bitwise.com",
    "logo": "https://8bitwise.com/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/8bitwise",
      "https://twitter.com/8bitwise"
    ]
  }

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content="Digital agency providing AI integrations, subscription automations, and tailored strategies." />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Head>
  )
}
