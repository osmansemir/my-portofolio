export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-4 flex justify-center  ">
      <span className="bg-yellowish text-foreground dark:text-background rounded-full">
        <h2 className="px-5 py-1 font-bold ">{children}</h2>
      </span>
    </div>
  );
}
