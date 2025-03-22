import { Container, Card } from "../../components";

function Ruby({ baseText, rubyText, rpOpener = "(", rpCloser = ")" }) {
  return (
    <ruby>
      {baseText}
      <rp>{rpOpener}</rp>
      <rt>{rubyText}</rt>
      <rp>{rpCloser}</rp>
    </ruby>
  )
}

export default function RubyPage() {
  return (
    <Container title={"<ruby> Tag"} full>
      <Card>
        <h2 className="text-xl">Ruby</h2>
        <p>
          The <code>&lt;ruby&gt;</code> tag is used to define a ruby annotation. Ruby annotations are used to provide pronunciation or translation information for characters.
        </p>
        <p>
          Ruby annotations are displayed above or below the base text. The base text is the original text that the ruby annotation is providing information for.
        </p>
        <p>
          The <code>&lt;ruby&gt;</code> tag is supported in all major browsers.
        </p>
        <p>
          The <code>&lt;rp&gt;</code> tag is used to provide parentheses around the ruby text. The <code>&lt;rp&gt;</code> tag is used to define what to show when the browser does not support ruby annotations.
        </p>
      </Card>
      <Card>
        <h2 className="text-xl">Ruby - default</h2>
        <p>
          <Ruby baseText="漢字" rubyText="かんじ" />
        </p>
        <p>
          <Ruby baseText="少年易老学難成" rubyText="しょうねんおいやすくがくなりがたし" />
        </p>
      </Card>
      <Card>
        <h2 className="text-xl">Ruby - with custom parentheses</h2>
        <p>
          <Ruby baseText="漢字" rubyText="かんじ" rpOpener="[" rpCloser="]" />
        </p>
      </Card>
      <Card>
        <h2 className="text-xl">Ruby - with separate rubys</h2>
        <p>
          <Ruby baseText="不" rubyText="ハード" />
          <Ruby baseText="運" rubyText="ラック" />
          と
          <Ruby baseText="踊" rubyText="ダンス" />
          っちまった。
        </p>
      </Card>
      <Card>
        <h2 className="text-xl">Ruby - within a long sentence</h2>
        <p>
          <Ruby baseText="吾輩" rubyText="わがはい" />
          は
          <Ruby baseText="猫" rubyText="ねこ" />
          である。
          <Ruby baseText="名前" rubyText="なまえ" />
          はまだ
          <Ruby baseText="無" rubyText="な" />
          い。
        </p>
      </Card>
      <Card>
        <h2 className="text-xl">Ruby - with full size kana</h2>
        <caption>Full-size kana is available in limited browsers</caption>
        <p style={{textTransform: "full-size-kana"}}>
          <Ruby baseText="老若男女" rubyText="ロウニャクナンニョ" />
        </p>
      </Card>
    </Container>
  )
}