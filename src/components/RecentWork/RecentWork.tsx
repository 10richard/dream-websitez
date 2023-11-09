import { RecentWorkList } from "./RecentWorkList";

const RecentWork = () => {
  return (
    <section id="recentwork" className="flex justify-center w-full py-20">
      <div className="w-5/6 flex flex-col justify-center gap-16">
        <div className="grid gap-5 text-center">
          <h1 className="text-5xl font-bold">Recent Work</h1>
          <p className="text-xl">Latest Creations.</p>
        </div>

        <div className="grid min-[850px]:grid-cols-2 gap-10">
          {RecentWorkList.map((project, idx) => (
            <div key={idx} className="group overflow-hidden shadow-lg">
              <a href={project.creditLink} target="_blank">
                <img
                  className="group-hover:scale-105 duration-300"
                  src={project.image}
                  alt="Recent project"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
