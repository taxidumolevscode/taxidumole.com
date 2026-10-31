import { siteMeta } from "../siteData";

export default function ResponsivePageLogo({
  alt = "Logo Taxi du Môle",
  className = "",
  decorative = false,
}) {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={siteMeta.desktopPageLogoImage} />
      <img
        src={siteMeta.pageLogoImage}
        alt={decorative ? "" : alt}
        aria-hidden={decorative ? "true" : undefined}
        className={className}
      />
    </picture>
  );
}
