import { useEffect } from 'react'
import { hospitalInfo } from '../data/hospitalInfo'

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    schemaType?: 'Hospital' | 'MedicalBusiness' | 'LocalBusiness';
}

export default function SEO({ title, description, keywords, schemaType = 'Hospital' }: SEOProps) {
    useEffect(() => {
        // Update document title
        document.title = `${title} | KD Hospital - Premium Healthcare`;

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        // Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', keywords || "hospital, healthcare, medical services, specialists, KD Hospital");

        // Inject JSON-LD Schema
        const schemaId = 'seo-schema';
        let schemaScript = document.getElementById(schemaId) as HTMLScriptElement;

        if (!schemaScript) {
            schemaScript = document.createElement('script');
            schemaScript.id = schemaId;
            schemaScript.type = 'application/ld+json';
            document.head.appendChild(schemaScript);
        }

        const businessSchema = {
            "@context": "https://schema.org",
            "@type": schemaType,
            "name": "KD Hospital",
            "image": "https://images.unsplash.com/photo-1587350859728-abae934f039d?q=80&w=1200&auto=format&fit=crop",
            "@id": "",
            "url": window.location.origin,
            "telephone": hospitalInfo.phone,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "S.G. Highway",
                "addressLocality": "Ahmedabad",
                "postalCode": "380060",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 23.0707,
                "longitude": 72.5181
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
            },
            "sameAs": [
                "https://facebook.com/kdhospital",
                "https://twitter.com/kdhospital",
                "https://instagram.com/kdhospital"
            ]
        };

        schemaScript.text = JSON.stringify(businessSchema);

        return () => {
            // Cleanup if needed, though usually meta tags stay until next page load
        };
    }, [title, description, keywords, schemaType]);

    return null;
}
