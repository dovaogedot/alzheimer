import { data } from '@data'
import favicon from '@public/favicon.svg'

export function Head() {
  const description = data.about.split('\n')[0]
  const url = "https://dovaogedot.online"
  const title = `${data.name} - ${data.title}`
  const name = data.name
  const jobTitle = data.title
  const image = `${url}/preview.png`
  const links = data.contacts.map(contact => `${contact.proto}${contact.urn}`)

  return <>
    {/* HTML */}
    <html lang="en" className="bg-zinc-950" />

    {/* Basic SEO */}
    <title>dovaogedot</title>
    <meta name="description" content={description} />
    <meta name="author" content={name} />
    <meta name="robots" content="index,follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="canonical" href={url} />

    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={`${name}'s portfolio`} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* Icons & Images */}
    <link rel="icon" href={favicon} type="image/svg+xml" />
    <meta property="og:image" content="/preview.png" />

    {/* Theme */}
    <meta name="theme-color" content="#09090b" />

    {/* JSON-LD */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name,
        alternateName: "dovaogedot",
        description,
        sameAs: links,
        url,
        jobTitle,
        image,
      })}
    </script>
  </>
}
