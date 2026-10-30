/**
 * Renders a JSON-LD <script> tag safely. `JSON.stringify` alone does not
 * escape `<`, which can prematurely close the `<script>` tag and enable
 * XSS if any field ever contains user-influenced text — the official
 * Next.js JSON-LD guide recommends escaping `<` to its unicode equivalent
 * before injecting. Centralizing that here means every structured-data
 * block on the site (Organization, Service, Article, FAQ, Breadcrumb,
 * ItemList, etc.) gets the same safe treatment for free.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
