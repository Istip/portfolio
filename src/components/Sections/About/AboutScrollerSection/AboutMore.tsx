import Text from "@/components/Text/Text";
import { getScopedI18n } from "@/locales/server";

export default async function AboutMore() {
  const t = await getScopedI18n("years");

  const timeline = [
    {
      year: 2019,
      descriptions: [t("2019.1"), t("2019.2"), t("2019.3")],
    },
    {
      year: 2021,
      descriptions: [t("2021.1"), t("2021.2"), t("2021.3"), t("2021.4")],
    },
    {
      year: 2022,
      descriptions: [t("2022.1"), t("2022.2"), t("2022.3")],
    },
    {
      year: 2024,
      descriptions: [t("2024.1"), t("2024.2")],
    },
  ];

  return (
    <>
      {timeline.map(({ year, descriptions }, index) => (
        <div
          className="bg-primary grid grid-cols-4 md:px-[50px] px-5 py-10 gap-5 lg:gap-10 items-start"
          key={index}
        >
          <Text
            as="div"
            type="expandedBold"
            className="col-span-1 text-2xl sm:text-5xl lg:text-7xl sticky top-20 text-primaryDark"
          >
            {year}
          </Text>
          <div className="col-span-3 text-xl sm:text-3xl space-y-6">
            {descriptions.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
