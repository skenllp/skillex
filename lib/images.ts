/**
 * Single place to switch real photography on.
 * Leave a value as `null` and no image is requested (the slot hides or shows a calm neutral box).
 * When a photo is ready, drop it in /public/images and set its path here, e.g. "/images/campus-exterior.webp".
 */
export const images = {
  campusExterior: null as string | null,
  classroom: "/images/classroom.webp" as string | null,
  practicalTraining: null as string | null,
  studentEnvironment: null as string | null,
  aboutTeam: null as string | null,
  mentorGuidance: null as string | null,
  // Course photos are optional and only used on each course's own page.
  courseAccounting: null as string | null,
  courseSalesHr: "/images/course-sales-hr.webp" as string | null,
  courseDigitalMarketing: "/images/course-digital-marketing.webp" as string | null,
};
