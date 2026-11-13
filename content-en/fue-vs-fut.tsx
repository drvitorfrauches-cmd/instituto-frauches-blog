import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, H3, UL, LI, Strong, Callout, Cta } from "@/components/article-ui";
import { AUTHOR_EN, WHATSAPP_URL_EN } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "fue-vs-fut",
  title: "FUE vs FUT: what is the difference and which to choose?",
  description:
    "FUE vs FUT hair transplant: how each technique works, the differences in scarring and recovery, and when each one is indicated, explained by Dr. Vitor Frauches.",
  publishedAt: "2026-11-07",
  updatedAt: "2026-11-12",
  readingTime: 7,
  category: "FUE technique",
  author: AUTHOR_EN,
  translationOf: "fue-ou-fut",
  coverImage: {
    src: "/blog/fue-ou-fut/cover.jpg",
    alt: "Two sets of surgical instruments side by side, representing the difference between FUE and FUT hair transplant techniques",
  },
};

export default function Article() {
  return (
    <>
      <P>{"Anyone researching a hair transplant soon runs into two acronyms: FUE and FUT. Both are hair transplant techniques, but they work in very different ways, and that difference affects scarring, recovery and even which cases each one suits best. Comparing "}<Strong>{"FUE vs FUT"}</Strong>{" is one of the first decisions to understand before surgery."}</P>

      <Cta href={WHATSAPP_URL_EN} label="Book an evaluation">{"Not sure which technique fits your case? That depends on your donor area and is defined in an evaluation."}</Cta>

      <H2 id="what-is-fut">{"What is the FUT technique?"}</H2>

      <P>{"In FUT (Follicular Unit Transplantation, also called the strip method), the surgeon removes a whole strip of scalp from the donor area with a scalpel and then closes that region with stitches. The follicles are separated from the strip one by one under a microscope and implanted into the area with hair loss. It is the older of the two techniques."}</P>

      <H2 id="what-is-fue">{"What is the FUE technique?"}</H2>

      <P>{"In FUE (Follicular Unit Extraction), each follicle is extracted individually and directly from the donor area, without removing a strip of skin and without a scalpel. That removes the need for stitches and for a linear scar. For the full explanation, read our guide on "}<Link href="/en/blog/what-is-fue-hair-transplant" className="underline">{"what an FUE hair transplant is"}</Link>{"."}</P>

      <H2 id="main-differences">{"What are the main differences between FUE and FUT?"}</H2>

      <UL>
        <LI><Strong>{"Scarring:"}</Strong>{" FUT leaves a linear scar in the donor area, usually hidden by the surrounding hair. FUE leaves tiny dot-like marks that are hard to see."}</LI>
        <LI><Strong>{"Recovery:"}</Strong>{" FUT has a more restrictive post-operative period because of the stitches and the healing incision. FUE recovery is usually faster and more comfortable."}</LI>
        <LI><Strong>{"Shaving:"}</Strong>{" FUE can be performed without shaving the whole head (non-shave FUE). FUT does not allow this in the same way, because removing the strip requires direct access to that region."}</LI>
        <LI><Strong>{"Grafts per session:"}</Strong>{" historically, FUT allowed a larger number of follicles to be harvested in a single session. As FUE extraction technology evolved, that gap narrowed considerably."}</LI>
      </UL>

      <P>{"Studies help put these differences in proportion. A 2024 scoping review of hair transplant complications identified hypertrophic scarring or keloid as the most common donor-site complication after FUT, in up to 15.1% of cases. With FUE the main risk is different: overharvesting can leave the donor area looking patchy, described in the literature as a “moth-eaten” appearance, and can deplete the follicle reserve in very large sessions. A 2025 meta-analysis of 45 studies considered hair transplantation, with either technique, generally safe."}</P>

      <H2 id="when-each-is-indicated">{"When is each technique indicated?"}</H2>

      <P>{"Today, FUE is the most widely used technique and the one that usually offers the best balance between a natural result, discreet scarring and a comfortable recovery. It is the technique used at Instituto Frauches, with the Frauches Precision FUE® Protocol. FUT can still be considered in specific situations, assessed case by case, but it is no longer the first choice in most high-standard hair restoration centers."}</P>

      <P>{"FUE is usually preferred for the vast majority of patients, especially those concerned about a visible scar, those who want to keep the option of wearing their hair very short in the future, and those who want a quicker return to their routine. FUT may still make sense in very specific cases, such as patients who need a very large number of follicles in a single session and whose donor area allows a strip to be removed safely. That decision should always be made individually by a surgeon experienced in both techniques."}</P>

      <H2 id="common-myth">{"Does FUT always give more density than FUE?"}</H2>

      <P>{"There is an idea that FUT always delivers more density per area than FUE, but that no longer reflects reality with modern extraction instruments. What really determines the final density is the planning and the experience of the team performing the surgery, not the name of the method. A well-planned FUE, with the right equipment and a trained team, can deliver a result comparable to FUT, with the advantage of fewer visible marks."}</P>

      <H2 id="limitations">{"What are the limitations of each technique?"}</H2>

      <P>{"Neither technique is free of limitations. FUE requires more surgical time and a team specifically trained in individual follicle extraction, so the quality of the result depends heavily on who performs it. FUT leaves a permanent scar that limits very short haircuts in the future. These limitations are part of the conversation in a medical evaluation."}</P>

      <H2 id="combining">{"Can the two techniques be combined?"}</H2>

      <P>{"In specific situations, mainly patients who had FUT in the past and need additional grafts, it is possible to add an FUE session using the remaining donor area more conservatively. This combination needs careful planning, because the region around the old FUT scar may have reduced density. The goal becomes making the most of the healthy donor area that is left without compromising it further. Our article on "}<Link href="/en/blog/hair-transplant-donor-area" className="underline">{"the donor area"}</Link>{" explains why that reserve matters."}</P>

      <H2 id="technology">{"How has technology changed the comparison?"}</H2>

      <P>{"A decade ago, FUT still had an advantage in extraction speed and in the number of follicles per session. With the evolution of motorized precision extraction devices, FUE has closed much of that gap while keeping its advantages of discreet scarring and a more comfortable recovery. That is why the 'which technique is better' discussion has changed: today it is less about the technical limits of FUE and more about the experience of the team performing it."}</P>

      <P>{"For international patients there is one more practical point. Because FUE has no stitches to remove, the first follow-up can be completed during a stay of about five days in Vitória, before the flight home."}</P>

      <H2 id="faq">{"Frequently asked questions"}</H2>

      <H3>{"Does short hair hide an FUT scar?"}</H3>
      <P>{"Not completely. The linear FUT scar becomes more visible the shorter the surrounding hair is. FUE, because it leaves scattered dot-like marks, usually stays more discreet even with a very short cut."}</P>

      <H3>{"Can an old FUT scar be corrected?"}</H3>
      <P>{"In some cases, yes, with specific repair techniques or by transplanting follicles into the scar line itself to camouflage the area. Whether it is feasible depends on the individual case."}</P>

      <H3>{"Can someone who had FUT have FUE later?"}</H3>
      <P>{"Yes, as long as the remaining donor area outside the FUT scar has enough density. It is a combination used in cases that need additional grafts."}</P>

      <H3>{"Which technique has the faster recovery?"}</H3>
      <P>{"FUE, in general, because there is no incision and no stitches in the donor area. FUT usually requires a more careful healing period because of the sutures."}</P>

      <H3>{"Does FUE leave any marks at all?"}</H3>
      <P>{"Yes. It leaves tiny dot-like marks in the donor area, one for each extracted follicle. They are usually much less noticeable than the linear FUT scar, but they are not invisible."}</P>

      <Callout>{"This content is educational and does not replace a medical consultation. The most suitable technique for each patient depends on the evaluation of the donor area, the pattern of hair loss and individual goals."}</Callout>

      <H2 id="references">{"References"}</H2>

      <UL>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/39179656/" className="underline" target="_blank" rel="noopener noreferrer">{"Liu RH et al. A Scoping Review on Complications in Modern Hair Transplantation: More than Just Splitting Hairs. Aesthetic Plast Surg, 2024."}</a> <a href="https://doi.org/10.1007/s00266-024-04316-3" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/36928376/" className="underline" target="_blank" rel="noopener noreferrer">{"Krishnamurthy R et al. A Novel Method of Intraoperative Calculation in Follicular Unit Transplantation: The Sequential Strip and FUE Method. Aesthetic Plast Surg, 2023."}</a> <a href="https://doi.org/10.1007/s00266-023-03300-7" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
        <LI><a href="https://pubmed.ncbi.nlm.nih.gov/40913181/" className="underline" target="_blank" rel="noopener noreferrer">{"Khatib M, Skorochod R, Wolf Y. Complications Following Hair Transplantation: A Systematic Literature Review and Meta-Analysis. Aesthetic Plast Surg, 2025."}</a> <a href="https://doi.org/10.1007/s00266-025-05125-y" className="underline" target="_blank" rel="noopener noreferrer">{"DOI"}</a></LI>
      </UL>

      <P>{"If you would like to understand which technique makes more sense for you, "}<a href={WHATSAPP_URL_EN} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"message us on WhatsApp"}</Strong></a>{". Our team answers in English."}</P>
    </>
  );
}
