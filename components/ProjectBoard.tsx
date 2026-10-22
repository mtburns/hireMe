"use client";

import { useState } from "react";
import { ui } from "./portfolioStyles";
import { cn } from "@/lib/utils";

type Filter = "Everything" | "Code" | "Tinkering";
type View = "grid" | "list";
type Project = {
  id: string;
  title: string;
  category: Exclude<Filter, "Everything">;
  description: string;
  art: "orbit" | "blocks" | "brackets" | "layers";
  note: string;
};

const projects: Project[] = [
  {
    id: "spool",
    title: "A place for every spool.",
    category: "Tinkering",
    description: "Because organizing the filament is also a hobby, apparently.",
    art: "orbit",
    note: "measure twice. print three times.",
  },
  {
    id: "component",
    title: "Small parts. Bigger picture.",
    category: "Code",
    description: "Reusable pieces that play nicely with the rest of the system.",
    art: "brackets",
    note: "composition > copy + paste",
  },
  {
    id: "factory",
    title: "Just one more conveyor.",
    category: "Tinkering",
    description: "For people whose idea of relaxing is optimizing a factory.",
    art: "blocks",
    note: "// five more minutes",
  },
  {
    id: "prototype",
    title: "What if we tried this?",
    category: "Code",
    description: "A little room to experiment before calling it done.",
    art: "layers",
    note: "status: pleasantly unfinished",
  },
];

const projectLayouts: Record<View, string> = {
  grid: "grid-cols-2 max-[540px]:grid-cols-1",
  list: "grid-cols-1",
};

// Full utility strings let Tailwind discover every state at build time.
const artShapes: Record<Project["art"], readonly string[]> = {
  orbit: [
    "top-4 left-[calc(50%_-_45px)] size-[90px] rounded-full border-2 border-green",
    "top-[30px] left-[calc(50%_-_31px)] size-[62px] rounded-full border-2 border-orange",
    "top-[46px] left-[calc(50%_-_15px)] size-[30px] rounded-full border-2 border-green bg-green",
    "top-[35px] left-[calc(50%_-_70px)] h-[52px] w-[140px] rounded-full border-2 border-orange [transform:rotate(-30deg)] motion-safe:group-hover/card:[transform:rotate(-10deg)]",
  ],
  brackets: [
    "top-7 left-[calc(50%_-_57px)] h-[60px] w-[50px] bg-green [clip-path:polygon(0_50%,90%_0,100%_18%,35%_50%,100%_82%,90%_100%)]",
    "top-7 left-[calc(50%_+_7px)] h-[60px] w-[50px] bg-green [clip-path:polygon(0_50%,90%_0,100%_18%,35%_50%,100%_82%,90%_100%)] [transform:rotate(180deg)]",
    "top-5 left-[calc(50%_-_4px)] h-[77px] w-[9px] bg-orange [transform:rotate(18deg)] motion-safe:group-hover/card:[transform:rotate(8deg)]",
  ],
  blocks: [
    "top-6 left-[calc(50%_-_48px)] size-[43px] bg-green [transform:rotate(-30deg)_skewX(15deg)] motion-safe:group-hover/card:[transform:rotate(-30deg)_skewX(15deg)_translateY(-5px)]",
    "top-12 left-[calc(50%_-_7px)] size-[43px] bg-orange [transform:rotate(-30deg)_skewX(15deg)] motion-safe:group-hover/card:[transform:rotate(-30deg)_skewX(15deg)_translateY(-5px)]",
    "top-6 left-[calc(50%_+_34px)] size-[43px] bg-green [transform:rotate(-30deg)_skewX(15deg)] motion-safe:group-hover/card:[transform:rotate(-30deg)_skewX(15deg)_translateY(-5px)]",
    "top-0 left-[calc(50%_-_7px)] size-[43px] bg-control [transform:rotate(-30deg)_skewX(15deg)] motion-safe:group-hover/card:[transform:rotate(-30deg)_skewX(15deg)_translateY(-5px)]",
  ],
  layers: [
    "top-5 left-[calc(50%_-_50px)] h-[62px] w-[100px] border-2 border-green bg-soft [transform:rotate(-12deg)] motion-safe:group-hover/card:[transform:rotate(-20deg)_translateY(-5px)]",
    "top-[30px] left-[calc(50%_-_50px)] h-[62px] w-[100px] border-2 border-orange bg-soft",
    "top-10 left-[calc(50%_-_50px)] h-[62px] w-[100px] border-2 border-green bg-soft [transform:rotate(12deg)] motion-safe:group-hover/card:[transform:rotate(20deg)_translateY(5px)]",
    "top-[66px] left-[calc(50%_-_12px)] h-2 w-6 bg-orange [transform:rotate(12deg)]",
  ],
};

