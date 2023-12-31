const BOSS = [
 {"name": "ムゲンダイナ", "img": "BOSSimg/event(Mugendina).jpg", "MR": "11.25", "MRdp": "★★★★★★★★★★★☆", "task": "こおり"},
 {"name": "ウルトラネクロズマ", "img": "BOSSimg/event(UltraNecrozma).jpg", "MR": "7.5", "MRdp": "★★★★★★★☆", "task": "ゴースト"},
 {"name": "ジガルデ(スワームチェンジ)", "img": "BOSSimg/event(Zygarde).jpg", "MR": "7.08", "MRdp": "★★★★★★★☆", "task": "こおり"},
 {"name": "フーパ(ときはなたれしすがた)", "img": "BOSSimg/event(Hoopa).jpg", "MR": "6.8", "MRdp": "★★★★★★☆", "task": "むし"},
 {"name": "ゲンシグラードン", "img": "BOSSimg/event(Primal).jpg", "MR": "7.7", "MRdp": "★★★★★★★☆", "task": "じめん"},
 {"name": "ゲンシカイオーガ", "img": "BOSSimg/event(Primal).jpg", "MR": "7.7", "MRdp": "★★★★★★★☆", "task": "でんき"},
 {"name": "ブラックキュレム", "img": "BOSSimg/event(Kyurem).jpg", "MR": "7.0", "MRdp": "★★★★★★★", "task": "じめん"},
 {"name": "ホワイトキュレム", "img": "BOSSimg/event(Kyurem).jpg", "MR": "7.0", "MRdp": "★★★★★★★", "task": "フェアリー"},
 {"name": "バドレックス(白馬)", "img": "BOSSimg/Calyrex(whitehorse).png", "MR": "6.8", "MRdp": "★★★★★★☆", "task": "ほのお"},
 {"name": "バドレックス(黒馬)", "img": "BOSSimg/Calyrex(blackhorse).png", "MR": "6.8", "MRdp": "★★★★★★☆", "task": "あく"},
 {"name": "メガレックウザ", "img": "BOSSimg/MegaRayquaza.png", "MR": "7.8", "MRdp": "★★★★★★★☆", "task": "こおり"},
 {"name": "メガディアンシー", "img": "BOSSimg/MegaDiancie.png", "MR": "7.0", "MRdp": "★★★★★★★", "task": "はがね"},
 {"name": "マーシャドー", "img": "BOSSimg/Marshadow.png", "MR": "6.0", "MRdp": "★★★★★★", "task": "フェアリー"},
 {"name": "ビクティニ", "img": "BOSSimg/Victini.png", "MR": "6.0", "MRdp": "★★★★★★", "task": "みず"},
 {"name": "メルメタル", "img": "BOSSimg/Melmetal(giantmax).png", "MR": "6.0", "MRdp": "★★★★★★", "task": "ほのお"},
];
const DC = [
 {"dp": "ノーマル", "score": "1.0", "HP": "1.0", "R": "1.0", "icon1": "", "note1": "", "icon2": "", "note2": "1.0"},
 {"dp": "ハード", "score": "1.5", "HP": "1.0", "R": "1.0", "icon1": "◆", "note1": "ボスの全ての能力がアップ", "icon2": "", "note2": "1.0"},
 {"dp": "アポカリプス", "score": "2.0", "HP": "1.0", "R": "1.5", "icon1": "", "note1": "", "icon2": "", "note2": "1.0"},
 {"dp": "アポカリプス＋１", "score": "2.5", "HP": "1.2", "R": "1.6", "icon1": "", "note1": "", "icon2": "", "note2": "1.0"},
 {"dp": "アポカリプス＋２", "score": "3.0", "HP": "1.4", "R": "1.7", "icon1": "", "note1": "", "icon2": "", "note2": "1.0"},
 {"dp": "アポカリプス＋３", "score": "3.5", "HP": "1.6", "R": "1.8", "icon1": "", "note1": "", "icon2": "", "note2": "1.0"},
 {"dp": "アポカリプス＋４", "score": "4.0", "HP": "1.8", "R": "1.9", "icon1": "", "note1": "", "icon2": "", "note2": "1.0"},
 {"dp": "アポカリプス＋５", "score": "4.5", "HP": "2.0", "R": "2.0", "icon1": "", "note1": "", "icon2": "", "note2": "1.0"},
 {"dp": "アポカリプス＋６", "score": "5.0", "HP": "2.0", "R": "1.5", "icon1": "◆", "note1": "ボスの全ての能力がアップ", "icon2": "", "note2": "1.0"},
 {"dp": "アポカリプス＋７", "score": "5.5", "HP": "2.5", "R": "1.7", "icon1": "◆", "note1": "ボスの全ての能力がアップ", "icon2": "", "note2": "1.0"},
 {"dp": "アポカリプス＋８", "score": "6.0", "HP": "3.0", "R": "1.9", "icon1": "◆", "note1": "ボスの全ての能力がアップ", "icon2": "", "note2": "1.0"},
 {"dp": "アポカリプス＋９", "score": "6.5", "HP": "3.5", "R": "2.1", "icon1": "◆", "note1": "ボスの全ての能力がアップ", "icon2": "", "note2": "1.0"},
 {"dp": "アポカリプス＋１０", "score": "7.0", "HP": "4.0", "R": "2.3", "icon1": "◆", "note1": "ボスの全ての能力がアップ", "icon2": "", "note2": "1.0"},
 {"dp": "アポカリプス＋１１", "score": "7.5", "HP": "4.5", "R": "2.5", "icon1": "◆", "note1": "ボスの全ての能力がアップ", "icon2": "", "note2": "1.0"},
 {"dp": "アポカリプス＋１２", "score": "8.0", "HP": "5.0", "R": "1.8", "icon1": "◆", "note1": "ボスの全ての能力がとてもアップ", "icon2": "", "note2": "1.0"},
 {"dp": "アポカリプス＋１３", "score": "8.5", "HP": "5.0", "R": "2.5", "icon1": "◆", "note1": "ボスの全ての能力がアップ", "icon2": true, "note2": "2.0"},
 {"dp": "アポカリプス＋１４", "score": "9.0", "HP": "5.5", "R": "2.8", "icon1": "◆", "note1": "ボスの全ての能力がアップ", "icon2": true, "note2": "2.5"},
 {"dp": "アポカリプス＋１５", "score": "9.5", "HP": "6.0", "R": "3.1", "icon1": "◆", "note1": "ボスの全ての能力がアップ", "icon2": true, "note2": "3.0"},
 {"dp": "アポカリプス＋１６", "score": "10.0", "HP": "6.5", "R": "3.4", "icon1": "◆", "note1": "ボスの全ての能力がアップ", "icon2": true, "note2": "3.5"},
 {"dp": "アポカリプス＋１７", "score": "10.5", "HP": "7.0", "R": "3.7", "icon1": "◆", "note1": "ボスの全ての能力がとてもアップ", "icon2": true, "note2": "4.0"},
 {"dp": "アポカリプス＋１８", "score": "11.0", "HP": "7.5", "R": "4.0", "icon1": "◆", "note1": "ボスの全ての能力がとてもアップ", "icon2": true, "note2": "4.5"},
 {"dp": "アポカリプス＋１９", "score": "11.5", "HP": "8.0", "R": "4.5", "icon1": "◆", "note1": "ボスの全ての能力がかなりアップ", "icon2": true, "note2": "5.0"},
 {"dp": "アポカリプス＋２０", "score": "12.0", "HP": "8.5", "R": "5.0", "icon1": "◆", "note1": "ボスの全ての能力がかなりアップ", "icon2": true, "note2": "5.5"},
 {"dp": "アポカリプス＋２１", "score": "13.0", "HP": "9.0", "R": "6.0", "icon1": "◆", "note1": "ボスの全ての能力がものすごくアップ", "icon2": true, "note2": "6.0"},
 {"dp": "アポカリプス＋２２", "score": "14.0", "HP": "10.0", "R": "7.0", "icon1": "◆", "note1": "ボスの全ての能力がものすごくアップ", "icon2": true, "note2": "7.0"},
 {"dp": "アポカリプス＋２３", "score": "16.0", "HP": "11.5", "R": "8.0", "icon1": "◆", "note1": "ボスの全ての能力が異常にアップ", "icon2": true, "note2": "8.0"},
 {"dp": "アポカリプス＋２４", "score": "18.0", "HP": "13.0", "R": "9.0", "icon1": "◆", "note1": "ボスの全ての能力が異常にアップ", "icon2": true, "note2": "9.0"},
 {"dp": "アポカリプス＋２５", "score": "20.0", "HP": "15.0", "R": "10.0", "icon1": "◆", "note1": "ボスの全ての能力が最大までアップ", "icon2": true, "note2": "10.0"},
];