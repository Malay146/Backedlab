import OurProcess from "./bento/our-process";
import RapidDevelopment from "./bento/rapid-development";
import ClientLove from "./bento/client-love";
import Grainient from "../Grainient";

const BentoN = () => {
    const bentoData = [
        {
            title: "Rapid Development",
            description: "Lean processes and modern stacks designed for speed and flexibility, so you can build smarter and ship faster.",
            component: <RapidDevelopment />
        },
        {
            title: "Our Process",
            description: "Simple, transparent, and built for speed — our platform turns your ideas into real products without the usual friction.",
            component: <OurProcess />
        },
        {
            title: "Client Love",
            description: "Trusted by founders and teams worldwide to deliver beyond expectations. We always find a way to get you satisfied.",
            component: <ClientLove />
        }
    ];
  return (
    <div className="w-full px-6 border-y border-zinc-200 bg-zinc-100">
      <section className="w-full">
        <div className="max-w-6xl mx-auto py-20">
          {/* Section header */}
          <h2 className="font-inter font-medium text-5xl tracking-tight mb-12">
            Our techstack
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
            {bentoData.map((item, index) => (
                <div key={index} className={`bg-white rounded-lg flex flex-col justify-between p-4`}>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl tracking-tight font-semibold font-bricolage-grotesque">{item.title}</h1>
                        <p className="leading-none text-zinc-700 text-md">{item.description}</p>
                    </div>
                    <div className="relative w-full h-80 overflow-hidden mt-6 rounded-lg flex items-center justify-center">
                          <Grainient
                            color1="#3B82F6"
                            color2="#60A5FA"
                            color3="#DBEAFE"
                            timeSpeed={0.5}
                          className="absolute inset-0" />
                        <div className="relative">
                            {item.component}
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BentoN;
