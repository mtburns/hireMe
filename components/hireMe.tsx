"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";

import ProjectBoard from "./ProjectBoard";
import { ui } from "./portfolioStyles";
import { cn } from "@/lib/utils";

const toolNames = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Storybook", "WCAG"];

function ThemeControl() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem("travis-theme");
      } catch {
        /* Storage is optional. */
      }
      const next = saved === "dark" || (saved !== "light" && preference.matches);
      document.documentElement.dataset.theme = next ? "dark" : "light";
      setDark(next);
    };
    apply();
    preference.addEventListener("change", apply);
    return () => preference.removeEventListener("change", apply);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = !dark;
    document.documentElement.dataset.theme = next ? "dark" : "light";
    setDark(next);
    try {
      localStorage.setItem("travis-theme", next ? "dark" : "light");
    } catch {
      /* The control still works without storage. */
    }
  }, [dark]);

  return (
    <button
      className={ui.themeControl}
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span aria-hidden="true">{dark ? "☀" : "☾"}</span>
      <span>{dark ? "Light" : "Dark"}</span>
    </button>
  );
}

function SmallForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [complete, setComplete] = useState(false);
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const nameMissing = submitted && !name.trim();
  const emailInvalid = submitted && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSubmitted(true);
      if (!name.trim()) {
        requestAnimationFrame(() => nameInput.current?.focus());
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        requestAnimationFrame(() => emailInput.current?.focus());
        return;
      }
      setComplete(true);
    },
    [name, email],
  );

  const reset = useCallback(() => {
    setName("");
    setEmail("");
    setSubmitted(false);
    setComplete(false);
    requestAnimationFrame(() => nameInput.current?.focus());
  }, []);

  return (
    <div
      className={cn(
        ui.exampleShell,
        "max-[760px]:mx-auto max-[760px]:w-full max-[760px]:max-w-125",
      )}
    >
      <div className={ui.exampleHeading}>
        <span aria-hidden="true">&lt;SmallForm /&gt;</span>
        <span>INTERACTIVE EXAMPLE</span>
      </div>
      <div className="p-7.5 max-[1100px]:p-6.25 max-[760px]:p-7 max-[540px]:p-5.5 [&_h3]:font-serif [&_h3]:text-[29px] [&_h3]:font-normal [&_h3]:leading-[1.2] [&_h3]:tracking-[-.8px]">
        <h3>Coffee & good company.</h3>
        <p className={ui.exampleIntro}>An imaginary meetup. A real little component.</p>
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className={complete ? ui.successMessage : "sr-only"}
        >
          {complete ? "You’re on the imaginary list! Nothing was sent or stored." : ""}
        </div>
        {complete ? (
          <button
            className={cn(ui.primaryButton, "max-[540px]:text-[13px]")}
            type="button"
            onClick={reset}
          >
            Try it again <span aria-hidden="true">↻</span>
          </button>
        ) : (
          <form
            className="mt-6"
            noValidate
            onSubmit={handleSubmit}
            aria-label="Imaginary meetup signup"
          >
            <p className="mb-5 text-[12px] text-muted">
              Both fields are required. Made-up details are fine.
            </p>
            <label className={ui.formLabel} htmlFor="demo-name">
              Your name
            </label>
            <input
              className={ui.formInput}
              ref={nameInput}
              id="demo-name"
              name="name"
              autoComplete="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              aria-invalid={nameMissing || undefined}
              aria-describedby={nameMissing ? "name-error" : undefined}
            />
            {nameMissing && (
              <p className={ui.fieldError} id="name-error">
                Please add your name.
              </p>
            )}
            <label className={ui.formLabel} htmlFor="demo-email">
              Email address
            </label>
            <input
              className={ui.formInput}
              ref={emailInput}
              id="demo-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-invalid={emailInvalid || undefined}
              aria-describedby={emailInvalid ? "email-error" : "email-help"}
            />
            {emailInvalid ? (
              <p className={ui.fieldError} id="email-error">
                Use an email address like ada@example.com.
              </p>
            ) : (
              <p className={ui.fieldHelp} id="email-help">
                For example, ada@example.com.
              </p>
            )}
            <div role="alert" aria-atomic="true" className="sr-only">
              {submitted && (nameMissing || emailInvalid)
                ? `Please check ${nameMissing && emailInvalid ? "the name and email fields" : nameMissing ? "the name field" : "the email field"}.`
                : ""}
            </div>
            <button
              className={cn(ui.primaryButton, "mt-6 w-full gap-4.5 max-[540px]:text-[13px]")}
              type="submit"
            >
              Save my imaginary seat <span aria-hidden="true">↗</span>
            </button>
          </form>
        )}
        <p className="mt-5.25 text-[12px] leading-[1.8] text-muted">
          Nothing is sent or stored. Even the coffee is hypothetical.
        </p>
      </div>
    </div>
  );
}

