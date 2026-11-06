import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllEnPosts } from "@/lib/blog/registry";
import { AUTHOR_EN, ORGANIZATION_JSON_LD, SITE_NAME, SITE_URL, WHATSAPP_URL_EN } from "@/lib/blog/site";

const TITLE = "Hair Transplant in Brazil for International Patients | Instituto Frauches";
const DESCRIPTION =
  "FUE hair transplant in Vitória, Brazil, with Dr. Vitor Frauches. English-speaking team, concierge for hotel and transfers, and about five days of in-person follow-up.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: { "pt-BR": `${SITE_URL}/blog`, en: `${SITE_URL}/en`, "x-default": `${SITE_URL}/en` },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/en`,
    siteName: SITE_NAME,
  },
};

const STEPS = [
  {
    title: "Message us on WhatsApp",
    text: "Our team answers in English. Send photos of your scalp for an online pre-assessment and ask anything about the procedure.",
  },
  {
    title: "Plan the trip with our concierge",
    text: "We help organize your hotel, airport and clinic transfers, and the dates of your stay in Vitória.",
  },
  {
    title: "In-person evaluation in Vitória",
    text: "Dr. Vitor Frauches examines your scalp, measures the donor area with trichoscopy and confirms the surgical plan with you.",
  },
  {
    title: "Surgery day",
    text: "FUE hair transplant in our own surgical center, under intravenous sedation and local anesthesia, with an anesthesiology team.",
  },
  {
    title: "About five days of follow-up",
    text: "We ask patients to stay in Vitória for about five days after surgery, so the first washes and check-ups happen in person.",
  },
  {
    title: "Back home, still followed",
    text: "After your flight, follow-up continues remotely with the team on WhatsApp, in English, through the months of growth.",
  },
];

const REASONS = [
  {
    title: "The surgeon operates from start to finish",
    text: "Each case is planned individually and the surgery is performed by the physician, not delegated to a technician team.",
  },
  {
    title: "Frauches Precision FUE® Protocol",
    text: "A method of our own for mapping hair loss, designing the hairline and preserving the donor area for the long term.",
  },
  {
    title: "Precision technology",
    text: "Mamba® System and UGraft Zeus® System for extraction, IMPLANTER PEN® for implantation, and Zeiss microscopy.",
  },
  {
    title: "Experience and teaching",
    text: "More than 1,200 surgeries performed. Dr. Vitor is a postgraduate professor of hair transplantation and a member of the ISHRS.",
  },
];

const FAQS = [
  {
    question: "How long do I need to stay in Brazil?",
    answer:
      "We ask patients to stay in Vitória for about five days after surgery for in-person follow-up before flying home. The full itinerary, including the days before surgery, is planned with our team.",
  },
  {
    question: "Does your team speak English?",
    answer:
      "Yes. Our team answers in English on WhatsApp, before the trip, during your stay and during remote follow-up after you return home.",
  },
  {
    question: "What does the concierge service cover?",
    answer:
      "The concierge helps organize your hotel, transfers and other logistics of your stay. Ask the team which services are part of your proposal.",
  },
  {
    question: "Can I have an assessment before I travel?",
    answer:
      "Yes. You can send photos for an online pre-assessment. The precise measurement of the donor area and the final surgical plan are confirmed at the in-person evaluation in Vitória.",
  },
  {
    question: "Where is Vitória?",
    answer:
      "Vitória is the capital of the state of Espírito Santo, on the coast of southeastern Brazil. It has its own airport, with domestic connections from the main Brazilian hubs, such as São Paulo and Rio de Janeiro.",
  },
  {
    question: "Is the result guaranteed?",
    answer:
      "No surgeon can ethically guarantee a result. The outcome depends on your donor area, your pattern of hair loss and your individual healing. What we can do is plan carefully and explain the limits of your case before surgery.",
  },
];

