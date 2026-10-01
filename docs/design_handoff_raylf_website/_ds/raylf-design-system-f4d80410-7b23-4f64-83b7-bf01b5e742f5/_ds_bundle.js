/* @ds-bundle: {"format":4,"namespace":"RAYLFDesignSystem_f4d804","components":[{"name":"AwardeeCard","sourcePath":"components/content/AwardeeCard.jsx"},{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"Hero","sourcePath":"components/content/Hero.jsx"},{"name":"PartnerStrip","sourcePath":"components/content/PartnerStrip.jsx"},{"name":"RoyalQuote","sourcePath":"components/content/RoyalQuote.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"SocialLinks","sourcePath":"components/navigation/SocialLinks.jsx"},{"name":"SocialPost","sourcePath":"components/social/SocialPost.jsx"}],"sourceHashes":{"components/content/AwardeeCard.jsx":"264c178d973a","components/content/FeatureCard.jsx":"bb37a771d68b","components/content/Hero.jsx":"3aba9b5d3f5c","components/content/PartnerStrip.jsx":"06fac1d536ac","components/content/RoyalQuote.jsx":"5b68decb84c4","components/core/Button.jsx":"da9fbb392a43","components/core/Eyebrow.jsx":"8eb2b289a64b","components/core/SectionHeading.jsx":"ea6b5493061c","components/navigation/SiteFooter.jsx":"9d4e8318d64d","components/navigation/SiteHeader.jsx":"eecd4a613275","components/navigation/SocialLinks.jsx":"1e654fb2be5d","components/social/SocialPost.jsx":"97026f16649b","ui_kits/website/About.jsx":"ed7cbc984c67","ui_kits/website/Awards.jsx":"8cfbb8b82fda","ui_kits/website/Home.jsx":"7e83dd855877"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RAYLFDesignSystem_f4d804 = window.RAYLFDesignSystem_f4d804 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/AwardeeCard.jsx
try { (() => {
function AwardeeCard({
  photo,
  name,
  category,
  year,
  country
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("figure", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      margin: 0,
      position: 'relative',
      aspectRatio: '4/5',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: `url(${photo}) center/cover`,
      boxShadow: h ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transition: 'box-shadow var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-scrim)',
      opacity: h ? 1 : .9,
      transition: 'opacity var(--dur-base)'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 20,
      color: '#fff'
    }
  }, category && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--gold-200)',
      marginBottom: 6
    }
  }, category), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      lineHeight: 1.25
    }
  }, name), (year || country) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: .8,
      marginTop: 4
    }
  }, [country, year].filter(Boolean).join(' · '))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: 'var(--gradient-gold)',
      transform: h ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform var(--dur-slow) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { AwardeeCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/AwardeeCard.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureCard.jsx
try { (() => {
function FeatureCard({
  image,
  eyebrow,
  title,
  children,
  cta,
  href = '#',
  tone = 'light'
}) {
  const [h, setH] = React.useState(false);
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: dark ? 'var(--violet-800)' : '#fff',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: h ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      transform: h ? 'translateY(-4px)' : 'none',
      transition: 'all var(--dur-base) var(--ease-standard)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/10',
      background: `url(${image}) center/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--gold-600)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.25,
      color: dark ? '#fff' : 'var(--brand-primary)'
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.65,
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-body)'
    }
  }, children), cta && /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      marginTop: 'auto',
      paddingTop: 6,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: h ? 'var(--gold-600)' : dark ? 'var(--gold-200)' : 'var(--violet-700)',
      display: 'inline-flex',
      gap: 8,
      alignItems: 'center'
    }
  }, cta, " ", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right-long"
  }))));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Hero.jsx
try { (() => {
function Hero({
  image = 'assets/photos/award-stage-01.jpg',
  eyebrow,
  title,
  children,
  actions,
  minHeight = 620,
  align = 'left'
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight,
      display: 'flex',
      alignItems: 'center',
      background: `url(${image}) center/cover`,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(36,1,69,.94) 0%,rgba(68,3,167,.72) 50%,rgba(80,2,185,.2) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '96px var(--container-pad)',
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: align === 'center' ? '0 auto' : 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(36px,5vw,58px)',
      lineHeight: 1.1,
      letterSpacing: '-.02em',
      color: '#fff',
      textWrap: 'balance'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      lineHeight: 1.65,
      color: 'var(--text-on-dark-muted)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, actions))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Hero.jsx", error: String((e && e.message) || e) }); }

// components/content/PartnerStrip.jsx
try { (() => {
function PartnerStrip({
  logos = [],
  height = 64
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '32px 56px'
    }
  }, logos.map((l, i) => typeof l === 'string' && /\.(png|jpe?g|svg|webp)$/i.test(l) ? /*#__PURE__*/React.createElement("img", {
    key: i,
    src: l,
    alt: "",
    style: {
      height,
      filter: 'grayscale(1)',
      opacity: .75
    }
  }) : /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height,
      minWidth: 140,
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px dashed var(--ink-300)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--ink-500)'
    }
  }, l)));
}
Object.assign(__ds_scope, { PartnerStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PartnerStrip.jsx", error: String((e && e.message) || e) }); }

// components/content/RoyalQuote.jsx
try { (() => {
function RoyalQuote({
  children,
  attribution,
  tone = 'light',
  size = 'md'
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      borderLeft: '4px solid var(--gold-600)',
      borderRadius: 4,
      paddingLeft: 24,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: size === 'lg' ? 26 : 20,
      lineHeight: 1.5,
      color: dark ? '#fff' : 'var(--brand-primary)',
      textWrap: 'pretty'
    }
  }, "\u201C", children, "\u201D"), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 14,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 15,
      color: dark ? 'var(--gold-200)' : 'var(--gold-700)'
    }
  }, "\u2014 ", attribution));
}
Object.assign(__ds_scope, { RoyalQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/RoyalQuote.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: '8px 18px',
    fontSize: 13
  },
  md: {
    padding: '13px 28px',
    fontSize: 15
  },
  lg: {
    padding: '16px 36px',
    fontSize: 16
  }
};
const variants = {
  primary: {
    background: 'var(--brand-primary)',
    color: '#fff',
    border: '2px solid var(--brand-primary)'
  },
  gold: {
    background: 'var(--gradient-gold)',
    color: 'var(--violet-950)',
    border: '2px solid transparent'
  },
  outline: {
    background: 'transparent',
    color: 'var(--brand-primary)',
    border: '2px solid var(--brand-primary)'
  },
  'outline-light': {
    background: 'transparent',
    color: '#fff',
    border: '2px solid #fff'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--brand-primary)',
    border: '2px solid transparent'
  }
};
const hovers = {
  primary: {
    background: 'var(--gold-600)',
    borderColor: 'var(--gold-600)',
    color: 'var(--violet-950)'
  },
  gold: {
    filter: 'brightness(1.08)'
  },
  outline: {
    background: 'var(--brand-primary)',
    color: '#fff'
  },
  'outline-light': {
    background: '#fff',
    color: 'var(--brand-primary)'
  },
  ghost: {
    color: 'var(--gold-700)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  disabled,
  href,
  onClick,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const st = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    letterSpacing: '.01em',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? .45 : 1,
    transition: 'all var(--dur-base) var(--ease-standard)',
    textDecoration: 'none',
    lineHeight: 1.2,
    ...sizes[size],
    ...variants[variant],
    ...(h && !disabled ? hovers[variant] : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: st,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }), children, iconRight && /*#__PURE__*/React.createElement("i", {
    className: iconRight,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  tone = 'gold',
  children,
  style
}) {
  const c = {
    gold: 'var(--gold-600)',
    light: 'var(--gold-200)',
    purple: 'var(--violet-500)',
    white: '#fff'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: c,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  align = 'center',
  tone = 'light',
  rule = true,
  level = 2,
  children
}) {
  const dark = tone === 'dark';
  const H = 'h' + level;
  const fs = {
    1: 'var(--fs-h1)',
    2: 'var(--fs-h2)',
    3: 'var(--fs-h3)'
  }[level] || 'var(--fs-h2)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      gap: 14
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: dark ? 'light' : 'gold'
  }, eyebrow), /*#__PURE__*/React.createElement(H, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: fs,
      lineHeight: 1.2,
      letterSpacing: '-.01em',
      color: dark ? '#fff' : 'var(--brand-primary)',
      textWrap: 'balance'
    }
  }, title), rule && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 70,
      height: 4,
      borderRadius: 999,
      background: 'var(--gradient-gold)'
    }
  }), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 1.65,
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-body)',
      maxWidth: 720
    }
  }, children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function SiteHeader({
  logo = 'assets/logo/raylf-logo-color.png',
  links = ['Home', 'About', 'Awards'],
  active = 'Home',
  onNavigate,
  tone = 'light'
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: dark ? 'transparent' : '#fff',
      borderBottom: dark ? '1px solid rgba(255,255,255,.15)' : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(links[0]);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "RAYLF \u2014 Royal African Young Leadership Forum",
    style: {
      height: 58,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, links.map(l => {
    const on = l === active;
    return /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(l);
      },
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 15,
        color: on ? dark ? 'var(--violet-950)' : 'var(--brand-primary)' : dark ? '#fff' : 'var(--brand-primary)',
        padding: '8px 18px',
        borderRadius: 999,
        background: on ? dark ? 'var(--gold-200)' : 'var(--violet-100)' : 'transparent'
      }
    }, l);
  }))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SocialLinks.jsx
