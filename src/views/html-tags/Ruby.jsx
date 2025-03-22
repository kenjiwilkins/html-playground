import { Container, Card } from "../../components";

function Ruby(baseText, rubyText, rpOpener = "(", rpCloser = ")") {
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
          {Ruby("漢字", "かんじ")}
        </p>
        <p>
          {Ruby("少年易老学難成", "しょうねんおいやすくがくなりがたし")}
        </p>
      </Card>
      <Card>
        <h2 className="text-xl">Ruby - with custom parentheses</h2>
        <p>
          {Ruby("漢字", "かんじ", "[", "]")}
        </p>
      </Card>
      <Card>
        <h2 className="text-xl">Ruby - with separate rubys</h2>
        <p>
          {Ruby("不", "ハード")}
          {Ruby("運", "ラック")}
          と
          {Ruby("踊", "ダンス")}
          っちまった。
        </p>
      </Card>
      <Card>
        <h2 className="text-xl">Ruby - within a long sentence</h2>
        <p>
          {Ruby("吾輩", "わがはい")}
          は
          {Ruby("猫", "ねこ")}
          である。
          {Ruby("名前", "なまえ")}
          はまだ
          {Ruby("無", "な")}
          い。
        </p>
      </Card>
      <Card>
        <h2 className="text-xl">Ruby - with full size kana</h2>
        <caption>Full-size kana is available in limited browsers</caption>
        <p style={{textTransform: "full-size-kana"}}>
          {Ruby("老若男女", "ロウニャクナンニョ")}
        </p>
      </Card>
  </Container>
  )
}