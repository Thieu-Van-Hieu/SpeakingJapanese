function addFurigana(sentence) {
    // Hàm để thêm furigana cho một từ
    function addRuby(kanji, furigana) {
        return `<ruby>${kanji}<rt>${furigana}</rt></ruby>`;
    }
    // Tạo một bản sao của câu để xử lý
    let sentenceWithRuby = sentence;

    // Các từ cần được thêm furigana
    const furiganaWords = [
        { kanji: "まいつき", furigana: "毎月" },
        { kanji: "じゅぎょう", furigana: "授業" },
        { kanji: "月曜日", furigana: "げつようび" },
        { kanji: "水曜日", furigana: "すいようび" },
        { kanji: "九時", furigana: "くじ" },
        { kanji: "はじまり", furigana: "始まり" },
        { kanji: "十一時", furigana: "じゅういちじ" },
        { kanji: "おわります", furigana: "終わります" },
        { kanji: "土曜日", furigana: "どようび" },
        { kanji: "日曜日", furigana: "にちようび" },
        { kanji: "円", furigana: "えん" },
        { kanji: "友達", furigana: "ともだち" },
        { kanji: "日本語", furigana: "にほんご" },
        { kanji: "本", furigana: "ほん" },
        { kanji: "金曜日", furigana: "きんようび" },
        { kanji: "勉強", furigana: "べんきょう" },
        { kanji: "時間", furigana: "じかん" },
        { kanji: "三時間", furigana: "さんじかん" },
        { kanji: "300円", furigana: "さんびゃくえん" },
        { kanji: "600円", furigana: "ろっぴゃくえん" },
        { kanji: "ノート", furigana: "のーと" },
        { kanji: "ランチ", furigana: "らんち" },
    ];

    // Thêm furigana cho các từ trong câu
    furiganaWords.forEach((item) => {
        const regex = new RegExp(item.kanji, "g");
        sentenceWithRuby = sentenceWithRuby.replace(
            regex,
            addRuby(item.kanji, item.furigana)
        );
    });

    return sentenceWithRuby;
}

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
    "私はまいつき、日本語のクラスに3000円を払います。学校のじゅぎょうは月曜日と水曜日にあります。朝の九時からはじまり、十一時におわります。土曜日と日曜日はじゅぎょうがありませんので、ともだちと800円のランチをたべにいきます。",
    "私の 日本語の クラスは 月曜日と 水曜日に あります。まいかい、九時から 十時はん までです。土曜日と 日曜日は 学校が ありませんので、ともだちと ときどき こうえんに いきます。",
    "私はまいにち日本語をべんきょうしています。月曜日から金曜日までは学校でべんきょうしますが、土曜日と日曜日はいえでべんきょうします。べんきょうの時間はだいたい一日三時間です。",
    "私は 日本語の 本を かいました。この本は 800円でした。ほかにも 300円と 600円の本もあります。学校でつかうノートは3さつで3000円、ペンは5本で8000円です。月曜日から金曜日まで学校にいきます。",
    "私はまいつき、日本語のクラスに3000円をはらいます。学校のじゅぎょうは月曜日と水曜日にあります。あさの九時から はじまり、十一時におわります。土曜日と日曜日はじゅぎょうがありませんので、ともだちと800円のランチをたべに いきます。",
    "私はまいつき、日本語のクラスに3000円をはらいます。学校のじゅぎょうは月曜日と水曜日にあります。あさの九時からはじまり、十一時におわります。土曜日と日曜日はじゅぎょうがありませんので、ともだちと800円のランチをたべにいきます。",
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

function checkReading(className) {
    if (!("webkitSpeechRecognition" in window)) {
        alert("Trình duyệt không hỗ trợ nhận diện giọng nói.");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = "ja-JP";
    recognition.interimResults = false;

    const element = document.querySelector(`.${className}`);

    // Lấy câu tiếng Nhật từ element và chia thành các ký tự (giả định không có dấu cách)
    const correctSentence = element.textContent.trim();
    const chars = correctSentence.split("");

    // Thay thế nội dung HTML với mỗi ký tự bọc trong thẻ span
    element.innerHTML = chars
        .map((char) => `<span class="word">${char}</span>`)
        .join("");

    recognition.start();

    recognition.onresult = function (event) {
        const userSentence = event.results[0][0].transcript.trim();
        const userChars = userSentence.split(""); // Chia câu người dùng nói thành ký tự

        // Đánh dấu từng ký tự là đúng hoặc sai
        chars.forEach((char, index) => {
            const wordElement = element.querySelectorAll(".word")[index];
            const userChar = userChars[index];

            if (userChar === char) {
                wordElement.style.color = "#71be34"; // Đúng, bôi xanh
            } else {
                wordElement.style.color = "#ff623d"; // Sai, bôi đỏ
            }
        });
    };

    recognition.onerror = function (event) {
        console.error("Lỗi nhận diện giọng nói:", event.error);
        alert(
            "Đã xảy ra lỗi trong quá trình nhận diện giọng nói. Vui lòng thử lại."
        );
    };

    recognition.onend = function () {
        console.log("Kết thúc quá trình ghi âm.");
    };
}
