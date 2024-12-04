import {Page} from '@/components/Page'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'
import {AtogakiLayout} from '@/components/AtogakiLayout'

export function Atogaki() {
  const info = getArticleInfo('atogaki', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)
  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <h2>編集後記</h2>
        <p>
          <b>ノンジャンル総合誌「サイバーメタルチンピラ」</b>お読み頂きありがとうございます！<br/>
          サイバーメタルチンピラは毎年冬コミで年１回発刊している合同誌です。今年起きた出来事や新たな趣味を、それぞれの執筆者が自由に発信できる場として活用しています。
        </p>
        <p>
          本サークルは３年目を迎え、今年は総勢１４名が集まる立派な合同誌となりました。嬉しい限りです。執筆者の皆様ならびに読者の皆様に多大なる感謝を申し上げます。<br/>
          当初は雑学や趣味を寄せ集めた同人誌になることを想定していましたが、今年も執筆者たちの「人生が垣間見える」なかなか熱い一冊に仕上がったのではないかと思います。
        </p>
        <p>
          情報発信できる場は多くありますが、自分の好きなことを自由に発信するというのは案外難しいものです。
          例えば「SNSで発信すると叩かれるかもしれない」「実社会では立場があって発信しづらい」「個人的な出来事なので発信する機会がなかった」などなど。<br/>
          「失恋」や「転職」のような、拡散したい訳ではないが誰かに聞いてほしいと思っている出来事だったり、「記録」として本に残しておきたい感情などもあることでしょう。
        </p>
        <p>
          本サークルは法律や公序良俗に反しない限り、執筆者の自由な発信を尊重しております。<br/>
          普段は善良な執筆者たちが、内に秘めたチンピラ感情を年末に爆発させ、また来年も善良な日々を過ごせるように。そんな場として次回の冬コミでも発刊できればと思います。
        </p>
        <br/>
        <p>
          ・・・と、つい真面目な文章になってしまったので、雑なことも書かねば。
        </p>
        <p>
          今年は訳あって<b>特殊なレンタカー(意味深)</b>を運転する機会が多かったのです。<br/>
          特殊なレンタカーの話は面白すぎるので割愛するとして(えぇ...)、返却した後、やはり自分の車が欲しくなっちゃったんですよね。同時期に他のチンピラ共も車買ってて超羨ましかったのもあるわね。いいなぁ。それで私も買ってしまいましたの。<b>Tesla
          Model 3</b>。
        </p>
        <p>
          テスラは電気自動車なんだけど、もはや車というか走るゲーミングPCなんですよね。<br/>
          運転席の画面で Steam
          が動くので本当にゲーミングPCとして使える。車のハンドル使ってレーシングゲームも遊べるのだけど本体のタイヤも動くのでシュール。謎機能や隠しコマンドも多くて、例えばドアをロックしたときの音を自分の好きな音に書き換えられるので、マクドナルドでポテトが揚がった音とか、Windowsのシャットダウン音とかに上書きできちゃう。鍵閉めるたびに流れるのがくだらなすぎて面白い(多分すぐ飽きる)。
        </p>
        <p>
          謎機能はさておき、AI制御の自動運転は大変優秀で次世代の車なんだなぁと感心します。AIといえば今年の<b>サイバーメタルチンピラガール</b>(表紙絵)もAIに描いてもらいました。昨年に引き続き生成絵のクオリティには驚かされます。来年の表紙にも期待。
        </p>
        <p>
          また著者の知人友人の方、次回の執筆に参加してみませんか？本当はもっとエクスタシーを感じてみたいんじゃないですか？最もフィジカルで、最もプリミティブで、そして最もフェティッシュな執筆活動をチンピラ一同応援させていただきます。
        </p>
        <p>
          来年も治安維持ノンジャンル総合誌こと、サイバーメタルチンピラをどうぞよろしく。
        </p>
        <p style={{textAlign: 'right'}}>編集担当 なのくろ</p>
      </Page>
      <Page pageNumber={startPage + 1}>
        <section>
          <AtogakiLayout articleInfoList={articleInfoList}/>
        </section>
        <section>
          <p>
            <b>謝辞</b><br/>
            プロローグ：檻総文人<br/>
            表紙絵生成：kuri<br/>
            サイバーメタルチンピラガール：白玉いおり<br/>
            猫：おこげ＆すあま<br/>
            編集長：kinoppyd / なのくろ
          </p>
        </section>
      </Page>
    </div>
  )
}
