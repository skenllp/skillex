/**
 * Single place to switch real photography on.
 * Leave a value as `null` and no image is requested (the slot hides or shows a calm neutral box).
 * When a photo is ready, drop it in /public/images and set its path here, e.g. "/images/campus-exterior.webp".
 */
export const images = {
  campusExterior: "/images/campus-exterior.webp" as string | null,
  classroom: "/images/classroom.webp" as string | null,
  practicalTraining: "/images/practical-training.webp" as string | null,
  studentEnvironment: "/images/student-environment.webp" as string | null,
  aboutTeam: "/images/about-team.webp" as string | null,
  mentorGuidance: "/images/mentor-guidance.webp" as string | null,
  // Course photos are optional and only used on each course's own page.
  courseAccounting: "/images/course-accounting.webp" as string | null,
  courseSalesHr: "/images/course-sales-hr.webp" as string | null,
  courseDigitalMarketing: "/images/course-digital-marketing.webp" as string | null,
};
