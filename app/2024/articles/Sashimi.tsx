import {Page} from '@/components/Page'
import {Title} from '@/components/Title'
import {getArticleInfo, getStartPage} from '@/app/lib'
import {articleInfoList} from '@/app/2024/articleInfoList'
import {Image} from '@/components/Image'
import {TwoColumn} from '@/components/TwoColumn'

export function Sashimi() {
  const info = getArticleInfo('sashimi', articleInfoList)
  const startPage = getStartPage(info.id, articleInfoList)

  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <Title articleInfo={info}/>
        <Image height={'56mm'} src={'/2024/sashimi/photo.jpg'} alt={'中央区大江戸まつり盆踊り大会(浜町公園)'}/>
        <p>盆踊り。櫓（やぐら）を囲んで輪になり、太鼓と歌に合わせて踊る夏の風物詩の一つ。</p>
        <p>夏のイベントの中でも、花火大会や夏祭りと違い足を運ぶ機会が無かったり、現地へ行っても踊るのはハードルが高いと思う方も多いのではと思います。</p>
        <p>しかし、実はハードルの低〜いクラブイベントみたいなもので、一歩踏み出し輪に入ってみると、会場一体で盛り上がる楽しい催しだったのです。老若男女、踊りの上手さ、見た目や服装、地元民か否かに関わらず、どんな人でも輪に加わる事ができます。幻想的な空間で写真を撮れば映えますし、お金もあまりかからずに遊べます。こんな楽しいイベントに参加しないなんてもったいない。</p>
        <p>本稿は、まだ盆踊りの楽しさを知らない方に向けて、夏の楽しみを一つ増やすことができればと思い執筆しました。次の夏はぜひ、盆踊りに参加してみていただけたら嬉しいです。</p>
        <h2>盆踊りとの出会い</h2>
        <p>筆者が初めて盆踊りに参加したのは2018年。子供時代に夏祭りはあれど盆踊り大会は近所に無く、大人になり盆踊りが盛んな東京都中央区に住み始めてから出会いました。</p>
        <p>ある夏の日、近所を歩いていると太鼓の音が聞こえ、見に行ってみると道端で小規模な盆踊りが開催されていました。小さな櫓を囲み、30〜40人ほどが楽しそうに踊っていました。</p>
      </Page>
      <Page pageNumber={startPage + 1}>
        <p>中央区で盆踊りがある事自体は知っていましたが、何が楽しいのかよく分からなかったのと、地元民では無いので自分には接点が無いように思い、進んで行く事はなかったため、実際に会場に行ったのは初めての事でした。</p>
        <p>しばらく見物していると、踊っている人から参加を促されました。振り付けも分からないし、普段着だし、気恥ずかしいし…と躊躇しましたが、思い切って輪に入り、見様見真似で踊ってみました。</p>
        <p>踊ってみると、振り付けはゆったりした数種類の振りをループする簡単なもので、曲の途中から踊れるようになった達成感がありました。そして同じ振りで踊れるようになると、その場の仲間に加わることができたように感じ、会場全体の盛り上がりの一員として、私の気持ちも高揚していきました。ライブで好きな曲が始まり、観客みんなで同じ合いの手を入れて高まるような感覚です。非日常空間での高揚感と適度な疲れで、夢の中のできごとのようにも感じる幸福な時間でした。この日、私は盆踊りファンになりました。</p>
        <p>それからは、マイペースに他の盆踊り大会にも参加するようになり、この楽しさを何度も味わうようになりました。年を取っても長く楽しめる趣味が一つ増えました。</p>
        <h2>盆踊り大会の種類</h2>
        <p>興味を持っていただいたあなた、まずは盆踊り大会に参加してみましょう。開催は７〜８月が主になります。以下、タイプ別の盆踊り大会をご紹介します。会場選びの参考にしてください。※都内の大会になります</p>
        <h3>神社やお寺の盆踊り</h3>
        <p>盆踊りの定番開催地。境内に設置された櫓と提灯はとても写真映えします。「築地本願寺
          納涼盆踊り大会」は、オリエンタルな本堂の前に櫓が設置され、独特な雰囲気を醸し出します。また混み合いますが、近隣飲食店が屋台を出しておりグルメも楽しめます。「靖国神社
          みたままつり」では、盆踊り以外にも、慰霊の提灯が大量に設置され、大変きれいな景色が楽しめます。「神田明神
          納涼祭り」は、アニソン盆踊りが有名。日によって通常の盆踊り曲の日もあります。人気があり人口密度がかなり高めです。</p>
        <h3>商業施設の盆踊り</h3>
        <p>商業施設の敷地内で行われる盆踊りです。アクセスが良く、疲れた時には施設内ですぐ涼めるので体力に自信が無い方でも安心です。ファミリーの参加も多めです。「サンシャインシティ納涼盆踊り大会」（池袋）、「ゆかたで銀ぶら
          大銀座盆踊り」（銀座 GINZA SIX）、「深川ギャザリア 盆踊り大会」（木場）、「六本木ヒルズ盆踊り」など。</p>
        <h3>大規模な盆踊り</h3>
        <p>街を上げて大きなスペースで開催しているタイプです。多数の屋台や、盆踊り以外の催しもある場合も。人出がかなり多く、休憩場所やルートなどを下調べしておくと安心です。「中野駅前大盆踊り大会」、「渋谷盆踊り」、「日比谷公園 丸の内音頭大盆踊り大会」など。</p>
      </Page>
      <Page pageNumber={startPage + 2}>
        <p>特におすすめしたいのが、「中央区大江戸まつり盆おどり大会」（浜町公園）です。盆踊りが盛んな中央区の各町の集大成となる盆踊り大会で、櫓を囲む人も10重程の大きな輪になります。広いグラウンドで行うため人口密度はそこまで高くなく、初めてでも気軽に入りやすいと思います。飲食の屋台は格安ですがかなり並ぶので、別途用意しておくと良いです。</p>
        <h3>小規模な盆踊り（小学校・公園・道端など）</h3>
        <p>主に地元の町会が主催となり、小規模に開催している盆踊りです。屋台がある場合は、同じく町会で出しており格安な事が多いです。小規模ならでは、混みすぎず踊りやすかったり、お試しで短時間参加してみるといったケースにも適しているでしょう。</p>
        <p>実際のスケジュール・開催場所は、以下サイトが都内の開催情報を多数掲載しているのでこちらで調べると便利です。<br/><i>「盆踊り大会情報」http://bondance.s1002.xrea.com/</i>
        </p>
        <h2>楽曲紹介</h2>
        <p>数多の盆踊り曲からごく一部を主観でご紹介。あなたのお気に入りの曲も見つけてください。YouTubeで検索すると、どんな振りか見ることができます。</p>
        <h3>「東京音頭」</h3>
        <p>難易度：★☆☆☆☆<br/>東京都内の定番曲。振り付けも優しく、5つの動作をループするだけなので初見ですぐ踊れるようになるでしょう。生歌が聴ける会場も。</p>
        <h3>「ダンシング・ヒーロー」</h3>
        <p>難易度：★☆☆☆☆<br/>筆者が盆踊りにハマるきっかけとなった曲。踊るだけでなく、周りの人と「ハイハイハイハイ！」と声を出して盛り上がる要素があり、よりハイテンションで楽しめる曲。中央区でよくかかります。</p>
        <h3>「牛ちゃんマンボ」</h3>
        <p>難易度：★★☆☆☆<br/>牛肉を食べようというキャンペーンソングで、振り付けがかわいく楽しい筆者のお気に入り曲。限られた会場でしかかからないようで、少なくとも「深川ギャザリア 盆踊り大会」（木場）では踊ることができました。</p>
        <h3>「東京オリンピック2020音頭」</h3>
        <p>難易度：★★★★★<br/>単純にループの振り付けではなく、さらに間奏で五輪競技を表すポーズが入り、とびきり難易度が高い曲。頑張って覚えたのにオリンピック開催以降は滅多にかからなくなってしまいました。</p>
      </Page>
      <Page pageNumber={startPage + 3}>
        <h2>ポジショニング</h2>
        <p>盆踊りの振り付けは簡単な振りのループが主なので、まずは輪に入って見様見真似で踊ってみればその場で覚えられる事が多いです。ですが周りも完璧に覚えている人もいれば、うろ覚えの人もいます。ここで上手い人を見ながら踊れると、振りの飲み込みもより早くなります。</p>
        <p>上手い人の見つけ方、一つは櫓の上です。見本となる踊りをする方が多いので、櫓の上を見ながら踊ってみましょう。または、櫓の周りの輪の中に、揃いの浴衣（白と紺をベースにした浴衣が多い）を着ている御婦人が何名かいたら、盆踊り協会や保存会の方の可能性が高いです。この団体の後ろ、1周外側にポジションを取れるとかなり踊りやすくなります。</p>
        <h2>装備</h2>
        <p>浴衣でも、普段着でも、スーツでも何でもOKですが、おすすめ装備やあると便利な持ち物をご紹介します。</p>
        <TwoColumn>
          <Image height={'70mm'} src={'/2024/sashimi/osusume.png'}/>
          <ul>
            <li>服装…やはり浴衣が最適です。気分も上がりますし、踊りの輪に入るハードルも下がります。</li>
            <li>靴…浴衣なら下駄や草履が合います。奥まで足を入れると靴擦れしやすいので、少し引いて履くのが基本です。中に足袋を履くと疲れにくく楽です。浴衣に合わせたサンダルでも。普段着なら動きやすい靴で。</li>
            <li>鞄…肩掛けで両手が空くバッグが便利です。手で持つタイプは踊る時に邪魔になるため避けた方が良いです。</li>
          </ul>
        </TwoColumn>
        <ul>
          <li>うちわ…ライブでタオルを振り回す曲があるように、盆踊りにはうちわ曲があります。帯の背中側に挿すのが基本スタイルです。</li>
          <li>手ぬぐい…手ぬぐい曲もありますので、鞄に入れておきましょう。汗拭きにも。</li>
          <li>飲み物…踊っている最中の水分補給用に、ペットボトルの飲み物は１本持っておきましょう。会場で飲料を販売している場合も多いですが、手持ちになるのでそれは休憩時に。</li>
        </ul>
      </Page>
      <Page pageNumber={startPage + 4}>
        <h2>おわりに</h2>
        <p>盆踊りに参加するようになってから、地域のイベントに興味が出始め、町内のお祭や餅つきに参加したり、お神輿も担ぐようになりました。果ては町内会の役員になり、イベントの運営側にもなってしまいました。地元民でなくても、子供がいなくても、地域のイベントは誰でも参加でき、貴重な体験ができたり、美味しい物が食べられたりするので、ぜひ足を運んでみてください。</p>
        <p>話が広がってしまいましたが、まずは、次の夏はぜひ盆踊りを体験してみていただけたら嬉しいです。良い盆踊りライフを！</p>
      </Page>
    </div>
  )
}
