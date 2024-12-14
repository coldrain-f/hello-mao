"use client"; // 파일 최상단에 추가
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

import localFont from "next/font/local";

const azukiFont = localFont({
  src: "./fonts/azuki.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function Home() {
  const [start, setStart] = useState(false);

  return (
    <div className="flex justify-center">
      {start ? (
        <Card className="w-[550px] my-5 m-5 rounded-lg border-none transition-all duration-300 p-6 bg-black">
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className={`text-stone-100 ${azukiFont.className}`}>
            <p className={`font-bold ${azukiFont.className}`}>サンウン</p>
            <TypeAnimation
              sequence={[
                "こんにちは。サンウンです。",
                1000,
                "あなたの彼氏です。",
                1000,
                "特別なプレゼントを用意しましたので、楽しく読んでください。",
                1000,
                "今までこのようなものを作ったことは一度もなく、",
                1000,
                "まおさんもこんなプレゼントを受け取ったことはないと思います。",
                1000,
                "正直、気に入ってもらえるかどうか分かりませんが、",
                1000,
                "少なくとも面白いと感じてもらえたら嬉しいです。",
                1000,
                "最初は日本語で手紙を書こうと思っていましたが、",
                1000,
                "まだ漢字を手で書くのが難しすぎて、",
                1000,
                "いつも通りメッセージで伝えることにしました。",
                1000,
                "ちょうど付き合って100日も経ち、クリスマスという特別な日も近づいているので、",
                1000,
                "今までしたことのない特別なことを準備したいと思っていた時に、面白いアイデアを思いついて準備してみました。",
                1000,
                "私たちが付き合ってもう100日が過ぎましたね。",
                1000,
                "短い時間でしたが、本当にたくさんのことがありました。",
                1000,
                "一日中電話しながら告白した日、",
                1000,
                "悩んだ末に私の気持ちを受け入れてくれたまおの返事に、夢みたいだと感じました。",
                1000,
                "初めて会う前、日本に行ったことがなかったのでビザの準備から始めて、",
                1000,
                "考えていた以上に準備することが多くて忙しかったです。",
                1000,
                "初めてで行き方も分からなかったので、前日に空港で寝泊まりして、",
                1000,
                "バスと電車と新幹線に乗って静岡に着いた時のことを思い出します。",
                1000,
                "日本での全てが初めてで、新鮮でドキドキしていました。",
                1000,
                "私が静岡まで来られるかどうか心配していたまおの可愛らしい姿も忘れられません。",
                1000,
                "少し照れくさいですが、初めて会ったまおの印象は本当に小さくて可愛らしい妖精のようでした。",
                1000,
                "体調があまり良くなさそうで、とても心配していた記憶があります。",
                1000,
                "二回目に会った時は、最初に会った時より体調が良さそうで安心しました。",
                1000,
                "お互いにプレゼントを交換しましたが、まおが私のことを本当によく考えて大切にしてくれているのが伝わってきて嬉しかったです。",
                1000,
                "幸せな日々が続く中で、少しでも頻繁に会いたいという気持ちが強くなり、",
                1000,
                "韓国ではなかなか会えないだろうと思い、日本に行くことを決意しました。",
                1000,
                "最近は睡眠時間を削りながら必死に準備をしています。",
                1000,
                "もちろん、それ以外にもいろいろな理由がありますが。",
                1000,
                "まおが常に私のことを考えて応援してくれているのを感じています。",
                1000,
                "だからいつも嬉しくて感謝しています。",
                1000,
                "これからもたくさんの素敵な思い出を作っていけたらいいなと思います。",
                1000,
                "これからもよろしくお願いします。",
                1000,
                "早く会いたいです。大好きです。",
                1000,
              ]}
              wrapper="span"
              speed={5}
              style={{ fontSize: "1.5em", display: "inline-block" }}
              repeat={Infinity}
            />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      ) : (
        <Button
          variant="outline"
          className="m-5"
          onClick={() => {
            setStart(true);
          }}
        >
          スタート
        </Button>
      )}
    </div>
  );
}
