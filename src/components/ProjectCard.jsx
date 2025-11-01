function ProjectCard() {
  return (
    <>
      <div className="md:col-span-1 col-span-2 bg-[#1A0E27] min-h-60 rounded-2xl flex flex-col ">
        <div className="h-30 bg-[#230F2A] rounded-t-2xl"></div>
        <h3 className="px-2 pt-1">project</h3>
        <p className="p-2 text-gray-500 text-sm">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          officiis illo, quia, quibusdam natus cumque rerum quod quae
        </p>
        <div className="flex flex-wrap gap-2 p-2">
          <span className="px-2 text-black text-sm rounded-sm bg-gray-500">
            Github
          </span>
          <span className="px-2 text-black text-sm rounded-sm bg-gray-500">
            git
          </span>
          <span className="px-2 text-black text-sm rounded-sm bg-gray-500">
            web dev
          </span>
          <span className="px-2 text-black text-sm rounded-sm bg-gray-500">
            react
          </span>
        </div>
        <div className="flex flex-wrap gap-2 p-2">
          <button className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[12px] text-black bg-white">
            code
          </button>
          <button className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[12px] text-black bg-white">
            preview
          </button>
        </div>
      </div>
    </>
  );
}
export default ProjectCard;
