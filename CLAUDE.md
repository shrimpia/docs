# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 概要

シュリンピア（Misskey サーバー等を運営するコミュニティ）のユーザー向け公式ドキュメント。Astro + Starlight の静的サイトで、本文はすべて日本語（デフォルトロケールは `root` = `ja`）。

## コマンド

パッケージマネージャーは pnpm。使用コマンドは @package.json を読むこと。

- `pnpm build` は `astro check && astro build`。型チェックを単体で回すなら `pnpm astro check`。
- テストと linter、リンク切れの検出システムは無い。変更の検証は `pnpm build` で行う。

## 構成

コンテンツは `src/content/docs/` 以下の `.md` / `.mdx` で、パスがそのまま URL になる。frontmatter の `title` は必須（`docsSchema()`）で、既存ページは `description` も付けている。

### サイドバーとリダイレクト（`astro.config.mjs`）

ページの追加・移動では、ファイルだけでなく設定の更新が必要になることがある。

- `guidelines/` のサイドバーは手書きのリスト。新しいガイドラインは `sidebar` に追記しないと表示されない。
- `services/` と `hints/` は自動生成。表示順などは各ページの frontmatter `sidebar` で調整する。
- 旧 URL は `redirects` で維持している。ページを移動・改名したら旧パスのリダイレクトを追加する。

### Starlight のカスタマイズ

- `Head` / `Footer` / `MarkdownContent` を `src/components/` のコンポーネントで上書きしている。`MarkdownContent` は本文を Lutica Design System の記事カードで包む。
- `src/components/PageFrame.astro` はどこからも参照されておらず、現在は使われていない。
- テーマは Lutica Design System を適用している。`src/styles/lutica/` が DS 本体のコピー（`lutica` レイヤーに読み込み）で、`src/styles/global.scss` に Starlight との対応付けを書く。色や大きさは DS のトークンを `var()` で参照し、値を直書きしない。
- フォントは `https://koruri.shrimpia.network/koruri.css` を `head` で読み込む。
- `@` は `/src` のエイリアス。MDX からのコンポーネントや画像の読み込みに使う（例: `import Stub from '@/components/stub.md'`）。

## ドキュメント編集時の約束

- `guidelines/` のルール・ガイドラインは公式な規約文書。`guidelines/changelog.md` にルール変更の履歴を載せているので、内容を変更したら日付（`### YYYY/M/D: 内容`）と変更点を追記する。
- 本文は「です・ます」調。
