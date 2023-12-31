const skill = [
 {"id": 0, "skilltype": "ほのお", "color": "#FF421C", "name": "かえんほうしゃ", "power": 90, "hitrate": 100, "type": "special", "direct": false},
 {"id": 1, "skilltype": "ひこう", "color": "#ABBFF3", "name": "エアスラッシュ", "power": 75, "hitrate": 95, "type": "special", "direct": false, "wince": true},
 {"id": 2, "skilltype": "いわ", "color": "#9A6100", "name": "ストーンエッジ", "power": 100, "hitrate": 80, "type": "physics", "direct": false, "highrate": true},
 {"id": 3, "skilltype": "はがね", "color": "#999999", "name": "アイアンテール", "power": 100, "hitrate": 70, "type": "physics", "direct": true},
 {"id": 4, "skilltype": "みず", "color": "#028DFF", "name": "ねっとう", "power": 80, "hitrate": 100, "type": "special", "direct": false},
 {"id": 5, "skilltype": "どく", "color": "#A600FF", "name": "ヘドロウェーブ", "power": 95, "hitrate": 100, "type": "special", "direct": false},
 {"id": 6, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "じこさいせい", "power": 0, "hitrate": 100, "type": "change", "direct": false, "heal": true, "mything": true},
 {"id": 7, "skilltype": "どく", "color": "#A600FF", "name": "どくづき", "power": 80, "hitrate": 100, "type": "physics", "direct": true},
 {"id": 8, "skilltype": "むし", "color": "#81EC16", "name": "むしのていこう", "power": 50, "hitrate": 100, "type": "special", "direct": false, "outCR0": true},
 {"id": 9, "skilltype": "むし", "color": "#81EC16", "name": "ちょうのまい", "power": 0, "hitrate": 100, "type": "change", "direct": false, "up": true, "CR1": true, "DR1": true, "SR1": true, "mything": true},
 {"id": 10, "skilltype": "ほのお", "color": "#FF421C", "name": "ほのおのまい", "power": 80, "hitrate": 100, "type": "special", "direct": false, "CR1h": true},
 {"id": 11, "skilltype": "じめん", "color": "#CF9E4E", "name": "じしん", "power": 100, "hitrate": 100, "type": "physics", "direct": false},
 {"id": 12, "skilltype": "あく", "color": "#452222", "name": "かみくだく", "power": 80, "hitrate": 100, "type": "physics", "direct": true, "fang": true},
 {"id": 13, "skilltype": "ひこう", "color": "#ABBFF3", "name": "つばめがえし", "power": 60, "hitrate": 10000, "type": "surely", "direct": false},
 {"id": 14, "skilltype": "フェアリー", "color": "#FF58B9", "name": "マジカルシャイン", "power": 80, "hitrate": 100, "type": "special", "direct": false},
 {"id": 15, "skilltype": "エスパー", "color": "#FF8DE8", "name": "ワイドフォース", "power": 80, "hitrate": 100, "type": "special", "direct": false, "force": true},
 {"id": 16, "skilltype": "エスパー", "color": "#FF8DE8", "name": "トリックルーム", "power": 0, "hitrate": 100, "type": "change", "direct": false, "un": true, "mything": true},
 {"id": 17, "skilltype": "ゴースト", "color": "#300770", "name": "シャドーボール", "power": 80, "hitrate": 100, "type": "special", "direct": false},
 {"id": 18, "skilltype": "でんき", "color": "#FFE000", "name": "かみなりパンチ", "power": 75, "hitrate": 100, "type": "physics", "direct": true, "punch": true},
 {"id": 19, "skilltype": "かくとう", "color": "#FF9900", "name": "ばかぢから", "power": 120, "hitrate": 100, "type": "physics", "direct": true, "AR0": true,"BR0": true},
 {"id": 20, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "いたみわけ", "power": 0, "hitrate": 100, "type": "change", "direct": false, "halves": true},
 {"id": 21, "skilltype": "ゴースト", "color": "#300770", "name": "シャドークロー", "power": 70 , "hitrate": 100, "type": "physics", "direct": true, "highrate": true},
 {"id": 22, "skilltype": "ほのお", "color": "#FF421C", "name": "むねんのつるぎ", "power": 90, "hitrate": 100, "type": "physics", "direct": true, "AH": true},
 {"id": 23, "skilltype": "かくとう", "color": "#FF9900", "name": "インファイト", "power": 120, "hitrate": 100, "type": "physics", "direct": true, "BR0": true, "DR0": true, "punch": true},
 {"id": 24, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "つるぎのまい", "power": 0, "hitrate": 100, "type": "change", "direct": false, "up": true, "AR2": true, "mything": true},
 {"id": 25, "skilltype": "no", "name": "noname"},
 {"id": 26, "skilltype": "ドラゴン", "color": "#4954A9", "name": "きょけんとつげき", "power": 120, "hitrate": 100, "type": "physics", "direct": true, "afterback": true},
 {"id": 27, "skilltype": "こおり", "color": "#44D3FF", "name": "つららおとし", "power": 85, "hitrate": 90, "type": "physics", "direct": false, "wince": true},
 {"id": 28, "skilltype": "ドラゴン", "color": "#4954A9", "name": "りゅうのまい", "power": 0, "hitrate": 100, "type": "change", "direct": false, "up": true, "AR1": true, "SR1": true, "mything": true},
 {"id": 29, "skilltype": "くさ", "color": "#55D600", "name": "ギガドレイン", "power": 75, "hitrate": 100, "type": "special", "direct": false, "AH": true},
 {"id": 30, "skilltype": "ドラゴン", "color": "#4954A9", "name": "ドラゴンアロー", "power": 50, "hitrate": 100, "type": "physics", "direct": false, "Wattack": true},
 {"id": 31, "skilltype": "ほのお", "color": "#FF421C", "name": "だいもんじ", "power": 120, "hitrate": 85, "type": "special", "direct": false},
 {"id": 32, "skilltype": "でんき", "color": "#FFE000", "name": "10まんボルト", "power": 90, "hitrate": 100, "type": "special", "direct": false},
 {"id": 33, "skilltype": "ドラゴン", "color": "#4954A9", "name": "りゅうせいぐん", "power": 130, "hitrate": 90, "type": "special", "direct": false, "CR00": true},
 {"id": 34, "skilltype": "ひこう", "color": "#ABBFF3", "name": "ぼうふう", "power": 110, "hitrate": 70, "type": "special", "direct": false},
 {"id": 35, "skilltype": "ひこう", "color": "#ABBFF3", "name": "はねやすめ", "power": 0, "hitrate": 100, "type": "change", "direct": false, "heal": true, "mything": true},
 {"id": 36, "skilltype": "はがね", "color": "#999999", "name": "デカハンマー", "power": 160, "hitrate": 100, "type": "physics", "direct": false, "recoil": true},
 {"id": 37, "skilltype": "フェアリー", "color": "#FF58B9", "name": "じゃれつく", "power": 90, "hitrate": 90, "type": "physics", "direct": true},
 {"id": 38, "skilltype": "じめん", "color": "#CF9E4E", "name": "じならし", "power": 60, "hitrate": 100, "type": "physics", "direct": false, "outSR0": true},
 {"id": 39, "skilltype": "かくとう", "color": "#FF9900", "name": "ドレインパンチ", "power": 75, "hitrate": 100, "type": "physics", "direct": true, "AH": true, "punch": true},
 {"id": 40, "skilltype": "フェアリー", "color": "#FF58B9", "name": "ムーンフォース", "power": 95, "hitrate": 100, "type": "special", "direct": false},
 {"id": 41, "skilltype": "くさ", "color": "#55D600", "name": "エナジーボール", "power": 90, "hitrate": 100, "type": "special", "direct": false},
 {"id": 42, "skilltype": "ひこう", "color": "#ABBFF3", "name": "おいかぜ", "power": 0, "hitrate": 100, "type": "change", "direct": false, "backwind": true, "mything": true},
 {"id": 43, "skilltype": "あく", "color": "#452222", "name": "おきみやげ", "power": 0, "hitrate": 100, "type": "change", "direct": false, "putgift": true, "outAR00": true, "outCR00": true},
 {"id": 44, "skilltype": "どく", "color": "#A600FF", "name": "とける", "power": 0, "hitrate": 100, "type": "change", "direct": false, "up": true, "BR2": true, "mything": true},
 {"id": 45, "skilltype": "エスパー", "color": "#FF8DE8", "name": "アシストパワー", "power": 20, "hitrate": 100, "type": "assist", "direct": false, "assist": true},
 {"id": 46, "skilltype": "エスパー", "color": "#FF8DE8", "name": "めいそう", "power": 0, "hitrate": 100, "type": "change", "direct": false, "up": true, "CR1": true, "DR1": true, "mything": true},
 {"id": 47, "skilltype": "でんき", "color": "#FFE000", "name": "でんこうそうげき", "power": 120, "hitrate": 100, "type": "physics", "direct": true},
 {"id": 48, "skilltype": "こおり", "color": "#44D3FF", "name": "れいとうパンチ", "power": 75, "hitrate": 100, "type": "physics", "direct": true, "punch": true},
 {"id": 49, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "さいきのいのり", "power": 0, "hitrate": 100, "type": "change", "direct": false, "againheal": true, "mything": true},
 {"id": 50, "skilltype": "あく", "color": "#452222", "name": "あくのはどう", "power": 80, "hitrate": 100, "type": "special", "direct": false, "wince2": true},
 {"id": 51, "skilltype": "はがね", "color": "#999999", "name": "ラスターカノン", "power": 80, "hitrate": 100, "type": "special", "direct": false},
 {"id": 52, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "ハイパーボイス", "power": 90, "hitrate": 100, "type": "special", "direct": false, "song": true},
 {"id": 53, "skilltype": "ほのお", "color": "#FF421C", "name": "マジカルフレイム", "power": 75, "hitrate": 100, "type": "special", "direct": false, "outCR0": true},
 {"id": 54, "skilltype": "ほのお", "color": "#FF421C", "name": "ニトロチャージ", "power": 50, "hitrate": 100, "type": "physics", "direct": true, "SR1": true},
 {"id": 55, "skilltype": "ドラゴン", "color": "#4954A9", "name": "りゅうのはどう", "power": 85, "hitrate": 100, "type": "special", "direct": false},
 {"id": 56, "skilltype": "ドラゴン", "color": "#4954A9", "name": "ドラゴンクロー", "power": 80, "hitrate": 100, "type": "physics", "direct": true},
 {"id": 57, "skilltype": "はがね", "color": "#999999", "name": "アイアンヘッド", "power": 80, "hitrate": 100, "type": "physics", "direct": true, "wince": true},
 {"id": 58, "skilltype": "くさ", "color": "#55D600", "name": "トリックフラワー", "power": 70, "hitrate": 10000, "type": "vitalpoint", "direct": false, "hyperhitrate": true},
 {"id": 59, "skilltype": "あく", "color": "#452222", "name": "はたきおとす", "power": 65, "hitrate": 100, "type": "physics", "direct": false},
 {"id": 60, "skilltype": "かくとう", "color": "#FF9900", "name": "けたぐり", "power": 0, "hitrate": 100, "type": "heavy", "direct": true},
 {"id": 61, "skilltype": "ひこう", "color": "#ABBFF3", "name": "ダブルウィング", "power": 40, "hitrate": 90, "type": "physics", "direct": true, "Wattack": true},
 {"id": 62, "skilltype": "ゴースト", "color": "#300770", "name": "ふんどのこぶし", "power": 50, "hitrate": 100, "type": "angry", "direct": true, "punch": true},
 {"id": 63, "skilltype": "かくとう", "color": "#FF9900", "name": "ビルドアップ", "power": 0, "hitrate": 100, "type": "change", "direct": false, "up": true, "AR1": true, "BR1": true, "mything": true},
 {"id": 64, "skilltype": "いわ", "color": "#9A6100", "name": "がんせきふうじ", "power": 50, "hitrate": 100, "type": "physics", "direct": false, "outSR0": true},
 {"id": 65, "skilltype": "はがね", "color": "#999999", "name": "コメットパンチ", "power": 90, "hitrate": 90, "type": "physics", "direct": true, "AR1two": true, "punch": true},
 {"id": 66, "skilltype": "エスパー", "color": "#FF8DE8", "name": "しねんのずつき", "power": 80, "hitrate": 90, "type": "physics", "direct": true, "wince2": true},
 {"id": 67, "skilltype": "こおり", "color": "#44D3FF", "name": "こごえるかぜ", "power": 55, "hitrate": 100, "type": "special", "direct": false, "outSR0": true},
 {"id": 68, "skilltype": "こおり", "color": "#44D3FF", "name": "れいとうビーム", "power": 90, "hitrate": 100, "type": "special", "direct": false},
 {"id": 69, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "がむしゃら", "power": 0, "hitrate": 100, "type": "change", "direct": true, "obsessed": true},
 {"id": 70, "skilltype": "こおり", "color": "#44D3FF", "name": "ゆきなだれ", "power": 60, "hitrate": 100, "type": "physics", "direct": false, "snowdown": true},
 {"id": 71, "skilltype": "はがね", "color": "#999999", "name": "てっぺき", "power": 0, "hitrate": 100, "type": "change", "direct": false, "up": true, "BR2": true, "mything": true},
 {"id": 72, "skilltype": "かくとう", "color": "#FF9900", "name": "ボディプレス", "power": 80, "hitrate": 100, "type": "bodypress", "direct": true},
 {"id": 73, "skilltype": "じめん", "color": "#CF9E4E", "name": "ぶちかまし", "power": 120, "hitrate": 100, "type": "physics", "direct": true, "BR0": true, "DR0": true},
 {"id": 74, "skilltype": "ほのお", "color": "#FF421C", "name": "ほのおのパンチ", "power": 75, "hitrate": 100, "type": "physics", "direct": true, "punch": true},
 {"id": 75, "skilltype": "ゴースト", "color": "#300770", "name": "うらみつらみ", "power": 75, "hitrate": 100, "type": "special", "direct": false, "outAR0": true},
 {"id": 76, "skilltype": "あく", "color": "#452222", "name": "バークアウト", "power": 55, "hitrate": 100, "type": "special", "direct": false, "outCR0": true},
 {"id": 77, "skilltype": "かくとう", "color": "#FF9900", "name": "きあいだま", "power": 120, "hitrate": 70, "type": "special", "direct": false},
 {"id": 78, "skilltype": "じめん", "color": "#CF9E4E", "name": "だいちのちから", "power": 90, "hitrate": 100, "type": "special", "direct": false},
 {"id": 79, "skilltype": "ひこう", "color": "#ABBFF3", "name": "ドリルくちばし", "power": 80, "hitrate": 100, "type": "physics", "direct": true},
 {"id": 80, "skilltype": "フェアリー", "color": "#FF58B9", "name": "ソウルクラッシュ", "power": 75, "hitrate": 100, "type": "physics", "direct": true, "outCR0": true},
 {"id": 81, "skilltype": "かくとう", "color": "#FF9900", "name": "かわらわり", "power": 75, "hitrate": 100, "type": "physics", "direct": true},
 {"id": 82, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "まもる", "power": 0, "hitrate": 100, "type": "change", "direct": false, "shield": true, "mything": true},
 {"id": 83, "skilltype": "かくとう", "color": "#FF9900", "name": "クロスチョップ", "power": 75, "hitrate": 100, "type": "physics", "direct": true},
 {"id": 84, "skilltype": "じめん", "color": "#CF9E4E", "name": "じわれ", "power": 60, "hitrate": 30, "type": "change", "direct": false, "onekill": true},
 {"id": 85, "skilltype": "みず", "color": "#028DFF", "name": "うたかたのアリア", "power": 90, "hitrate": 100, "type": "special", "direct": false, "song": true},
 {"id": 86, "skilltype": "こおり", "color": "#44D3FF", "name": "フリーズドライ", "power": 70, "hitrate": 100, "type": "special", "direct": false, "icewater": true},
 {"id": 87, "skilltype": "でんき", "color": "#FFE000", "name": "かみなり", "power": 110, "hitrate": 70, "type": "special", "direct": false},
 {"id": 88, "skilltype": "エスパー", "color": "#FF8DE8", "name": "リフレクター", "power": 0, "hitrate": 100, "type": "change", "direct": false, "barrier": true, "Pbarrier": true, "mything": true},
 {"id": 89, "skilltype": "ほのお", "color": "#FF421C", "name": "かえんボール", "power": 120, "hitrate": 90, "type": "physics", "direct": false},
 {"id": 90, "skilltype": "かくとう", "color": "#FF9900", "name": "とびひざげり", "power": 130, "hitrate": 90, "type": "physics", "direct": true, "reaction": true, "skyjump": true},
 {"id": 91, "skilltype": "みず", "color": "#028DFF", "name": "たきのぼり", "power": 80, "hitrate": 100, "type": "physics", "direct": false, "wince2": true},
 {"id": 92, "skilltype": "こおり", "color": "#44D3FF", "name": "こおりのキバ", "power": 75, "hitrate": 95, "type": "physics", "direct": true, "wince2": true, "fang": true},
 {"id": 93, "skilltype": "いわ", "color": "#9A6100", "name": "いわなだれ", "power": 75, "hitrate": 90, "type": "physics", "direct": false, "wince": true},
 {"id": 94, "skilltype": "みず", "color": "#028DFF", "name": "ハイドロポンプ", "power": 110, "hitrate": 80, "type": "special", "direct": false},
 {"id": 95, "skilltype": "ひこう", "color": "#ABBFF3", "name": "アクロバット", "power": 110, "hitrate": 100, "type": "physics", "direct": true},
 {"id": 96, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "しんそく", "power": 80, "hitrate": 100, "type": "physics", "direct": true},
 {"id": 97, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "たまごうみ", "power": 0, "hitrate": 100, "type": "change", "direct": false, "heal": true, "egg": true, "mything": true},
 {"id": 98, "skilltype": "みず", "color": "#028DFF", "name": "アクアジェット", "power": 40, "hitrate": 100, "type": "physics", "direct": true, "firster": true},
 {"id": 99, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "はらだいこ", "power": 0, "hitrate": 100, "type": "change", "direct": false, "drum": true, "mything": true},
 {"id": 100, "skilltype": "はがね", "color": "#999999", "name": "バレットパンチ", "power": 40, "hitrate": 100, "type": "physics", "direct": true, "punch": true, "firster": true},
 {"id": 101, "skilltype": "むし", "color": "#81EC16", "name": "むしくい", "power": 60, "hitrate": 100, "type": "physics", "direct": true},
 {"id": 102, "skilltype": "ゴースト", "color": "#300770", "name": "ゴーストダイブ", "power": 90, "hitrate": 100, "type": "physics", "direct":true, "secondattack": true, "shieldbreak": true},
 {"id": 103, "skilltype": "はがね", "color": "#999999", "name": "はがねのつばさ", "power": 70, "hitrate": 90, "type": "physics", "direct": true},
 {"id": 104, "skilltype": "くさ", "color": "#55D600", "name": "きのこのほうし", "power": 0, "hitrate": 100, "type": "change", "direct": false, "sleepy": true},
 {"id": 105, "skilltype": "どく", "color": "#A600FF", "name": "クリアスモッグ", "power": 50, "hitrate": 100, "type": "special", "direct": false, "reset": true},
 {"id": 106, "skilltype": "ほのお", "color": "#FF421C", "name": "フレアソング", "power": 80, "hitrate": 100, "type": "special", "direct": false, "CR1": true, "song": true},
 {"id": 107, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "なまける", "power": 0, "hitrate": 100, "type": "change", "direct": false, "heal": true, "mything": true},
 {"id": 108, "skilltype": "みず", "color": "#028DFF", "name": "ひやみず", "power": 50, "hitrate": 100, "type": "special", "direct": false, "outAR0": true},
 {"id": 109, "skilltype": "あく", "color": "#452222", "name": "わるだくみ", "power": 0, "hitrate": 100, "type": "change", "direct": false, "up": true, "CR2": true, "mything": true},
 {"id": 110, "skilltype": "ほのお", "color": "#FF421C", "name": "オーバーヒート", "power": 130, "hitrate": 90, "type": "special", "direct": false, "CR00": true},
 {"id": 111, "skilltype": "くさ", "color": "#55D600", "name": "リーフストーム", "power": 130, "hitrate": 90, "type": "special", "direct": false, "CR00": true},
 {"id": 112, "skilltype": "こおり", "color": "#44D3FF", "name": "ふぶき", "power": 110, "hitrate": 70, "type": "special", "direct": false},
 {"id": 113, "skilltype": "エスパー", "color": "#FF8DE8", "name": "サイコショック", "power": 80, "hitrate": 100, "type": "specialblock", "direct": false},
 {"id": 114, "skilltype": "フェアリー", "color": "#FF58B9", "name": "ドレインキッス", "power": 50, "hitrate": 100, "type": "special", "direct": true, "AH2": true},
 {"id": 115, "skilltype": "エスパー", "color": "#FF8DE8", "name": "バリアー", "power": 0, "hitrate": 100, "type": "change", "direct": true, "up": true, "BR2": true, "mything": true},
 {"id": 116, "skilltype": "かくとう", "color": "#FF9900", "name": "せいなるつるぎ", "power": 90, "hitrate": 100, "type": "physics", "direct": true, "noR": true, "slice": true},
 {"id": 117, "skilltype": "エスパー", "color": "#FF8DE8", "name": "サイコカッター", "power": 70, "hitrate": 100, "type": "physics", "direct": false, "highrate": true, "slice": true},
 {"id": 118, "skilltype": "あく", "color": "#452222", "name": "つじぎり", "power": 80, "hitrate": 100, "type": "physics", "direct": true, "highrate": true, "slice": true},
 {"id": 119, "skilltype": "くさ", "color": "#55D600", "name": "リーフブレード", "power": 90, "hitrate": 100, "type": "physics", "direct": true, "highrate": true, "slice": true},
 {"id": 120, "skilltype": "みず", "color": "#028DFF", "name": "クラブハンマー", "power": 100, "hitrate": 90, "type": "physics", "direct": true, "highrate": true, "punch": true},
 {"id": 121, "skilltype": "じめん", "color": "#CF9E4E", "name": "10まんばりき", "power": 95, "hitrate": 95, "type": "physics", "direct": true},
 {"id": 122, "skilltype": "むし", "color": "#81EC16", "name": "シザークロス", "power": 80, "hitrate": 100, "type": "physics", "direct": true},
 {"id": 123, "skilltype": "あく", "color": "#452222", "name": "カタストロフィ", "power": 0, "hitrate": 90, "type": "change", "direct": false, "halflockdmg": true},
 {"id": 124, "skilltype": "こおり", "color": "#44D3FF", "name": "アイススピナー", "power": 80, "hitrate": 100, "type": "physics", "direct": true, "breakfield": true},
 {"id": 125, "skilltype": "あく", "color": "#452222", "name": "じこくづき", "power": 80, "hitrate": 100, "type": "physics", "direct": true, "nosong": true},
 {"id": 126, "skilltype": "エスパー", "color": "#FF8DE8", "name": "サイコキネシス", "power": 90, "hitrate": 100, "type": "special", "direct": false},
 {"id": 127, "skilltype": "ほのお", "color": "#FF421C", "name": "ねっぷう", "power": 95, "hitrate": 90, "type": "special", "direct": false},
 {"id": 128, "skilltype": "みず", "color": "#028DFF", "name": "なみのり", "power": 90, "hitrate": 100, "type": "special", "direct": true},
 {"id": 129, "skilltype": "フェアリー", "color": "#FF58B9", "name": "しぜんのいかり", "power": 0, "hitrate": 100, "type": "change", "direct": false, "halflockdmg": true},
 {"id": 130, "skilltype": "あく", "color": "#452222", "name": "あんこくきょうだ", "power": 80, "hitrate": 100, "type": "vitalpoint", "direct": true, "hyperhitrate": true},
 {"id": 131, "skilltype": "エスパー", "color": "#FF8DE8", "name": "ひかりのかべ", "power": 0, "hitrate": 100, "type": "change", "direct": false, "barrier": true, "Sbarrier": true, "mything": true},
 {"id": 132, "skilltype": "くさ", "color": "#55D600", "name": "りんごさん", "power": 80, "hitrate": 100, "type": "special", "direct": false, "outDR0": true},
 {"id": 133, "skilltype": "エスパー", "color": "#FF8DE8", "name": "ドわすれ", "power": 0, "hitrate": 100, "type": "change", "direct": false, "up": true, "DR2": true, "mything": true},
 {"id": 134, "skilltype": "むし", "color": "#81EC16", "name": "むしのさざめき", "power": 90, "hitrate": 100, "type": "special", "direct": false, "song": true},
 {"id": 135, "skilltype": "どく", "color": "#A600FF", "name": "ダストシュート", "power": 120, "hitrate": 80, "type": "physics", "direct": false},
 {"id": 136, "skilltype": "じめん", "color": "#CF9E4E", "name": "じだんだ", "power": 75, "hitrate": 100, "type": "physics", "direct": false},
 {"id": 137, "skilltype": "あく", "color": "#452222", "name": "しっぺがえし", "power": 60, "hitrate": 100, "type": "physics", "direct": true},
 {"id": 138, "skilltype": "ほのお", "color": "#FF421C", "name": "ほのおのキバ", "power": 75, "hitrate": 95, "type": "physics", "direct": true, "wince2": true, "fang": true},
 {"id": 139, "skilltype": "はがね", "color": "#999999", "name": "ダブルパンツァー", "power": 60, "hitrate": 100, "type": "physics", "direct": true, "Wattack": true, "wince": true, "punch": true},
 {"id": 140, "skilltype": "かくとう", "color": "#FF9900", "name": "アームハンマー", "power": 100, "hitrate": 90, "type": "physics", "direct": true, "SR0": true, "punch": true},
 {"id": 141, "skilltype": "あく", "color": "#452222", "name": "DDラリアット", "power": 85, "hitrate": 100, "type": "physics", "direct": true, "noR": true},
 {"id": 142, "skilltype": "いわ", "color": "#9A6100", "name": "アクセルロック", "power": 40, "hitrate": 100, "type": "physics", "direct": true, "firster": true},
 {"id": 143, "skilltype": "じめん", "color": "#CF9E4E", "name": "ドリルライナー", "power": 80, "hitrate": 95, "type": "physics", "direct": true, "highhitrate": true},
 {"id": 144, "skilltype": "くさ", "color": "#55D600", "name": "くさむすび", "power": 0, "hitrate": 100, "type": "heavy", "direct": false},
 {"id": 145, "skilltype": "でんき", "color": "#FFE000", "name": "ライジングボルト", "power": 70, "hitrate": 100, "type": "special", "direct": false},
 {"id": 146, "skilltype": "ドラゴン", "color": "#4954A9", "name": "ドラゴンエナジー", "power": 150, "hitrate": 100, "type": "hpboost", "direct": false},
 {"id": 147, "skilltype": "でんき", "color": "#FFE000", "name": "かみなりのキバ", "power": 75, "hitrate": 95, "type": "physics", "direct": true, "wince2": true, "fang": true},
 {"id": 148, "skilltype": "くさ", "color": "#55D600", "name": "ソーラービーム", "power": 120, "hitrate": 100, "type": "special", "direct": false, "secondattack": true},
 {"id": 149, "skilltype": "ゴースト", "color": "#300770", "name": "かげうち", "power": 40, "hitrate": 100, "type": "physics", "direct": true, "firster": true},
 {"id": 150, "skilltype": "はがね", "color": "#999999", "name": "キングシールド", "power": 0, "hitrate": 100, "type": "change", "direct": false, "shield": true, "mything": true},
 {"id": 151, "skilltype": "みず", "color": "#028DFF", "name": "アクアブレイク", "power": 85, "hitrate": 100, "type": "physics", "direct": true},
 {"id": 152, "skilltype": "ドラゴン", "color": "#4954A9", "name": "いっちょうあがり", "power": 80, "hitrate": 100, "type": "physics", "direct": true},
 {"id": 153, "skilltype": "ドラゴン", "color": "#4954A9", "name": "ソウルビート", "power": 0, "hitrate": 100, "type": "change", "direct": false, "up": true, "AR1": true, "BR1": true, "CR1": true, "DR1": true, "SR1": true, "mything": true},
 {"id": 154, "skilltype": "ほのお", "color": "#FF421C", "name": "アーマーキャノン", "power": 80, "hitrate": 100, "type": "special", "direct": false, "BR0": true, "DR0": true},
 {"id": 155, "skilltype": "かくとう", "color": "#FF9900", "name": "はどうだん", "power": 80, "hitrate": 10000, "type": "special", "direct": false},
 {"id": 156, "skilltype": "エスパー", "color": "#FF8DE8", "name": "ミラーコート", "power": 100, "hitrate": 100, "type": "change", "direct": false, "counter": true},
 {"id": 157, "skilltype": "くさ", "color": "#55D600", "name": "Gのちから", "power": 80, "hitrate": 100, "type": "physics", "direct": false, "outBR0": true},
 {"id": 158, "skilltype": "ドラゴン", "color": "#4954A9", "name": "ドラゴンダイブ", "power": 100, "hitrate": 75, "type": "physics", "direct": true, "wince2": true},
 {"id": 159, "skilltype": "はがね", "color": "#999999", "name": "たてこもる", "power": 0, "hitrate": 100, "type": "change", "direct": false, "up": true, "BR1": true, "KR1": true, "mything": true},
 {"id": 160, "skilltype": "でんき", "color": "#FFE000", "name": "でんげきくちばし", "power": 85, "hitrate": 100, "type": "physics", "direct": true},
 {"id": 161, "skilltype": "みず", "color": "#028DFF", "name": "エラがみ", "power": 85, "hitrate": 100, "type": "physics", "direct": true, "fang": true},
 {"id": 162, "skilltype": "エスパー", "color": "#FF8DE8", "name": "サイコファング", "power": 85, "hitrate": 100, "type": "physics", "direct": true, "fang": true},
 {"id": 163, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "ちいさくなる", "power": 0, "hitrate": 100, "type": "change", "direct": false, "up": true, "KR2": true, "mything": true},
 {"id": 164, "skilltype": "あく", "color": "#452222", "name": "ドゲザン", "power": 85, "hitrate": 10000, "type": "physics", "direct": true},
 {"id": 165, "skilltype": "はがね", "color": "#999999", "name": "ギアチェンジ", "power": 0, "hitrate": 100, "type": "change", "direct": false, "up": true, "AR1": true, "SR2": true, "mything": true},
 {"id": 166, "skilltype": "ゴースト", "color": "#300770", "name": "のろい", "power": 0, "hitrate": 100, "type": "change", "direct": false, "up": true, "AR1": true, "BR1": true, "SR0": true, "mything": true},
 {"id": 167, "skilltype": "くさ", "color": "#55D600", "name": "くさわけ", "power": 50, "hitrate": 100, "type": "physics", "direct": true, "SR1": true},
 {"id": 168, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "ウェザーボール", "power": 50, "hitrate": 100, "type": "special", "direct": false},
 {"id": 169, "skilltype": "くさ", "color": "#55D600", "name": "こうごうせい", "power": 0, "hitrate": 100, "type": "change", "direct": false, "heal": true, "mything": true},
 {"id": 170, "skilltype": "こおり", "color": "#44D3FF", "name": "こおりのつぶて", "power": 40, "hitrate": 100, "type": "spcial", "direct": false, "firster": true},
 {"id": 171, "skilltype": "いわ", "color": "#9A6100", "name": "パワージェム", "power": 80, "hitrate": 100, "type": "special", "direct": false},
 {"id": 172, "skilltype": "あく", "color": "#452222", "name": "イカサマ", "power": 95, "hitrate": 100, "type": "physics", "direct": true, "useoutA": true},
 {"id": 173, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "あくび", "power": 0, "hitrate": 100, "type": "change", "direct": false},
 {"id": 174, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "ねがいごと", "power": 0, "hitrate": 100, "type": "change", "direct": false, "mything": true},
 {"id": 175, "skilltype": "エスパー", "color": "#FF8DE8", "name": "パワースワップ", "power": 0, "hitrate": 100, "type": "change", "direct": false, "swap": true, "power": true},
 {"id": 176, "skilltype": "エスパー", "color": "#FF8DE8", "name": "スピードスワップ", "power": 0, "hitrate": 100, "type": "change", "direct": false, "swap": true, "speed": true},
 {"id": 177, "skilltype": "でんき", "color": "#FFE000", "name": "チャージビーム", "power": 50, "hitrate": 90, "type": "special", "direct": false, "CR1h": true},
 {"id": 178, "skilltype": "くさ", "color": "#55D600", "name": "コットンガード", "power": 0, "hitrate": 100, "type": "change", "direct": false, "up": true, "BR3": true, "mything": true},
 {"id": 179, "skilltype": "かくとう", "color": "#FF9900", "name": "きしかいせい", "power": 0, "hitrate": 100, "type": "revival", "direct": true},
 {"id": 180, "skilltype": "むし", "color": "#81EC16", "name": "メガホーン", "power": 120, "hitrate": 85, "type": "physics", "direct": false},
 {"id": 181, "skilltype": "みず", "color": "#028DFF", "name": "シェルブレード", "power": 75, "hitrate": 100, "type": "physics", "direct": true, "outBR0h": true, "slice": true},
 {"id": 182, "skilltype": "はがね", "color": "#999999", "name": "ヘビーボンバー", "power": 60, "hitrate": 100, "type": "physics", "direct": true, "heavy": true},
 {"id": 183, "skilltype": "エスパー", "color": "#FF8DE8", "name": "フォトンゲイザー", "power": 100, "hitrate": 100, "type": "special", "direct": false, "specialphysics": true},
 {"id": 184, "skilltype": "はがね", "color": "#999999", "name": "スマートホーン", "power": 70, "hitrate": 10000, "type": "physics", "direct": true},
 {"id": 185, "skilltype": "じめん", "color": "#CF9E4E", "name": "サウザンアロー", "power": 90, "hitrate": 100, "type": "physics", "direct": false, "noF": true},
 {"id": 186, "skilltype": "あく", "color": "#452222", "name": "いじげんラッシュ", "power": 100, "hitrate": 10000, "type": "physics", "direct": true, "BR0": true},
 {"id": 187, "skilltype": "じめん", "color": "#CF9E4E", "name": "だんがいのつるぎ", "power": 120, "hitrate": 85, "type": "physics", "direct": false},
 {"id": 188, "skilltype": "みず", "color": "#028DFF", "name": "こんげんのはどう", "power": 110, "hitrate": 85, "type": "special", "direct": false},
 {"id": 189, "skilltype": "でんき", "color": "#FFE000", "name": "らいげき", "power": 130, "hitrate": 85, "type": "physics", "direct": false},
 {"id": 190, "skilltype": "ほのお", "color": "#FF421C", "name": "あおいほのお", "power": 130, "hitrate": 85, "type": "special", "direct": false},
 {"id": 191, "skilltype": "こおり", "color": "#44D3FF", "name": "ブリザードランス", "power": 130, "hitrate": 100, "type": "physics", "direct": false},
 {"id": 192, "skilltype": "ゴースト", "color": "#300770", "name": "アストラルビット", "power": 120, "hitrate": 100, "type": "special", "direct": false},
 {"id": 193, "skilltype": "ひこう", "color": "#ABBFF3", "name": "ガリョウテンセイ", "power": 120, "hitrate": 100, "type": "physics", "direct": true, "BR0": true, "DR0": true},
 {"id": 194, "skilltype": "いわ", "color": "#9A6100", "name": "ダイヤストーム", "power": 100, "hitrate": 95, "type": "physics", "direct": false, "BRh": true},
 {"id": 195, "skilltype": "ゴースト", "color": "#300770", "name": "シャドースチール", "power": 90, "hitrate": 100, "type": "physics", "direct": true},
 {"id": 196, "skilltype": "ほのお", "color": "#FF421C", "name": "Vジェネレート", "power": 180, "hitrate": 95, "type": "physics", "direct": true, "BR0": true, "DR0": true, "SR0": true},
 {"id": 197, "skilltype": "じめん", "color": "#CF9E4E", "name": "ねっさのだいち", "power": 70, "hitrate": 100, "type": "special", "direct": false},
];
let MAXskill = [
 {"id": 0, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "ダイウォール", "power": 0, "hitrate": 100, "type": "unknown", "direct": false, "mything": true},
 {"id": 1, "skilltype": "ノーマル", "color": "#BBBBBB", "name": "ダイアタック", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "outSR0": true},
 {"id": 2, "skilltype": "かくとう", "color": "#FF9900", "name": "ダイナックル", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "AR1": true},
 {"id": 3, "skilltype": "どく", "color": "#A600FF", "name": "ダイアシッド", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "CR1": true},
 {"id": 4, "skilltype": "じめん", "color": "#CF9E4E", "name": "ダイアース", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "DR1": true},
 {"id": 5, "skilltype": "ひこう", "color": "#ABBFF3", "name": "ダイジェット", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "SR1": true},
 {"id": 6, "skilltype": "むし", "color": "#81EC16", "name": "ダイワーム", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "outCR0": true},
 {"id": 7, "skilltype": "いわ", "color": "#9A6100", "name": "ダイロック", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "sandstrom": true},
 {"id": 8, "skilltype": "ゴースト", "color": "#300770", "name": "ダイホロウ", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "outBR0": true},
 {"id": 9, "skilltype": "はがね", "color": "#999999", "name": "ダイスチル", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "BR1": true},
 {"id": 10, "skilltype": "ほのお", "color": "#FF421C", "name": "ダイバーン", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "sunny": true},
 {"id": 11, "skilltype": "みず", "color": "#028DFF", "name": "ダイストリーム", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "rainy": true},
 {"id": 12, "skilltype": "でんき", "color": "#FFE000", "name": "ダイサンダー", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "elec": true},
 {"id": 13, "skilltype": "くさ", "color": "#55D600", "name": "ダイソウゲン", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "grass": true},
 {"id": 14, "skilltype": "こおり", "color": "#44D3FF", "name": "ダイアイス", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "snowy": true},
 {"id": 15, "skilltype": "エスパー", "color": "#FF8DE8", "name": "ダイサイコ", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "phycho": true},
 {"id": 16, "skilltype": "ドラゴン", "color": "#4954A9", "name": "ダイドラグーン", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "outAR0": true},
 {"id": 17, "skilltype": "あく", "color": "#452222", "name": "ダイアーク", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "outDR0": true},
 {"id": 18, "skilltype": "フェアリー", "color": "#FF58B9", "name": "ダイフェアリー", "power": "unknown", "hitrate": 100, "type": "unknown", "direct": false, "mist": true},
 {"id": 19, "skilltype": "unknown", "name": "unknown", "power": "unknown"},
 {"id": 20, "skilltype": "かくとう", "color": "#FF9900", "name": "キョダイシンゲキ", "power": "unknown", "hitrate": 100, "type": "unknown", direct: false, "highhitrating": true},
 {"id": 21, "skilltype": "こおり", "color": "#44D3FF", "name": "キョダイセンリツ", "power": "unknown", "hitrate": 100, "type": "unknown", direct: false, "barrier": true},
 {"id": 22, "skilltype": "ほのお", "color": "#FF421C", "name": "キョダイカキュウ", "power": "unknown", "hitrate": 100, "type": "unknown", direct: false, "noF": true},
 {"id": 23, "skilltype": "ひこう", "color": "#ABBFF3", "name": "キョダイフウゲキ", "power": "unknown", "hitrate": 100, "type": "unknown", direct: false, "nofield": true},
 {"id": 24, "skilltype": "フェアリー", "color": "#FF58B9", "name": "キョダイダンエン", "power": "unknown", "hitrate": 100, "type": "unknown", direct: false, "AMH": true},
 {"id": 25, "skilltype": "みず", "color": "#028DFF", "name": "キョダイホウマツ", "power": "unknown", "hitrate": 100, "type": "unknown", direct: false, "outSR00": true},
 {"id": 26, "skilltype": "あく", "color": "#452222", "name": "キョダイイチゲキ", "power": "unknown", "hitrate": 100, "type": "unknown", direct: false, "MAXshieldbreak": true},
 {"id": 27, "skilltype": "くさ", "color": "#55D600", "name": "キョダイカンロ", "power": "unknown", "hitrate": 100, "type": "unknown", direct: false},
 {"id": 28, "skilltype": "はがね", "color": "#999999", "name": "キョダイユウゲキ", "power": "unknown", "hitrate": 100, "type": "unknown", direct: false},
 {"id": 29, "skilltype": "くさ", "color": "#55D600", "name": "キョダイサンゲキ", "power": "unknown", "hitrate": 100, "type": "unknown", direct: false, "outKR0": true},
 {"id": 30, "skilltype": "エスパー", "color": "#FF8DE8", "name": "キョダイテンドウ", "power": "unknown", "hitrate": 100, "type": "unknown", direct: false, "gravity": true},
];
const display = [
 {"id": 0, "dp": "効果は今ひとつのようだ……"},
 {"id": 1, "dp": "効果は今ひとつのようだ…"},
 {"id": 2, "dp": "効果がないようだ…"},
 {"id": 3, "dp": "効果はバツグンだ！"},
 {"id": 4, "dp": "効果はバツグンだ！！"},
];
const rank = [
 {"R": 2/8, "KR": 9/3, "dp": "▼▼▼▼▼▼"},
 {"R": 2/7, "KR": 8/3, "dp": "▼▼▼▼▼・"},
 {"R": 2/6, "KR": 7/3, "dp": "▼▼▼▼・・"},
 {"R": 2/5, "KR": 6/3, "dp": "▼▼▼・・・"},
 {"R": 2/4, "KR": 5/3, "dp": "▼▼・・・・"},
 {"R": 2/3, "KR": 4/3, "dp": "▼・・・・・"},
 {"R": 2/2, "KR": 3/3, "dp": "・・・・・・"},
 {"R": 3/2, "KR": 3/4, "dp": "▲・・・・・"},
 {"R": 4/2, "KR": 3/5, "dp": "▲▲・・・・"},
 {"R": 5/2, "KR": 3/6, "dp": "▲▲▲・・・"},
 {"R": 6/2, "KR": 3/7, "dp": "▲▲▲▲・・"},
 {"R": 7/2, "KR": 3/8, "dp": "▲▲▲▲▲・"},
 {"R": 8/2, "KR": 3/9, "dp": "▲▲▲▲▲▲"},
];
const vital = [
 {"R": 417/100},
 {"R": 30},
 {"R": 50},
 {"R": 100},
 {"R": 100},
 {"R": 100},
 {"R": 100},
];
const shieldrate = [
 {"rate": 100},
 {"rate": 50},
 {"rate": 25},
 {"rate": 125/100},
 {"rate": 675/1000},
 {"rate": 3125/10000},
];
const randomscore = [
 {"rate": 80/100},
 {"rate": 85/100},
 {"rate": 90/100},
 {"rate": 95/100},
 {"rate": 100/100},
 {"rate": 105/100},
 {"rate": 110/100},
 {"rate": 115/100},
 {"rate": 120/100},
]
