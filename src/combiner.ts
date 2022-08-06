import { BannerComponent } from "./components/banner";
import { config } from "./config";

export function combine(): string {
  const banner = new BannerComponent(
    config.assets.bannerUrl,
    config.profile.name,
    { baseUrl: config.core.baseUrl }
  ).compile();

  const sections = [banner];

  return sections.join(config.other.sectionSeparator);
}
