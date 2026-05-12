# Sovya Brand Landing

_Started 2026-05-11 23:22 UTC_

---

## User

Brand
Product name: Sovya
Tagline: Building without the blindfolds. (use this unless you have a stronger instinct — open to iteration)
Logo: Wordmark only — "Sovya" set in Bricolage Grotesque ExtraBold, with the period after it rendered in amber (#E8873A). No icon or mark needed.
Colour system

Canvas/background: #F5F1EA (warm parchment off-white)
Primary text: #1A1C2E (deep navy, near-black)
Accent: #E8873A (amber — use sparingly, maximum twice on screen)
Surface/card: #FFFFFF
Secondary text: #6B6760

Typography

Display/headline: Bricolage Grotesque ExtraBold (via Google Fonts)
Body: DM Sans Regular/Medium (via Google Fonts)
Editorial moment (optional): DM Serif Display Italic for a single accent line

Layout direction
Bold and direct. Full-viewport hero. Statement headline, short subline, then two distinct signup panels side by side — one for builders, one for homeowners. Generous whitespace. One dominant amber accent moment. No clutter.
Signup panels
Two separate email capture forms:

Left panel: "I'm a builder" — label: Builder early access
Right panel: "I'm a homeowner" — label: Homeowner early access
Each captures email only. Simple, clean CTA button per panel. Buttons in navy with amber hover or vice versa.

Copy direction
Headline should feel like a statement, not a feature list. Residential construction communication is broken — Sovya fixes it. Bold, credible, warm. Not hype.
Mood
Think: premium trades brand meets considered tech product. Not corporate. Not startup-flashy. Grounded, confident, Australian.
What to avoid

Purple gradients, generic SaaS aesthetic
House/hammer/hardhat iconography
Overcrowded layouts
More than two accent colour uses per screen

## Assistant

_[tool: copy_starter_component]_

I have everything I need from the brief — going to build this as a full-bleed interactive landing page with the two signup panels, real form validation, success states, and a Tweaks panel for headline/layout variations.

My aesthetic commitments before building:
- **Type**: Bricolage Grotesque ExtraBold for the display headline (huge, tight tracking), DM Sans for body/forms, DM Serif Display Italic for one editorial accent line
- **Color discipline**: amber appears exactly twice — the period in the wordmark, and one CTA accent (rotating between panels on hover). Everything else is navy on parchment.
- **Headline**: leading with a statement, not a feature pitch. Going to draft a few and expose them as a Tweak so you can pick.
- **Layout**: massive hero headline, panels sit on a clean horizontal divider — feels structural, not card-y.

_[tool: write_file]_

_[tool: str_replace_edit]_

Now the styles and main HTML:

_[tool: write_file]_

## Assistant

Now the styles and the HTML shell:

_[tool: write_file]_

_[tool: write_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

Good, my API usage matches. Let me verify `useTweaks` setter signature and ship.

_[tool: snip]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Shipped **Sovya Landing.html** — full-bleed hero with the statement headline, two side-by-side signup panels (Builder / Homeowner) with real validation + success states, and a Tweaks panel.

**What's tweakable** (toggle Tweaks on):
- **Headline statement** — three drafts: "Building without the blindfolds." / "The build shouldn't be a guessing game." / "Clarity is the new contract."
- **Editorial italic line** — toggle the DM Serif Display accent on/off
- **Panel layout** — side-by-side vs stacked
- **Amber accent on** — flips the single amber CTA between Builder and Homeowner (keeps the two-uses-max rule with the wordmark period)

**Next steps if you want them:** a logo lockup beneath the wordmark, a discreet "what is Sovya" reveal for cold visitors, or a third panel for trade subcontractors.

## User

Verifier agent check completed

## Assistant

_[tool: str_replace_edit]_

_[tool: done]_

Fixed — removed the stray grid item that was knocking the panels out of their columns. Builder | divider | Homeowner now sit correctly side-by-side.

## User

Let's edit. 

Font to be used for heading should be like 'gday matt' screenshot. ALso, all secondary copy can be DM sans. 
Chnage background colour to WHITE
Center align heading copy
round corners on email capture
place email capture in bright sovya orange rounded corner boxes
logo is attached.

## Assistant

_[tool: snip]_

_[tool: copy_files]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Updated — white background, headline centered in Hanken Grotesk 900 (heavy geometric like your reference), amber rounded panels around each email capture with white rounded input + dark button inside. Editorial italic line dropped. The two panels use slightly different amber tones (deeper on Builder, softer on Homeowner) so they read as distinct without breaking the brand.

_[tool: snip]_

Ending turn — verifier is running in the background.

## User

Verifier agent check completed

## Assistant

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Bumped hero headline line-height to 1.0 — ascenders/descenders no longer collide between "without the" and "blindfolds."

## User

Apply comment

## Assistant

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Both CTAs now read "Keep me in the loop."

## User

Apply 12 direct edits:
1. In Sovya Landing.html: wrap the text "" in a span with inline style color "rgb(0, 0, 0)" inside this element.
<mentioned-element>
react:    App
dom:      body › div#root › div.page.is-mounted › main.hero › p.hero-sub[3/3]
text:     "Residential construction runs on phone calls, half-truths a…"
children: text
selector: [data-om-id="jsx:/https:/019e1959-95ed-7084-a757-47551b23b4a0.claudeusercontent.com/v1/design/proje…
id:       cc-27
</mentioned-element>
2. In Sovya Landing.html: change the text from "Residential construction runs on phone calls, half-truths and crossed fingers. Sovya gives builders and homeowners one shared source of truth — from contract to keys." to "Residential construction runs on phone calls, half-truths and crossed fingers. Sovya gives builders and homeowners one shared source of truth, from contract to keys.".
<mentioned-element>
react:    App
dom:      body › div#root › div.page.is-mounted › main.hero › p.hero-sub[3/3]
text:     "Residential construction runs on phone calls, half-truths a…"
children: text
selector: [data-om-id="jsx:/https:/019e1959-95ed-7084-a757-47551b23b4a0.claudeusercontent.com/v1/design/proje…
id:       cc-27
</mentioned-element>
3. In app.jsx (near line 82, <span>): change the text from "Request access" to "Keep ".
<mentioned-element>
react:    App › SignupPanel
dom:      body › … › div.panel.panel-builder › form.panel-form › div.field › button.btn › span.btn-label[1/2]
text:     "Request access"
children: text
selector: #root .panel-builder :is(button,input,textarea) >.btn-label
id:       cc-13
</mentioned-element>
4. In app.jsx (near line 82, <span>): change the text from "Keep " to "Keep me ".
<mentioned-element>
react:    App › SignupPanel
dom:      body › div#root › … › form.panel-form › div.field.field-error › button.btn › span.btn-label[1/2]
text:     "Keep"
children: text
selector: #root .panel-builder :is(button,input,textarea) >.btn-label
id:       cc-13
</mentioned-element>
5. In app.jsx (near line 82, <span>): change the text from "Keep me " to "Keep me  ".
<mentioned-element>
react:    App › SignupPanel
dom:      body › div#root › … › form.panel-form › div.field.field-error › button.btn › span.btn-label[1/2]
text:     "Keep me"
children: text
selector: #root .panel-builder :is(button,input,textarea) >.btn-label
id:       cc-13
</mentioned-element>
6. In app.jsx (near line 82, <span>): change the text from "Keep me  " to "Keep me   ".
<mentioned-element>
react:    App › SignupPanel
dom:      body › div#root › … › form.panel-form › div.field.field-error › button.btn › span.btn-label[1/2]
text:     "Keep me"
children: text
selector: #root .panel-builder :is(button,input,textarea) >.btn-label
id:       cc-13
</mentioned-element>
7. In app.jsx (near line 82, <span>): change the text from "Keep me   " to "Keep me in ".
<mentioned-element>
react:    App › SignupPanel
dom:      body › div#root › … › form.panel-form › div.field.field-error › button.btn › span.btn-label[1/2]
text:     "Keep me"
children: text
selector: #root .panel-builder :is(button,input,textarea) >.btn-label
id:       cc-13
</mentioned-element>
8. In app.jsx (near line 82, <span>): change the text from "Keep me in " to "Keep me in t ".
<mentioned-element>
react:    App › SignupPanel
dom:      body › div#root › … › form.panel-form › div.field.field-error › button.btn › span.btn-label[1/2]
text:     "Keep me in"
children: text
selector: #root .panel-builder :is(button,input,textarea) >.btn-label
id:       cc-13
</mentioned-element>
9. In app.jsx (near line 82, <span>): change the text from "Keep me in t " to "Keep me in the  ".
<mentioned-element>
react:    App › SignupPanel
dom:      body › div#root › … › form.panel-form › div.field.field-error › button.btn › span.btn-label[1/2]
text:     "Keep me in t"
children: text
selector: #root .panel-builder :is(button,input,textarea) >.btn-label
id:       cc-13
</mentioned-element>
10. In app.jsx (near line 82, <span>): change the text from "Keep me in the  " to "Keep me in the   ".
<mentioned-element>
react:    App › SignupPanel
dom:      body › div#root › … › form.panel-form › div.field.field-error › button.btn › span.btn-label[1/2]
text:     "Keep me in the"
children: text
selector: #root .panel-builder :is(button,input,textarea) >.btn-label
id:       cc-13
</mentioned-element>
11. In app.jsx (near line 82, <span>): change the text from "Keep me in the   " to "Keep me in the loop ".
<mentioned-element>
react:    App › SignupPanel
dom:      body › div#root › … › form.panel-form › div.field.field-error › button.btn › span.btn-label[1/2]
text:     "Keep me in the"
children: text
selector: #root .panel-builder :is(button,input,textarea) >.btn-label
id:       cc-13
</mentioned-element>
12. In app.jsx (near line 82, <span>): change the text from "Request access" to "Keep me in the loop ".
<mentioned-element>
react:    App › SignupPanel
dom:      body › … › div.panel.panel-homeowner › form.panel-form › div.field › button.btn › span.btn-label[1/2]
text:     "Request access"
children: text
selector: #root .panel-homeowner :is(button,input,textarea) >.btn-label
id:       cc-6
</mentioned-element>

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

Updated the subline copy — em-dash swapped for a comma. The other listed edits were intermediate typing states that resolved to text already in the file ("Keep me in the loop"), so no further changes needed there.

Note: I also see some direct edits in the file from your end — `body` background set to black, `DM Sans` font applied to the hero headline spans, dotted border on the topbar pill, etc. I left those alone since they were your edits, but let me know if any were experimental and you want them reverted (the headline in particular reads much better in Hanken 900 than DM Sans).

## User

Save this design as a PDF: Sovya Landing.html

## User

Apply 3 direct edits:
1. In app.jsx (near line 86, <div>): change the text from "Pop your email in first." to "We'll be sharing launch updates as we build".
<mentioned-element>
react:    App › SignupPanel
dom:      body › … › section.panels › div.panel.panel-homeowner › form.panel-form › div.form-msg.is-error[2/2]
text:     "Pop your email in first."
children: text
selector: #root .panel-homeowner .form-msg
id:       cc-15
</mentioned-element>
2. In app.jsx (near line 86, <div>): change the text from "Pop your email in first." to "Keep me in the loop ".
<mentioned-element>
react:    App › SignupPanel
dom:      body › … › section.panels › div.panel.panel-builder › form.panel-form › div.form-msg.is-error[2/2]
text:     "Pop your email in first."
children: text
selector: #root .panel-builder .form-msg
id:       cc-32
</mentioned-element>
3. In app.jsx (near line 86, <span>): change the text from "Keep me in the loop " to "We'll be sharing launch updates as we build".
<mentioned-element>
react:    App › SignupPanel
dom:      body › … › section.panels › div.panel.panel-builder › form.panel-form › div.form-msg.is-error › span
text:     "Keep me in the loop"
children: text
selector: #root .panel .form-msg >:is(h1,h2,h3,h4,h5,h6,p,li,dt,dd,blockquote,figcaption,label,span,a,em,stro…
id:       cc-33
</mentioned-element>

## Assistant

_[tool: read_file]_

_[tool: snip]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

_[tool: write_file]_

Empty-email error message updated. Also producing the print-ready HTML now since that request was interrupted earlier.

_[tool: read_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: show_html]_

_[tool: open_for_print]_

_[tool: snip]_

Print-ready page is open in a new tab — press **Cmd+P** (or Ctrl+P) and Save as PDF.

[Open print view manually](https://019e1959-95ed-7084-a757-47551b23b4a0.claudeusercontent.com/v1/design/projects/019e1959-95ed-7084-a757-47551b23b4a0/serve/Sovya%20Landing-print.html?t=c5fb6e1e5cbe52b46dd8a0af0cc0d178c00ef00bc9472017b7216d825955befc.a6abac97-111c-46bb-8ad8-417d15a0742f.f22aceff-b938-4a14-a775-00bee5f7c433.1778545363&direct=1)

## Assistant

[Print-ready file](https://019e1959-95ed-7084-a757-47551b23b4a0.claudeusercontent.com/v1/design/projects/019e1959-95ed-7084-a757-47551b23b4a0/serve/Sovya%20Landing-print.html?t=c5fb6e1e5cbe52b46dd8a0af0cc0d178c00ef00bc9472017b7216d825955befc.a6abac97-111c-46bb-8ad8-417d15a0742f.f22aceff-b938-4a14-a775-00bee5f7c433.1778545363&direct=1) — opens in a new tab, auto-triggers the print dialog. Save as PDF from there.

## User

Save as standalone HTML: Sovya Landing.html

## Assistant

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: super_inline_html]_

_[tool: snip]_

_[tool: present_fs_item_for_download]_

Standalone HTML is ready for download.

