function SectionTitle({ children }) {
  return (
    <div className="my-4 flex justify-center ">
      <span className="bg-white rounded-lg">
        <h2 className="px-3 py-1 text-sm text-black ">{children}</h2>
      </span>
    </div>
  );
}
export default SectionTitle;
