const reading = [
    "はじめまして、私はアンナです。オーストラリア人です。さくら<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。ことし、<ruby>二十歳<rt>はたち</rt></ruby>です。私の<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>音楽<rt>おんがく</rt></ruby>と<ruby>読書<rt>どくしょ</rt></ruby>です。よろしくお願いします。",

    "みなさん、おはようございます。こちらはキムさんです。キムさんは<ruby>韓国人<rt>かんこくじん</rt></ruby>です。キムさんの<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>水泳<rt>すいえい</rt></ruby>とテニスです。いま、なごや<ruby>短期大学<rt>たんきだいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。<ruby>学校<rt>がっこう</rt></ruby>で<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>しています。",

    "ワットさんはアメリカ人です。おおさか<ruby>大学<rt>だいがく</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>です。61<ruby>歳<rt>さい</rt></ruby>です。ワットさんの<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>音楽<rt>おんがく</rt></ruby>とスポーツです。きむらさんの<ruby>趣味<rt>しゅみ</rt></ruby>もスポーツです。<ruby>学校<rt>がっこう</rt></ruby>で<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>しています。",

    "みなさん、こんばんは。こちらはエミーさんです。エミーさんはオーストラリア人です。エミーさんの<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>旅行<rt>りょこう</rt></ruby>とサッカーです。いま、わかやま<ruby>短期大学<rt>たんきだいがく</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>です。<ruby>学校<rt>がっこう</rt></ruby>で<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えています。よろしくお願いします。",

    "私はたなかです。<ruby>日本人<rt>にほんじん</rt></ruby>です。私は<ruby>会社員<rt>かいしゃいん</rt></ruby>です。<ruby>月曜日<rt>げつようび</rt></ruby>から<ruby>金曜日<rt>きんようび</rt></ruby>まで、<ruby>会社<rt>かいしゃ</rt></ruby>へいきます。あさ、ごぜん9<ruby>時<rt>じ</rt></ruby>からごご5<ruby>時半<rt>じはん</rt></ruby>まで<ruby>会社<rt>かいしゃ</rt></ruby>ではたらきます。<ruby>土曜日<rt>どようび</rt></ruby>のごぜん、<ruby>新聞<rt>しんぶん</rt></ruby>をよみます。ごご、うちでDVDをみます。<ruby>日曜日<rt>にちようび</rt></ruby>、<ruby>公園<rt>こうえん</rt></ruby>でテニスをします。",

    `A: あれは なんですか。<br>
   B: おやこどんです。<br>
   A: おやこどん？ おやこどんはなにの りょうりですか。<br>
   B: とりにくと たまごの りょうりです。<br>
   A: 「たまご」は えいごで なんですか。<br>
   B: 「egg」です。<br>`,

    `てんいん：いらっしゃいませ。<br>こんにちは。<br>なんめいさまですか。<br>
   だにえる：三人です。<br>
   てんいん：きんえんせきと きつえんせき、どちらをごりようですか。<br>
   だにえる：きんえんせきをおねがいします。<br>
   てんいん：はい、こちらへどうぞ。<br>
   ぱく：すみません！ ちゅうもんをおねがいします。<br>
   てんいん：はい、どうぞ。<br>
   わん：私、はんばーぐと らいす。<br>
   だにえる：私も はんばーぐと らいす。<br>それから、ええと、この びーるはどこ の びーるですか。<br>
   てんいん：ドイツの びーるです。<br>
   だにえる：そうですか。じゃ、びーるを……。<br>
   わん：あ、私も びーる。<br>
   だにえる：じゃ、びーるを 2つください。<br>
   ぱく：あのう、これは なんの かれーですか。<br>
   てんいん：とりにくと やさいの かれーです。<br>
   ぱく：そうですか。じゃ、かれーと びーるをください。<br>
   てんいん：はい、はんばーぐを 2つと らいすを 2つと かれーを 1つと びーるを 3つですね。<br>
   ぱく：はい。<br>
   てんいん：かしこまりました。しょうしょうおまちください。`,

    `A：Bさん、まいばん、何時にねますか。<br>
   B：12時にねます。<br>
   A：そうですか。よる、何をしますか。<br>
   B：インターネットをします。本をよみます。Aさんは何をしますか。<br>
   A：私はまいばん、べんきょうします。<br>
   B：何時から何時までべんきょうしますか。<br>
   A：8時から12時までべんきょうします。<br>
   B：そうですか。`,

    "私は<ruby>日本語<rt>にほんご</rt></ruby>学校の<ruby>学生<rt>がくせい</rt></ruby>です。<ruby>日本人<rt>にほんじん</rt></ruby>でありません。ともだちと私はベトナム人や<ruby>中国人<rt>ちゅうごくじん</rt></ruby>などです。<ruby>月曜日<rt>げつようび</rt></ruby>から<ruby>金曜日<rt>きんようび</rt></ruby>まで、まいにち九時から四時まで<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>します。<ruby>土曜日<rt>どようび</rt></ruby>と<ruby>日曜日<rt>にちようび</rt></ruby>は<ruby>学校<rt>がっこう</rt></ruby>に行きません。私は「はたち」です。<ruby>日本語<rt>にほんご</rt></ruby>の本が三つあります。まいにち三時間<ruby>日本語<rt>にほんご</rt></ruby>のべんきょうをします。きょうの<ruby>午後<rt>ごご</rt></ruby>、えいがを見ます。",

    "はじめまして。私はアンナです。<ruby>ちゅうごく<rt>中国</rt>じん</ruby>です。シャンハイ大学の<ruby>学生<rt>がくせい</rt></ruby>です。２０さいです。<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>読書<rt>どくしょ</rt></ruby>と<ruby>映画<rt>えいが</rt></ruby>です。どうぞよろしくお願いします。",

    "はじめまして。私はカルロスです。アメリカじんです。<ruby>東京<rt>とうきょう</rt></ruby>の<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>社員<rt>しゃいん</rt></ruby>です。３１さいです。<ruby>趣味<rt>しゅみ</rt></ruby>はテニスです。どうぞよろしくお願いします。",

    "はじめまして。私はメイです。タイじんです。さくら<ruby>高校<rt>こうこう</rt></ruby>のきょうしです。４８さいです。<ruby>趣味<rt>しゅみ</rt></ruby>はスポーツと<ruby>音楽<rt>おんがく</rt></ruby>です。どうぞよろしくお願いします。",

    "きょうデパートへいきます。カメラをかいます。デパートのカメラやは<ruby>一階<rt>いっかい</rt></ruby>です。日本のカメラは三万五千六百円です。オーストラリアのは二万七千円です。オーストラリアのを<ruby>買<rt>か</rt></ruby>います。",

    "私はトヨタ<ruby>会社<rt>かいしゃ</rt></ruby>のしゃいんです。月曜日から金曜日まではたらきます。会社はごぜん八時からごご五時までです。土曜日と日曜日はやすみです。やすみの日はとしょかんへいきます。くるまの本をよみます。",

    "私はやまぐち<ruby>学校<rt>がっこう</rt></ruby>のきょうしです。月曜日から金曜日まで学校へ<ruby>行<rt>い</rt></ruby>きます。まいにちのじゅぎょうは八時十五分から十一時五十分までです。あさ六時半におきます。七時にあさごはんをたべます。七時半に学校へいきます。",
];

