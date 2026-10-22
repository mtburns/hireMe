/** Shared Tailwind class lists keep repeated components consistent. */
export const ui = {
  pageWidth:
    "mx-auto w-[calc(100%_-_120px)] max-w-[1200px] max-[1100px]:w-[calc(100%_-_80px)] max-[760px]:w-[calc(100%_-_48px)] print:w-full print:max-w-none",
  primaryButton:
    "inline-flex min-h-12 items-center justify-between gap-[34px] rounded-[2px] border-2 border-green bg-green px-[18px] py-[11px] text-[14px] font-medium leading-[1.6] text-paper hover:no-underline hover:shadow-[0_3px_0_var(--color-orange)] motion-safe:transition-shadow motion-safe:duration-150 forced-colors:border-[ButtonText] [&>span]:text-[21px] [&>span]:leading-none",
  themeControl:
    "inline-flex min-h-11 items-center gap-[7px] whitespace-nowrap rounded-[2px] border border-control bg-transparent px-[11px] py-[7px] text-[12px] hover:bg-soft max-[760px]:gap-[5px] max-[760px]:px-[9px] max-[760px]:text-[11px] max-[540px]:text-[12px] forced-colors:border-2 forced-colors:border-[ButtonText] print:hidden [&>span:first-child]:text-[20px] [&>span:first-child]:leading-none",
  exampleShell: "min-w-0 rounded-[3px] border border-control bg-field",
  exampleHeading:
    "flex flex-wrap items-center justify-between gap-2 border-b border-rule px-5 py-[13px] font-mono text-[11px] text-muted max-[1100px]:px-[15px] max-[1100px]:text-[10px] max-[760px]:text-[11px] max-[540px]:px-[14px] max-[540px]:py-3 [&>span:last-child]:text-[10px] [&>span:last-child]:tracking-[.7px]",
  exampleIntro: "mt-[11px] text-[14px] text-muted",
  fieldError: "mt-[7px] text-[13px] font-semibold leading-[1.7] text-error forced-colors:underline",
  fieldHelp: "mt-[7px] text-[13px] leading-[1.7] text-muted",
  formLabel: "mt-[17px] mb-1.5 block text-[14px] font-medium",
  formInput:
    "block min-h-12 w-full min-w-0 rounded-[2px] border border-control bg-field px-3 py-2.5 text-[16px] text-ink aria-invalid:border-2 aria-invalid:border-error forced-colors:border-2 forced-colors:border-[FieldText]",
  successMessage: "my-[25px] border-l-[3px] border-green bg-soft p-4 text-[16px] text-ink",
  skipLink:
    "absolute top-3 left-4 z-20 inline-block min-h-12 -translate-y-[180%] bg-green px-[18px] py-3 text-[16px] text-paper focus:translate-y-0 print:hidden",
  siteHeader:
    "flex min-h-28 items-center gap-8 border-b border-rule max-[1100px]:gap-[23px] max-[760px]:min-h-[94px] max-[760px]:flex-wrap max-[760px]:gap-[14px] max-[760px]:py-[17px] max-[540px]:gap-x-3 max-[540px]:gap-y-[5px] print:min-h-[60px]",
  logotype:
    "inline-flex min-h-11 items-baseline gap-7 whitespace-nowrap font-mono text-[20px] tracking-[-.8px] hover:no-underline max-[1100px]:gap-[21px] max-[1100px]:text-[19px] max-[760px]:gap-5 max-[760px]:text-[18px] max-[540px]:mr-auto",
  devMark: "text-[28px] tracking-[-1px] max-[760px]:text-[27px] [&>span]:text-orange",
  nav: "ml-auto flex items-center gap-[29px] text-[14px] max-[1100px]:gap-[22px] max-[760px]:gap-[19px] max-[760px]:text-[13px] max-[540px]:order-3 max-[540px]:ml-0 max-[540px]:w-full max-[540px]:justify-start max-[540px]:gap-[26px] print:hidden [&>a]:inline-flex [&>a]:min-h-12 [&>a]:items-center [&>a]:gap-[5px] [&>a]:py-3 max-[540px]:[&>a]:min-h-11 max-[540px]:[&>a]:py-2",
  hero: "pt-[38px] min-[1500px]:pt-[43px] max-[760px]:pt-7",
  heroMeta:
    "flex items-center justify-between gap-6 text-[11px] leading-[1.7] tracking-[1px] text-muted max-[1100px]:text-[10px] max-[760px]:block max-[760px]:tracking-[.8px] print:block [&>p:last-child]:flex [&>p:last-child]:items-center [&>p:last-child]:gap-[9px] max-[760px]:[&>p:last-child]:mt-2.5 max-[760px]:[&>p:last-child]:items-start",
  locationIcon: "h-[19px] w-4 shrink-0 self-center max-[760px]:mt-px max-[760px]:self-start",
  heroIntro:
    "mb-12 flex items-end justify-between gap-[60px] max-[1100px]:gap-[30px] max-[760px]:mb-8 max-[760px]:block [&>div]:max-w-[520px] max-[1100px]:[&>div]:max-w-[470px] max-[760px]:[&>div]:max-w-[500px]",
  heroLede:
    "text-[19px] leading-[1.65] tracking-[-.2px] max-[1100px]:text-[18px] max-[760px]:text-[19px]",
  heroAside: "mt-[14px] max-w-[460px] text-[15px] leading-[1.8] text-muted",
  toolList:
    "flex list-none flex-wrap justify-between gap-x-7 gap-y-[14px] border-y border-rule py-[21px] font-mono text-[14px] text-muted max-[760px]:justify-start max-[760px]:gap-x-[27px] max-[760px]:gap-y-3 max-[760px]:text-[13px] print:py-3",
  workSection: "pt-[65px] max-[760px]:pt-10 print:py-[25px]",
  sectionIntro:
    "mb-[29px] flex items-baseline justify-between gap-[30px] max-[760px]:mb-[25px] max-[760px]:block [&>p]:text-[14px] [&>p]:text-muted max-[1100px]:[&>p]:max-w-[250px] max-[1100px]:[&>p]:text-right max-[760px]:[&>p]:mt-3 max-[760px]:[&>p]:max-w-full max-[760px]:[&>p]:text-left",
  project: "group/project border-t border-rule last:border-b",
  projectSummary:
    "grid min-h-20 grid-cols-[155px_1fr_22px] items-start gap-6 py-8 max-[1100px]:grid-cols-[125px_1fr_22px] max-[1100px]:gap-5 max-[760px]:grid-cols-[1fr_22px] max-[760px]:gap-x-[17px] max-[760px]:gap-y-2.5 max-[760px]:py-7",
  projectCategory:
    "pt-2 text-[11px] tracking-[1px] text-muted max-[760px]:col-start-1 max-[760px]:pt-0",
  projectText: "block max-[760px]:col-start-1 max-[760px]:row-start-2",
  projectTitle:
    "block max-w-[620px] font-serif text-[31px] leading-[1.2] tracking-[-.8px] max-[1100px]:text-[29px] max-[760px]:text-[28px]",
  projectDescription: "mt-[9px] block text-[14px] leading-[1.75] text-muted max-[760px]:mt-3",
  expandMark:
    "text-[24px] leading-[1.5] text-green group-open/project:rotate-45 motion-safe:transition-transform motion-safe:duration-150 max-[760px]:col-start-2 max-[760px]:row-start-2",
  projectContent:
    "pr-[45px] pb-[30px] pl-[179px] text-[16px] leading-[1.85] text-muted max-[1100px]:pl-[145px] max-[760px]:pr-5 max-[760px]:pb-[25px] max-[760px]:pl-0 print:block [&_h3]:mb-[13px] [&_h3]:font-sans [&_h3]:text-[16px] [&_h3]:font-semibold [&_h3]:tracking-normal [&_p+p]:mt-4",
  projectTools: "font-mono text-[13px] text-green max-[540px]:text-[12px]",
  playground:
    "grid grid-cols-2 items-start gap-[85px] border-b border-rule py-[70px] max-[1100px]:gap-[50px] max-[760px]:grid-cols-1 max-[760px]:gap-[30px] max-[760px]:py-[45px] print:hidden",
  eyebrow: "mb-[18px] text-[11px] leading-[1.7] tracking-[1.15px] text-muted max-[760px]:mb-[14px]",
  codeComment: "font-mono text-orange",
  playgroundCopy:
    "min-w-0 [&>p:not(:first-child)]:mt-6 [&>p:not(:first-child)]:max-w-[390px] [&>p:not(:first-child)]:text-[16px] [&>p:not(:first-child)]:leading-[1.8] [&>p:not(:first-child)]:text-muted max-[760px]:[&>p:not(:first-child)]:max-w-full",
  detailList:
    "mt-[22px] pl-[18px] text-[14px] leading-[1.8] text-muted max-[760px]:text-[15px] [&>li+li]:mt-2.5",
  codeDisclosure: "group/code mt-[22px]",
  codeSummary:
    "flex min-h-12 items-center justify-between gap-[15px] border-b border-rule py-3 text-[14px] text-green [&>span]:text-[22px] [&>span]:group-open/code:rotate-45",
  codeBlock:
    "mt-[14px] max-w-full overflow-x-auto border border-rule bg-soft p-5 font-mono text-[13px] leading-[1.85] text-ink max-[540px]:text-[12px]",
  boardSection:
    "grid grid-cols-[.8fr_1.2fr] items-start gap-16 border-b border-rule py-[70px] max-[1100px]:grid-cols-[.7fr_1.3fr] max-[1100px]:gap-[35px] max-[900px]:grid-cols-1 max-[900px]:gap-[30px] max-[760px]:py-[45px] print:hidden",
  aboutSection:
    "grid grid-cols-[1fr_1.35fr] gap-[85px] border-b border-rule py-[70px] max-[1100px]:gap-[50px] max-[760px]:grid-cols-1 max-[760px]:gap-[27px] max-[760px]:py-[45px] print:gap-[30px] print:py-[25px]",
  aboutCopy: "text-[16px] leading-[1.9] text-muted max-[760px]:text-[17px] [&>p+p]:mt-5",
  aboutLede:
    "font-serif text-[26px] leading-[1.5] tracking-[-.5px] text-ink max-[760px]:text-[25px]",
  portrait: "mt-7 block aspect-square w-full max-w-[350px] rounded-full object-cover",
  resumeSection:
    "grid grid-cols-[1fr_1.35fr] gap-[85px] py-[65px] max-[1100px]:gap-[50px] max-[760px]:grid-cols-1 max-[760px]:gap-[27px] max-[760px]:py-[45px] print:gap-[30px] print:py-[25px]",
  availability:
    "mt-[25px] max-w-[330px] text-[16px] leading-[1.85] text-muted max-[760px]:mt-5 max-[760px]:max-w-full",
  resumeContent:
    "text-[15px] leading-[1.8] text-muted max-[760px]:text-[16px] [&_h3]:text-[20px] [&_h3]:font-medium [&_h3]:leading-[1.4] [&_h3]:tracking-[-.4px] [&_h4]:text-[15px] [&_h4]:font-medium [&_h4]:text-ink max-[760px]:[&_h4]:text-[16px] [&_strong]:font-medium [&_strong]:text-ink [&_ul]:mt-[15px] [&_ul]:pl-5 [&_li+li]:mt-2 [&_article+article]:mt-[30px] [&_article+article]:border-t [&_article+article]:border-rule [&_article+article]:pt-7 print:[&_article]:break-inside-avoid",
  jobDates: "mt-[5px] mb-[15px] font-mono text-[12px]",
  footer:
    "flex items-center justify-between gap-[25px] border-t border-rule pt-[25px] pb-[30px] text-[12px] text-muted max-[760px]:flex-wrap max-[760px]:gap-x-5 max-[760px]:gap-y-2 max-[760px]:py-5 print:hidden [&>span]:whitespace-nowrap [&>span]:text-[16px] [&>span]:font-medium [&>span]:text-ink max-[760px]:[&>p]:order-3 max-[760px]:[&>p]:w-full [&>a]:inline-flex [&>a]:min-h-11 [&>a]:items-center [&>a]:gap-[9px] [&>a]:whitespace-nowrap max-[760px]:[&>a]:ml-auto",
} as const;
