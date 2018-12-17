# きれいな明朝とNuxt
Nuxt.jsで静的サイトを構築する際に、ページに含まれている日本語だけでフォントのサブセットを生成するデモページです。

https://neko.noplan.cc

## コマンド

``` bash
# インストール
$ yarn

# 開発
$ yarn dev

# 静的サイトの生成
$ yarn generate
```

## ローカルでフォントのサブセットを生成
ローカルでフォントのサブセットを生成する場合、 [pyftsubset](https://github.com/fonttools/fonttools)というPython製のツールを使用しているので事前にインストールしておく必要があります。

``` bash
$ pip install fonttools brotli
```

インストール後、下記のコマンドでフォントのサブセットを生成します。

``` bash
# ページから日本語を抽出してテキストファイルに出力
$ yarn font:subset

# サブセットしたWOFFの生成
$ yarn font:woff

# サブセットしたWOFF2の生成
$ yarn font:woff2

# 全部まとめてやる
$ yarn font:build
```
