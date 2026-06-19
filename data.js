(() => {
  const WEEK_COUNT = 52;
  const WEEK_START = "2026-06-15";
  const DAY_NAMES = ["月", "火", "水", "木", "金"];
  const SERVINGS_NOTE = "夕食は大人2名分、主菜と副菜は翌日の母の昼食1名分まで取り分ける3食分目安。";
  const SOURCE_NAME = "DELISH KITCHEN";

  function main(id, title, sourceUrl, sourceTitle, ingredients, seasonings, note, prep, finish) {
    return {
      id,
      type: "主菜",
      title,
      sourceName: SOURCE_NAME,
      sourceUrl,
      sourceTitle,
      note,
      ingredients,
      seasonings,
      prep,
      finish
    };
  }

  function side(id, title, sourceUrl, sourceTitle, ingredients, seasonings, note, prep, finish) {
    return {
      id,
      type: "副菜",
      title,
      sourceName: SOURCE_NAME,
      sourceUrl,
      sourceTitle,
      note,
      ingredients,
      seasonings,
      prep,
      finish
    };
  }

  function ready(id, title, ingredients, seasonings, note, prep, finish) {
    return {
      id,
      type: "1品もの",
      title,
      note,
      ingredients,
      seasonings,
      prep,
      finish
    };
  }

  const mains = [
    main(
      "basic_teriyaki_chicken",
      "基本の照り焼きチキン",
      "https://delishkitchen.tv/recipes/196290755478684070",
      "基本の照り焼きチキン",
      ["鶏もも肉 2枚(約500g)"],
      ["塩こしょう 少々", "サラダ油 大さじ1", "酒 大さじ2", "みりん 大さじ2", "砂糖 大さじ1", "しょうゆ 大さじ2"],
      "甘辛味で冷めても食べやすい。翌昼分はたれを軽くからめて保存する。",
      ["鶏肉の余分な水気と脂を取り、厚みを整える。", "酒・みりん・砂糖・しょうゆを合わせる。"],
      ["鶏肉を皮目から焼き、裏返して蒸し焼きにする。", "たれを加えて煮からめ、翌昼分を先に取り分ける。"]
    ),
    main(
      "chicken_teri_mayo",
      "鶏もも肉の照りマヨ焼き",
      "https://delishkitchen.tv/recipes/372276310237512850",
      "鶏もも肉の照りマヨ焼き",
      ["鶏もも肉 2枚(約500g)", "レタス 1/2玉"],
      ["塩こしょう 少々", "片栗粉 大さじ2", "サラダ油 大さじ1", "しょうゆ 大さじ2", "みりん 大さじ2", "マヨネーズ 大さじ2"],
      "照り焼きにマヨネーズのコクを足して満足感を出す。",
      ["鶏肉を一口大に切り、塩こしょうと片栗粉をまぶす。", "レタスを洗って水気を切る。"],
      ["鶏肉を焼き、照りマヨだれをからめる。", "レタスを添え、翌昼分は別容器に分ける。"]
    ),
    main(
      "cheese_teriyaki_chicken",
      "チキンのチーズ照り焼き",
      "https://delishkitchen.tv/recipes/195128271359181222",
      "チキンのチーズ照り焼き",
      ["鶏もも肉 2枚(約500g)", "ピザ用チーズ 80g", "キャベツ 1/6玉"],
      ["塩こしょう 少々", "サラダ油 大さじ1", "酒 大さじ2", "みりん 大さじ2", "しょうゆ 大さじ2", "砂糖 大さじ1"],
      "チーズで食べやすく、翌昼はレンジで温め直しやすい。",
      ["鶏肉を食べやすく切り、調味料を合わせる。", "キャベツを千切りにする。"],
      ["鶏肉を焼いて照り焼き味にし、チーズをのせて溶かす。", "キャベツを添えて、翌昼分を取り分ける。"]
    ),
    main(
      "oba_teriyaki_tsukune",
      "大葉香る照り焼きつくね",
      "https://delishkitchen.tv/recipes/256746017020445157",
      "大葉香る照り焼きつくね",
      ["鶏ひき肉 360g", "玉ねぎ 1/2個", "大葉 12枚"],
      ["片栗粉 大さじ2", "塩 少々", "サラダ油 大さじ1", "酒 大さじ2", "みりん 大さじ2", "しょうゆ 大さじ2", "砂糖 大さじ1"],
      "やわらかめで食べやすい。大葉の香りで重くなりすぎない。",
      ["玉ねぎをみじん切りにし、大葉を刻む。", "肉だねと照り焼きだれを準備する。"],
      ["つくねを焼き、照り焼きだれを煮からめる。", "翌昼分はたれごと保存容器へ入れる。"]
    ),
    main(
      "chicken_breast_tsukune",
      "鶏むね肉のつくね照り焼き",
      "https://delishkitchen.tv/recipes/224469354450780637",
      "鶏むね肉のつくね照り焼き",
      ["鶏むね肉 2枚(約500g)", "玉ねぎ 1/2個"],
      ["サラダ油 大さじ1", "酒 大さじ3", "しょうゆ 大さじ2", "おろししょうが 小さじ1", "片栗粉 大さじ2", "みりん 大さじ2"],
      "鶏むね中心で軽め。細かく刻むので翌昼にも固くなりにくい。",
      ["鶏むね肉を粗く刻み、玉ねぎをみじん切りにする。", "つくね用と照り焼き用の調味料を分けて準備する。"],
      ["肉だねを成形して焼き、照り焼きだれをからめる。", "翌昼分を先に取り分ける。"]
    ),
    main(
      "amakara_sasami",
      "甘辛ささみ",
      "https://delishkitchen.tv/recipes/520540181640511911",
      "甘辛ささみ",
      ["ささみ 6本", "レタス 1/2玉"],
      ["塩こしょう 少々", "片栗粉 大さじ2", "サラダ油 大さじ1", "酒 大さじ2", "みりん 大さじ2", "しょうゆ 大さじ2", "砂糖 大さじ1"],
      "脂が少なく軽い主菜。翌昼は裂いてごはんにのせてもよい。",
      ["ささみの筋を取り、食べやすい大きさに切る。", "甘辛だれを合わせ、レタスを洗う。"],
      ["ささみに片栗粉をまぶして焼き、たれをからめる。", "レタスを添え、翌昼分を保存する。"]
    ),
    main(
      "yakiniku_tare_chicken",
      "焼肉のたれで作る鶏の照り焼き",
      "https://delishkitchen.tv/recipes/387078014472553667",
      "焼肉のたれで作る鶏の照り焼き",
      ["鶏もも肉 2枚(約500g)", "玉ねぎ 1個"],
      ["塩こしょう 少々", "サラダ油 大さじ1", "焼肉のたれ 大さじ4", "酒 大さじ2"],
      "調味料が少なく、忙しい日の主菜にしやすい。",
      ["鶏肉を一口大に切り、玉ねぎを薄切りにする。", "焼肉のたれと酒を合わせる。"],
      ["鶏肉と玉ねぎを焼き、たれをからめる。", "翌昼分を先に取り分ける。"]
    ),
    main(
      "pork_negi_shio",
      "豚こまのネギ塩炒め",
      "https://delishkitchen.tv/recipes/119065514638049702",
      "豚こまのネギ塩炒め",
      ["豚こま切れ肉 300g", "長ねぎ 1と1/2本"],
      ["塩こしょう 少々", "ごま油 大さじ2", "塩 小さじ3/4", "こしょう 少々"],
      "短時間で作れて、ごま油とねぎで食欲が出る。",
      ["長ねぎを斜め薄切りにし、ねぎ塩用の調味料と和える。", "豚肉に塩こしょうをふる。"],
      ["豚肉を炒め、ねぎ塩だれを加えて仕上げる。", "翌昼分は油を切りすぎず保存する。"]
    ),
    main(
      "pork_sukini",
      "豚肉とねぎのすき煮",
      "https://delishkitchen.tv/recipes/166868993221591532",
      "豚肉とねぎのすき煮",
      ["豚バラ薄切り肉 300g", "長ねぎ 2本", "しめじ 1袋", "木綿豆腐 1丁"],
      ["酒 大さじ2", "砂糖 大さじ2", "しょうゆ 大さじ4", "和風顆粒だし 小さじ1/2", "水 300cc"],
      "煮物なので翌昼に温め直しやすい。豆腐を足してやわらかくする。",
      ["長ねぎを斜め切り、しめじをほぐし、豆腐を切る。", "すき煮つゆを合わせる。"],
      ["豚肉、長ねぎ、しめじ、豆腐を煮る。", "翌昼分は煮汁ごと取り分ける。"]
    ),
    main(
      "negi_shio_pork",
      "ねぎ塩ポーク",
      "https://delishkitchen.tv/recipes/277168545928840341",
      "ねぎ塩ポーク",
      ["豚ロース薄切り肉 330g", "長ねぎ 1本", "レモン 1/2個"],
      ["塩こしょう 少々", "ごま油 大さじ1", "酒 大さじ1", "塩 小さじ1/2", "黒こしょう 少々"],
      "レモンを少し効かせて、脂っぽさを抑える。",
      ["長ねぎをみじん切りにし、ねぎ塩だれを作る。", "豚肉に塩こしょうをふる。"],
      ["豚肉を焼き、ねぎ塩だれをのせる。", "翌昼分はレモンを別添えにする。"]
    ),
    main(
      "pork_shimeji_negi_shio",
      "豚肉としめじのねぎ塩炒め",
      "https://delishkitchen.tv/recipes/163664572530557420",
      "豚肉としめじのねぎ塩炒め",
      ["豚こま切れ肉 300g", "しめじ 1袋", "長ねぎ 1本"],
      ["塩こしょう 少々", "ごま油 大さじ1", "酒 大さじ1", "塩 小さじ1/2", "おろしにんにく 小さじ1"],
      "きのこを足して量を出す。冷めても味がぼやけにくい。",
      ["しめじをほぐし、長ねぎをみじん切りにする。", "ねぎ塩だれを合わせる。"],
      ["豚肉としめじを炒め、ねぎ塩だれを加える。", "翌昼分を先に保存容器へ入れる。"]
    ),
    main(
      "daikon_pork_negi_lemon",
      "大根と豚こまのねぎ塩レモン炒め",
      "https://delishkitchen.tv/recipes/244753422438368307",
      "大根と豚こまのねぎ塩レモン炒め",
      ["豚こま切れ肉 300g", "大根 1/3本", "長ねぎ 1本", "レモン 1/2個"],
      ["塩こしょう 少々", "ごま油 大さじ1", "酒 大さじ1", "塩 小さじ1/2", "鶏ガラスープの素 小さじ1"],
      "大根でさっぱり。軽めにしたい週に合わせやすい。",
      ["大根を薄いいちょう切りにし、長ねぎを刻む。", "豚肉に塩こしょうをふる。"],
      ["豚肉と大根を炒め、ねぎ塩レモン味にする。", "翌昼分はレモンをかけすぎず取り分ける。"]
    ),
    main(
      "nikudofu",
      "基本の肉豆腐",
      "https://delishkitchen.tv/recipes/194111675098464660",
      "基本の肉豆腐",
      ["牛切り落とし肉 250g", "木綿豆腐 1と1/2丁", "長ねぎ 1と1/2本"],
      ["サラダ油 大さじ1", "砂糖 大さじ1", "酒 大さじ3", "しょうゆ 大さじ3", "水 大さじ8"],
      "豆腐多めでやわらかく、翌昼は煮汁ごと温め直す。",
      ["豆腐を大きめに切り、長ねぎを斜め切りにする。", "煮汁用の調味料を合わせる。"],
      ["牛肉を炒め、豆腐と長ねぎを加えて煮る。", "翌昼分は煮汁ごと保存する。"]
    ),
    main(
      "basic_hamburg",
      "基本のハンバーグ",
      "https://delishkitchen.tv/recipes/166742173524427155",
      "基本のハンバーグ",
      ["合いびき肉 300g", "玉ねぎ 1個", "牛乳 大さじ4", "パン粉 大さじ5"],
      ["塩 小さじ1/2", "こしょう 少々", "ナツメグ 少々", "サラダ油 小さじ2", "酒 大さじ2", "ケチャップ 大さじ3", "ウスターソース 大さじ3", "有塩バター 15g"],
      "3個成形して、翌昼用はソースごと冷蔵する。",
      ["玉ねぎをみじん切りにして加熱し、冷ましておく。", "パン粉を牛乳で湿らせ、ソースを合わせる。"],
      ["肉だねを3個に成形して焼き、ソースをからめる。", "翌昼分のハンバーグをソースごと保存する。"]
    ),
    main(
      "tofu_hamburg",
      "和風の豆腐ハンバーグ",
      "https://delishkitchen.tv/recipes/196023942698239008",
      "和風の豆腐ハンバーグ",
      ["豚ひき肉 250g", "木綿豆腐 1丁", "玉ねぎ 1/2個", "大葉 10枚", "大根 1/4本"],
      ["片栗粉 大さじ2", "しょうゆ 小さじ1", "おろしにんにく 小さじ1/2", "サラダ油 大さじ1", "酒 大さじ2", "めんつゆ 大さじ3"],
      "豆腐入りで重すぎない。大根おろしで食べやすくする。",
      ["豆腐の水気を切り、玉ねぎをみじん切りにする。", "大葉を刻み、大根おろしを用意する。"],
      ["肉だねを成形して焼き、和風ソースを煮詰める。", "大根おろしを添え、翌昼分はソース別添えにする。"]
    ),
    main(
      "nikomi_hamburg",
      "煮込みハンバーグ",
      "https://delishkitchen.tv/recipes/125436472865063179",
      "煮込みハンバーグ",
      ["合いびき肉 300g", "玉ねぎ 1個", "しめじ 1袋", "牛乳 大さじ4", "パン粉 大さじ5"],
      ["塩こしょう 少々", "サラダ油 大さじ1", "ケチャップ 大さじ4", "中濃ソース 大さじ3", "コンソメ 小さじ1", "水 200cc"],
      "ソースごと温め直せるので翌昼向き。",
      ["玉ねぎをみじん切りにし、しめじをほぐす。", "肉だねと煮込みソースを準備する。"],
      ["ハンバーグを焼き、しめじ入りソースで煮込む。", "翌昼分をソース多めに取り分ける。"]
    ),
    main(
      "tomato_nikomi_hamburg",
      "トマト煮込みハンバーグ",
      "https://delishkitchen.tv/recipes/171816443862581651",
      "トマト煮込みハンバーグ",
      ["合いびき肉 300g", "玉ねぎ 1個", "しめじ 1袋", "カットトマト缶 1缶", "牛乳 大さじ4", "パン粉 大さじ5"],
      ["塩こしょう 少々", "サラダ油 大さじ1", "ケチャップ 大さじ2", "コンソメ 小さじ1", "砂糖 小さじ1"],
      "トマト味で野菜感を足す。翌昼はごはんにかけてもよい。",
      ["玉ねぎをみじん切りにし、しめじをほぐす。", "肉だねとトマトソースを準備する。"],
      ["ハンバーグを焼き、トマトソースで煮込む。", "翌昼分はソースごと保存する。"]
    ),
    main(
      "teriyaki_hamburg",
      "てりやきハンバーグ",
      "https://delishkitchen.tv/recipes/175737998715912614",
      "てりやきハンバーグ",
      ["合いびき肉 300g", "玉ねぎ 1個", "牛乳 大さじ4", "パン粉 大さじ5", "レタス 1/2玉"],
      ["塩こしょう 少々", "サラダ油 大さじ1", "酒 大さじ2", "みりん 大さじ2", "しょうゆ 大さじ2", "砂糖 大さじ1"],
      "甘辛味で食べ慣れたハンバーグ。翌昼も味がなじむ。",
      ["玉ねぎをみじん切りにして冷まし、肉だねを作る。", "てりやきだれを合わせる。"],
      ["ハンバーグを焼き、てりやきだれをからめる。", "レタスを添え、翌昼分を取り分ける。"]
    )
  ];

  const sides = [
    side(
      "tomato_cheese_salad",
      "トマトと粉チーズの簡単サラダ",
      "https://delishkitchen.tv/recipes/401851093824308275",
      "トマトと粉チーズの簡単サラダ",
      ["トマト 3個", "粉チーズ 大さじ2", "パセリ 適量"],
      ["しょうゆ 小さじ2", "オリーブオイル 大さじ2"],
      "火を使わず、食べる直前に和えるだけ。",
      ["トマトを洗って切る。", "調味料を合わせる。"],
      ["トマトを和え、粉チーズとパセリを散らす。", "翌昼分は水気を軽く切って保存する。"]
    ),
    side(
      "tomato_simple_marine",
      "トマトのシンプルマリネ",
      "https://delishkitchen.tv/recipes/337352987418559622",
      "トマトのシンプルマリネ",
      ["トマト 3個", "パセリ 適量"],
      ["レモン汁 大さじ1と1/2", "塩 小さじ3/4", "黒こしょう 少々", "オリーブオイル 大さじ3"],
      "さっぱりした副菜。こってり主菜の日に合わせる。",
      ["トマトを大きめに切る。", "マリネ液を合わせる。"],
      ["トマトをマリネ液で和え、少し冷やす。", "翌昼分を取り分ける。"]
    ),
    side(
      "avocado_tomato_cheese",
      "アボカドとトマトのチーズサラダ",
      "https://delishkitchen.tv/recipes/377078041748177390",
      "アボカドとトマトのチーズサラダ",
      ["アボカド 2個", "トマト 2個", "粉チーズ 大さじ2"],
      ["塩 少々", "黒こしょう 少々", "オリーブオイル 大さじ2", "レモン汁 大さじ1"],
      "やわらかく食べやすい。アボカドは食べる直前に和える。",
      ["トマトを切り、アボカドは直前に切る。", "ドレッシングを合わせる。"],
      ["全体を和えて粉チーズを散らす。", "翌昼分は変色しにくいようレモンを少し多めにする。"]
    ),
    side(
      "avocado_tomato_ham",
      "アボカドとトマトのハムマヨサラダ",
      "https://delishkitchen.tv/recipes/372756515750151243",
      "アボカドとトマトのハムマヨサラダ",
      ["アボカド 2個", "トマト 2個", "ハム 4枚"],
      ["マヨネーズ 大さじ2", "塩こしょう 少々", "レモン汁 小さじ2"],
      "ハムを少量入れて食べやすくする。副菜だが満足感あり。",
      ["トマトとハムを切る。", "アボカドは直前に切る。"],
      ["マヨネーズで和え、翌昼分を取り分ける。", "水気は軽く切る。"]
    ),
    side(
      "edamame_tomato_salad",
      "枝豆とトマトのサラダ",
      "https://delishkitchen.tv/recipes/144709226797728038",
      "枝豆とトマトのサラダ",
      ["冷凍枝豆 1袋", "トマト 2個", "玉ねぎ 1/4個"],
      ["酢 大さじ1", "しょうゆ 小さじ2", "オリーブオイル 大さじ1", "砂糖 小さじ1"],
      "彩りがよく、枝豆でたんぱく質も少し足せる。",
      ["枝豆を解凍し、トマトを切る。", "玉ねぎを薄切りにして水にさらす。"],
      ["全体を和えて味をなじませる。", "翌昼分は別容器に取り分ける。"]
    ),
    side(
      "summer_veg_marine",
      "夏野菜のマリネサラダ",
      "https://delishkitchen.tv/recipes/202274565152309670",
      "夏野菜のマリネサラダ",
      ["ズッキーニ 1本", "ミニトマト 10個", "じゃがいも 2個", "玉ねぎ 1/2個"],
      ["塩こしょう 少々", "オリーブオイル 大さじ3", "砂糖 小さじ2", "酢 大さじ3", "しょうゆ 大さじ1"],
      "作り置き向き。木曜買い物後の副菜にも使いやすい。",
      ["じゃがいもをレンジ加熱し、野菜を切る。", "マリネ液を合わせる。"],
      ["野菜を炒めてマリネ液に漬ける。", "翌昼分を冷蔵で取り分ける。"]
    ),
    side(
      "corn_edamame_marine",
      "とうもろこしと枝豆のマリネサラダ",
      "https://delishkitchen.tv/recipes/254278438955778321",
      "とうもろこしと枝豆のマリネサラダ",
      ["とうもろこし 1本", "冷凍枝豆 1袋", "玉ねぎ 1/4個"],
      ["酢 大さじ2", "オリーブオイル 大さじ2", "塩 小さじ1/3", "黒こしょう 少々"],
      "噛みやすい粒野菜の副菜。とうもろこしは缶詰でもよい。",
      ["とうもろこしを加熱し、実を外す。", "枝豆を解凍し、玉ねぎを薄切りにする。"],
      ["マリネ液で和え、冷やす。", "翌昼分を取り分ける。"]
    ),
    side(
      "eggplant_tomato_marine",
      "なすとトマトのマリネ",
      "https://delishkitchen.tv/recipes/203974022977815786",
      "なすとトマトのマリネ",
      ["なす 3本", "トマト 2個", "大葉 10枚"],
      ["オリーブオイル 大さじ3", "酢 大さじ2", "しょうゆ 大さじ1", "おろしにんにく 小さじ1/2", "砂糖 小さじ1"],
      "なすを焼いて味を含ませる。翌昼も味がなじむ。",
      ["なすとトマトを切り、大葉を刻む。", "マリネ液を合わせる。"],
      ["なすを焼き、トマトとマリネ液で和える。", "翌昼分を先に取り分ける。"]
    ),
    side(
      "mini_tomato_avocado_nuts",
      "ミニトマトとアボカドのナッツマリネ",
      "https://delishkitchen.tv/recipes/254851466781524453",
      "ミニトマトとアボカドのナッツマリネ",
      ["ミニトマト 12個", "アボカド 2個", "ミックスナッツ 30g"],
      ["酢 大さじ2", "オリーブオイル 大さじ2", "塩 小さじ1/3", "黒こしょう 少々"],
      "ナッツの食感で少量でも満足感がある。",
      ["ミニトマトを半分に切り、ナッツを粗く刻む。", "アボカドは直前に切る。"],
      ["全体をマリネ液で和える。", "翌昼分はアボカドの変色に注意して保存する。"]
    ),
    side(
      "moyashi_kyuri_namul",
      "もやしときゅうりのやみつきナムル",
      "https://delishkitchen.tv/recipes/146569781414199785",
      "もやしときゅうりのやみつきナムル",
      ["もやし 1袋", "きゅうり 2本", "白いりごま 適量"],
      ["砂糖 小さじ2", "酢 大さじ2", "しょうゆ 大さじ2", "ごま油 大さじ2"],
      "水気をしっかり切ると翌昼にも味がぼやけにくい。",
      ["きゅうりを細切りにし、ナムルだれを合わせる。", "もやしを洗う。"],
      ["もやしをさっと加熱して水気を切り、きゅうりと和える。", "翌昼分を取り分ける。"]
    ),
    side(
      "eggplant_oba_miso",
      "なすの大葉味噌",
      "https://delishkitchen.tv/recipes/146423855135588826",
      "なすの大葉味噌",
      ["なす 3本", "ピーマン 3個", "大葉 15枚", "白いりごま 大さじ2"],
      ["サラダ油 大さじ3", "砂糖 大さじ1", "みりん 大さじ2", "みそ 大さじ3"],
      "しっかり味で翌昼にも向く。油は様子を見て控えめにする。",
      ["なす、ピーマン、大葉を切る。", "味噌だれを合わせる。"],
      ["なすとピーマンを炒め、味噌だれと大葉で仕上げる。", "翌昼分を取り分ける。"]
    )
  ];

  const readyItems = [
    ready("hiyayakko", "冷奴", ["絹豆腐 1丁", "小ねぎ 適量"], ["しょうゆ または ポン酢"], "切って薬味をのせるだけ。", ["豆腐を軽く水切りする。"], ["小鉢に盛り、小ねぎと調味料を添える。"]),
    ready("edamame", "自然解凍の枝豆", ["冷凍枝豆 1袋"], ["必要なら塩 少々"], "自然解凍可の商品を選び、皿に出すだけ。", ["枝豆を解凍する。"], ["器に盛る。"]),
    ready("kimchi", "白菜キムチ", ["白菜キムチ 1パック"], ["追加なし"], "器に出すだけ。辛さが強ければ少量で。", ["冷蔵庫から出す。"], ["小鉢に盛る。"]),
    ready("natto", "納豆", ["納豆 3パック", "小ねぎ 適量"], ["付属たれ"], "混ぜるだけ。食欲がない日にも出しやすい。", ["小ねぎを刻む。"], ["納豆を混ぜて小鉢に盛る。"]),
    ready("potato_salad", "市販ポテトサラダ", ["市販ポテトサラダ 1パック"], ["追加なし"], "小鉢に盛るだけ。量は少なめで主菜を引き立てる。", ["冷蔵庫で冷やしておく。"], ["小鉢に盛る。"]),
    ready("cut_salad", "カットサラダ", ["カットサラダ 1袋"], ["好みのドレッシング"], "袋から出すだけ。野菜が少ない日に補う。", ["水気が気になる場合は軽く切る。"], ["皿に盛り、ドレッシングを添える。"]),
    ready("ajitsuke_tamago", "味付け卵", ["味付け卵 3個"], ["追加なし"], "半分に切って出すだけ。", ["卵を冷蔵庫から出す。"], ["半分に切って盛る。"]),
    ready("onsen_tamago", "温泉卵", ["温泉卵 3個"], ["付属たれ"], "ごはんや主菜にのせてもよい。", ["冷蔵庫から出す。"], ["小鉢に割り入れる。"]),
    ready("asazuke", "市販浅漬け", ["市販浅漬け 1パック"], ["追加なし"], "箸休めとして出すだけ。", ["水気を軽く切る。"], ["小鉢に盛る。"]),
    ready("goma_tofu", "ごま豆腐", ["ごま豆腐 3個"], ["付属たれ"], "やわらかく食べやすい。", ["冷蔵庫で冷やしておく。"], ["器に出してたれを添える。"])
  ];

  function addDays(date, days) {
    const next = new Date(date);
    next.setDate(next.getDate() + days);
    return next;
  }

  function localIsoDate(date) {
    const local = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
    return local.toISOString().slice(0, 10);
  }

  function formatDate(date) {
    return `${date.getMonth() + 1}/${date.getDate()}`;
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function pickUnique(list, index, step, count) {
    const picked = [];
    let cursor = index % list.length;
    while (picked.length < count) {
      const candidate = list[cursor % list.length];
      if (!picked.some((item) => item.id === candidate.id)) picked.push(candidate);
      cursor += step;
    }
    return picked;
  }

  function buildDinner(weekIndex, dayIndex, date, mainDish, sideDish, readyDish) {
    return {
      id: `${mainDish.id}-${sideDish.id}-${readyDish.id}`,
      day: DAY_NAMES[dayIndex],
      date: formatDate(date),
      title: `${mainDish.title}と${sideDish.title}`,
      servings: "3食分",
      main: clone(mainDish),
      side: clone(sideDish),
      ready: clone(readyDish),
      prep: [
        ...mainDish.prep,
        ...sideDish.prep,
        ...readyDish.prep,
        "翌昼用の保存容器を用意する。"
      ],
      finish: [
        ...mainDish.finish,
        ...sideDish.finish,
        ...readyDish.finish
      ],
      weekOrder: weekIndex + 1
    };
  }

  function splitAmount(line) {
    const [name, ...amountParts] = line.split(" ");
    return [name, amountParts.join(" ") || "確認"];
  }

  function ingredientGroup(name, sourceType, isSeasoning) {
    if (isSeasoning) return "調味料";
    if (sourceType === "ready") return "そのまま一品";
    if (/チーズ|牛乳|パン粉|片栗粉|薄力粉|ごま|ナッツ|トマト缶|カットトマト缶/.test(name)) return "乾物・乳製品";
    if (/肉|鶏|豚|牛|ひき|ささみ|卵|豆腐|厚揚げ|油揚げ|納豆/.test(name)) return "肉・卵・大豆";
    return "野菜";
  }

  function collectItems(groups, dinner, sourceType, dish, dayLabel) {
    dish.ingredients.forEach((line) => {
      const [name, amount] = splitAmount(line);
      addShopItem(groups, ingredientGroup(name, sourceType, false), name, amount, `${dayLabel} ${dish.type}: ${dish.title}`);
    });
    dish.seasonings.forEach((line) => {
      const [name] = splitAmount(line);
      if (name === "追加なし") return;
      addShopItem(groups, "調味料", name, "確認", `${dayLabel} ${dish.type}: ${dish.title}`);
    });
  }

  function addShopItem(groups, group, name, amount, use) {
    if (!groups[group]) groups[group] = [];
    const found = groups[group].find((item) => item[0] === name);
    if (!found) {
      groups[group].push([name, amount, use]);
      return;
    }
    if (amount !== "確認" && !found[1].split(" + ").includes(amount)) {
      found[1] += ` + ${amount}`;
    }
    if (!found[2].includes(use)) {
      found[2] += ` / ${use}`;
    }
  }

  function buildShopping(dinners) {
    const shopping = {
      "月曜": {},
      "木曜": {}
    };
    dinners.forEach((dinner, index) => {
      const buyDay = index <= 2 ? "月曜" : "木曜";
      collectItems(shopping[buyDay], dinner, "main", dinner.main, `${dinner.day}曜`);
      collectItems(shopping[buyDay], dinner, "side", dinner.side, `${dinner.day}曜`);
      collectItems(shopping[buyDay], dinner, "ready", dinner.ready, `${dinner.day}曜`);
    });
    ["月曜", "木曜"].forEach((day) => {
      ["肉・卵・大豆", "野菜", "そのまま一品", "乾物・乳製品", "調味料"].forEach((group) => {
        shopping[day][group] = shopping[day][group] || [];
      });
    });
    return shopping;
  }

  function buildWeeks() {
    const start = new Date(`${WEEK_START}T00:00:00`);
    return Array.from({ length: WEEK_COUNT }, (_, weekIndex) => {
      const weekStart = addDays(start, weekIndex * 7);
      const mainPicks = pickUnique(mains, weekIndex * 5 + Math.floor(weekIndex / 3), 7, 5);
      const sidePicks = pickUnique(sides, weekIndex * 3 + Math.floor(weekIndex / 4), 5, 5);
      const readyPicks = pickUnique(readyItems, weekIndex * 2, 3, 5);
      const dinners = DAY_NAMES.map((_, dayIndex) => buildDinner(
        weekIndex,
        dayIndex,
        addDays(weekStart, dayIndex),
        mainPicks[dayIndex],
        sidePicks[dayIndex],
        readyPicks[dayIndex]
      ));
      return {
        weekStart: localIsoDate(weekStart),
        weekEnd: localIsoDate(addDays(weekStart, 4)),
        servingsNote: SERVINGS_NOTE,
        dinners,
        shopping: buildShopping(dinners)
      };
    });
  }

  const weeks = buildWeeks();

  window.MEAL_PLAN_DATA = {
    generatedAt: "2026-06-17",
    servingsNote: SERVINGS_NOTE,
    ...weeks[0],
    weeks
  };
})();