export default function HireMe() {
  return (
    <>
      <a className={ui.skipLink} href="#main-content">
        Skip to content
      </a>
      <header className={cn(ui.siteHeader, ui.pageWidth)}>
        <a className={ui.logotype} href="#home">
          <span className={ui.devMark}>
            tb<span>_</span>
          </span>
          <span className="font-normal">hireMe.tsx</span>
          <span className="sr-only"> — Travis Burns, back to the introduction</span>
        </a>
        <nav className={ui.nav} aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#playground">Play</a>
          <a href="#about">About</a>
          <a href="#resume">Résumé</a>
        </nav>
        <ThemeControl />
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className={cn(ui.hero, ui.pageWidth)} aria-labelledby="home">
          <div className={ui.heroMeta}>
            <p>FRONTEND DEVELOPMENT & ACCESSIBILITY</p>
            <p>
              <svg
                className={ui.locationIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span>KNOXVILLE, TN · OPEN TO REMOTE ROLES</span>
            </p>
          </div>
          <h1 id="home" tabIndex={-1}>
            Hi, I’m Travis.
            <br />I build things
            <br />
            for <em className="font-normal text-orange">people.</em>
          </h1>
          <div className={ui.heroIntro}>
            <div>
              <p className={ui.heroLede}>
                A frontend developer with a designer’s eye and thirteen years of figuring things
                out.
              </p>
              <p className={ui.heroAside}>
                I like making things work. Especially for the person trying to use them.
              </p>
            </div>
            <a
              className={cn(ui.primaryButton, "mb-1 shrink-0 max-[760px]:mt-6.25 print:hidden")}
              href="#work"
            >
              Take a look around <span aria-hidden="true">↓</span>
            </a>
          </div>
          <ul className={ui.toolList} aria-label="Tools and areas of experience">
            {toolNames.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </section>

        <section className={cn(ui.workSection, ui.pageWidth)} aria-labelledby="work">
          <div className={ui.sectionIntro}>
            <h2 id="work" tabIndex={-1}>
              A little of the work.
            </h2>
            <p>The problem, the people, and my part in it.</p>
          </div>
          <details className={ui.project}>
            <summary className={ui.projectSummary}>
              <span className={ui.projectCategory}>ACCESSIBILITY</span>
              <span className={ui.projectText}>
                <span className={ui.projectTitle}>
                  Removing barriers to healthcare information.
                </span>
                <span className={ui.projectDescription}>
                  Investigation, practical fixes, and checking the result.
                </span>
              </span>
              <span className={ui.expandMark} aria-hidden="true">
                +
              </span>
            </summary>
            <div className={ui.projectContent}>
              <h3>My contribution</h3>
              <p>
                I worked on extensive WCAG remediation across healthcare websites, collaborating with accessibility auditors and reviewing automated Silktide findings. I helped identify false positives and confirm issues through manual testing, including keyboard navigation and contrast checks. In some cases, remediation required substantial changes to both the functionality and visual design of navigation and other complex components.
              </p>
              <p>
                The work meant understanding the issue, working through a fix in the frontend, and checking the result. It helped me connect the technical details with what someone needs from the website.
              </p>
              <p className={ui.projectTools}>
                WCAG remediation · Silktide · Keyboard testing · Contrast testing
              </p>
            </div>
          </details>
          <details className={ui.project}>
            <summary className={ui.projectSummary}>
              <span className={ui.projectCategory}>COLLABORATION</span>
              <span className={ui.projectText}>
                <span className={ui.projectTitle}>
                  Making accessibility part of the conversation.
                </span>
                <span className={ui.projectDescription}>
                  Practical guidance for the people building the website.
                </span>
              </span>
              <span className={ui.expandMark} aria-hidden="true">
                +
              </span>
            </summary>
            <div className={ui.projectContent}>
              <h3>My contribution</h3>
              <p>
                I contributed to an accessibility working group that developed internal guidance, standards, and examples for developers, business analysts, QA, and content teams. The goal was to help teams apply those standards consistently throughout a project, with accessibility woven in from the beginning rather than bolted on at the end.
              </p>
              <p>
                Over the years, I’ve also led small frontend teams, contributed hands-on implementation, reviewed code, and provided design feasibility feedback. I’ve used AI coding tools such as GitHub Copilot to streamline my workflow and speed up development.
              </p>
              <p className={ui.projectTools}>
                Shared guidance · Code reviews · Technical leadership
              </p>
            </div>
          </details>
        </section>

        <section className={cn(ui.playground, ui.pageWidth)} aria-labelledby="playground">
          <div className={ui.playgroundCopy}>
            <p className={ui.eyebrow}>
              <span className={ui.codeComment} aria-hidden="true">
                {"// "}
              </span>
              A LITTLE SHOW, DON’T TELL
            </p>
            <h2 id="playground" tabIndex={-1}>
              Small component.
              <br />
              Thoughtful details.
            </h2>
            <p>
              This form was built for this portfolio. Try moving through it with your keyboard, or
              submitting it empty.
            </p>
            <ul className={ui.detailList}>
              <li>Visible labels and clear instructions.</li>
              <li>Useful errors linked to the fields.</li>
              <li>Focus that helps you find what needs attention.</li>
            </ul>
            <details className={ui.codeDisclosure}>
              <summary className={ui.codeSummary}>
                Peek at the TypeScript <span aria-hidden="true">+</span>
              </summary>
              <pre
                className={ui.codeBlock}
                tabIndex={0}
                aria-label="Example TypeScript code. Scroll horizontally if needed."
              >
                <code>{`// Excerpt from the signup form.
const nameMissing = submitted && !name.trim();

<input
  ref={nameInput}
  id="demo-name"
  name="name"
  autoComplete="name"
  required
  value={name}
  onChange={(event) => setName(event.target.value)}
  aria-invalid={nameMissing || undefined}
  aria-describedby={nameMissing ? "name-error" : undefined}
/>
{nameMissing && (
  <p className={ui.fieldError} id="name-error">
    Please add your name.
  </p>
)}`}</code>
              </pre>
            </details>
          </div>
          <SmallForm />
        </section>

        <section className={cn(ui.boardSection, ui.pageWidth)} aria-labelledby="board-heading">
          <div
            className={cn(ui.playgroundCopy, "max-[900px]:[&>p:not(:first-child)]:max-w-137.5")}
          >
            <p className={ui.eyebrow}>
              <span className={ui.codeComment} aria-hidden="true">
                {"// "}
              </span>
              A LITTLE MORE PLAY
            </p>
            <h2 id="board-heading" tabIndex={-1}>
              Same parts.
              <br />
              Different possibilities.
            </h2>
            <p>
              Something a little more visual. Filter the ideas, switch the layout, and see the same
              components find their place.
            </p>
            <ul className={ui.detailList}>
              <li>Typed data and reusable React components.</li>
              <li>Responsive grid and list layouts.</li>
              <li>A little motion, with reduced-motion preferences respected.</li>
            </ul>
            <p className="mt-7! font-mono text-[13px]! text-orange!">
              <code aria-hidden="true">{"{ curiosity: true }"}</code>
              <span className="sr-only">Always curious.</span>
            </p>
          </div>
          <ProjectBoard />
        </section>

        <section className={cn(ui.aboutSection, ui.pageWidth)} aria-labelledby="about">
          <div>
            <p className={ui.eyebrow}>
              <span className={ui.codeComment} aria-hidden="true">
                {"// "}
              </span>
              A BIT ABOUT ME
            </p>
            <h2 id="about" tabIndex={-1}>
              There’s a person
              <br />
              behind the code.
            </h2>
            <Image src="/travis-burns-portrait.jpg" alt="Travis Burns" width={200} height={200} className={ui.portrait} />
          </div>
          <div className={ui.aboutCopy}>
            <p className={ui.aboutLede}>
              I came to frontend development through graphic design. I stayed for the
              problem-solving.
            </p>
            <p>
              I started out as a graphic designer and taught myself development as the work called for it. I’ve spent the last decade in an agency environment, building healthcare websites alongside designers, project managers, business analysts, QA, and other developers. As clients took on more accessibility remediation over the last couple of years, that work became some of the most fulfilling I’ve done.
            </p>
            <p>
              The best part of my career has been the people. I’ve made lifelong friends and learned so much from colleagues who still amaze me with how much they know.
            </p>
            <p>
              As I look toward the next chapter of my career, I’d love to keep building on that experience. Making things more accessible, solving interesting problems, and working with people I can learn from and contribute alongside.
            </p>
            <p>
              Outside of work, I’m into traveling, 3D printing, highland games, and games that somehow turn organizing complicated systems into recreation (Satisfactory, IYKYK). Apparently, the troubleshooting follows me home.
            </p>
          </div>
        </section>

        <section className={cn(ui.resumeSection, ui.pageWidth)} aria-labelledby="resume">
          <div>
            <p className={ui.eyebrow}>
              <span className={ui.codeComment} aria-hidden="true">
                {"// "}
              </span>
              THE SHORT VERSION
            </p>
            <h2 id="resume" tabIndex={-1}>
              A little more
              <br />
              about my experience.
            </h2>
            <p className={ui.availability}>
              I’m looking for fully remote digital accessibility or senior frontend roles,
              especially where making things accessible is part of the work.
            </p>
          </div>
          <div className={ui.resumeContent}>
            <article>
              <h3>MERGE / AVID</h3>
              <p className={ui.jobDates}>2016–2026</p>
              <h4>Senior Front-End Developer</h4>
              <p className="text-[13px]">Previously titled Lead Front-End Developer.</p>
              <ul>
                <li>Healthcare website builds, redesigns, and WCAG remediation.</li>
                <li>
                  Reusable React components, TypeScript, Next.js, Tailwind CSS, and Sitecore JSS.
                </li>
                <li>Storybook documentation, code reviews, and technical leadership.</li>
              </ul>
            </article>
            <article>
              <h3>YP</h3>
              <p className={ui.jobDates}>2013–2016</p>
              <h4>Web Designer</h4>
              <p className="mt-3 ml-5">UI/UX layouts and website development with HTML and CSS.</p>
            </article>
            <article>
              <h3>Education</h3>
              <h4 className="mt-3">Bachelor of Fine Arts in Graphic Design</h4>
              <p className="mt-3 ml-5">The Art Institute of Atlanta · 2013</p>
            </article>
            <a href="travisBurnsResume.docx" className={ui.primaryButton + " mt-6"} target="_blank" rel="noopener noreferrer">
              Download résumé <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="size-5 shrink-0 fill-current"
                                aria-hidden="true"
                                focusable="false"
                              >
                                {/* Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com
                                    License - https://fontawesome.com/license/free
                                    Copyright 2026 Fonticons, Inc. */}
                                <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm32 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                              </svg>
            </a>
          </div>
        </section>
      </main>

      <footer className={cn(ui.footer, ui.pageWidth)}>
        <span>
          Travis Burns
          <span className="text-orange" aria-hidden="true">
            .
          </span>
        </span>
        <p>Built with React, TypeScript, and a little personality.</p>
        <a href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  );
}