try { (() => {
const icons = {
  facebook: 'fa-brands fa-facebook-f',
  x: 'fa-brands fa-x-twitter',
  instagram: 'fa-brands fa-instagram',
  youtube: 'fa-brands fa-youtube'
};
function SocialLinks({
  networks = ['facebook', 'x', 'instagram'],
  tone = 'light',
  variant = 'icons',
  handle = 'royalafricanlyf',
  site = 'raylf.org'
}) {
  const dark = tone === 'dark';
  if (variant === 'pill') return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: '#fff',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 22px 10px 12px',
      boxShadow: 'var(--shadow-md)',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 17,
      color: 'var(--ink-900)'
    }
  }, networks.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      border: '1.5px solid var(--ink-900)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: icons[n]
  }))), /*#__PURE__*/React.createElement("span", null, handle), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      border: '1.5px solid var(--ink-900)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14,
      marginLeft: 10
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-globe"
  })), /*#__PURE__*/React.createElement("span", null, site));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, networks.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    "aria-label": n,
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: dark ? 'rgba(255,255,255,.08)' : 'var(--brand-primary)',
      color: dark ? 'var(--gold-200)' : '#fff',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: icons[n]
  }))));
}
Object.assign(__ds_scope, { SocialLinks });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SocialLinks.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  logo = 'assets/logo/raylf-logo-white.png',
  mission = 'RAYLF’s mission is to redefine centuries of the rich resilient spirit of African Kingdoms which embodies many defining principles of its identity',
  links = ['Royal African Foundation', 'Ooni of Ife Global Outreach', 'About Ooni of Ife'],
  email = 'info@royalafrican.foundation'
}) {
  const h5 = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 18,
    color: '#fff',
    margin: '0 0 18px'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--violet-950)',
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--container-pad) 48px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr) minmax(0,1fr)',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "RAYLF",
    style: {
      height: 84,
      display: 'block',
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.7,
      maxWidth: 360
    }
  }, mission)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    style: h5
  }, "Important Links"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-right",
    style: {
      fontSize: 10,
      color: 'var(--gold-500)'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    style: h5
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    style: {
      color: 'var(--gold-200)',
      fontSize: 14
    }
  }, email), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SocialLinks, {
    tone: "dark"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.1)',
      textAlign: 'center',
      padding: '18px 24px',
      fontSize: 13
    }
  }, "\xA9 ", new Date().getFullYear(), " Royal African Young Leadership Forum"));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/social/SocialPost.jsx
