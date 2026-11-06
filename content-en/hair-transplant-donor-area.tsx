import type { PostMeta } from "@/lib/blog/types";
import Link from "next/link";
import { P, H2, H3, UL, LI, Strong, Callout, Cta } from "@/components/article-ui";
import { AUTHOR_EN, WHATSAPP_URL_EN } from "@/lib/blog/site";

export const meta: PostMeta = {
  slug: "hair-transplant-donor-area",
  title: "The hair transplant donor area: why it is limited",
  description:
    "Why the hair transplant donor area is limited, what overharvesting is, and how careful planning protects your result and any future surgery.",
  publishedAt: "2026-11-07",
  readingTime: 7,
  category: "Hair transplant",
  author: AUTHOR_EN,
  translationOf: "area-doadora-transplante-capilar",
  coverImage: {
    src: "/blog/area-doadora-transplante-capilar/cover.jpg",
    alt: "Close-up of dense, healthy hair at the back of the head, representing the donor area in a hair transplant",
  },
};

export default function Article() {
  return (
    <>
      <P>{"If there is one concept every patient should understand before a hair transplant, it is this: the "}<Strong>{"hair transplant donor area"}</Strong>{" is not unlimited. It is the resource behind today's result and behind any future surgery you may need. Treating that area with caution is one of the most important parts of medical planning."}</P>

      <Cta href={WHATSAPP_URL_EN} label="Book an evaluation">{"Before deciding how many grafts to implant, the surgeon needs to measure how much your donor area can safely provide."}</Cta>

      <H2 id="what-is-the-donor-area">{"What is the donor area?"}</H2>

      <P>{"It is the region of the scalp, usually at the back and sides of the head, from which follicles are extracted for the transplant. It is often called the 'safe zone' because, in most people, follicles from this region are genetically resistant to pattern hair loss. That is why, once transplanted, they keep growing in their new location."}</P>

      <H2 id="why-is-it-limited">{"Why is the donor area limited?"}</H2>

      <P>{"The number of follicles available varies from person to person, according to genetics, natural hair density and the size of that region. Unlike many other tissues, it does not regenerate to replace extracted follicles: once a follicle is removed, it does not grow back in the same spot. So the total number of follicles that can be transplanted over a patient's lifetime has a ceiling."}</P>

      <H2 id="overharvesting">{"What is overharvesting?"}</H2>

      <P>{"Overharvesting means extracting more follicles than the donor area can give up without a visible loss of density there. It can happen when the plan focuses on delivering a large number of grafts in one surgery without considering the long-term effect on the donor area. The result is a thin, patchy back or sides of the head, especially visible with short haircuts, and a second surgery becomes harder or impossible."}</P>

      <H2 id="long-term-planning">{"How does long-term planning protect the donor area?"}</H2>

      <P>{"A good surgical plan does not think only about today's surgery. It considers how many follicles it makes sense to extract now, leaving a margin for possible future sessions. This matters most in younger patients, whose hair loss may still progress in the following years."}</P>

      <UL>
        <LI>{"Assessing the real density of the donor area before defining the number of grafts."}</LI>
        <LI>{"Spreading the extraction carefully so that no area looks visibly thin."}</LI>
        <LI>{"Keeping a reserve of donor hair for a possible future procedure."}</LI>
      </UL>

      <H2 id="how-it-is-assessed">{"How is the donor area assessed in practice?"}</H2>

      <P>{"The assessment usually includes trichoscopy, an exam that magnifies the image of the scalp up to 100 times. It allows follicular density per square centimeter to be measured precisely, rather than estimated by eye. Combined with the physical size of the donor area and the patient's pattern of hair loss, that data is what makes it possible to calculate how many follicles can be extracted without compromising the look of the region in the future."}</P>

      <P>{"Hair type also counts. Thicker hair, and follicular units with more hairs each, give more visual coverage per extracted follicle. That changes the calculation of how many grafts are really needed to reach the desired density in the areas with hair loss."}</P>

      <P>{"For international patients, this is why photos sent in advance only give a first impression. The precise measurement of the donor area happens at the in-person evaluation in Vitória, before the final surgical plan is confirmed."}</P>

      <H2 id="other-sources">{"Are there other sources of follicles besides the back of the head?"}</H2>

      <P>{"When the scalp donor area has already been heavily used, other regions of the body, such as the beard, may be considered as a complementary source, depending on the density and characteristics of each patient. It is not the first option and it requires a specific technical assessment. It does show that donor planning does not necessarily end with the first surgery, especially when it was preserved well from the start."}</P>

      <H2 id="common-mistakes">{"What are common mistakes in donor area planning?"}</H2>

      <P>{"A frequent mistake is focusing only on the total number of grafts promised, without considering how the extraction will be distributed. Concentrating the extraction in a narrow band, even within the theoretical total available, can leave that region visibly thin while the rest stays untouched. A well-planned extraction spreads the points evenly across the whole donor area and keeps a natural look even up close."}</P>

      <P>{"Not every donor area has the same potential. Some patients naturally have more density there, which allows more generous plans. Others have a limited donor area from the start, which calls for a more conservative approach even when the area to treat is large. Recognizing that individual difference, instead of applying the same logic to everyone, is part of what separates responsible planning from a generic promise. At Instituto Frauches, preserving the donor area is a central part of the Frauches Precision FUE® Protocol, described in our "}<Link href="/en/blog/what-is-fue-hair-transplant" className="underline">{"guide to FUE"}</Link>{"."}</P>

      <H2 id="faq">{"Frequently asked questions"}</H2>

      <H3>{"Can the donor area be used more than once?"}</H3>
      <P>{"Yes, as long as it was well preserved in the first surgery. A plan that avoids overharvesting leaves room for a second session if it is ever needed."}</P>

      <H3>{"Can the beard or other body areas be used as donor areas?"}</H3>
      <P>{"In specific cases, yes, when the scalp donor area has already been heavily used. It is not usually the first option and requires a case-by-case technical evaluation of the density and hair characteristics of that region."}</P>

      <H3>{"How many follicles does a donor area have on average?"}</H3>
      <P>{"It varies a lot from person to person, according to genetics and the size of the region. There is no standard number for everyone, which is why real density is only known through an exam such as trichoscopy, not by estimate."}</P>

      <H3>{"Does the donor area hurt more than the recipient area during extraction?"}</H3>
      <P>{"There is usually no relevant difference. Both areas receive local anesthesia before the procedure, and post-operative discomfort, when present, is usually mild in both."}</P>

      <H3>{"Can the capacity of my donor area be known without an in-person exam?"}</H3>
      <P>{"Not precisely. Photos give only an approximate idea. Real density per square centimeter is measured with trichoscopy during the in-person evaluation."}</P>

      <Callout>{"This content is educational and does not replace a medical consultation. The real capacity of your donor area can only be assessed with an in-person examination."}</Callout>

      <P>{"If you would like to understand how much your donor area could provide, "}<a href={WHATSAPP_URL_EN} className="underline" target="_blank" rel="noopener noreferrer"><Strong>{"message us on WhatsApp"}</Strong></a>{". Our team answers in English and can explain how the evaluation is organized for patients traveling from abroad."}</P>
    </>
  );
}
