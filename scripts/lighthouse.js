/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = () => {
  const fs = require('fs');

  const score = (res) => (res >= 90 ? '🟢' : res >= 50 ? '🟠' : '🔴');
  const formatResult = (res) => Math.round(res * 100);

  const results = JSON.parse(fs.readFileSync(`./lhci_reports/manifest.json`));

  let comments = '';

  results.forEach((result) => {
    const { url, summary, jsonPath } = result[0];
    const details = JSON.parse(fs.readFileSync(jsonPath));

    const { audits } = details;

    Object.keys(summary).forEach(
      (key) => (summary[key] = formatResult(summary[key]))
    );

    const [, pageName] = url.split('3000');

    const comment = [
      `🏋🏻 Gymhub의 Lighthouse 리포트입니다 🏋🏻 `,
      `| Category | Score |`,
      `| --- | --- |`,
      `| ${score(summary.performance)} Performance | ${summary.performance} |`,
      `| ${score(summary.accessibility)} Accessibility | ${
        summary.accessibility
      } |`,
      `| ${score(summary[`best-practices`])} Best Practices | ${
        summary[`best-practices`]
      } |`,
      `| ${score(summary.seo)} SEO | ${summary.seo} |`,
      `| ${score(summary.pwa)} PWA | ${summary.pwa} |`,
    ].join('\n');

    const detail = [
      `| Category | Score |`,
      `| --- | --- |`,
      `| ${score(
        audits[`first-contentful-paint`].score * 100
      )} First Contentful Paint | ${
        audits[`first-contentful-paint`].displayValue
      } |`,
      `| ${score(
        audits[`speed-index`].score * 100
      )} Speed Index | ${
        audits[`speed-index`].displayValue
      } |`,
      `| ${score(
        audits[`total-blocking-time`].score * 100
      )} Total Blocking Time | ${
        audits[`total-blocking-time`].displayValue
      } |`,
      `| ${score(
        audits[`largest-contentful-paint`].score * 100
      )} Largest Contentful Paint | ${
        audits[`largest-contentful-paint`].displayValue
      } |`,
      `| ${score(
        audits[`cumulative-layout-shift`].score * 100
      )} Cumulative Layout Shift | ${
        audits[`cumulative-layout-shift`].displayValue
      } |`
    ].join("\n");

    comments += `${comment}\n\n${detail}\n\n`;
  });

  return comments;
};
