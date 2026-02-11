import Chat from "./bento/chat";
import TaskTimeline from "./bento/task-timeline";
import TerminalPreview from "./bento/terminal-preview";
import Beam from "./bento/beam";

const Bento = () => {
  return (
    <section className="w-full px-5 py-10 sm:py-20 bg-zinc-100 border-y border-zinc-200">
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 auto-rows-[340px] sm:auto-rows-[380px] border border-zinc-300 ">
        {/* Card 1 — Workflow (LIGHT) */}
        <div className="col-span-1 lg:col-span-3 relative border-b border-r border-zinc-300 bg-zinc-50 overflow-hidden">
          <Chat />
        </div>

        {/* Card 2 — Engineering */}
        <div className="col-span-1 lg:col-span-2 relative border-b border-zinc-300 bg-zinc-50 overflow-hidden">
          <TaskTimeline />
        </div>

        {/* Card 3 — Motion */}
        <div className="col-span-1 lg:col-span-2 relative border-b sm:border-b-0  sm:border-r border-zinc-300 bg-zinc-50 overflow-hidden">
          <TerminalPreview />
        </div>

        {/* Card 4 — Launch */}
        <div className="col-span-1 lg:col-span-3 relative h-full bg-zinc-50 overflow-hidden">
          <Beam />
        </div>
      </div>
    </section>
  );
};

export default Bento;
