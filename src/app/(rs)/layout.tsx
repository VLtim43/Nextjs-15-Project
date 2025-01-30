export default async function RSlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* header */}
      <div>{children}</div>
    </div>
  );
}
