export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="pt-[75px]">{children}</main>;
}
