
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>PC Club BD — Sitemap</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          body {
            margin: 0;
            background: #f5f7fb;
            color: #172033;
            font-family: Arial, sans-serif;
          }
          header {
            padding: 35px 6%;
            background: #101827;
            color: white;
          }
          header h1 { margin: 0 0 8px; }
          header p { margin: 0; color: #cbd5e1; }
          main {
            max-width: 1050px;
            margin: 30px auto;
            padding: 0 20px;
          }
          .panel {
            overflow: hidden;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            background: white;
          }
          .count {
            padding: 18px 22px;
            border-bottom: 1px solid #e2e8f0;
            color: #64748b;
          }
          table { width: 100%; border-collapse: collapse; }
          th, td {
            padding: 15px 22px;
            border-bottom: 1px solid #edf0f5;
            text-align: left;
          }
          th {
            background: #f8fafc;
            color: #475569;
            font-size: 12px;
            text-transform: uppercase;
          }
          a { color: #087e8b; text-decoration: none; }
          a:hover { text-decoration: underline; }
          tr:last-child td { border-bottom: 0; }
          footer {
            padding: 25px;
            color: #64748b;
            text-align: center;
            font-size: 13px;
          }
          @media (max-width: 600px) {
            th, td { padding: 12px 10px; overflow-wrap: anywhere; }
          }
        </style>
      </head>
      <body>
        <header>
          <h1>PC Club BD</h1>
          <p>Website Sitemap</p>
        </header>
        <main>
          <div class="panel">
            <div class="count">
              <xsl:value-of select="count(s:urlset/s:url)"/> website URLs
            </div>
            <table>
              <thead>
                <tr>
                  <th>Page URL</th>
                  <th>Last Modified</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="s:urlset/s:url">
                  <tr>
                    <td>
                      <a href="{s:loc}">
                        <xsl:value-of select="s:loc"/>
                      </a>
                    </td>
                    <td><xsl:value-of select="substring(s:lastmod, 1, 10)"/></td>
                    <td><xsl:value-of select="s:priority"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </main>
        <footer>PC Club BD · pcclubbd.com</footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
