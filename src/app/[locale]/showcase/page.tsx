import PageContainer from "@/components/Container/Container";
import Showcase from "@/components/Showcase/Showcase";

export default function ShowcasePage() {
  return (
    <PageContainer>
      <Showcase hideable={false} />
    </PageContainer>
  );
}
