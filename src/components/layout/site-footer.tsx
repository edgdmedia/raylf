import Image from "next/image";
import { SocialLinks } from "../ui/social-links";

const importantLinks = [
  "Royal African Foundation",
  "Ooni of Ife Global Outreach",
  "About Ooni of Ife",
];

export function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--violet-950)",
        color: "rgba(255,255,255,.78)",
      }}
    >
      <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-[var(--container-pad)] pb-12 pt-[72px] md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <Image
            src="/logo/raylf-logo-white.png"
            alt="RAYLF"
            width={200}
            height={84}
            className="mb-4 h-[84px] w-auto"
          />
          <p className="m-0 max-w-[360px] text-sm leading-[1.7]">
            RAYLF&rsquo;s mission is to redefine centuries of the rich resilient
            spirit of African Kingdoms which embodies many defining principles of
            its identity.
          </p>
        </div>

        <div>
          <h5
            className="m-0 mb-[18px] text-lg font-semibold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Important Links
          </h5>
          <ul className="m-0 flex list-none flex-col gap-3 p-0 text-sm">
            {importantLinks.map((l) => (
              <li key={l} className="flex items-center gap-2.5">
                <i className="fa-solid fa-chevron-right text-[10px] text-[var(--gold-500)]" />
                <a href="#" className="text-inherit hover:text-[var(--gold-200)]">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5
            className="m-0 mb-[18px] text-lg font-semibold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact
          </h5>
          <a
            href="mailto:info@royalafrican.foundation"
            className="text-sm text-[var(--gold-200)] hover:text-[var(--gold-400)]"
          >
            info@royalafrican.foundation
          </a>
          <div className="mt-[22px]">
            <SocialLinks tone="dark" />
          </div>
        </div>
      </div>

      <div
        className="px-6 py-[18px] text-center text-[13px]"
        style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}
      >
        &copy; {new Date().getFullYear()} Royal African Young Leadership Forum
      </div>
    </footer>
  );
}

export default SiteFooter;
