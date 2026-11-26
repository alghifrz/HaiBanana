import { getJsonLd } from "@/lib/json-ld";

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getJsonLd()).replace(/</g, "\\u003c"),
      }}
    />
  );
}
