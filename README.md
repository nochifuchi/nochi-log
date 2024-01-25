# NOCHI LOG

Next.js を使用したブログサイトです。
GitHub リポジトリに Push すると GitHub Actions 経由で Firebase Hosting に自動デプロイされる仕組みになっています。
CSS フレームワークは Tailwind CSS を使用しています。

## 使用技術

- GitHub - コード管理
- GitHub Actions - CI/CD
- Docker - 開発環境
- Firebase Hosting - ホスティング
- Next.js (SSG) - ブログ機能
- Tailwind CSS - CSS フレームワーク

### ローカル環境立ち上げ

```bash
docker compose up -d
```

ログを見たい場合は以下を実行

```bash
docker compose up
```

停止する場合は以下を実行

```bash
docker compose down
```
