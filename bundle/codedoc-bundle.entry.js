import { getRenderer } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/content/theme.ts';installTheme();
import { countCards } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/coding-blog-plugin/dist/es5/components/article-card/count-cards.js';countCards();
import { codeSelection } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { ToCToggle } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { Author } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/coding-blog-plugin/dist/es5/components/author/index.js';
import { ArticleCard } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/coding-blog-plugin/dist/es5/components/article-card/index.js';
import { ToCPrevNext } from '/home/runner/work/mikes.coding.blog/mikes.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';

const components = {
  '6GYQKk6kDqhHSr5+dnNTxQ==': ToCToggle,
  '53/8upsr/HA3mASWEGqLFw==': DarkModeSwitch,
  'yrxm2ysFWPVZimYKyIsVFA==': ConfigTransport,
  'XyqlV3eM7sgK0vzOrN6mVg==': Author,
  'Cta5bxIbaS4498yeJ/Rx1g==': ArticleCard,
  'lruOSyZ1eGALdDUWV/P5gA==': ToCPrevNext
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
