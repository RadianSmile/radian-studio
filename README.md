# Gatsby 靜態部落格 

這是一個使用 Gatsby 與 Markdown/MDX 建立的個人部落格，具有公開文章和私人文章區域。

## 功能

- Markdown 和 MDX 支持
- 公開和私人文章區域（簡單密碼保護）
- 響應式設計
- 圖像優化
- 自動部署到 GitHub Pages

## 使用指南

### 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run develop
```

### 發布文章

- 公開文章：在 `content/public/` 資料夾中創建 Markdown 文件
- 私人文章：在 `content/private/` 資料夾中創建 Markdown 文件

### 部署

將此專案推送到 GitHub 儲存庫後，自動部署將通過 GitHub Actions 處理。

## 注意事項

- 預設登入密碼為 `your-secret-password`，請在實際使用前更改
- 目前實現的身分驗證僅為簡單示例，不適合生產環境使用
