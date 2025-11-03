function Hero() {
  return (
    <section
      id="hero"
      className="h-screen relative flex justify-center items-center z-30 "
    >
      <div>
        <h1 className="inline-block max-sm:mb-8 text-foreground text-5xl font-bold tracking-tighter md:text-7xl">
          Hi I'm Osman
        </h1>
        <p className="text-foreground-muted inline-block max-w-[600px] md:text-xl">
          Where logic meets creativity, crafting code with precision and
          purpose.
        </p>
      </div>
    </section>
  );
}

export default Hero;
