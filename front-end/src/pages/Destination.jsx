import DestinationHero from "../components/DestinationHero";
import DestinationCategoriesSlider from "../components/DestinationCategoriesSlider";
import RecommendedTours from "../components/RecommendedTours";
import AssistanceBanner from "../components/AssistanceBanner";

export default function Destination() {
  return (
    <>
      <DestinationHero />
      <DestinationCategoriesSlider />
      <RecommendedTours />
      {/* <AssistanceBanner /> */ }
    </>
  );
}