const talking_without_image = [
    "おなまえは？",
    "おくには どちらですか。",
    "おしごとは？",
    "たんじょうびは いつですか。",
    "しゅみは なんですか。",
    "ぶたにく は えいごで なんですか。",
    "まいにち、なんじに おきますか。",
    "なんじから なんじまで はたらきますか。",
    "あなたの ひるやすみは なんじから なんじまでですか。",
];

const image_src = [
    [
        "./assets/img/mariyamu.png",
        "./assets/img/karurosu.jpg",
        "./assets/img/suzuki.jpg",
    ],
    ["./assets/img/suupaa.png"],
    [
        "./assets/img/toshokan.png",
        "./assets/img/yuubinkyoku.jpg",
        "./assets/img/taiikukan.jpg",
    ],
    ["./assets/img/tokei.jpg", "./assets/img/Tshatsu.jpg"],
];

const talking_with_image = [
    [
        "この人のなまえは？",
        "この人のしごとは？",
        "この人のしゅみは？",
        "この人はなんさいですか？",
        "このひとのたんじょうびはいつですか？",
        "この人はベトナムじんですか。",
    ],
    [
        "１００円ショップはどこですか。",
        "サカイでんきはどこですか",
        "ほんやはどこですか。",
        "ケーキやはどこですか。",
        "きつえんじょはどこですか。",
        "トイレはどこですか。",
        "スーパーはどこですか。",
    ],
    [
        "ここはどこですか。",
        "ここは何時か何時までですか。",
        "ここは何曜日から何曜日までですか。",
        "やすみはいつですか。",
        "ここで何をしますか。",
    ],
    [
        "これは何ですか。",
        "これはだれのですか。",
        "これはどこのですか。",
        "これはいくらですか。",
    ],
];

function random() {
    document.querySelector(".reading").innerHTML =
        reading[Math.floor(Math.random() * reading.length)];

    document.querySelector(".talking-without-image").textContent =
        talking_without_image[
            Math.floor(Math.random() * talking_without_image.length)
        ];

    const index_img = Math.floor(Math.random() * image_src.length);
    document.querySelector("img").src =
        image_src[index_img][
            Math.floor(Math.random() * image_src[index_img].length)
        ];

    let question_random = [];
    while (question_random.length < 3) {
        const index = Math.floor(
            Math.random() * talking_with_image[index_img].length
        );
        if (!question_random.includes(index)) question_random.push(index);
    }
    document.querySelector(".talking-with-image-1").innerHTML =
        talking_with_image[index_img][question_random[0]];
    document.querySelector(".talking-with-image-2").innerHTML =
        talking_with_image[index_img][question_random[1]];
    document.querySelector(".talking-with-image-3").innerHTML =
        talking_with_image[index_img][question_random[2]];
}

let isSpeaking = false; // Kiểm tra trạng thái đang đọc

function speakText(element) {
    if (isSpeaking) {
        // Dừng đọc nếu đang phát âm
        window.speechSynthesis.cancel();
        isSpeaking = false;
    }

    if ("speechSynthesis" in window) {
        let text = element.innerHTML
            .replace(/<rt>.*?<\/rt>/g, "")
            .replace(/<\/?[^>]+(>|$)/g, "");
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "ja-JP";

        // Cập nhật trạng thái và xử lý khi kết thúc
        isSpeaking = true;
        utterance.onend = () => {
            isSpeaking = false;
        };

        // Phát âm
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Trình duyệt của bạn không hỗ trợ Text-to-Speech");
    }
}
