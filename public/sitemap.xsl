<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="id">
<head>
    <title>KarawangDev - XML Sitemap</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style type="text/css">
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
            line-height: 1.6;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(45deg, #0093E9, #80D0C7);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2.5em;
            font-weight: bold;
        }
        .header p {
            margin: 10px 0 0 0;
            font-size: 1.2em;
            opacity: 0.9;
        }
        .stats {
            display: flex;
            justify-content: space-around;
            background: #f8f9fa;
            padding: 20px;
            border-bottom: 1px solid #e9ecef;
        }
        .stat-item {
            text-align: center;
        }
        .stat-number {
            font-size: 2em;
            font-weight: bold;
            color: #0093E9;
        }
        .stat-label {
            color: #666;
            font-size: 0.9em;
        }
        .content {
            padding: 30px;
        }
        .url-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
            border-radius: 10px;
            overflow: hidden;
        }
        .url-table th {
            background: linear-gradient(45deg, #0093E9, #80D0C7);
            color: white;
            padding: 15px;
            text-align: left;
            font-weight: 600;
        }
        .url-table td {
            padding: 12px 15px;
            border-bottom: 1px solid #e9ecef;
        }
        .url-table tr:hover {
            background-color: #f8f9fa;
        }
        .url-link {
            color: #0093E9;
            text-decoration: none;
            font-weight: 500;
        }
        .url-link:hover {
            text-decoration: underline;
            color: #007acc;
        }
        .priority-high { color: #28a745; font-weight: bold; }
        .priority-medium { color: #ffc107; font-weight: bold; }
        .priority-low { color: #6c757d; }
        .changefreq {
            background: #e9ecef;
            padding: 4px 8px;
            border-radius: 15px;
            font-size: 0.85em;
            color: #495057;
        }
        .lastmod {
            color: #6c757d;
            font-size: 0.9em;
        }
        .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            color: #6c757d;
            border-top: 1px solid #e9ecef;
        }
        .note {
            background: #e3f2fd;
            border-left: 4px solid #2196f3;
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
        }
        @media (max-width: 768px) {
            .stats { flex-direction: column; gap: 15px; }
            .url-table { font-size: 0.9em; }
            .header h1 { font-size: 2em; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🗺️ KarawangDev Sitemap</h1>
            <p>XML Sitemap untuk Komunitas Developer Karawang</p>
        </div>
        
        <div class="stats">
            <div class="stat-item">
                <div class="stat-number"><xsl:value-of select="count(//url)"/></div>
                <div class="stat-label">Total URLs</div>
            </div>
            <div class="stat-item">
                <div class="stat-number"><xsl:value-of select="count(//image:image)"/></div>
                <div class="stat-label">Images</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">SEO</div>
                <div class="stat-label">Optimized</div>
            </div>
        </div>

        <div class="content">
            <div class="note">
                <strong>📋 Tentang Sitemap Ini:</strong> 
                Sitemap XML ini membantu mesin pencari Google, Bing, dan lainnya untuk menemukan dan mengindex semua halaman penting di website KarawangDev. 
                Setiap URL memiliki prioritas, frekuensi update, dan informasi gambar untuk optimasi SEO maksimal.
            </div>

            <table class="url-table">
                <thead>
                    <tr>
                        <th>📄 URL</th>
                        <th>🎯 Priority</th>
                        <th>🔄 Change Frequency</th>
                        <th>📅 Last Modified</th>
                    </tr>
                </thead>
                <tbody>
                    <xsl:for-each select="//url">
                        <xsl:sort select="priority" order="descending"/>
                        <tr>
                            <td>
                                <a href="{loc}" class="url-link" target="_blank">
                                    <xsl:value-of select="loc"/>
                                </a>
                            </td>
                            <td>
                                <xsl:attribute name="class">
                                    <xsl:choose>
                                        <xsl:when test="priority &gt;= 0.8">priority-high</xsl:when>
                                        <xsl:when test="priority &gt;= 0.6">priority-medium</xsl:when>
                                        <xsl:otherwise>priority-low</xsl:otherwise>
                                    </xsl:choose>
                                </xsl:attribute>
                                <xsl:value-of select="priority"/>
                            </td>
                            <td>
                                <span class="changefreq">
                                    <xsl:value-of select="changefreq"/>
                                </span>
                            </td>
                            <td class="lastmod">
                                <xsl:value-of select="lastmod"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </tbody>
            </table>
        </div>

        <div class="footer">
            <p>Generated automatically by KarawangDev • Last updated: <xsl:value-of select="//lastmod[1]"/></p>
            <p>🚀 Untuk mesin pencari: Google, Bing, Yahoo, DuckDuckGo</p>
        </div>
    </div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>