const boardButton =
  "inline-flex min-h-11 min-w-11 items-center justify-center rounded-[2px] border border-transparent bg-transparent px-2.5 py-2 text-[12px] leading-[1.4] text-muted hover:bg-soft hover:text-ink focus-visible:outline-offset-2 aria-pressed:border-green aria-pressed:bg-green aria-pressed:text-paper max-[1100px]:px-2 forced-colors:border-[ButtonText] forced-colors:aria-pressed:outline-2 forced-colors:aria-pressed:outline-[Highlight] forced-colors:aria-pressed:-outline-offset-4";

const sourceExample = `type Filter = "Everything" | "Code" | "Tinkering";
const [filter, setFilter] = useState<Filter>("Everything");
const [view, setView] = useState<View>("grid");

const visibleProjects = projects.filter((project) =>
  filter === "Everything" || project.category === filter
);

// One set of components. Two ways to see them.
<ul
  data-view={view}
  className={"group/board grid min-w-0 list-none gap-3.5 p-0 " + projectLayouts[view]}
>
  {visibleProjects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ))}
</ul>`;

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="group/card min-w-0 overflow-hidden rounded-xs border border-rule bg-paper motion-safe:animate-find-place motion-safe:nth-2:[animation-delay:35ms] motion-safe:nth-3:[animation-delay:70ms] motion-safe:nth-4:[animation-delay:105ms] group-data-[view=list]/board:grid group-data-[view=list]/board:grid-cols-[130px_1fr] max-[540px]:group-data-[view=list]/board:grid-cols-[84px_1fr]">
      <div
        className="relative isolate h-36.5 overflow-hidden border-b border-rule bg-soft forced-colors:forced-color-adjust-none max-[540px]:h-38.75 group-data-[view=list]/board:h-full group-data-[view=list]/board:min-h-38.5 group-data-[view=list]/board:border-r group-data-[view=list]/board:border-b-0 [&>span]:absolute [&>span]:block motion-safe:[&>span]:transition-transform motion-safe:[&>span]:duration-300 group-data-[view=list]/board:[&>span]:scale-80 max-[540px]:group-data-[view=list]/board:[&>span]:scale-65"
        aria-hidden="true"
      >
        {artShapes[project.art].map((shape, index) => (
          <span key={index} className={shape} />
        ))}
        <code className="absolute right-3 bottom-2.5 left-3 z-2 font-mono text-[9px] leading-normal text-ink group-data-[view=list]/board:text-[8px] max-[540px]:group-data-[view=list]/board:hidden">
          {project.note}
        </code>
      </div>
      <div className="p-4 max-[1100px]:p-3.25 max-[540px]:p-4.5 group-data-[view=list]/board:self-center max-[540px]:group-data-[view=list]/board:p-3.25">
        <p className="font-mono text-[10px] leading-[1.6] tracking-[.6px] text-muted uppercase">
          {project.category}
        </p>
        <h4 className="mt-2 mb-2.5 font-serif text-[21px] font-normal leading-[1.2] tracking-[-.5px] max-[540px]:text-[24px] max-[540px]:group-data-[view=list]/board:text-[21px]">
          {project.title}
        </h4>
        <p className="text-[12px] leading-[1.75] text-muted max-[540px]:text-[14px] max-[540px]:group-data-[view=list]/board:text-[12px]">
          {project.description}
        </p>
      </div>
    </li>
  );
}

