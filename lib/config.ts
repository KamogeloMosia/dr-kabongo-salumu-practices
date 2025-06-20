// Configuration for API keys and environment variables
export const config = {
  gemini: {
    apiKey: 'AIzaSyAYRnpZGaWCbl8WNPl-l2V60aBAnFf9r_0',
    endpoint: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
  },
  app: {
    name: "Dr. Kabongo Salumu Medical Practice",
    description: "Comprehensive medical care in Kempton Park",
  },
} as const;

// Validate required environment variables
export function validateConfig() {
  const missingVars: string[] = [];
  
  if (!config.gemini.apiKey) {
    missingVars.push("NEXT_PUBLIC_GEMINI_API_KEY");
  }
  
  if (missingVars.length > 0) {
    console.warn(`Missing environment variables: ${missingVars.join(", ")}`);
    return false;
  }
  
  return true;
} 