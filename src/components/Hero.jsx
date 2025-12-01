export default function Hero() {
  return (
    <section
      id="hero"
      className=" min-h-100 relative flex justify-center items-center z-30 "
    >
      <div className="flex flex-col gap-4">
        <h1 className="inline-block max-sm:mb-8 text-5xl font-bold tracking-tighter md:text-7xl">
          Hi I'm Osman
        </h1>
        <p className=" inline-block md:text-xl">
          Where logic meets creativity, crafting code with precision and
          purpose.
        </p>
      </div>
    </section>
  );
}