try { (() => {
const ICON = {
  youtube: 'fa-brands fa-youtube',
  facebook: 'fa-brands fa-facebook-f',
  instagram: 'fa-brands fa-instagram',
  x: 'fa-brands fa-x-twitter'
};
function Pill({
  networks,
  handle,
  site,
  u
}) {
  const ic = {
    width: 30 * u,
    height: 30 * u,
    borderRadius: '50%',
    border: 1.6 * u + 'px solid var(--ink-900)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14 * u,
    background: '#fff'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6 * u,
      background: '#fff',
      borderRadius: 999,
      padding: 7 * u + 'px ' + 22 * u + 'px ' + 7 * u + 'px ' + 8 * u + 'px',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 19 * u,
      color: 'var(--ink-900)',
      whiteSpace: 'nowrap',
      boxShadow: '0 6px 20px rgba(36,1,69,.25)'
    }
  }, networks.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: ic
  }, /*#__PURE__*/React.createElement("i", {
    className: ICON[n]
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 4 * u
    }
  }, handle), /*#__PURE__*/React.createElement("span", {
    style: {
      ...ic,
      marginLeft: 16 * u
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-globe"
  })), /*#__PURE__*/React.createElement("span", null, site));
}
function SocialPost({
  variant = 'greeting',
  width = 432,
  headline,
  body,
  highlight,
  image,
  logo = 'assets/logo/raylf-logo-white.png',
  networks = ['youtube', 'facebook', 'instagram'],
  handle = 'royalafricanlyf',
  site = 'raylf.org',
  showPill = true
}) {
  const u = width / 432,
    H = width * 1.25;
  const base = {
    width,
    height: H,
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'var(--font-body)',
    color: '#fff',
    flex: 'none'
  };
  const hl = {
    margin: 0,
    fontFamily: 'var(--font-body)',
    fontWeight: 400,
    fontSize: 44 * u,
    lineHeight: 1.08,
    letterSpacing: '-.025em',
    color: '#fff'
  };
  const bd = {
    margin: 0,
    fontWeight: 500,
    fontSize: 15.5 * u,
    lineHeight: 1.45,
    color: 'rgba(255,255,255,.92)',
    textWrap: 'balance'
  };
  const hi = {
    margin: 0,
    fontWeight: 500,
    fontSize: 15.5 * u,
    lineHeight: 1.45,
    color: 'var(--gold-200)'
  };
  const pill = showPill && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 22 * u,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    networks: networks,
    handle: handle,
    site: site,
    u: u * .82
  }));
  if (variant === 'greeting') return /*#__PURE__*/React.createElement("div", {
    style: {
      ...base,
      background: 'var(--gradient-violet-sky)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '46%',
      width: 360 * u,
      height: 360 * u,
      marginLeft: -180 * u,
      borderRadius: '50%',
      background: 'radial-gradient(circle,#f3e6ff 0%,#e3c9ff 45%,rgba(180,73,220,.0) 72%)'
    }
  }), image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '49%',
      width: 300 * u,
      height: 300 * u,
      marginLeft: -150 * u,
      borderRadius: '50%',
      background: `url(${image}) center 25%/cover`,
      boxShadow: '0 0 60px rgba(243,230,255,.6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 130 * u,
      background: 'linear-gradient(180deg,rgba(180,73,220,0),rgba(111,38,207,.9))'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "RAYLF",
    style: {
      position: 'absolute',
      top: 30 * u,
      left: '50%',
      transform: 'translateX(-50%)',
      height: 58 * u
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 108 * u,
      left: 30 * u,
      right: 30 * u,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 10 * u
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: hl
  }, headline), body && /*#__PURE__*/React.createElement("p", {
    style: bd
  }, body), highlight && /*#__PURE__*/React.createElement("p", {
    style: hi
  }, highlight)), pill);
  if (variant === 'festive') return /*#__PURE__*/React.createElement("div", {
    style: {
      ...base,
      background: 'var(--gradient-midnight)'
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '48%',
      background: `url(${image}) center/cover`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,#300158 0%,rgba(48,1,88,.2) 40%,rgba(36,1,69,.75) 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 96 * u,
      left: 36 * u,
      right: 120 * u,
      display: 'flex',
      flexDirection: 'column',
      gap: 14 * u
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...hl,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 50 * u,
      color: 'var(--gold-script)',
      letterSpacing: '-.01em'
    }
  }, headline), body && /*#__PURE__*/React.createElement("p", {
    style: {
      ...bd,
      textWrap: 'pretty',
      fontWeight: 400
    }
  }, body), highlight && /*#__PURE__*/React.createElement("p", {
    style: {
      ...bd,
      fontWeight: 700,
      color: '#fff'
    }
  }, highlight)), /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "RAYLF",
    style: {
      position: 'absolute',
      bottom: 24 * u,
      left: '50%',
      transform: 'translateX(-50%)',
      height: 50 * u
    }
  }));
  // photo
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...base,
      background: image ? `url(${image}) center/cover` : 'var(--violet-700)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(69,1,114,.96) 0%,rgba(106,13,164,.55) 38%,rgba(106,13,164,.15) 62%,rgba(33,11,57,.92) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 40 * u,
      left: 24 * u,
      right: 24 * u,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 10 * u
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...hl,
      fontWeight: 600,
      fontSize: 46 * u,
      background: 'linear-gradient(180deg,#fff 30%,#d9c3f2 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, headline), body && /*#__PURE__*/React.createElement("p", {
    style: {
      ...bd,
      color: 'var(--gold-200)',
      fontSize: 17 * u
    }
  }, body)), /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "RAYLF",
    style: {
      position: 'absolute',
      bottom: (showPill ? 72 : 26) * u,
      left: '50%',
      transform: 'translateX(-50%)',
      height: 50 * u
    }
  }), pill);
}
Object.assign(__ds_scope, { SocialPost });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/SocialPost.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
const {
  SectionHeading,
  FeatureCard,
  Eyebrow,
  RoyalQuote
} = window.RAYLFDesignSystem_f4d804;
function PageBanner({
  title,
  crumb,
  image
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '110px 24px 90px',
      background: `linear-gradient(90deg,rgba(36,1,69,.94),rgba(80,2,185,.55)),url(${image}) center/cover`,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light"
  }, crumb), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(34px,4.5vw,52px)',
      color: '#fff',
      letterSpacing: '-.02em'
    }
  }, title)));
}
function AboutPage() {
  const A = '../../assets/';
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageBanner, {
    crumb: "RAYLF 2024",
    title: "Royal African Young Leadership Forum",
    image: A + 'photos/royal-audience.jpg'
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      fontSize: 17,
      lineHeight: 1.75
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 1.55,
      color: 'var(--brand-primary)'
    }
  }, "RAYLF mission is to redefine centuries of rich resilient spirit of African Kingdoms which embodies many defining principles of its identity such as economic prosperity, blessings of natural resources, valuable inheritance of its creative culture and human capacity\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "It has been established that the roadmap of the sustainable economic development of the continent could only be achieved from Africa owned investments in its human capacity through various spectrums."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "RAYLF remains a catalyst with finest aspirations of inspiring the future generations of Africa by: (a) shaping, (b) transforming, (c) anchoring and, (d) reconstructing a new economic frontier by establishing innovative clusters which is able to give Africa a competitive advantage."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "RAYLF is a program of the ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Royal African Foundation"), " of His Imperial Majesty, ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "OONI Adeyeye Enitan Ogunwusi, Ojaja II"), ", the 51st Ooni of Ife."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 24px',
      background: 'var(--brand-primary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "light"
  }, "Global Mission"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(26px,3.2vw,36px)',
      lineHeight: 1.35,
      color: '#fff',
      textWrap: 'balance'
    }
  }, "Unveiling the greatness of Africa future by inspiring, transforming, celebrating, and empowering its new best and brightest young leaders\u2019 success stories"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 70,
      height: 4,
      borderRadius: 999,
      background: 'var(--gradient-gold)'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Our History"
  }, /*#__PURE__*/React.createElement(RoyalQuote, null, "Ensuring a sustainable future for our young generations should be of immense concern to all those who care for the spirit, soul and memory of Africa.")), /*#__PURE__*/React.createElement("img", {
    src: A + 'brand/history-timeline.jpg',
    style: {
      width: '100%',
      maxWidth: 1024,
      margin: '0 auto',
      display: 'block',
      borderRadius: 24
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 24px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    image: A + 'photos/award-presentation-01.jpg',
    eyebrow: "Global Mission",
    title: "RAYLF Award",
    cta: "Read More"
  }, "The RAYLF Award is one of the world\u2019s leading organic and sustainable mechanisms or Africa young leadership achievement award that is harnessing, shaping and recognising the ambitions, energies and success stories of millions of 20 to 39-year olds across the globe."), /*#__PURE__*/React.createElement(FeatureCard, {
    tone: "dark",
    image: A + 'photos/speaker-portrait.jpg',
    eyebrow: "Programme",
    title: "G2G Millionaires",
    cta: "Read More"
  }, "The RAYLF Award is one of the world\u2019s leading organic and sustainable mechanisms or Africa young leadership achievement award that is harnessing, shaping and recognising the ambitions, energies and success stories of millions of 20 to 39-year olds across the globe."))));
}
Object.assign(window, {
  AboutPage,
  PageBanner
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Awards.jsx
try { (() => {
const {
  SectionHeading,
  AwardeeCard,
  Button
} = window.RAYLFDesignSystem_f4d804;
function AwardsPage() {
  const A = '../../assets/';
  const photos = ['award-certificate-01', 'award-presentation-02', 'award-certificate-03', 'award-presentation-04', 'award-greeting', 'award-presentation-03', 'award-certificate-02', 'award-presentation-01'];
  const cats = ['Leadership', 'Enterprise', 'Public Service', 'Creative Industry'];
  const [year, setYear] = React.useState('2024');
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageBanner, {
    crumb: "RAYLF Awards",
    title: "Celebrating Africa\u2019s young leaders",
    image: A + 'photos/award-stage-01.jpg'
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 24px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "About the Award"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "The RAYLF Award is one of the world\u2019s leading organic and sustainable mechanisms or Africa young leadership achievement awards that is harnessing, shaping, and recognising the ambitions, energies and success stories of millions of 20 to 39-year olds across the globe.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 24px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 32,
      fontWeight: 600,
      color: 'var(--brand-primary)'
    }
  }, "Awardees"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['2022', '2024'].map(y => /*#__PURE__*/React.createElement(Button, {
    key: y,
    size: "sm",
    variant: y === year ? 'primary' : 'outline',
    onClick: () => setYear(y)
  }, y)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))',
      gap: 20
    }
  }, photos.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p,
    onClick: () => setOpen(p),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(AwardeeCard, {
    photo: A + 'photos/' + p + '.jpg',
    category: cats[i % 4],
    name: "Awardee name",
    year: year
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Awardee names and categories are placeholders \u2014 the live Awards page lists no named recipients."))), open && /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(null),
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(36,1,69,.94)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'photos/' + open + '.jpg',
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius: 24,
      boxShadow: 'var(--shadow-lg)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(null),
    style: {
      position: 'absolute',
      top: 24,
      right: 28,
      background: 'none',
      border: 0,
      color: '#fff',
      fontSize: 26,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark"
  }))));
}
window.AwardsPage = AwardsPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Awards.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Hero,
  Button,
  SectionHeading,
  PartnerStrip,
  Eyebrow
} = window.RAYLFDesignSystem_f4d804;
function HomePage({
  go
}) {
  const A = '../../assets/';
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    image: A + 'photos/award-stage-01.jpg',
    eyebrow: "RAYLF 2024",
    title: "Redefining, Resetting, and Serving Young Africans",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      iconRight: "fa-solid fa-arrow-right",
      onClick: () => go('About')
    }, "About RAYLF")
  }, /*#__PURE__*/React.createElement("em", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19
    }
  }, "Ensuring a sustainable future for our young generations should be of immense concern to all those who care for the spirit, soul and memory of Africa"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-200)',
      fontWeight: 700
    }
  }, "\u2013 His Imperial Majesty (H.I.M) Ooni of Ife")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 24px',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    title: "Royal African Young Leadership Forum"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      lineHeight: 1.7
    }
  }, "RAYLF\u2019s mission is to redefine centuries of the rich resilient spirit of African Kingdoms which embodies many defining principles of its identity such as economic prosperity, blessings of natural resources, valuable inheritance of its creative culture and human capacity\u201D \u2013 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--brand-primary)'
    }
  }, "His Imperial Majesty (HIM). Ooni of Ife.")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('About')
  }, "Read More")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '-18px 18px 18px -18px',
      border: '2px solid var(--gold-600)',
      borderRadius: 32
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: A + 'photos/his-majesty-throne.jpg',
    style: {
      position: 'relative',
      width: '100%',
      display: 'block',
      borderRadius: 28,
      boxShadow: 'var(--shadow-lg)'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 24px',
      background: `linear-gradient(rgba(36,1,69,.88),rgba(36,1,69,.88)),url(${A}brand/africa-world-map.jpg) center/cover`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 28,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    title: "RAYLF Awards"
  }), /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 19,
      lineHeight: 1.7,
      color: 'var(--text-on-dark-muted)'
    }
  }, "The RAYLF Award is one of the world\u2019s leading organic and sustainable mechanisms or Africa young leadership achievement award that is harnessing, shaping and recognising the ambitions, energies and success stories of millions of 20 to 39-year olds across the globe."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline-light",
    onClick: () => go('Awards')
  }, "About"), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    onClick: () => go('Awards')
  }, "Awardees")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 24px',
      background: 'var(--surface-alt)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 44
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Our Partners"
  }), /*#__PURE__*/React.createElement(PartnerStrip, {
    logos: ['Partner 4', 'Partner 3', 'Partner 2', 'Partner 1']
  }))));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AwardeeCard = __ds_scope.AwardeeCard;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.PartnerStrip = __ds_scope.PartnerStrip;

__ds_ns.RoyalQuote = __ds_scope.RoyalQuote;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.SocialLinks = __ds_scope.SocialLinks;

__ds_ns.SocialPost = __ds_scope.SocialPost;

})();
