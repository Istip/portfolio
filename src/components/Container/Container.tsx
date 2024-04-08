export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pt-[82px]">{children}</div>;
}
