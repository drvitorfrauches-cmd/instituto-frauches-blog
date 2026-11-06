import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, H3, OL, UL, LI, Strong, Callout, Cta } from "@/components/article-ui";
import { AUTHOR_EN, WHATSAPP_URL_EN } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "what-is-fue-hair-transplant",
  title: "What is an FUE hair transplant? A complete guide",
  description:
    "What an FUE hair transplant is, how each step works, who it suits and what recovery looks like, explained by hair transplant surgeon Dr. Vitor Frauches.",
  publishedAt: "2026-11-07",
  readingTime: 7,
  category: "FUE technique",
  author: AUTHOR_EN,
  translationOf: "transplante-capilar-fue-o-que-e",
  coverImage: {
    src: "/blog/transplante-capilar-fue-o-que-e/cover.jpg",
    alt: "FUE hair transplant surgical instruments arranged on a clinical tray",
  },
};

export default function Article() {
  return (
    <>
      <P>{"If you have been reading about hair loss, you have almost certainly come across the letters FUE. An "}<Strong>{"FUE hair transplant"}</Strong>{" (Follicular Unit Extraction) is today the most widely used technique in hair restoration surgery, because it combines a natural-looking result with a more comfortable recovery than older methods. This guide explains what the technique is, how each step works and who it is suited to."}</P>

      <Cta href={WHATSAPP_URL_EN} label="Book an evaluation">{"Wondering whether FUE is right for you? The first step is an individual evaluation with Dr. Vitor Frauches. Our team answers in English."}</Cta>

      <H2 id="what-is-fue">{"What is the FUE technique?"}</H2>

      <P>{"In FUE, each hair follicle is removed one by one from the donor area, usually the back and sides of the head, where hair is genetically more resistant to loss. A precision micro-instrument is used for each extraction. The follicles are then implanted, also one at a time, into the areas with thinning or baldness."}</P>

      <P>{"The key difference from the older technique, FUT, is that FUE does not remove a strip of scalp with a scalpel. There is no linear incision and no stitches. What remains in the donor area are tiny dot-like marks that are very hard to see with the naked eye, and the post-operative period is usually easier. If you want the side-by-side comparison, read "}<Link href="/en/blog/fue-vs-fut" className="underline">{"FUE vs FUT: what is the difference"}</Link>{"."}</P>

      <H2 id="step-by-step">{"How does the surgery work, step by step?"}</H2>

      <P>{"At Instituto Frauches, every surgery follows the Frauches Precision FUE® Protocol, a method for planning and performing the procedure developed by Dr. Vitor Frauches and his brother, Dr. Bruno Frauches. In summary, the steps are:"}</P>

      <OL>
        <LI><Strong>{"Medical evaluation and hair loss mapping:"}</Strong>{" analysis of your pattern of hair loss, the quality of your donor area and your medical history."}</LI>
        <LI><Strong>{"Hairline and density planning:"}</Strong>{" defining where and how the hairs will be placed, following the natural angle and direction of growth."}</LI>
        <LI><Strong>{"Follicle extraction:"}</Strong>{" performed one by one from the donor area with precision devices (such as the Mamba® System and the UGraft Zeus® System) and a surgical microscope, to protect that region as much as possible."}</LI>
        <LI><Strong>{"Follicle implantation:"}</Strong>{" each follicular unit is placed according to the plan agreed before surgery, using instruments such as the IMPLANTER PEN®, which reduces the time the graft spends outside the body and the handling trauma."}</LI>
        <LI><Strong>{"Post-operative follow-up:"}</Strong>{" care instructions and check-ups to assess healing and the growth of the new hairs."}</LI>
      </OL>

      <P>{"Instituto Frauches reports a graft survival rate above 95%. This is an institutional figure, calculated across the surgeries already performed, and not an individual guarantee: each patient's result depends on the assessment of their specific case."}</P>

      <H2 id="does-it-hurt">{"Does FUE hurt, and what is recovery like?"}</H2>

      <P>{"The surgery is performed under intravenous sedation and local anesthesia, so you do not feel pain during the procedure. In the first days afterwards some scalp tenderness is common, and it is controlled with the medication prescribed by the medical team. Because there is no incision and no stitches, FUE recovery is usually faster and more comfortable than with older techniques."}</P>

      <P>{"Every body responds differently. The exact healing time and the pace at which new hair grows vary from patient to patient. Our article on "}<Link href="/en/blog/hair-transplant-recovery" className="underline">{"hair transplant recovery"}</Link>{" covers the first two weeks day by day, and the "}<Link href="/en/blog/hair-transplant-results-timeline" className="underline">{"results timeline"}</Link>{" explains what to expect month by month."}</P>

      <H2 id="donor-area">{"Why does the donor area matter so much?"}</H2>

      <P>{"One of the biggest worries for anyone researching a hair transplant is running out of donor hair. That is why planning the extraction is one of the most technical parts of the procedure. The number of follicles taken, and how they are spread across the donor area, are calculated to keep that region looking natural and to preserve the option of future sessions if they are ever needed. We explain this in detail in "}<Link href="/en/blog/hair-transplant-donor-area" className="underline">{"the donor area: why it is limited"}</Link>{"."}</P>

      <H2 id="who-is-it-for">{"Who is a good candidate for FUE?"}</H2>

      <P>{"FUE is suited to men and women with receding temples, frontal thinning or a thinning crown who have enough donor hair for the surgical plan. The exact indication, including the number of grafts and the design of the hairline, always depends on a medical evaluation, because each pattern of hair loss and each hair type (straight, wavy, curly or Afro-textured) calls for a different strategy."}</P>

      <UL>
        <LI>{"Men with receding temples or a crown that is thinning."}</LI>
        <LI>{"Women with frontal or diffuse loss of density."}</LI>
        <LI>{"Patients worried about an artificial look who want a natural hairline design."}</LI>
        <LI>{"Patients who have read about other techniques and have doubts about scarring or recovery time."}</LI>
      </UL>

      <H2 id="traveling-for-fue">{"Can I travel to Brazil for an FUE hair transplant?"}</H2>

      <P>{"Yes. Instituto Frauches, in Vitória, Brazil, welcomes international patients. Our team speaks English on WhatsApp and offers a full concierge service, including hotel and transfers. We usually ask patients to stay in Vitória for about five days after surgery, so the first check-ups happen in person before the flight home. Our page for "}<Link href="/en" className="underline">{"international patients"}</Link>{" explains how the trip is organized."}</P>

      <H2 id="faq">{"Frequently asked questions"}</H2>

      <H3>{"How many grafts are transplanted in an FUE surgery?"}</H3>
      <P>{"It depends on the area to be covered and on what your donor area can safely provide. There is no standard number. The total is calculated individually during the medical evaluation."}</P>

      <H3>{"How long does an FUE hair transplant take?"}</H3>
      <P>{"It usually takes several hours, because it involves hundreds or thousands of individual grafts. The exact duration depends on the number of follicles planned for your case."}</P>

      <H3>{"Do I need to shave my whole head for FUE?"}</H3>
      <P>{"Not necessarily. There is non-shave FUE, without shaving, and shave FUE, with the head fully shaved. The choice depends on the surgical plan and on what is discussed in the evaluation."}</P>

      <H3>{"Does an FUE hair transplant leave a visible scar?"}</H3>
      <P>{"It leaves tiny dot-like marks in the donor area, one for each extracted follicle. They are usually very discreet, unlike the linear scar left by FUT."}</P>

      <H3>{"Is there a minimum age for an FUE hair transplant?"}</H3>
      <P>{"There is no strict universal minimum age, but surgeons generally avoid operating on very young patients, especially before 25, because hair loss may still be progressing at that stage."}</P>

      <Callout>{"This content is educational and does not replace a medical consultation. The result of a hair transplant varies according to each patient's individual evaluation, pattern of hair loss and donor area quality."}</Callout>

      <P>{"If you would like to know whether you are a candidate for FUE and how your surgery would be planned, the first step is a medical evaluation with Dr. Vitor Frauches. "}<a href={WHATSAPP_URL_EN} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"Message us on WhatsApp"}</Strong></a>{"."}</P>
    </>
  );
}
