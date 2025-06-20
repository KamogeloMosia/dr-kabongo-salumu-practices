export default function StructuredData() {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://yourusername.github.io/dr-kabongo-salumu-practices'
    : 'https://www.drsalumu.xyz'

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. Kabongo Salumu General Practice",
    "description": "Comprehensive healthcare services with over 20 years of experience in Kempton Park",
    "url": baseUrl,
    "telephone": "+27 83 587 5879",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14 Central Avenue",
      "addressLocality": "Kempton Park",
      "postalCode": "1619",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -26.1087,
      "longitude": 28.2333
    },
    "openingHours": [
      "Mo-Fr 08:00-17:00",
      "Sa 08:00-13:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Medical Aid",
    "currenciesAccepted": "ZAR",
    "medicalSpecialty": "General Practice",
    "availableService": [
      {
        "@type": "MedicalService",
        "name": "Acute Care Management",
        "description": "Immediate treatment for sudden illnesses, infections, and injuries"
      },
      {
        "@type": "MedicalService",
        "name": "Chronic Disease Management",
        "description": "Ongoing care and monitoring for long-term conditions"
      },
      {
        "@type": "MedicalService",
        "name": "Preventive Care",
        "description": "Regular health screenings and preventive measures"
      },
      {
        "@type": "MedicalService",
        "name": "Family Medicine",
        "description": "Comprehensive healthcare for patients of all ages"
      },
      {
        "@type": "MedicalService",
        "name": "Emergency Care",
        "description": "Emergency medical services for urgent situations"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Dr. Kabongo Salumu",
      "jobTitle": "General Practitioner",
      "description": "Medical doctor with over 20 years of experience in general practice"
    },
    "areaServed": {
      "@type": "City",
      "name": "Kempton Park"
    },
    "sameAs": [
      baseUrl
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 