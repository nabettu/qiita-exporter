# Qiita の記事とってきて json に保存するやつ

## 使い方

1. このページから Qiita の個人用アクセストークンを取得します。https://qiita.com/settings/applications
2. 本リポジトリを clone し、root ディレクトリで yarn を実行します。
3. ターミナルで`yarn start ${1.で取得したTOKEN}` を実行します。
4. posts.json というファイル名で記事を取得した json が保存されます。やったね！

## 謝辞

データ取得部分は kawamataryo さんの以下のリポジトリをクローンさせていただいております 🙏

https://github.com/kawamataryo/qiita-backup-with-firebase
