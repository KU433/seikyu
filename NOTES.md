# 開発テンプレ補足メモ

## Chakra UI設定に関する注意
- Emotionの _config エラーは React 19環境で発生。Reactは **18.2.0 に固定**。
- emotionCache.ts は default export にしないと undefined になる場合あり。

## 初期セットアップ時の注意
- 
ode_modules と .next はテンプレから削除して保存してOK
- package-lock.json は **必ず残すこと（依存バージョンを固定）**

## よく忘れること
- src/app/providers.tsx を layout.tsx に読み込むのを忘れがち
- Chakra UI のコンポーネントを使うページには "use client" を必ず書く

## 再インストール時の基本コマンド
- コピー先で以下のコマンドを実行すれば完全に復元可能：
npm install
npm run dev

## 技術スタック（バージョン）
- Next.js: 15.3.2
- React: 18.2.0
- Chakra UI: 2.8.1
- @emotion/react: 11.11.1
- @emotion/styled: 11.11.0
- framer-motion: 10.16.1

## その他
- App Router（src/app/）構成を採用
- FirebaseやPDF連携予定なら .env.example を作成しておくと再利用しやすい

---

 内容 | 理由 |
|------|------|
| 過去のエラー原因と対策 | 同じ罠を2回踏まなくて済む |
| `.env.local` の構成例 | FirebaseやAPIキーを後で使うとき用 |
| よく使うUIコードスニペット | ボタン、フォーム、カードなど |
| 初期のスクリーンショット | デザイン再現やUIテスト用に便利 |

---

## 保存フォルダ構成（おすすめ）

```plaintext
chakra-template/
├── src/
├── public/
├── .vscode/ (あれば)
├── README.md
├── NOTES.md ← これ超重要！
├── env.example
├── structure.md
├── package.json
├── package-lock.json
└── ...（Next.js 初期ファイル群）