export default function ProjectBoard() {
  const [filter, setFilter] = useState<Filter>("Everything");
  const [view, setView] = useState<View>("grid");
  const visibleProjects = projects.filter(
    (project) => filter === "Everything" || project.category === filter,
  );

  return (
    <div
      className={cn(
        ui.exampleShell,
        "max-[900px]:mx-auto max-[900px]:w-full max-[900px]:max-w-165",
      )}
    >
      <div className={ui.exampleHeading}>
        <span aria-hidden="true">&lt;ProjectBoard /&gt;</span>
        <span>INTERACTIVE EXAMPLE</span>
      </div>
      <div className="p-6.25 max-[1100px]:p-5 max-[540px]:p-4.5">
        <div className="flex flex-wrap items-baseline gap-x-4.5 gap-y-2.25">
          <h3 className="font-serif text-[33px] font-normal leading-[1.2] tracking-[-1px]">
            Open tabs.
          </h3>
          <span className="font-mono text-[12px] leading-[1.6] text-muted" aria-hidden="true">
            {"// in my head"}
          </span>
        </div>
        <p className={ui.exampleIntro}>A sample board inspired by the things I get into.</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3.5 max-[540px]:gap-2.5">
          <div className="flex gap-1" role="group" aria-label="Filter sample projects">
            {(["Everything", "Code", "Tinkering"] as const).map((option) => (
              <button
                className={boardButton}
                key={option}
                type="button"
                aria-pressed={filter === option}
                onClick={() => setFilter(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div
            className="flex gap-1 border-l border-rule pl-2 max-[540px]:ml-auto [&_svg]:size-4.25 [&_svg]:fill-current"
            role="group"
            aria-label="Project layout"
          >
            <button
              className={boardButton}
              type="button"
              aria-pressed={view === "grid"}
              onClick={() => setView("grid")}
            >
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 2h6v6H2zm10 0h6v6h-6zM2 12h6v6H2zm10 0h6v6h-6z" />
              </svg>
              <span className="sr-only">Grid view</span>
            </button>
            <button
              className={boardButton}
              type="button"
              aria-pressed={view === "list"}
              onClick={() => setView("list")}
            >
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3h16v3H2zm0 6h16v3H2zm0 6h16v3H2z" />
              </svg>
              <span className="sr-only">List view</span>
            </button>
          </div>
        </div>
        <p
          className="my-3.25 font-mono text-[11px] leading-[1.8] text-muted"
          role="status"
          aria-atomic="true"
        >
          {visibleProjects.length} sample ideas ·{" "}
          {filter === "Everything" ? "a bit of everything" : filter.toLowerCase()}
        </p>
        <ul
          data-view={view}
          role="list"
          className={"group/board grid min-w-0 list-none gap-3.5 p-0 " + projectLayouts[view]}
        >
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
        <p className="mt-4.25 text-[11px] leading-[1.8] text-muted max-[540px]:text-[12px]">
          Demo content. Actual interests. No extra browser tabs required.
        </p>
        <details className="group/code mt-2.5">
          <summary className={cn(ui.codeSummary, "text-[12px]")}>
            Peek at the filtering & rendering <span aria-hidden="true">+</span>
          </summary>
          <pre
            className={cn(ui.codeBlock, "text-[11px] max-[540px]:text-[11px]")}
            tabIndex={0}
            aria-label="Project board TypeScript excerpt. Scroll horizontally if needed."
          >
            <code>{sourceExample}</code>
          </pre>
        </details>
      </div>
    </div>
  );
}
