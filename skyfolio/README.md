# Blue Atlas ポートフォリオサイト

## 使い方
1. `index.html` をブラウザで開くとサイトを確認できます。
2. `assets/` に画像（jpg/png/webp）や動画（mp4/webm）を追加します。
3. `index.html` の作品カードを編集します。`data-src="assets/ファイル名"` は拡大表示するメディアのパスです。画像のサムネイルも表示したい場合は、カード内の `<button class="work-image ..."> ... </button>` の内容を、1つ目のカードと同様に `<img src="assets/ファイル名" alt="作品の説明">` を使う形に変更します。動画はサムネイル用画像を別途用意するときれいに表示できます。
4. `hello@example.com` を自分のメールアドレスに変更してください。サイト名・自己紹介文も自由に変更できます。
5. Netlify Drop (https://app.netlify.com/drop) なら、このフォルダをドラッグ＆ドロップして公開できます。GitHub Pagesなどの静的ホスティングにも対応しています。

## ファイル構成
- `index.html` ページ構造・文章・作品情報
- `style.css` 配色・レイアウト・スマホ対応
- `script.js` フィルター・メニュー・作品拡大
- `assets/travel-moodboard.png` 提供されたムードボード

## 注意
- 2つの作品は仮のデザインです。ご自身の制作物に差し替えてください。
- 動画はファイルサイズを小さく圧縮すると読み込みが速くなります。
- Google Fontsを利用しているため、フォントの読み込みにはネット接続が必要です。


## プロフィール画像（追加）
`assets/ayaka-profile.png` は提供された水彩イラストです。`index.html` の `id="profile"` にプロフィール欄を追加しました。画像を変更する場合はこのファイルを差し替えてください。

公開する際は `skyfolio` フォルダ全体をアップロードしてください。HTMLファイルだけを移動するとCSS・画像が表示されません。


## AI動画作品の掲載方法
「03 — SELECTED WORKS」には AI Video カードを用意しています。
1. 動画を `assets/ai-video.mp4` という名前で配置してください（MP4推奨）。
2. `index.html` 内の `data-title="AI Video"` が付いた `article` の `data-src=""` を `data-src="assets/ai-video.mp4"` に変更します。
3. カードの見た目も動画のサムネイルに変えたい場合は、同じ場所の `.work-image` 内を画像または動画サムネイルに置き換えてください。
4. カードをクリックすると既存のライトボックスで動画を再生できます。

※ 現在は動画ファイルが未提供のため、AI Videoカードは掲載予定の状態です。
