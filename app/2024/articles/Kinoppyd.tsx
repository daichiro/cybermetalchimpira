import {Page} from '@/components/Page'
import {Title} from '@/components/Title'
import {getArticleInfo, getStartPage} from '@/app/2024/articleInfo'

export function Kinoppyd() {
  const info = getArticleInfo('kinoppyd')
  const startPage = getStartPage(info.id)

  return (
    <div id={info.id}>
      <Page pageNumber={startPage}>
        <Title articleInfo={info}/>
        <h2>Introduction</h2>
        <blockquote>「第一アロマとして襲ってくるのはカシスなどの黒い果実の爆発、そして舌に載せたときに鼻孔にまで抜けてゆく爽やかな数種類のハーブのニュアンス。これらの香りと味わいから、ブドウの品種は明らかに特上のカベルネ・ソーヴィニョンを中心としたものだとわかる（中略）そこにはわずかなナツメグや熟したイチジク——粒コショウなどの熟成香が漂いだし、天の恵みを思う存分受けた大地の力強さが永き眠りから目を覚ます（中略）そう——このワインは1982年——シャトー・ムートン・ロートシルト」</blockquote>
        <p>これは、神の雫という漫画の第二話で、天才ワイン評論家と呼ばれる人物が、銘柄が隠されたワインを口にして発した言葉です。銘柄を隠した状態でワインをテイスティングし、その性質を推量することををブラインドテイスティングといいますが、この漫画の天才評論家は香りとたったひとくちワインを口に含んだだけで、銘柄のみならずワインが作成された年数まで的中させます。では実際にブラインドテイスティングで、ワインの銘柄とヴィンテージ（ワインの制作された年）を言い当てることはできるのでしょうか？
          その答えは、ほぼ不可能です。現実の競技としてのブラインドテイスティングでは、主に「ブドウの品種」「ワインの産地」「製造年数」を当てる競技です。もちろん、その三点はほぼ必須となるだけで、他にも大会によって様々な要素を推察することはありますが、銘柄と製造年数をピタリと当てることを前提とした大会はありません。なぜならば、ブラインドテイスティングで銘柄を的中させることはあまりにも難易度が高く、なにか制限が無い限りはまったく競技にならないからです。そのため、ワインの香りをひと嗅ぎして銘柄と製造年数を的中させるのは、あくまでフィクションの中の出来事で、現実には不可能です。</p>
        <p>一方で、先にも説明したとおり、銘柄と製造年数を的中させずともブラインドテイスティングという競技そのものは現実に存在します。また、ソムリエ試験などでも、ブラインドテイスティングでワインの素性を説明できることは必須の項目となっています。つまり、銘柄と製造年数を同時に言い当てることはほぼ不可能である一方で、ブドウの品種やワインの産地、製造年数、場合によっては銘柄をも推察することは、競技として成り立ちます。先ほどの天才ワイン評論家の台詞も、最後の決め台詞以外の部分はワインの香りや味わいの要素を分解して、果実やスパイスの名前で置き換えて説明しています。その上で、この特徴であればカベルネ・ソーヴィニョンというブドウ品種がメインで作られたワインである、と推察しています。最後に1982年のシャトー・ムートン・ロートシルトだと断言する根拠はいまいち不明ですが、少なくともシャトー・ムートン・ロートシルトを構成するブドウの品種と、味わいの特徴からおそらくこの銘柄である、という推理は成立しています。</p>
      </Page>
      <Page pageNumber={startPage + 1}>
        <p>ワインの原材料はブドウです。ですが、ブドウにはたくさんの品種が存在します。ブドウは品種ごとに味や香りがわずかに異なります。そのため、ワインの香りや味や色などから、そのワインがどんなブドウから作られているのかを推測することができます。また、対象のワインがどんなブドウ品種から作られているかを推定できれば、気候や文化的にそのブドウが作られている地域や、地域ごとの作り方による味の特徴などから、どこで作られたのかの産地を推定することができます。さらに、ワインは熟成する飲み物であり、その熟成の過程にはある程度科学的な根拠が存在します。その根拠となる特徴を捉えていけば、製造年数をおおまかに推定することも可能です。これらの要素から、競技としてのブラインドテイスティングにおいて求められる「ブドウの品種」「ワインの産地」「製造年数」を当てることができるのです。とても簡単に言いましたが、ブドウには膨大な数の品種があり、主要なものに限定しても数十種あります。それらの品種は生産される国や地域ごとに微妙に異なった特徴を持つため、香りや味からその素性を推測することはできますが、確実に当てることは至難の業です。競技者は、それらブドウのわずかな特徴の違いを深く理解した上で、推定を行います。とてもよく訓練された競技者でも、正答を出すことは簡単ではありません。</p>
        <p>前置きが長くなりましたが、この記事ではワインの味を構成する要素を紹介し、それらを人間がどのように感じ取り、そして美味しいと感じるのか。競技としてのブラインドテイスティングの視点も交えながら、解説していきたいと思います。</p>
        <h2>ワインの構成要素</h2>
        <p>ワインの大部分は、水分でできています。ワインによって差はありますが、概ねワインボトルの中の液体のうち80%以上が水分です。この水分は、後から何かを添加していない限りは原材料のブドウの果汁に由来するもので、もっと遡るとブドウの樹が植わっている土壌から根が吸い上げた水分が元になっています。基本的には、ワインの生産国の法律ではワインにに水分を添加することを認めていないケースが多いです。そのため、ブドウの土壌がワインの味に大きな影響を及ぼすと言われています。非常に有名な例では、フランスブルゴーニュ地方北のシャブリという土地でできる白ワインは、ミネラル感が強い味がして、海産物の食事と良く合うといわれています。実はシャブリの土地は遙か昔には海の底にあり、その頃に堆積した貝殻などが石灰質の地層が特徴的な地域です。その地層から水分を吸い上げたブドウによってワインは作られるので、すなわちその地層の水分がワインの味に影響を及ぼしているとも言えます。もちろんそれだけが理由だけではありませんが、ワインの味を形成する要素として、ワインの中の水分ひいてはその水分が供給される土地の性質（テロワールと言ったりします）が重要であることは間違いありません。</p>
        <p>ワインの残り20%の成分のうち、大部分はアルコールです。通常であればワイン全体のうち低いもので8%、高いものでは15%ほどがアルコール分です。ブドウの糖を発酵させて生成できるアルコールの限界は16%ほどで、それ以上の度数のものはアルコールを添加してあるため酒精強化ワインと呼ばれます。ワインのアルコール度数は、基本的にブドウの中に存在する糖の量によって決まります。酒類のアルコールは、原料の糖分を酵母がアルコールに変換することに由来するので、アルコールの原料である糖が多ければ多いほど生成されるアルコールも多くなります。すなわち、ワインのアルコール度数は、原料になっているブドウの糖度と比例することになります。</p>
      </Page>
      <Page pageNumber={startPage + 2}>
        <p>一般的に、ブドウの糖度は品種や収穫時期、産地に左右されます。もともと糖度が高いブドウ品種から作られたワインはアルコール度数が高く、すっぱめのブドウ品種から作られたワインはアルコール度数が低いです。同じ品種でも、収穫する時期が後になればなるほど糖度は上がる傾向にあります。そのため、品種が特定できていれば、アルコール度数からどれくらい収穫を遅らせたかがわかります。また、日照時間が長ければ長いほどブドウは甘くなる傾向があります。そのため、日照時間が長い土地で作られるワインはアルコール度数が高く、日照時間が短い土地で作られたワインは酸が強くアルコール度数が低いことが多いです。</p>
        <p>さらに残りの数%は、グリセロール、糖、酸やタンニンなどのワインの味を決定づける成分が含まれています。これらは主に水溶性であれば水分に、そうでなければアルコールのなかに溶けています。この残りの数%で構成される味が、ブラインドテイスティングでブドウ品種と産地を特定するための重要な鍵です。酸は大きく分けて二種類あり、一つがブドウに由来する酸で、酒石酸、リンゴ酸、クエン酸などです。もう一つが、発酵の過程で生まれる乳酸、酢酸、コハク酸などです。特にブドウに由来する酸は、酸っぱさの感じ方でブドウの品種ごとに大きな違いがあります。そのため、ブドウの種類を特定する手がかりとして有力です。同じように糖もブドウに由来します。先述の通り、糖はアルコールを醸造する過程で消費されますが、酵母が活動できなくなるアルコール度数15%まで発酵がすすむと、消化しきれなかった糖が残ります。糖が残り甘く感じるということは、元々糖度の高い品種であったり、糖が濃縮するような特別な作り方をされていることが推測できます。もう一つ大きな要素として、タンニンから生まれる渋みがあります。渋みはワインの代名詞のような存在ですが、その渋みの元であるタンニンはブドウの皮や種に存在しています。一般的に、渋いワインは赤ワインで、白ワインは渋いというイメージはありません。これは製法による違いであり、赤ワインは果実と一緒に皮や種子を粉砕していっしょに貯蔵するマセラシオンという工程を経ますが、白ワインは粉砕後に皮や種子をすぐに取り除くためマセラシオンの工程が省かれ、タンニンがほとんど含まれません。そのため、赤ワインか白ワインかを判断する基準にもなります（見ればわかるというのはそうですが、ブラインドテイスティングにはワインが見えないように目隠しやブラックグラスを使うタイプも存在します）。また、タンニンはブドウの品種によって大きく性格が異なるため、渋さの性質で品種を推察することができます。</p>
        <p>このように、ワインはその味や香りを構成する要素の中に、原料となっているブドウにより変わる要素、生産地によって変わる要素、生産工程によって変わる要素がふんだんに含まれています。また、経年はワインに変化を与えます。ワインは瓶の中でもさらに熟成するため、酸やタンニン、また色素のアントシアニンが変質したりして味や外見に特徴的な変化が発生します。これらは製造年数を推定するために役立ちます。</p>
        <h2>ワインの味とはなんなのか</h2>
        <p>ワインの味は、まず原料のブドウで大きく決まります。ブドウには一万を超える品種が存在していますが、そのうち主にワインの生産に使われる品種が決まっており、代表的なものが数十種あります。ワイン用のブドウは、それぞれワインにしたときにどのような特徴が出るかが既にわかっており、そのブドウ原料に由来する香りを第一アロマと呼びます。</p>
      </Page>
      <Page pageNumber={startPage + 3}>
        <p>なぜ味なのに香りの話をするかというと、人間の感じる味覚はかなり嗅覚によって左右されるという特徴があるからです。人間の口腔の構造的な理由から、レトロネザールという感覚が発生することがわかっています。これはざっくりいうと、口の中に入れたものの香りが、鼻にも届き香りが感じられるという現象です。つまり、味覚は嗅覚と切り離せない感覚であり、香りは味を構成する要素なのです。</p>
        <p>第一アロマは、主に果物や花、植物に例えられることが多いです。ブドウを他の果物や花で例えるのも変な気もしますが、ワインに限らず食べ物や飲み物の味の表現って他の食べ物を使っている場合が多くて不思議ですよね。第一アロマは、例えば赤ワインであればカシスやブラックベリーなどの黒系果実、イチゴやチェリー、ラズベリーなどの赤系果実などで表現されたり、スミレやバラなどの花、ミントやコショウなどのスパイスで表現されたりします。この香りの表現に使われる果実や花、植物は数が多すぎるので全てを書くことはできません。ですが、主にブドウの果実のみずみずしさや美味しさを表現するための言葉が多いです。このあたりは膨大な量の情報があるため、各自調べて覚えるしかありません。</p>
        <p>次に、醸造工程で発生する第二アロマです。発酵するときに酵母が生成する香りや、酢酸菌に酔ってエタノールが酸化する香り、発酵時に使用する樽から移る香りなどがあります。また、赤ワインの場合はマロラクティック発酵という過程を経るので、それによって乳酸由来の甘い香りが生じます。こちらも赤ワインの場合だと、バナナやイチゴ、リンゴやキャンディなどと表現されることが多いです。</p>
        <p>最後に、熟成過程で発生する第三アロマです。出来上がったワインを熟成するために詰める樽の成分や、時間経過によって変質する成分による香りが多いです。赤ワインでは、バニラ、コーヒー、チョコレート、なめし革や土のニュアンスなどが該当します。</p>
        <p>これら三つの香りの特性が、ワインの味を構成する大きな要素です。それでは、香りでは無く実際に味覚では何を感じるのでしょうか？</p>
        <p>ワインの味には、大きく甘味、酸味、苦味があります。これは香りから感じるニュアンスとは完全に区別された、舌で感じる味覚の成分です。人間の舌の反応速度には味覚ごとに違いがあり、感じる順序は甘味、酸味、苦味の順となるため、テイスティングをする際にはその順序を意識しておく必要があります。</p>
        <p>まず最初に感じる甘味には、アルコール由来の多糖と残糖由来の砂糖の甘味があります。多くの場合、ワインは発酵の過程で糖を使い切る事が多いので、アルコール由来のグリセリンの甘味を感じます。一方で、発酵時に残った糖である残糖は、砂糖と同じ甘味がします。この二つの甘味を感じ分けることで、元のブドウの糖を残すような作り方がされたのかどうかがわかります。</p>
        <p>次に感じる酸味は、白ワインと赤ワインで大きく異なります。白ワインの場合、ブドウ由来のリンゴ酸と酒石酸が大部分を占め、その酸っぱさの強弱がブドウの品種によって変わってきます。一方で、赤ワインの場合はマロラクティック発酵という過程を経るため、リンゴ酸が乳酸に変化し、まろやかな味に変わっていることが多いです。また、赤ワインは総じて酸が少なく、その酸も熟成により減っていくため、酸の有無や感じ方が品種の特定や熟成の年数を推定することに役立ちます。</p>
      </Page>
      <Page pageNumber={startPage + 4}>
        <p>最後の苦味は、ほぼ赤ワインに特有の味覚です。苦味はやや特殊な感覚であり、発酵時に生じる苦味は味覚の苦味ですが、渋いと感じるのは純粋に苦味という味覚では無く、タンニンがもたらす収斂性という触覚です。これはタンニンが歯茎の粘膜と結合し粘膜を破壊することによって生じる触覚で、これを感じるのは舌では無く歯茎です。主に樽熟成をしたワインなどでは、純粋に舌が感じる苦味も生じますが、ブドウのタンニンに由来する渋みは、舌で感じる苦味という味覚では無く、歯茎で感じる触覚です。やや不思議は無しをしましたが、舌で感じる苦味と、歯茎で感じる収斂性という触覚が、それぞれワインの苦味です。</p>
        <p>以上のように、鼻で感じる嗅覚と、舌で感じる味覚、そして歯茎で感じる触覚が、ワインの味の正体です。それでは、これらの情報を元に、どうやってワインの味だけでその正体がわかるのでしょうか？</p>
        <h2>ブラインドテイスティングでは何を読み取るのか</h2>
        <p>最初に例示した、神の雫の台詞を振り替えて見ましょう。</p>
        <blockquote>「第一アロマとして襲ってくるのはカシスなどの黒い果実の爆発、そして舌に載せたときに鼻孔にまで抜けてゆく爽やかな数種類のハーブのニュアンス。これらの香りと味わいから、ブドウの品種は明らかに特上のカベルネ・ソーヴィニョンを中心としたものだとわかる」</blockquote>
        <p>第一アロマは、ブドウ固有の香りです。カシスは黒い果実を代表する香りの表現で、舌に載せたときに鼻孔に抜けるというのはレトロネザールという現象による香りの感じ方です。ハーブのニュアンスといわれていますが、カベルネ・ソーヴィニョンはミントの香りを感じることが有名な品種です。そのため、この天才ワイン評論家は、嗅覚を使ってブドウの品種をカベルネ・ソーヴィニョンと特定しました。</p>
        <blockquote>「そこにはわずかなナツメグや熟したイチジク——粒コショウなどの熟成香が漂いだし、天の恵みを思う存分受けた大地の力強さが永き眠りから目を覚ます」</blockquote>
        <p>黒コショウは、カベルネ・ソーヴィニョンの第一アロマとして知られています。また、イチジクは第三アロマの香りで、熟成の過程で出現しますが、特に長期熟成を経ている場合に使われる表現です。ナツメグは、あまりワインの表現では聞きませんが、甘さと苦さの表現という情報もありました。</p>
        <p>天の恵みは、テロワールの情報を指しています。このワイン、シャトー・ムートン・ロートシルトが作られた土壌の力強さ、そしてヴィンテージつまり製造年数の年にどれだけブドウにとって良い日照時間や降雨量だったかを示すための表現として、天の恵みという表現をしていると思われます。</p>
        <p>そしてこのワインは1982年のシャトー・ムートン・ロートシルトだと推定するのですが、凡人の我々にとってわかったことは次の三つです。「ブドウ品種はカベルネ・ソーヴィニョン」、「長期熟成を経たワイン」、「良い土壌の畑で作られたブドウにとって良い環境だった年のワイン」。この条件に該当するワインは、数え切れないほど存在します。</p>
      </Page>
      <Page pageNumber={startPage + 5}>
        <p>そのため、何か特殊な理由が無い限りは、ブラインドテイスティングでは特定の銘柄を当てることは不可能です。この漫画の設定では、天才ワイン評論家はありとあらゆる年代のワインやそのワインが作られた土壌までも研究し尽くしており、どんなワインでも味を知っているという設定でした。</p>
        <p>翻って現実では、先ほどの情報から得られるのは「カベルネ・ソーヴィニョン主体のワイン」、「長期熟成のワイン」くらいでしょう。そこから得られるのは、カベルネ・ソーヴィニョン主体でブレンドするスタイルを採っている国はどこか、カベルネ・ソーヴィニョンでこのニュアンスを出す文化はどの地域か、長期熟成されているということは製造年数はどれくらいか、ということです。すなわち、「ブドウの品種」、「ワインの生産国」、「製造年数」ですね。現実では、この三つを当てられれば十分凄いのです。そしてそれを当てるために、何百もある香りの表現や、数カ国に散らばる何百もある生産地域の特徴、そして熟成によってワインがどのように変化するかの知識。これらを正しく自らの味覚、嗅覚、触覚をもって感じ取り、膨大な知識と突合して正解を求めるのが、ブラインドテイスティングという競技です。</p>
        <h2>まとめ</h2>
        <p>この記事では、ワインの味とは何なのか、そしてブラインドテイスティングとはどのような行為なのかを解説しました。ブラインドテイスティングはあくまで特殊技能なので、本来のワインを楽しむという意味では、味を構成する要素を理解した上で、それが何に由来するのかを調べてのしむくらいが良い塩梅のワイン趣味というのでは無いかなと思います。それでは、皆さんもよいワインライフを。</p>
        <p>この記事は日本酒を飲みながら書かれました。</p>
      </Page>
    </div>
  )
}
