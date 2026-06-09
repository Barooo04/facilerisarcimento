import Script from "next/script";

const IUBENDA_CONFIG = `
var _iub = _iub || [];
_iub.csConfiguration = {"siteId":4560318,"cookiePolicyId":48112937};
_iub.csLangConfiguration = {"it":{"cookiePolicyId":48112937}};
`;

export default function IubendaScripts() {
  return (
    <>
      <Script id="iubenda-cs-config" strategy="beforeInteractive">
        {IUBENDA_CONFIG}
      </Script>
      <Script
        id="iubenda-autoblocking"
        src="https://cs.iubenda.com/autoblocking/4560318.js"
        strategy="beforeInteractive"
      />
      <Script
        id="iubenda-cs"
        src="https://cdn.iubenda.com/cs/iubenda_cs.js"
        strategy="afterInteractive"
        async
      />
    </>
  );
}