export default function InternationalPatientsPage() {
  const posts = getAllEnPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: TITLE,
    description: DESCRIPTION,
    inLanguage: "en",
    url: `${SITE_URL}/en`,
    about: { "@type": "MedicalProcedure", name: "FUE hair transplant" },
    author: { "@type": "Person", name: AUTHOR_EN.name, url: `${SITE_URL}/en/about` },
    publisher: ORGANIZATION_JSON_LD,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="mb-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="font-data mb-3 block text-xs tracking-[0.14em] text-pine uppercase">
            International patients · Vitória, Brazil
          </span>
          <h1 className="font-display mb-4 text-4xl font-medium text-balance text-ink sm:text-5xl">
            Hair transplant in Brazil, planned around your trip
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-stone">
            FUE hair transplant with{" "}
            <Link href="/en/about" className="underline">
              Dr. Vitor Frauches
            </Link>
            , an English-speaking team and concierge support, from the first
            message to your follow-up back home.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL_EN}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink px-5 py-3 text-sm font-semibold text-paper hover:bg-pine"
            >
              Message us on WhatsApp
            </a>
            <Link href="/en/blog/what-is-fue-hair-transplant" className="text-sm text-ink underline hover:text-pine">
              Read the FUE guide
            </Link>
          </div>
        </div>
        <Image
          src="/blog/transplante-capilar-fue-o-que-e/cover.jpg"
          alt="FUE hair transplant surgical instruments arranged on a clinical tray"
          width={1200}
          height={675}
          priority
          className="aspect-video w-full border border-line object-cover"
        />
      </section>

      <section className="mb-16" aria-labelledby="how-it-works">
        <h2 id="how-it-works" className="font-display mb-8 text-3xl font-medium text-ink">
          How it works
        </h2>
        <ol className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="bg-paper-raised p-6">
              <span className="font-data mb-3 block text-xs text-pine">Step {i + 1}</span>
              <h3 className="font-display mb-2 text-lg font-medium text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-stone">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-16" aria-labelledby="why-us">
        <h2 id="why-us" className="font-display mb-8 text-3xl font-medium text-ink">
          Why Instituto Frauches
        </h2>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <li key={reason.title} className="border-t border-line pt-5">
              <h3 className="mb-2 font-semibold text-ink">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-stone">{reason.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16" aria-labelledby="guides">
        <h2 id="guides" className="font-display mb-8 text-3xl font-medium text-ink">
          Guides before your surgery
        </h2>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/en/blog/${post.slug}`} className="group block">
                {post.coverImage && (
                  <Image
                    src={post.coverImage.src}
                    alt={post.coverImage.alt}
                    width={600}
                    height={338}
                    className="mb-3 aspect-video w-full border border-line object-cover"
                  />
                )}
                <span className="font-data mb-1.5 block text-[0.68rem] text-stone">
                  {post.category} · {post.readingTime} min read
                </span>
                <h3 className="font-display mb-1.5 text-lg leading-snug font-medium text-ink group-hover:text-pine">
                  {post.title}
                </h3>
                <p className="line-clamp-2 text-sm text-stone">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16 max-w-2xl" aria-labelledby="faq">
        <h2 id="faq" className="font-display mb-6 text-3xl font-medium text-ink">
          Frequently asked questions
        </h2>
        {FAQS.map((faq) => (
          <div key={faq.question} className="border-t border-line py-5">
            <h3 className="mb-2 font-semibold text-ink">{faq.question}</h3>
            <p className="leading-relaxed text-stone">{faq.answer}</p>
          </div>
        ))}
      </section>

      <section className="border border-line bg-paper-raised p-8">
        <h2 className="font-display mb-3 text-2xl font-medium text-ink">Start with a message</h2>
        <p className="mb-6 max-w-xl text-stone">
          Tell us about your hair loss and when you would like to travel. Our
          team answers in English and explains the next steps.
        </p>
        <a
          href={WHATSAPP_URL_EN}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-ink px-5 py-3 text-sm font-semibold text-paper hover:bg-pine"
        >
          Message us on WhatsApp
        </a>
        <p className="mt-6 text-xs text-stone-soft">
          Educational content, not a substitute for medical advice. Results vary
          from patient to patient and depend on an individual evaluation.
        </p>
      </section>
    </main>
  );
}
