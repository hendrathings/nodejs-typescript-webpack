import * as Mustache from 'mustache';
declare function require(string): string;

// const mytemplate = require('./template.html');

export default class Templating {
  // template = `
  // <!DOCTYPE HTML>
  // <html>
  // <body onload="loadUser()">
  //   <div id="target">Loading...</div>
  //   <script id="template" type="x-tmpl-mustache">
  //     Hello {{ name }}!
  //   </script>

  //   * {{name}}
  //   * {{age}}
  //   * {{company}}
  //   * {{{company}}}
  //   * {{&company}}
  //   {{=<% %>=}}
  //   * {{company}}
  //   <%={{ }}=%>
  // </body>
  // </html>
  // `;

  template = require('./template.html');

  parse(data) {
    return Mustache.render(this.template, data);
  }
}