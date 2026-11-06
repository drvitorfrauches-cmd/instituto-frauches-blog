import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, H3, UL, LI, Strong, Callout, Cta } from "@/components/article-ui";
import { AUTHOR_EN, WHATSAPP_URL_EN } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "hair-transplant-recovery",
  title: "Hair transplant recovery: the first two weeks, day by day",
  description:
    "Hair transplant recovery day by day: swelling, scabs, washing, sleep, exercise, sun and flying home, plus the warning signs that need medical attention.",
  publishedAt: "2026-11-07",
  readingTime: 9,
  category: "Hair transplant",
  author: AUTHOR_EN,
  translationOf: "recuperacao-transplante-capilar",
  coverImage: {
    src: "/blog/recuperacao-transplante-capilar/cover.jpg",
    alt: "White pillow, folded towels and a small marked calendar on a bedside table, representing the care schedule during hair transplant recovery",
  },
};

export default function Article() {
  return (
    <>
      <H2 id="short-answer">{"How long does hair transplant recovery take?"}</H2>

      <P>{"Visible "}<Strong>{"hair transplant recovery"}</Strong>{" is concentrated in the first two weeks. In the first days there is redness, scabbing, tenderness and possible swelling. Scabs usually start to come off with the washing routine you are taught and disappear progressively. Returning to remote or low-visibility work can happen within a few days, but it depends on shaving, swelling, social exposure and the kind of work you do."}</P>

      <P>{"The grafts become more secure as the days go by, but final growth takes months. Skin healing and hair growth are two different processes. Following the team's instructions, avoiding trauma and recognizing warning signs matter more than any shortcut."}</P>

      <Cta href={WHATSAPP_URL_EN} label="Book an evaluation">{"Want to know what your recovery schedule would look like, including your trip home? An individual evaluation defines it."}</Cta>

      <H2 id="surgery-day">{"What happens on the day of surgery?"}</H2>

      <P>{"After implantation, the recipient area shows small dots and there may be slight bleeding. With FUE, the donor area has many tiny punctures. A dressing is applied according to protocol and you receive instructions on medication, sleep, washing and how to reach the team."}</P>

      <P>{"If you had sedation, you are discharged only after an adequate recovery. You should not drive, drink alcohol, make important decisions or do anything risky for the rest of that day. Before leaving, confirm the phone number for any concern and the date of your first check-up."}</P>

      <H2 id="first-24-hours">{"What should I do in the first 24 hours?"}</H2>

      <P>{"The priority is to avoid contact and friction on the recipient area. Bending your head through doorways, getting into a car and pulling on tight clothing are common sources of trauma. Prefer shirts with buttons or a wide neck."}</P>

      <P>{"Slight oozing from the donor area can happen. Active bleeding that does not stop with the instructions you were given should be reported. Do not touch the grafts and do not try to clean scabs with your nails. Sleep with your head elevated as instructed: elevation can reduce swelling, but it needs to be comfortable and stable."}</P>

      <H2 id="days-2-to-7">{"What is normal from day 2 to day 7?"}</H2>

      <P>{"Redness, scabs and a feeling of tightness are expected. Swelling may start on the forehead and move down to the eyelids by gravity. It can look alarming, but it is usually temporary and tends to improve after the first few days."}</P>

      <P>{"Washing usually starts in this period, or earlier, depending on the clinic. It must be gentle, with the product and technique you are taught. Correct washing does not pull out grafts and helps control scabbing. Avoid effort, intense heat, alcohol and sun exposure, and keep up hydration and regular meals."}</P>

      <P>{"Itching may increase as the scabs dry, but you should not scratch with your nails. Some patients return to work in this window. If the head was fully shaved, signs of surgery may be visible. With non-shave FUE, the existing hair hides part of it, although scabs and redness may still show."}</P>

      <H2 id="days-8-to-14">{"What happens from day 8 to day 14?"}</H2>

      <P>{"Most scabs should come off gradually with the technique you were shown. Keeping them for too long can increase discomfort and the risk of folliculitis, and removing them aggressively is also wrong. The recipient area may look pink, and how long the redness lasts varies with skin type, sun exposure and individual tendency. By the end of two weeks, the surgery is usually much less noticeable. That does not mean the hair has started to grow."}</P>

      <H2 id="flying-home">{"When can I fly home after a hair transplant?"}</H2>

      <P>{"At Instituto Frauches, we ask international patients to stay in Vitória for about five days after surgery. That time covers the most delicate phase of swelling, the first washes with the team and the in-person check-ups before the flight. The exact return date is confirmed by the medical team according to how you are healing, so it should not be booked without that conversation."}</P>

      <P>{"On the flight, protect the recipient area from headrests and overhead bins, avoid tight caps, and keep the instructions and medication in your hand luggage. After you are home, follow-up continues remotely with the team on WhatsApp, in English."}</P>

      <H2 id="washing">{"How should I wash my hair after the transplant?"}</H2>

      <P>{"Protocols vary. In general, they involve gently applying foam or shampoo, water without strong direct pressure and progressively firmer movements. In the first days the recipient area is not rubbed. Later, the team may guide a delicate massage to remove scabs. Very hot water, a strong jet and fingernails should be avoided, and a hot hairdryer is not recommended at first."}</P>

      <H2 id="activities">{"When can I wear a cap, exercise or go in the sun?"}</H2>

      <UL>
        <LI><Strong>{"Cap:"}</Strong>{" a tight cap that touches the grafts can cause trauma. When allowed, it should be loose, clean and put on without dragging. Helmets need more caution because of pressure and friction."}</LI>
        <LI><Strong>{"Exercise:"}</Strong>{" light activity usually returns before intense training. Heavy weights, running, martial arts, swimming and contact sports each have different intervals. Our article on "}<Link href="/blog/nadar-apos-transplante-capilar" className="underline">{"swimming after a transplant"}</Link>{" (in Portuguese) explains the water restrictions."}</LI>
        <LI><Strong>{"Sun:"}</Strong>{" the operated skin must be protected, because sun exposure can prolong redness and affect pigmentation. Planning a beach holiday right after surgery is not a good idea."}</LI>
        <LI><Strong>{"Haircut and dye:"}</Strong>{" cutting the non-operated area may be allowed earlier. Clippers near the grafts, dye, bleach and straightening need more time and the team's approval."}</LI>
      </UL>

      <H2 id="after-two-weeks">{"What happens after the first two weeks?"}</H2>

      <P>{"The transplanted hairs may shed between the first weeks and the following months. Losing the hair shaft is expected: the follicle stays and enters a new cycle. Your appearance may return close to how it was before surgery, a phase often called the 'ugly duckling' stage. It is emotionally hard, but it does not mean failure. Growth usually starts discreetly from the third or fourth month, with wide variation. The "}<Link href="/en/blog/hair-transplant-results-timeline" className="underline">{"results timeline"}</Link>{" covers the following months."}</P>

      <H2 id="warning-signs">{"Which warning signs need medical attention?"}</H2>

      <UL>
        <LI>{"Persistent bleeding."}</LI>
        <LI>{"Strong or increasing pain."}</LI>
        <LI>{"Fever, or discharge with an odor."}</LI>
        <LI>{"Redness that keeps spreading."}</LI>
        <LI>{"Shortness of breath or an allergic reaction."}</LI>
        <LI>{"Loss of vision or eye pain."}</LI>
        <LI>{"Significant trauma to the head, or an area that looks unusually dark or pale."}</LI>
      </UL>

      <P>{"Do not wait for the scheduled check-up when something is out of the ordinary. Contact the team straight away."}</P>

      <H2 id="faq">{"Frequently asked questions"}</H2>

      <H3>{"How many days of rest do I need?"}</H3>
      <P>{"It depends on your work and on how visible you are willing to be. Light activity can return early, but social appearance usually improves within 7 to 14 days."}</P>

      <H3>{"Do scabs fall off on their own?"}</H3>
      <P>{"Part of them come off with progressive washing. The team tells you when to start the movements to remove them."}</P>

      <H3>{"Does the transplanted hair fall out?"}</H3>
      <P>{"The hair shaft usually sheds in the first weeks. The follicle remains and starts producing hair again."}</P>

      <H3>{"Can I work the day after surgery?"}</H3>
      <P>{"Physically it may be possible for remote work, but there are visible signs and the effects of sedation. Plan for at least a few days."}</P>

      <H3>{"Is it normal for my forehead to swell?"}</H3>
      <P>{"Yes, mild to moderate swelling is common. Intense swelling, or swelling with signs of allergy, needs assessment."}</P>

      <H3>{"How long does the redness last?"}</H3>
      <P>{"From days to weeks, depending on your skin and the technique. It may last longer in fair skin."}</P>

      <Callout>{"This content is educational and does not replace a medical consultation, diagnosis or individual prescription. Recovery instructions, including when you can fly home, are defined by the medical team according to your case."}</Callout>

      <H2 id="references">{"References"}</H2>

      <UL>
        <LI><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8611706/" className="underline" target="_blank" rel="noopener noreferrer">{"Hair Transplant Practice Guidelines."}</a></LI>
        <LI><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8719970/" className="underline" target="_blank" rel="noopener noreferrer">{"Complications in hair transplantation."}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/39883276/" className="underline" target="_blank" rel="noopener noreferrer">{"State of the art of hair transplantation."}</a></LI>
        <LI><a href="https://ishrs.org/patients/" className="underline" target="_blank" rel="noopener noreferrer">{"International Society of Hair Restoration Surgery. Patient information."}</a></LI>
      </UL>

      <P>{"If you are planning to travel for surgery and want to understand how recovery fits your trip, "}<a href={WHATSAPP_URL_EN} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"message us on WhatsApp"}</Strong></a>{"."}</P>
    </>
  );
}
