const RECIPES = [
  // ════════════ 一、水煮+蘸水 ════════════
  {id:'bai-zhuo-xi-lan-hua',name:'白灼西兰花',emoji:'🥦',difficulty:1,time:8,cookMethod:'水煮',category:'蔬菜',tags:['快手','清淡'],tools:['煮锅'],mainIngredients:['西兰花'],subIngredients:[],seasonings:[{name:'生抽',required:true},{name:'蚝油',required:false,alt:'不放也行，直接蘸生抽'},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'切西兰花',duration:3,emoji:'🔪',instruction:'西兰花花朝上梗朝下，从花蕾中间切下去分成小朵。每朵乒乓球大小。梗去皮切片，筷子尖厚。',judge:'小朵大小均匀，梗片薄厚一致。',noviceNote:'花蕾切太小会碎成渣，切太大里面煮不熟。乒乓球大小最合适'},
    {stepNum:2,title:'煮西兰花',duration:3,emoji:'🍲',instruction:'锅中加半锅水烧开，加一小撮盐和几滴油。放入西兰花，大火煮3分钟。捞出来装盘。',judge:'筷子能戳透茎部，花蕾翠绿不发黄。',noviceNote:'水没烧开就下锅→煮出来是黄的。一定要等水翻滚冒大泡再下'},
    {stepNum:3,title:'调蘸水',duration:1,emoji:'🥣',instruction:'小碗里倒2勺生抽，加半勺蚝油（有就放）。如果喜欢辣可以加点小米辣。',judge:'蘸水颜色均匀，咸淡适中。',noviceNote:'生抽别倒太多——咸。先少倒，不够再加'},
  ],rescue:[
    {problem:'黄了煮过头',fix:'过一下凉水能稍微救回颜色。下次水开后煮2分钟就捞'},
    {problem:'没味道不好吃',fix:'蘸水里多加蚝油或者加点蒜末。白灼菜的味道全在蘸水里'},
  ],tips:'西兰花梗别扔！去皮切片一起煮，比花蕾甜。'},

  {id:'shui-zhu-bo-cai',name:'水煮菠菜',emoji:'🥬',difficulty:1,time:5,cookMethod:'水煮',category:'蔬菜',tags:['快手','清淡','懒人'],tools:['煮锅'],mainIngredients:['菠菜'],subIngredients:[],seasonings:[{name:'生抽',required:true},{name:'香油',required:false,alt:'不放也行，直接蘸生抽'}],steps:[
    {stepNum:1,title:'洗菠菜',duration:1,emoji:'💧',instruction:'菠菜去根，冲洗干净泥沙。大的叶子可以撕成两半。',judge:'水变清没有泥沙，根部没有黑泥。',noviceNote:'菠菜根部最容易藏泥——掰开冲'},
    {stepNum:2,title:'煮菠菜',duration:1,emoji:'🍲',instruction:'锅中水大开，放入菠菜。煮40秒到1分钟，叶子变深绿就捞。不要煮超过1分钟。',judge:'叶子变深绿软塌，梗还带一点脆。',noviceNote:'菠菜熟得飞快！多煮10秒就开始发黄出涩味。看着变色就赶紧捞'},
    {stepNum:3,title:'调味',duration:1,emoji:'🥣',instruction:'捞出装盘，淋上生抽和几滴香油（有就加）。或者直接蘸生抽吃。',judge:'菠菜颜色翠绿，盘子底没有太多水。',noviceNote:'煮完别带太多水装盘——会冲淡味道。捞的时候抖一抖'},
  ],rescue:[
    {problem:'煮太久发黄发黑',fix:'加几滴醋拌一下能改善味道。下次水开后下锅默数40秒就捞'},
    {problem:'吃起来涩口',fix:'菠菜本身有草酸，正常。下次水里多加点盐能去涩味'},
  ]},

  {id:'bai-zhuo-xia',name:'白灼虾',emoji:'🦐',difficulty:1,time:5,cookMethod:'水煮',category:'水产',tags:['快手','请客','清淡'],tools:['煮锅'],mainIngredients:['虾'],subIngredients:['姜'],seasonings:[{name:'生抽',required:true},{name:'料酒',required:false,alt:'不放也行，姜片去腥足够'}],steps:[
    {stepNum:1,title:'处理虾',duration:1,emoji:'🔪',instruction:'虾冲洗干净。用剪刀剪掉虾须和虾枪（尖刺部分）。不用开背去虾线——白灼整只煮最嫩。',judge:'虾须剪干净，虾体完整没有断。',noviceNote:'不要去虾线！生虾去虾线肉会散。熟了再挑更方便'},
    {stepNum:2,title:'煮虾',duration:2,emoji:'🍲',instruction:'锅中水加姜片烧开，放入虾。煮到全部变红、虾身卷曲成C形——约2分钟。',judge:'虾全红，虾身卷成C形。不能还是直的（没熟），也不能卷成O形（老了）。',noviceNote:'虾的形状就是温度计：直=生，C=正好，O=老了！看到卷C立刻捞'},
    {stepNum:3,title:'调蘸水',duration:1,emoji:'🥣',instruction:'小碗倒生抽，可以加点姜末、蒜末。虾剥壳蘸着吃。',judge:'虾肉白嫩弹牙，蘸了酱油后咸鲜适中。',noviceNote:'虾头别扔——吸一下虾黄，精华！'},
  ],rescue:[
    {problem:'虾煮老了卷成O形',fix:'剥壳后凉拌，加生抽香醋香油拌一拌也好吃。下次水大开下锅，变色就捞'},
    {problem:'虾没煮熟还是直的',fix:'回锅里再煮30秒。必须全熟，虾生吃可能拉肚子'},
  ],tips:'冻虾也可以白灼，解冻透就行。比活虾差一点但80%味道。'},

  {id:'shui-zhu-ji-xiong',name:'水煮鸡胸肉',emoji:'🍗',difficulty:1,time:10,cookMethod:'水煮',category:'肉类',tags:['快手','清淡','备餐'],tools:['煮锅'],mainIngredients:['鸡胸肉'],subIngredients:['姜'],seasonings:[{name:'生抽',required:true},{name:'料酒',required:false,alt:'用姜片去腥足够'},{name:'白胡椒粉',required:false,alt:'不放也行，去腥用姜就够了'}],steps:[
    {stepNum:1,title:'切鸡胸肉',duration:2,emoji:'🔪',instruction:'鸡胸肉横着纹路切成两片（厚度减半），不要切断。如果太厚就片成两片。',judge:'每片厚度差不多，约一指厚。',noviceNote:'一整块煮外面老了里面还是生的。片薄煮受热均匀不柴'},
    {stepNum:2,title:'煮鸡胸',duration:6,emoji:'🍲',instruction:'锅中加水和姜片，烧开后转中小火（水微微冒泡不是翻滚）。放入鸡胸肉煮6分钟。关火盖盖子焖2分钟。',judge:'筷子夹开中间完全白色，没有粉色透明部分。',noviceNote:'大火煮=肉柴！一定要转中小火。水微微冒泡不是翻滚沸腾'},
    {stepNum:3,title:'切片蘸料',duration:2,emoji:'🔪',instruction:'鸡胸肉捞出稍微晾凉，顺着纹路切成片（顺纹切不散）。蘸生抽吃。',judge:'肉片白嫩不柴，切开没有粉色。',noviceNote:'顺着纹路切——切断纹路肉会散。顺着切才成片'},
  ],rescue:[
    {problem:'煮得太柴像嚼纸板',fix:'切片后淋一点热水或汤汁拌一下。下次转中小火煮，不用大火'},
    {problem:'中间还粉没熟透',fix:'放回锅里关火盖盖子再焖3分钟。余温足够把它焖熟'},
  ],tips:'一次多煮两块，冰箱冷藏可以放3天。做沙拉或三明治超方便。'},

  {id:'qing-zheng-ba-sha-yu',name:'清蒸巴沙鱼',emoji:'🐟',difficulty:1,time:10,cookMethod:'蒸',category:'水产',tags:['快手','清淡','懒人'],tools:['蒸锅','盘子'],mainIngredients:['巴沙鱼'],subIngredients:['姜','葱'],seasonings:[{name:'蒸鱼豉油',required:false,alt:'用生抽代替也行'},{name:'料酒',required:false,alt:'用姜片去腥就够了'}],steps:[
    {stepNum:1,title:'解冻摆盘',duration:2,emoji:'🔪',instruction:'巴沙鱼柳解冻透，冲洗一下用厨房纸吸干水分。放盘子里，铺上姜片和葱段。',judge:'鱼表面干爽没有大量积水。',noviceNote:'一定要吸干水分！水分越多蒸出来越腥'},
    {stepNum:2,title:'上锅蒸',duration:6,emoji:'♨️',instruction:'蒸锅水开后放入鱼盘，大火蒸6分钟。关火后不要开盖，再焖1分钟。',judge:'鱼肉完全变白不透明，用筷子能轻松夹开。',noviceNote:'水开再放鱼！冷水上锅蒸出来肉质老。时间到了立刻关火'},
    {stepNum:3,title:'淋酱油',duration:1,emoji:'🥣',instruction:'端出鱼盘，倒掉盘子里蒸出来的水（腥水）。淋上蒸鱼豉油或生抽。',judge:'鱼肉白嫩，酱油均匀裹在鱼肉上。',noviceNote:'盘子里的水一定要倒掉！那是最腥的。倒干净再淋酱油'},
  ],rescue:[
    {problem:'鱼蒸出来腥味重',fix:'下次多放姜片铺在鱼下面。已经腥了可以挤点柠檬汁或醋'},
    {problem:'鱼肉散了不成形',fix:'下次解冻到八成（还带一点冰）就切块蒸。全化冻的巴沙鱼太软容易散'},
  ],tips:'巴沙鱼是新手最友好的鱼——没刺、肉嫩、不腥、怎么做都好吃。'},

  {id:'shui-zhu-dou-ya',name:'水煮豆芽',emoji:'🌱',difficulty:1,time:3,cookMethod:'水煮',category:'蔬菜',tags:['快手','清淡','懒人'],tools:['煮锅'],mainIngredients:['豆芽'],subIngredients:[],seasonings:[{name:'生抽',required:true},{name:'醋',required:false,alt:'不放也行，加点醋更爽口'},{name:'辣椒油',required:false,alt:'不放就是清淡版'}],steps:[
    {stepNum:1,title:'洗豆芽',duration:1,emoji:'💧',instruction:'豆芽冲洗两遍，沥干水。如果有豆壳浮起来就捞掉。',judge:'水变清，没有漂浮的豆壳。',noviceNote:'豆芽非常脆弱，别用手搓——用水冲就行'},
    {stepNum:2,title:'焯水',duration:1,emoji:'🍲',instruction:'锅中水大开，放入豆芽。煮30-40秒立刻捞出。不要超过1分钟。',judge:'豆芽变微透明，但还是脆的，没有变软。',noviceNote:'豆芽10秒就半熟！看着变透明就捞。多煮20秒就开始出水变软'},
    {stepNum:3,title:'调味',duration:1,emoji:'🥣',instruction:'捞出装盘，淋上生抽和醋（有就加）。拌一拌就能吃。',judge:'豆芽脆嫩爽口，没有生豆腥味。',noviceNote:'不要加盐——生抽已经够咸了。先尝尝再决定加不加'},
  ],rescue:[
    {problem:'煮太软出水一摊水',fix:'把水倒掉，加点生抽和醋拌一下当凉菜。下次水大开下锅30秒就捞'},
    {problem:'有豆腥味',fix:'水里加一小撮盐再焯水能去腥。已经做好的加醋和辣椒油盖住腥味'},
  ]},

  {id:'bai-zhuo-qiu-kui',name:'白灼秋葵',emoji:'🫑',difficulty:1,time:8,cookMethod:'水煮',category:'蔬菜',tags:['快手','清淡'],tools:['煮锅'],mainIngredients:['秋葵'],subIngredients:[],seasonings:[{name:'生抽',required:true},{name:'蚝油',required:false,alt:'不放也行，生抽就够了'},{name:'蒜',required:false,alt:'没有蒜也能吃，就是少点香味'}],steps:[
    {stepNum:1,title:'洗秋葵',duration:2,emoji:'💧',instruction:'秋葵用清水冲洗，用厨房纸擦干表面绒毛。切掉头上黑蒂（只切最硬的那一小圈）。',judge:'蒂切得干净，秋葵完整没切破肚子。',noviceNote:'只切蒂不要切破秋葵肚子！切破黏液会流出来——营养全跑了'},
    {stepNum:2,title:'煮秋葵',duration:3,emoji:'🍲',instruction:'锅中水加少许盐烧开，放入整根秋葵煮3分钟。不要切！整根煮。',judge:'颜色变深绿，筷子夹起来有点软垂，不直挺了。',noviceNote:'严禁切了煮！秋葵的黏液是精华。整根煮才能锁住'},
    {stepNum:3,title:'蘸料',duration:1,emoji:'🥣',instruction:'秋葵捞出来装盘。生抽+蚝油调成蘸汁，可以加点蒜末。整根蘸着吃。',judge:'咬一口外脆内滑，黏液拉丝。蘸了酱油鲜甜。',noviceNote:'秋葵不要煮超过4分钟——黏液全跑水里就剩空壳了'},
  ],rescue:[
    {problem:'煮太久黏液全跑了',fix:'捞出来凉拌，加醋和生抽。下次水开后煮3分钟准时捞'},
    {problem:'吃起来涩口有草酸味',fix:'正常，秋葵本身带一点涩。蘸汁里多加生抽盖住就好'},
  ]},

  {id:'shui-zhu-wa-wa-cai',name:'水煮娃娃菜',emoji:'🥬',difficulty:1,time:6,cookMethod:'水煮',category:'蔬菜',tags:['快手','清淡','懒人'],tools:['煮锅'],mainIngredients:['娃娃菜'],subIngredients:[],seasonings:[{name:'生抽',required:true},{name:'蚝油',required:false,alt:'不放也行，生抽够味了'}],steps:[
    {stepNum:1,title:'切娃娃菜',duration:1,emoji:'🔪',instruction:'娃娃菜对半切开（纵向），从根部切到叶子。根部不要切断，让每半片叶子还连在根部上。',judge:'两半大小均匀，根部相连叶子不散。',noviceNote:'根部不要切到底！留一点连着，煮的时候才不会散成一锅叶子'},
    {stepNum:2,title:'煮娃娃菜',duration:4,emoji:'🍲',instruction:'锅中水烧开，根部朝下先入锅煮30秒，再全部放入水中。煮3分钟。',judge:'根部变半透明，叶子软了但不烂。筷子能戳透根部。',noviceNote:'根部比叶子厚很多！先煮根部30秒再全入锅，不然根熟了叶子烂了'},
    {stepNum:3,title:'调味出锅',duration:1,emoji:'🥣',instruction:'捞出装盘（根部朝同一方向摆好看）。淋上生抽和蚝油。',judge:'娃娃菜软嫩，根部没有白硬。',noviceNote:'煮完的汤别倒！这汤甜甜的可以喝或者煮面'},
  ],rescue:[
    {problem:'根部还硬的咬不动',fix:'切成小段回锅再煮1分钟。下次根部朝下多煮30秒'},
    {problem:'叶子煮烂了根部还没熟',fix:'下次切的时候从根部切深一点，让每片叶子更分开'},
  ]},

  {id:'zheng-hong-shu',name:'蒸红薯',emoji:'🍠',difficulty:1,time:20,cookMethod:'蒸',category:'主食',tags:['快手','备餐','清淡'],tools:['蒸锅'],mainIngredients:['红薯'],subIngredients:[],seasonings:[],steps:[
    {stepNum:1,title:'洗红薯',duration:2,emoji:'💧',instruction:'红薯用刷子刷洗干净表皮泥土。两头各切掉一点点。不用去皮！整个蒸。',judge:'表面没有明显泥土，两头切平了。',noviceNote:'千万别去皮！带皮蒸糖分才能锁住。去皮蒸出来水唧唧的不甜'},
    {stepNum:2,title:'上锅蒸',duration:18,emoji:'♨️',instruction:'蒸锅水开后放入红薯，大火蒸18分钟。关火后不着急开盖，焖3分钟更甜。',judge:'筷子能轻松戳穿整个红薯。有糖汁从表皮渗出最好。',noviceNote:'小个的红薯15分钟就够，大的要20分钟以上。用筷子戳一下最保险'},
    {stepNum:3,title:'开吃',duration:0,emoji:'🍴',instruction:'红薯稍微晾凉（别烫嘴），撕开皮就能吃。皮不要吃。',judge:'中间软糯，颜色金黄，甜味足。没有白硬芯。',noviceNote:'刚出鍋巨烫！放凉2分钟再剥皮。不要心急'},
  ],rescue:[
    {problem:'筷子戳不透还没熟',fix:'放回去再蒸5分钟。红薯耐蒸，多蒸一会儿只会更甜'},
    {problem:'蒸出来水唧唧的不甜',fix:'这次只能蘸白糖吃了。下次一定要整个蒸不切不削皮'},
  ],tips:'要想更甜：蒸好关火后别开盖，用余温焖5分钟。糖化更充分。'},

  {id:'zheng-tu-dou',name:'蒸土豆',emoji:'🥔',difficulty:1,time:20,cookMethod:'蒸',category:'主食',tags:['快手','备餐','清淡'],tools:['蒸锅'],mainIngredients:['土豆'],subIngredients:[],seasonings:[{name:'盐',required:true},{name:'黑胡椒粉',required:false,alt:'不放也行，蘸盐就很好吃'},{name:'黄油',required:false,alt:'没有黄油用香油也行'}],steps:[
    {stepNum:1,title:'洗土豆',duration:2,emoji:'💧',instruction:'土豆刷洗干净表皮。如果芽眼有发芽要挖掉（发绿的部分有毒不能吃）。不用去皮，整个蒸。',judge:'表面干净，芽眼挖干净了。',noviceNote:'发芽发绿的土豆有毒！绿色部分和芽要全部挖掉。没发芽的不用去皮'},
    {stepNum:2,title:'上锅蒸',duration:18,emoji:'♨️',instruction:'蒸锅水开后放入土豆，大火蒸18分钟。关火焖2分钟。',judge:'筷子轻松戳穿整个土豆，中间没有硬芯。皮微微裂开。',noviceNote:'装盘时土豆之间留点空隙——蒸汽流通才熟得快'},
    {stepNum:3,title:'调味',duration:1,emoji:'🧂',instruction:'稍微晾凉，剥皮（皮一撕就掉）。撒上盐和黑胡椒，或者蘸生抽吃。也可以压成泥。',judge:'土豆绵软起沙，中间没有白硬芯。皮一撕就掉。',noviceNote:'刚出锅别徒手剥——烫！用叉子叉住再剥皮'},
  ],rescue:[
    {problem:'中间还有硬芯没熟',fix:'放回去再蒸5分钟。太大的土豆对半切开再蒸'},
    {problem:'蒸出来水唧唧的',fix:'放回锅里不盖盖子大火收一下水分。下次不要切块蒸'},
  ],tips:'蒸土豆配黄油和黑胡椒是西式吃法。配生抽和葱花是中式吃法。都试试。'},

  // ════════ 二、煮完+淋油/浇汁 ════════
  {id:'suan-rong-xi-lan-hua',name:'蒜蓉西兰花',emoji:'🥦',difficulty:1,time:12,cookMethod:'煮+淋油',category:'蔬菜',tags:['快手','下饭'],tools:['煮锅','炒勺'],mainIngredients:['西兰花'],subIngredients:['大蒜'],seasonings:[{name:'生抽',required:true},{name:'蚝油',required:false,alt:'不放也行，少点鲜味'},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'切西兰花',duration:3,emoji:'🔪',instruction:'西兰花花朝上梗朝下，从花蕾中间切下去分成小朵。每朵乒乓球大小。梗去皮切片，筷子尖厚。',judge:'每朵大小均匀，梗片筷子尖厚。切完桌上没有满桌碎屑。',noviceNote:'花蕾切太小会掉碎屑——用刀尖先划口子再掰开'},
    {stepNum:2,title:'煮西兰花',duration:3,emoji:'🍲',instruction:'锅中加水烧开，加一小撮盐和几滴油。放入西兰花，大火煮3分钟。',judge:'筷子戳茎部轻松戳透，花蕾颜色鲜亮翠绿。',noviceNote:'水没大开就下锅，煮出来是黄的不是绿的'},
    {stepNum:3,title:'调蒜蓉酱',duration:1,emoji:'🧄',instruction:'大蒜切成蒜末放碗里。加2勺生抽、半勺蚝油（有就加）。',judge:'蒜末均匀，酱汁颜色一致。',noviceNote:'蒜末大的生小的糊——尽量切均匀'},
    {stepNum:4,title:'淋油激香',duration:1,emoji:'🔥',instruction:'煮好的西兰花捞出装盘。锅烧干倒2勺油，烧到油面微微冒烟（约30秒）。关火，把热油淋在蒜末上。',judge:'听到滋啦一声，闻到蒜香。蒜末微微金黄。',noviceNote:'油不够热淋上去没声音——生蒜味冲。油一定要烧到冒烟才关火'},
  ],rescue:[
    {problem:'花蕾黄了散了煮过头',fix:'当蒜蓉西兰花泥吃。下次水开后煮2分钟就捞'},
    {problem:'淋油没听到滋啦声',fix:'生蒜味冲一点但也能吃。下次油再烧10秒'},
    {problem:'蒜末炸糊了变黑',fix:'把糊的挑出来丢掉。下次关火后再淋'},
  ],tips:'西兰花梗别扔！去皮切片一起煮，比花蕾还好吃。'},

  {id:'cong-you-jin-zhen-gu',name:'葱油金针菇',emoji:'🍄',difficulty:1,time:8,cookMethod:'煮+淋油',category:'菌菇',tags:['快手','清淡'],tools:['煮锅'],mainIngredients:['金针菇'],subIngredients:['葱'],seasonings:[{name:'生抽',required:true},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'处理金针菇',duration:2,emoji:'🔪',instruction:'金针菇切掉根部（约2cm），用手散开成小束。冲洗一下沥干。',judge:'根部切干净，金针菇散成小束不粘连。',noviceNote:'根部切多切少看颜色——最下面土黄色部分切掉就行。别切太多浪费'},
    {stepNum:2,title:'煮金针菇',duration:2,emoji:'🍲',instruction:'锅中水烧开，放入金针菇煮2分钟。捞出装盘。',judge:'金针菇变软弯曲，体积缩小一些。',noviceNote:'金针菇煮超过3分钟缩成一小坨嚼不动像橡皮筋——定时2分钟'},
    {stepNum:3,title:'做葱油',duration:2,emoji:'🔥',instruction:'金针菇上撒葱花。锅烧干倒2勺油，放葱段炸到葱变焦黄。把热油连同葱一起淋在金针菇上，再淋生抽。',judge:'听到滋啦声，葱香四溢。金针菇裹上油和酱油。',noviceNote:'葱炸到焦黄就关火，别炸黑了会苦'},
  ],rescue:[
    {problem:'金针菇煮太久像橡皮筋',fix:'切碎拌进汤里或者炒蛋。下次定时2分钟准点捞'},
    {problem:'葱炸黑了发苦',fix:'把黑葱挑出来丢掉，油还是可以用的。下次葱一变焦黄就关火'},
  ]},

  {id:'hao-you-sheng-cai',name:'蚝油生菜',emoji:'🥬',difficulty:1,time:6,cookMethod:'煮+淋油',category:'蔬菜',tags:['快手','下饭'],tools:['煮锅'],mainIngredients:['生菜'],subIngredients:['蒜'],seasonings:[{name:'蚝油',required:true},{name:'生抽',required:true},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'洗生菜',duration:1,emoji:'💧',instruction:'生菜用手撕成大块（不用刀切）。冲洗干净沥干。',judge:'叶片完整，没有刀切的褐色边缘。',noviceNote:'手撕不用刀！刀切伤口氧化会发红，手撕才好看'},
    {stepNum:2,title:'焯生菜',duration:1,emoji:'🍲',instruction:'锅中水大开，放入生菜焯水30秒。变软就立刻捞出装盘。',judge:'生菜变软颜色变深绿，不超过1分钟。',noviceNote:'生菜焯水超过1分钟完全软烂，甜味全无只剩菜腥味'},
    {stepNum:3,title:'调蚝油汁',duration:2,emoji:'🔥',instruction:'小锅加少许油，放入蒜末炒香。加2勺蚝油、1勺生抽、2勺水，煮到冒泡。淋在生菜上。',judge:'蚝油汁浓稠刚好，均匀裹在生菜上。',noviceNote:'蚝油本身有咸味，不要再加盐！觉得淡可以加生抽'},
  ],rescue:[
    {problem:'生菜焯太老太软',fix:'过一下凉水能救回一点脆度。下次水大开下锅30秒就捞'},
    {problem:'蚝油汁太咸',fix:'加一点点水和糖搅匀稀释。下次蚝油少放半勺'},
  ]},

  {id:'suan-ni-bai-rou',name:'蒜泥白肉',emoji:'🥩',difficulty:2,time:20,cookMethod:'煮+淋油',category:'肉类',tags:['下饭','请客'],tools:['煮锅'],mainIngredients:['五花肉'],subIngredients:['蒜','姜','葱'],seasonings:[{name:'生抽',required:true},{name:'红油',required:false,alt:'不放就是白肉蘸蒜泥酱油'},{name:'料酒',required:false,alt:'用姜片去腥'}],steps:[
    {stepNum:1,title:'煮五花肉',duration:15,emoji:'🍲',instruction:'五花肉整块冷水下锅，加姜片葱段。大火烧开转中小火煮15分钟。筷子能戳透就熟了。关火泡在汤里别捞。',judge:'筷子轻松戳穿整块肉，没有血水渗出。',noviceNote:'冷水下锅！热水下锅肉外层瞬间收紧里面不熟。中小火煮不是大火'},
    {stepNum:2,title:'切薄片',duration:3,emoji:'🔪',instruction:'肉捞出稍微晾凉（不烫手就行），逆着纹路切成薄片。越薄越好，纸一样薄最棒。',judge:'肉片薄到能透光，大小均匀，没有碎。',noviceNote:'肉放凉到不烫手马上切——太凉了肥肉变硬不好切薄'},
    {stepNum:3,title:'调蒜泥酱',duration:2,emoji:'🧄',instruction:'大蒜捣成泥（或切极碎）。加3勺生抽、1勺红油（有就加）、1勺煮肉汤搅匀。肉片蘸着吃。',judge:'蒜泥酱咸鲜微辣，肉片蘸了不腻。',noviceNote:'蒜泥剁得越碎越好——整粒蒜味道不进去'},
  ],rescue:[
    {problem:'肉煮老了咬不动',fix:'切薄一点，越薄越好嚼。下次煮的时候火关小，水只要微微冒泡'},
    {problem:'肥肉太腻',fix:'蘸料多加蒜泥和醋能解腻。下次煮完放冰水里泡5分钟再切'},
  ],tips:'煮肉的汤别倒——加把白菜煮开就是一碗好汤。'},

  {id:'bai-qie-ji-tui',name:'白切鸡腿',emoji:'🍗',difficulty:2,time:25,cookMethod:'煮+淋油',category:'肉类',tags:['下饭','请客','清淡'],tools:['煮锅'],mainIngredients:['鸡腿'],subIngredients:['姜','葱'],seasonings:[{name:'生抽',required:true},{name:'姜',required:true},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'煮鸡腿',duration:20,emoji:'🍲',instruction:'鸡腿冷水下锅，加姜片葱段。大火烧开后转最小火（水微微冒泡），盖盖子煮15分钟。关火再焖5分钟。',judge:'筷子戳鸡腿最厚处，没有血水流出。肉与骨头不粘连。',noviceNote:'不是大火煮！浸熟的才嫩。水只要微微冒泡就行，大火煮皮破肉柴'},
    {stepNum:2,title:'过冰水',duration:3,emoji:'🧊',instruction:'鸡腿捞出立刻放进冰水或冷水中泡5分钟。让鸡皮收紧变脆。',judge:'鸡皮紧致有弹性，不软塌塌的。',noviceNote:'过冰水=皮脆的关键！嫌麻烦可以不过，但皮就没那么Q弹'},
    {stepNum:3,title:'切块蘸料',duration:2,emoji:'🔪',instruction:'鸡腿斩成块（或手撕成条）。姜葱剁碎加生抽和热油做成姜葱酱蘸着吃。',judge:'鸡肉嫩滑，骨头带血丝但肉是熟的（正常！）。',noviceNote:'骨头边有点红是正常的！那是骨髓不是没煮熟。肉全白就是熟了'},
  ],rescue:[
    {problem:'鸡腿没熟透骨头边有血',fix:'放回锅里再煮5分钟。白切鸡骨头带一点红是正常风味但怕就多煮'},
    {problem:'鸡皮不脆软塌塌',fix:'下次煮好一定要过冰水。没过的话切块后可以煎一下皮'},
  ],tips:'白切鸡的精髓在姜葱酱——姜葱1:1剁碎加盐，淋热油激香。'},

  {id:'kou-shui-ji-tui',name:'口水鸡腿',emoji:'🍗',difficulty:2,time:25,cookMethod:'煮+淋油',category:'肉类',tags:['下饭','解馋','请客'],tools:['煮锅'],mainIngredients:['鸡腿'],subIngredients:['姜','葱','蒜'],seasonings:[{name:'生抽',required:true},{name:'红油',required:false,alt:'不放红油就少了灵魂，但也能吃。用辣椒油代替'},{name:'花椒油',required:false,alt:'不放也行，麻味少一点而已'},{name:'醋',required:true},{name:'糖',required:false,alt:'不放也行，加一点提鲜'}],steps:[
    {stepNum:1,title:'煮鸡腿',duration:20,emoji:'🍲',instruction:'鸡腿冷水下锅加姜片，大火烧开转中小火煮15分钟。关火焖5分钟。捞出来略凉。',judge:'筷子轻松戳透，没有血水。',noviceNote:'煮鸡腿的汤留半碗——调汁用，比自来水香十倍'},
    {stepNum:2,title:'撕鸡丝',duration:3,emoji:'🔪',instruction:'鸡腿稍微晾凉（不烫手），用手撕成条。不用太细，筷子粗就行。',judge:'鸡丝长短均匀，没有大块。',noviceNote:'不烫手就撕——凉透了撕不动'},
    {stepNum:3,title:'调口水汁',duration:2,emoji:'🥣',instruction:'碗里加：生抽3勺、醋1勺、糖半勺、蒜末、姜末、红油（有就加）、花椒油几滴、煮鸡腿汤2勺。搅匀淋在鸡丝上，撒葱花。',judge:'汁水刚好没过鸡丝一半。咸酸麻辣都有。',noviceNote:'先尝一下汁再淋！每个人的口味不一样。觉得淡了加生抽，酸了加糖'},
  ],rescue:[
    {problem:'味道寡淡不够味',fix:'多加红油和生抽。口水鸡就是重口味——淡了不好吃'},
    {problem:'鸡腿太柴',fix:'撕细一点，多淋点汁泡着吃。下次煮鸡腿转最小火'},
  ],tips:'调好的汁泡着鸡丝放冰箱冷藏半小时更入味。夏天吃超爽。'},

  {id:'you-po-huang-gua',name:'油泼黄瓜',emoji:'🥒',difficulty:1,time:8,cookMethod:'煮+淋油',category:'蔬菜',tags:['快手','清淡'],tools:['煮锅'],mainIngredients:['黄瓜'],subIngredients:['蒜','干辣椒'],seasonings:[{name:'生抽',required:true},{name:'醋',required:true},{name:'糖',required:false,alt:'不放也无所谓'},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'拍黄瓜',duration:2,emoji:'🔪',instruction:'黄瓜用刀背拍裂（不是切！），再切成段。拍裂断面不规则更入味。',judge:'黄瓜裂而不碎，断面不规则。没有刀切的平整面。',noviceNote:'用刀背拍！不是刀刃切。刀背拍裂的黄瓜比切的好吃十倍'},
    {stepNum:2,title:'焯水',duration:1,emoji:'🍲',instruction:'锅中水烧开，放入黄瓜焯水1分钟。不要煮太久，变翠绿就捞。',judge:'颜色从浅绿变翠绿，还是脆的。',noviceNote:'黄瓜可以生吃！焯水只是为了让颜色更好看。不焯也行'},
    {stepNum:3,title:'泼油激香',duration:2,emoji:'🔥',instruction:'黄瓜装盘，放上蒜末和干辣椒段。锅烧干倒2勺油烧到冒烟，关火淋在蒜末辣椒上。再淋生抽和醋。',judge:'滋啦一声，蒜香辣椒香全出来了。',noviceNote:'油要烧到冒烟！油不够热淋上去没有滋啦声就不香'},
  ],rescue:[
    {problem:'黄瓜不脆软趴趴',fix:'放冰箱冷藏半小时能回脆。下次焯水不要超过1分钟'},
    {problem:'辣椒炸糊了变黑',fix:'把糊的挑出来。下次干辣椒后放——先淋油再放辣椒'},
  ]},

  {id:'jiang-zhi-pi-dan-dou-fu',name:'姜汁皮蛋豆腐',emoji:'🥟',difficulty:1,time:5,cookMethod:'凉拌',category:'豆制品',tags:['快手','请客','懒人'],tools:['刀','盘子'],mainIngredients:['嫩豆腐','皮蛋'],subIngredients:['姜','葱'],seasonings:[{name:'生抽',required:true},{name:'醋',required:true},{name:'香油',required:false,alt:'不放也行，少点香味'}],steps:[
    {stepNum:1,title:'摆豆腐',duration:1,emoji:'🔪',instruction:'嫩豆腐从盒子里倒扣出来，放在盘子中间。用刀直接在盘子里划成片（横几刀竖几刀）。',judge:'豆腐完整没有碎，排列整齐。',noviceNote:'豆腐倒扣前在盒子底部四角各剪一个小口——空气进去豆腐就完整倒出来了'},
    {stepNum:2,title:'切皮蛋',duration:2,emoji:'🔪',instruction:'皮蛋剥壳。刀蘸水（防粘），把皮蛋切成4-6瓣。摆在豆腐周围。',judge:'皮蛋切面光洁不粘刀，每瓣大小均匀。',noviceNote:'刀蘸水再切皮蛋——蛋黄就不粘刀了。切一下蘸一下水'},
    {stepNum:3,title:'调姜汁',duration:2,emoji:'🥣',instruction:'姜剁成极细的末（越细越好）。加生抽3勺、醋1勺、几滴香油搅匀。淋在豆腐皮蛋上，撒葱花。',judge:'姜汁均匀覆盖，豆腐和皮蛋都沾上汁。',noviceNote:'姜一定要剁细！粗姜末吃起来一口姜很冲。剁到像泥一样'},
  ],rescue:[
    {problem:'豆腐碎了不成形',fix:'不要紧，碎了就当凉拌豆腐吃味道一样。下次剪盒角再倒扣'},
    {problem:'皮蛋太腥',fix:'姜汁里多加醋能去腥。下次切皮蛋前煮一下（煮5分钟）去腥'},
  ],tips:'这道菜是真的不用开火。如果你连这个都不想做——那今天点外卖吧。'},

  {id:'suan-rong-fen-si-xia',name:'蒜蓉粉丝虾',emoji:'🦐',difficulty:2,time:15,cookMethod:'蒸',category:'水产',tags:['请客','解馋'],tools:['蒸锅','盘子'],mainIngredients:['虾','粉丝'],subIngredients:['蒜','葱'],seasonings:[{name:'生抽',required:true},{name:'蚝油',required:false,alt:'不放也行'},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'泡粉丝',duration:3,emoji:'💧',instruction:'粉丝用温水泡软（约3分钟）。泡到能用指甲掐断就行。捞出铺在盘底。',judge:'粉丝变软不硬心，没有泡成坨。',noviceNote:'冷水泡太慢，开水泡粉丝会烂。温水和手指温度差不多就行'},
    {stepNum:2,title:'处理虾',duration:5,emoji:'🔪',instruction:'虾去壳留尾。用刀在虾背上划一刀（不要切断），去掉虾线。摆在粉丝上。',judge:'虾背划开摊平，虾线去干净。',noviceNote:'开背不要切到底——切断就卷不起来了。浅浅一刀能打开就行'},
    {stepNum:3,title:'炒蒜蓉',duration:3,emoji:'🧄',instruction:'蒜切成细末。小锅加2勺油，放一半蒜末小火炒到微黄（不要炒糊）。关火后加入另一半生蒜末，加生抽和蚝油搅匀。铺在虾上。',judge:'蒜蓉一半金黄一半白，铺在虾上薄薄一层。',noviceNote:'蒜蓉一半炒一半生=金银蒜。全炒熟少了蒜的鲜辣味，全生少了焦香'},
    {stepNum:4,title:'上锅蒸',duration:6,emoji:'♨️',instruction:'蒸锅水开后放入虾盘，大火蒸5-6分钟（虾变红卷起）。出锅撒葱花。',judge:'虾变红卷成C形，粉丝吸饱了汤汁。',noviceNote:'不要蒸超过7分钟——虾老了肉缩成一小团'},
  ],rescue:[
    {problem:'虾蒸老了缩成小球',fix:'下次蒸5分钟就够。已经老的虾肉剁碎拌进粉丝里吃'},
    {problem:'粉丝蒸出来干巴巴的',fix:'下次盘底多加一点水（2勺），蒸的时候粉丝会吸水变软'},
  ],tips:'这道菜上桌看起来非常厉害，其实简单到不行——请客首选。'},

  {id:'liang-ban-ji-si',name:'凉拌鸡丝',emoji:'🍗',difficulty:2,time:15,cookMethod:'凉拌',category:'肉类',tags:['快手','清淡','备餐'],tools:['煮锅'],mainIngredients:['鸡胸肉','黄瓜'],subIngredients:['姜','蒜'],seasonings:[{name:'生抽',required:true},{name:'醋',required:true},{name:'香油',required:false,alt:'不放也行，但放了更香'},{name:'辣椒油',required:false,alt:'不放就是清淡版'}],steps:[
    {stepNum:1,title:'煮鸡胸',duration:8,emoji:'🍲',instruction:'鸡胸肉冷水下锅加姜片，大火烧开转中小火煮8分钟。关火焖2分钟。捞出晾凉。',judge:'筷子夹开中间完全白色，没有粉色。',noviceNote:'大火煮鸡胸必柴！水烧开后立刻转中小火，保持微微冒泡就行'},
    {stepNum:2,title:'撕鸡丝刨黄瓜',duration:4,emoji:'🔪',instruction:'鸡胸肉晾凉后用手撕成丝。黄瓜先切片再切丝（或直接用刨丝器）。',judge:'鸡丝粗细均匀，黄瓜丝长短一致。',noviceNote:'鸡胸顺着纹路撕——撕出来的丝比切的好吃。不烫手了就撕，凉透了硬'},
    {stepNum:3,title:'拌匀',duration:2,emoji:'🥣',instruction:'鸡丝和黄瓜丝放大碗里。加生抽3勺、醋1勺、蒜末、香油和辣椒油（有就加）。拌匀装盘。',judge:'每一根鸡丝都裹上料汁，黄瓜丝还脆。',noviceNote:'先拌匀尝尝味道再决定要不要加盐——生抽和醋已经够咸了'},
  ],rescue:[
    {problem:'鸡胸肉太柴',fix:'撕细一点多拌汁——泡一会儿会回软。下次一定要中小火煮'},
    {problem:'黄瓜出太多水',fix:'把水倒掉再加料。下次黄瓜丝用盐腌5分钟挤干水分再用'},
  ],tips:'一次多做点放冰箱冷藏，第二天更好吃。夏天不想做饭就靠它了。'},

  {id:'jiao-yan-yu-mi',name:'椒盐玉米',emoji:'🌽',difficulty:1,time:15,cookMethod:'煮+加工',category:'主食',tags:['快手','下饭'],tools:['煮锅'],mainIngredients:['玉米'],subIngredients:[],seasonings:[{name:'椒盐',required:true},{name:'黄油',required:false,alt:'没有就用食用油'}],steps:[
    {stepNum:1,title:'煮玉米',duration:12,emoji:'🍲',instruction:'玉米剥去外皮留一两层叶子。冷水下锅，水开后煮10分钟。捞出。',judge:'玉米粒颜色变深变亮，咬开没有生粉味。',noviceNote:'玉米冷水下锅更甜！和鸡蛋一样。带着一两层叶子煮更香'},
    {stepNum:2,title:'切段',duration:2,emoji:'🔪',instruction:'煮好的玉米切成段（每段约3指宽）。用刀切到底，小心烫。',judge:'每段大小均匀，切面整齐。',noviceNote:'刚出锅巨烫！用叉子固定再切。竖着切比横着切省力'},
    {stepNum:3,title:'撒椒盐',duration:1,emoji:'🧂',instruction:'玉米段上抹一层黄油（有就抹），撒上椒盐。也可以直接撒椒盐吃。',judge:'椒盐均匀撒在玉米粒上，每一粒都有味道。',noviceNote:'椒盐本身有盐味，不用再加盐。先少撒尝尝'},
  ],rescue:[
    {problem:'玉米不甜',fix:'不是你的问题——玉米本身不够甜。撒椒盐吃咸的也不错'},
    {problem:'玉米煮老了硬',fix:'切成段煮汤，加点排骨或鸡腿就是好汤。下次水开后煮10分钟'},
  ]},

  {id:'suan-rong-zheng-qie-zi',name:'蒜蓉蒸茄子',emoji:'🍆',difficulty:1,time:15,cookMethod:'蒸',category:'蔬菜',tags:['快手','下饭','懒人'],tools:['蒸锅','盘子'],mainIngredients:['茄子'],subIngredients:['蒜','葱'],seasonings:[{name:'生抽',required:true},{name:'蚝油',required:false,alt:'不放也行'},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'处理茄子',duration:2,emoji:'🔪',instruction:'茄子去蒂，整根洗净。不用切！不用去皮！整根蒸。',judge:'茄子表面干净，蒂去掉了。',noviceNote:'不要切！整根蒸茄子才不会吸水变水唧唧。切了蒸出来一泡水'},
    {stepNum:2,title:'蒸茄子',duration:12,emoji:'♨️',instruction:'蒸锅水开后放入整根茄子，大火蒸10-12分钟。蒸到茄子变软蔫了。',judge:'茄子整个软塌下来，筷子轻轻一戳就透。皮皱了。',noviceNote:'茄子大就多蒸2分钟。不确定就用筷子戳——轻松戳透就是好了'},
    {stepNum:3,title:'撕条调味',duration:2,emoji:'🔪',instruction:'茄子取出稍微晾凉（不烫手），用手撕成条。摆盘，放上蒜末葱花。淋生抽蚝油。锅烧2勺油烧冒烟淋在蒜末上。',judge:'茄条均匀铺开，蒜香浓郁。茄子吸饱了酱汁。',noviceNote:'用手撕不用刀！手撕断面不规则更容易吸汁入味'},
  ],rescue:[
    {problem:'茄子蒸出来水唧唧的',fix:'倒掉盘子里的水再调味。下次别切整根蒸'},
    {problem:'茄子皮太硬咬不动',fix:'正常，茄子皮有嚼劲。不喜欢可以剥掉皮再撕条'},
  ],tips:'这道菜成本不到3块钱但好吃到舔盘。真正的穷人美食。'},

  // ════════ 三、蒸菜 ════════
  {id:'zheng-shui-dan',name:'蒸水蛋',emoji:'🥚',difficulty:2,time:12,cookMethod:'蒸',category:'禽蛋',tags:['快手','清淡','懒人'],tools:['蒸锅','碗'],mainIngredients:['鸡蛋'],subIngredients:['葱'],seasonings:[{name:'盐',required:true},{name:'生抽',required:false,alt:'不放也行，蒸好了淋一点更香'},{name:'香油',required:false,alt:'不放也行'}],steps:[
    {stepNum:1,title:'打蛋液',duration:2,emoji:'🥚',instruction:'鸡蛋打碗里，加一小撮盐。用筷子搅匀打散。加温水（蛋和水的比例1:1.5），继续搅匀。',judge:'蛋液和水完全融合，没有蛋清丝。表面有少量泡沫。',noviceNote:'要用温水（手摸不烫）！冷水蒸出来不嫩，热水直接成蛋花汤'},
    {stepNum:2,title:'过滤去泡',duration:1,emoji:'🥣',instruction:'蛋液用滤网过滤到蒸碗里（或拿勺子撇掉表面的泡沫）。盖上一层保鲜膜或扣个盘子。',judge:'蛋液表面没有气泡，光滑得像水面。',noviceNote:'不过滤不盖保鲜膜→蒸出来表面全是蜂窝坑。这一步决定了颜值'},
    {stepNum:3,title:'上锅蒸',duration:8,emoji:'♨️',instruction:'蒸锅水开后转中小火，放入蛋碗蒸8分钟。关火再闷2分钟。',judge:'蛋羹表面光滑如镜，用勺子舀起来颤巍巍的。没有蜂窝孔。',noviceNote:'一定要转中小火！大火蒸=必出蜂窝。水开后转小火再放碗'},
    {stepNum:4,title:'调味',duration:1,emoji:'🥣',instruction:'取出蒸蛋，淋上半勺生抽和几滴香油。撒葱花。',judge:'蒸蛋口感像布丁一样嫩滑，入口即化。',noviceNote:'生抽沿碗边淋下去，别直接倒在蛋面上——会破坏光滑表面'},
  ],rescue:[
    {problem:'蒸出来全是蜂窝孔',fix:'下次一定要用温水+过滤气泡+中小火。这次可以淋上生抽葱花假装是故意的'},
    {problem:'蛋水分离析出水了',fix:'倒掉析出的水，味道不影响。下次蛋水比例调到1:1.3'},
  ],tips:'蒸水蛋是检验厨房水平的试金石——步骤不多但细节决定成败。'},

  {id:'duo-jiao-zheng-yu-pian',name:'剁椒蒸鱼片',emoji:'🐟',difficulty:1,time:10,cookMethod:'蒸',category:'水产',tags:['快手','下饭'],tools:['蒸锅','盘子'],mainIngredients:['巴沙鱼'],subIngredients:['剁椒','姜'],seasonings:[{name:'蒸鱼豉油',required:false,alt:'用生抽可以'},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'切鱼片',duration:2,emoji:'🔪',instruction:'巴沙鱼柳切厚片（麻将牌大小）。用厨房纸吸干水分。平铺在盘子里。',judge:'鱼片大小均匀，厚薄一致。盘子底没有积水。',noviceNote:'一定要吸干水分！鱼片水分越多蒸出来越腥'},
    {stepNum:2,title:'铺剁椒',duration:2,emoji:'🌶️',instruction:'在鱼片上均匀铺上一层剁椒。铺满但不要太厚。放几片姜去腥。',judge:'剁椒均匀覆盖每片鱼，没有重叠太多。',noviceNote:'剁椒有盐味——不用再加盐了！超市买的剁椒已经很咸'},
    {stepNum:3,title:'蒸鱼',duration:6,emoji:'♨️',instruction:'蒸锅水开后放入鱼盘，大火蒸6分钟。出锅淋上蒸鱼豉油，撒葱花。锅烧1勺热油淋上去。',judge:'鱼肉完全变白，用筷子一夹就开。剁椒的香味和鱼肉融合。',noviceNote:'冷水上锅蒸→鱼肉老。一定要水开后放鱼'},
  ],rescue:[
    {problem:'鱼肉很腥',fix:'多铺姜片在鱼下面。下次买鱼柳回来先用料酒腌10分钟'},
    {problem:'剁椒太咸了',fix:'蒸熟后把多余的剁椒拨开一些，只吃鱼肉。下次少放剁椒'},
  ],tips:'这道菜的成本不到10块钱但看起来像餐馆水平。'},

  {id:'fen-zheng-rou',name:'粉蒸肉',emoji:'🥩',difficulty:2,time:40,cookMethod:'蒸',category:'肉类',tags:['下饭','解馋'],tools:['蒸锅','碗'],mainIngredients:['五花肉'],subIngredients:['蒸肉粉','土豆'],seasonings:[{name:'生抽',required:true},{name:'老抽',required:false,alt:'没有颜色浅一点但味道一样'},{name:'料酒',required:false,alt:'不放也行'}],steps:[
    {stepNum:1,title:'切肉腌肉',duration:5,emoji:'🔪',instruction:'五花肉切厚片（筷子尖厚）。加生抽、老抽（有就加）抓匀，腌10分钟。',judge:'每片肉大小均匀，酱色均匀裹上。',noviceNote:'肉片不要太薄——太薄蒸出来没了。筷子尖厚度刚好'},
    {stepNum:2,title:'裹蒸肉粉',duration:3,emoji:'🫓',instruction:'超市买的蒸肉粉倒盘子里。腌好的肉片两面沾上蒸肉粉，抖掉多余的。',judge:'每片肉均匀裹上粉，没有大块干粉堆积。',noviceNote:'超市蒸肉粉已经有盐味了！不用再加盐。买的时候注意买五香味还是辣味'},
    {stepNum:3,title:'摆盘上锅',duration:32,emoji:'♨️',instruction:'碗底铺上切块的土豆。肉片一片片码在土豆上（不重叠）。蒸锅水开后放入，大火蒸30分钟。',judge:'肉蒸到软烂，筷子一夹就断。土豆吸饱了肉汁。',noviceNote:'水一次加足！蒸30分钟水会烧干。中途加水要加热水'},
  ],rescue:[
    {problem:'蒸肉粉掉了一碗底都是',fix:'倒出来加点水搅匀浇回去。下次裹粉后轻轻拍一下让粉粘牢'},
    {problem:'肉太肥腻',fix:'蘸醋吃解腻。下次买瘦一点的五花肉'},
  ],tips:'超市蒸肉粉品牌推荐：好人家或者桥头。别买太便宜的——粉粗口感差。'},

  {id:'suan-rong-zheng-jin-zhen-gu',name:'蒜蓉蒸金针菇',emoji:'🍄',difficulty:1,time:8,cookMethod:'蒸',category:'菌菇',tags:['快手','下饭','懒人'],tools:['蒸锅','盘子'],mainIngredients:['金针菇'],subIngredients:['蒜','葱'],seasonings:[{name:'生抽',required:true},{name:'蚝油',required:false,alt:'不放也行'},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'铺金针菇',duration:2,emoji:'🔪',instruction:'金针菇去根散开，冲洗沥干。平铺在盘子里（铺薄一点别堆太厚）。',judge:'金针菇均匀铺开，没有一坨一坨的。',noviceNote:'铺越厚越难熟——薄薄一层铺开，3分钟就熟'},
    {stepNum:2,title:'做蒜蓉酱',duration:2,emoji:'🧄',instruction:'蒜切末。小锅加2勺油小火炒一半蒜末到微黄，关火加另一半生蒜、生抽、蚝油。铺在金针菇上。',judge:'蒜蓉酱均匀淋在金针菇上，每一处都有蒜。',noviceNote:'同蒜蓉粉丝虾的金银蒜做法——一半炒一半生'},
    {stepNum:3,title:'上锅蒸',duration:4,emoji:'♨️',instruction:'蒸锅水开后放入，大火蒸3-4分钟。金针菇变软出水就出锅。撒葱花。',judge:'金针菇完全变软，盘底有汤汁。',noviceNote:'金针菇蒸了会出水——盘子选深一点的，别用平盘'},
  ],rescue:[
    {problem:'蒸出来一盘子水',fix:'把多余的水倒掉，味道不影响。下次铺薄一点'},
    {problem:'金针菇嚼不动',fix:'回锅再蒸2分钟。新鲜的也可能比较有韧性'},
  ]},

  {id:'zheng-wu-can-rou-dan',name:'蒸午餐肉蛋',emoji:'🥫',difficulty:1,time:10,cookMethod:'蒸',category:'禽蛋',tags:['快手','懒人'],tools:['蒸锅','碗'],mainIngredients:['午餐肉','鸡蛋'],subIngredients:[],seasonings:[{name:'盐',required:false,alt:'午餐肉本身就有盐味，一般不用加'}],steps:[
    {stepNum:1,title:'切午餐肉',duration:2,emoji:'🔪',instruction:'午餐肉切成小丁（指甲盖大小）。铺在碗底。',judge:'丁大小均匀，铺满碗底一层。',noviceNote:'不用加油！午餐肉本身有油，蒸的时候会出油'},
    {stepNum:2,title:'打蛋',duration:1,emoji:'🥚',instruction:'鸡蛋直接打在午餐肉上（不打散）。用筷子把蛋黄戳破，让蛋液流到肉丁缝里。',judge:'蛋液均匀分布在肉丁之间。',noviceNote:'蛋黄戳破！整颗蛋黄蒸出来太干了，戳破让蛋液渗到肉里'},
    {stepNum:3,title:'蒸',duration:6,emoji:'♨️',instruction:'蒸锅水开后放入，大火蒸5-6分钟。蛋液完全凝固就出锅。',judge:'蛋液完全凝固，午餐肉出油了，香味扑鼻。',noviceNote:'蒸太久蛋会变老发硬——看到蛋液凝固就关火'},
  ],rescue:[
    {problem:'午餐肉太咸了',fix:'下次切薄一点铺开。已经蒸好的可以配白粥或者米饭吃'},
    {problem:'蛋蒸太老太硬',fix:'切成小块拌进粥里吃。下次水开后6分钟准时出锅'},
  ],tips:'家里没菜时的救命菜。午餐肉换成火腿肠也行。'},

  {id:'zheng-shan-yao',name:'蒸山药',emoji:'🥬',difficulty:1,time:12,cookMethod:'蒸',category:'主食',tags:['快手','清淡','备餐'],tools:['蒸锅'],mainIngredients:['山药'],subIngredients:[],seasonings:[{name:'白糖',required:false,alt:'直接吃也行，原味养生'}],steps:[
    {stepNum:1,title:'削皮切段',duration:4,emoji:'🔪',instruction:'山药戴手套削皮！切成指节长的段。',judge:'皮削干净没有黑点。山药段大小一致。',noviceNote:'必须戴手套！山药皮汁液含草酸钙会让手痒到怀疑人生。如果不小心碰到了用醋洗手'},
    {stepNum:2,title:'蒸山药',duration:10,emoji:'♨️',instruction:'蒸锅水开后放入山药段，大火蒸8-10分钟。筷子能轻松戳穿。',judge:'筷子轻松戳透，表面微微变透亮。',noviceNote:'切越小段熟越快。但太短容易蒸碎——一个指节长度正好'},
    {stepNum:3,title:'开吃',duration:1,emoji:'🍴',instruction:'山药取出装盘。直接吃原味（微甜绵软）或蘸白糖吃。',judge:'口感绵软微甜，没有生硬感。',noviceNote:'山药蒸好直接吃最养生。蘸白糖是小朋友爱吃的方法'},
  ],rescue:[
    {problem:'手痒了（没戴手套）',fix:'用醋搓手或在火上稍微烤一下手（注意安全）。下次一定要戴手套'},
    {problem:'山药黑了',fix:'正常！山药氧化变黑不影响食用。下次削皮后立刻泡水里防氧化'},
  ],tips:'山药是养生食材——健脾养胃。蒸着吃比煮着吃营养保留更多。'},

  {id:'zheng-yu-mi',name:'蒸玉米',emoji:'🌽',difficulty:1,time:15,cookMethod:'蒸',category:'主食',tags:['快手','清淡','备餐'],tools:['蒸锅'],mainIngredients:['玉米'],subIngredients:[],seasonings:[],steps:[
    {stepNum:1,title:'处理玉米',duration:2,emoji:'🔪',instruction:'玉米剥掉外面老叶子，留里面一两层嫩叶子。玉米须可以留着（煮水喝）。',judge:'玉米表面剩1-2层叶子包裹着。',noviceNote:'留一两层叶子蒸更香！全剥光蒸出来少了玉米的清香味'},
    {stepNum:2,title:'上锅蒸',duration:12,emoji:'♨️',instruction:'蒸锅水开后放入玉米，大火蒸10-12分钟。关火焖2分钟。',judge:'玉米粒颜色变深变亮，用筷子能戳透。香味飘满厨房。',noviceNote:'蒸的玉米比煮的玉米更甜——营养不流失到水里'},
    {stepNum:3,title:'开吃',duration:1,emoji:'🍴',instruction:'稍微晾凉，剥掉叶子直接啃。也可以切成段吃。',judge:'玉米粒饱满多汁，咬开没有生粉味。',noviceNote:'刚出锅巨烫！晾2分钟再吃。别心急烫了嘴'},
  ],rescue:[
    {problem:'玉米不甜',fix:'不是你的问题——玉米品种决定甜度。下次买水果玉米或者甜玉米'},
    {problem:'玉米粒老了嚼不动',fix:'蒸的时间可以再加5分钟。老玉米耐蒸，多蒸一会儿会软'},
  ]},

  {id:'dou-chi-zheng-pai-gu',name:'豆豉蒸排骨',emoji:'🍖',difficulty:2,time:30,cookMethod:'蒸',category:'肉类',tags:['下饭','请客','解馋'],tools:['蒸锅','碗'],mainIngredients:['排骨'],subIngredients:['豆豉','蒜','姜'],seasonings:[{name:'生抽',required:true},{name:'蚝油',required:false,alt:'不放也行'},{name:'料酒',required:false,alt:'用姜去腥'},{name:'淀粉',required:true},{name:'糖',required:false,alt:'不放也行'}],steps:[
    {stepNum:1,title:'腌排骨',duration:10,emoji:'🥣',instruction:'排骨斩小段（拇指长），冲洗掉血水沥干。加生抽、蚝油、料酒、蒜末、豆豉、一小勺淀粉、一点糖抓匀。腌10分钟。',judge:'排骨均匀裹上酱色，没有积水。',noviceNote:'加淀粉是排骨嫩滑的关键——不加淀粉蒸出来肉柴。一小勺就够'},
    {stepNum:2,title:'摆盘蒸',duration:25,emoji:'♨️',instruction:'腌好的排骨平铺在碗里（不堆叠）。蒸锅水开后放入，大火蒸20-25分钟。',judge:'排骨肉能轻松从骨头上剥离，没有血水。',noviceNote:'排骨一定不要堆叠！平铺一层才熟得均匀。堆两层的下面那层还是生的'},
    {stepNum:3,title:'出锅',duration:1,emoji:'🍴',instruction:'撒上葱花。直接上桌。',judge:'排骨嫩滑脱骨，豆豉和蒜香浓郁。',noviceNote:'如果盘底汤汁多，可以倒出来勾个薄芡再淋回去'},
  ],rescue:[
    {problem:'排骨蒸出来太干太柴',fix:'下次腌的时候多加一点水（2勺），让排骨吸水。已经干了就蘸酱吃'},
    {problem:'豆豉太咸了',fix:'下次少放豆豉多放蒜末。这次就着米饭吃别空口吃'},
  ],tips:'早上去菜市场买新鲜的排骨，不要用冷冻的——冷冻排骨蒸出来腥味重。'},

  // ════════ 四、简单煎/炒 ════════
  {id:'fan-qie-chao-dan',name:'番茄炒蛋',emoji:'🍅',difficulty:1,time:10,cookMethod:'炒',category:'禽蛋',tags:['快手','下饭','懒人'],tools:['炒锅','炒勺'],mainIngredients:['番茄','鸡蛋'],subIngredients:['葱'],seasonings:[{name:'盐',required:true},{name:'糖',required:false,alt:'不放也行，番茄酸的话加一点'},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'切番茄',duration:2,emoji:'🔪',instruction:'番茄去蒂，切成麻将牌大小。不去皮，煮了皮自己会脱落。',judge:'块大小均匀，番茄汁没挤得到处都是。',noviceNote:'切太碎炒出来成番茄酱了——麻将牌大小刚好'},
    {stepNum:2,title:'打蛋',duration:1,emoji:'🥚',instruction:'鸡蛋打碗里加一小撮盐搅匀。搅到筷子挑起来没有蛋清丝。',judge:'蛋液均匀一色，没有透明蛋清团。',noviceNote:'不搅匀炒出来一块白一块黄——多搅20秒'},
    {stepNum:3,title:'炒蛋',duration:2,emoji:'🍳',instruction:'锅烧热倒油，油微冒烟倒入蛋液。等底部凝固再用铲子推，刚熟就盛出。',judge:'蛋块嫩黄还带湿润感，不是干巴巴的。',noviceNote:'蛋下锅就急着翻——变成炒蛋碎。等底部凝固了再推'},
    {stepNum:4,title:'炒番茄',duration:3,emoji:'🍲',instruction:'不用洗锅再加一点油，倒入番茄。中火炒到出汁变软，用铲子压一压。',judge:'番茄明显出汁，皮开始卷起脱落。锅底有红色汤汁。',noviceNote:'火太小不出汁——中火炒才能把番茄汁逼出来'},
    {stepNum:5,title:'合炒',duration:2,emoji:'🔄',instruction:'把炒好的蛋倒回锅里和番茄翻炒几下。加一小撮糖提鲜。翻匀就出锅。',judge:'蛋块均匀裹上红色汤汁，每一块都有味道。',noviceNote:'倒回去又炒很久——蛋会变老。翻匀就出锅10秒搞定'},
  ],rescue:[
    {problem:'鸡蛋炒太老干巴巴',fix:'下次蛋液加一小勺水或几滴白醋——炒出来更嫩'},
    {problem:'番茄不出汁',fix:'番茄不够熟。加一小勺水盖盖子焖1分钟，用铲子压一压'},
    {problem:'炒出来水汪汪的',fix:'大火收一下汁就好。下次选摸起来有点软的番茄'},
  ],tips:'这道菜没有固定公式——甜口多加糖，咸口多加盐。先做一次找到自己的口味。'},

  {id:'suan-rong-xia-ren',name:'蒜蓉虾仁',emoji:'🦐',difficulty:2,time:8,cookMethod:'炒',category:'水产',tags:['快手','下饭'],tools:['炒锅'],mainIngredients:['虾仁'],subIngredients:['蒜'],seasonings:[{name:'盐',required:true},{name:'料酒',required:false,alt:'不放也行'},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'处理虾仁',duration:2,emoji:'🔪',instruction:'虾仁解冻透冲洗沥干。用厨房纸吸干水分。加一小撮盐抓一下。',judge:'虾仁表面干爽没有水。',noviceNote:'虾仁一定要吸干！带水下锅变成煮虾仁，不是炒虾仁'},
    {stepNum:2,title:'爆蒜',duration:1,emoji:'🧄',instruction:'锅烧热倒油，放入蒜末爆香（约15秒）。蒜末刚变黄就下虾仁。',judge:'闻到蒜香，蒜末微黄还没焦。',noviceNote:'蒜末在油里炸超过20秒就糊了发苦——闻到蒜香立刻放虾仁'},
    {stepNum:3,title:'炒虾仁',duration:2,emoji:'🍳',instruction:'虾仁下锅大火快炒。看到虾仁变红卷起立刻出锅。整个过程不到2分钟。',judge:'虾仁变红卷成C形，表面微微焦黄。',noviceNote:'虾仁变色就是熟了！多炒10秒就老。C形是最好的状态'},
  ],rescue:[
    {problem:'虾仁炒老了缩成小球',fix:'下次大火快炒变色就出锅。已经老了可以切碎拌沙拉'},
    {problem:'炒出一锅水',fix:'下次虾仁一定要充分解冻+吸干水分'},
  ],tips:'冷冻虾仁解冻后加一小勺小苏打抓一下再冲洗，炒出来更脆。'},

  {id:'qing-jiao-rou-si',name:'青椒肉丝',emoji:'🫑',difficulty:2,time:15,cookMethod:'炒',category:'肉类',tags:['下饭','家常'],tools:['炒锅'],mainIngredients:['猪肉','青椒'],subIngredients:['姜','蒜'],seasonings:[{name:'生抽',required:true},{name:'老抽',required:false,alt:'没有颜色浅一点'},{name:'淀粉',required:false,alt:'不放肉质会老一点也能吃'},{name:'盐',required:true}],steps:[
    {stepNum:1,title:'切肉腌肉',duration:5,emoji:'🔪',instruction:'猪肉切丝（筷子粗）。加一小勺生抽、半勺淀粉抓匀腌5分钟。',judge:'肉丝粗细均匀，表面裹上薄薄一层酱色。',noviceNote:'猪肉冷冻到半硬状态最好切——太软切不动，太硬切不均匀。肉丝顺纹切不散'},
    {stepNum:2,title:'切青椒',duration:2,emoji:'🔪',instruction:'青椒去蒂去籽，切丝（和肉丝差不多粗细）。',judge:'青椒丝粗细和肉丝一致。籽去干净了。',noviceNote:'青椒籽不去干净吃到嘴里发苦。切开后用力抖一抖'},
    {stepNum:3,title:'炒肉丝',duration:3,emoji:'🍳',instruction:'锅烧热倒油，油热后放入肉丝大火快炒。炒到变色（约1分钟）盛出。',judge:'肉丝完全变色，表面微焦香。没有出水。',noviceNote:'肉下锅先别翻！等10秒让底面煎香再翻炒——不然粘锅'},
    {stepNum:4,title:'合炒',duration:3,emoji:'🔄',instruction:'锅中留底油，放入青椒丝大火炒30秒。倒入肉丝，加生抽和盐。大火翻炒几下出锅。',judge:'青椒还带一点脆，肉丝嫩。颜色青绿配酱色好看。',noviceNote:'青椒不要炒太久——软了就不好吃了。下锅后30秒就放肉丝'},
  ],rescue:[
    {problem:'肉丝炒出来很柴',fix:'下次腌肉时加半勺淀粉和一点点水。这次加点汤汁焖一下'},
    {problem:'粘锅了肉丝粘在锅底',fix:'锅不够热就下肉了。下次锅烧到冒烟再倒油'},
  ],tips:'超市买切好的肉丝最省事。自己切的话先冻半小时。'},

  {id:'wu-can-rou-jian-dan',name:'午餐肉煎蛋',emoji:'🥫',difficulty:1,time:5,cookMethod:'煎',category:'禽蛋',tags:['快手','懒人'],tools:['炒锅'],mainIngredients:['午餐肉','鸡蛋'],subIngredients:[],seasonings:[{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'煎午餐肉',duration:2,emoji:'🍳',instruction:'午餐肉切厚片（一指厚）。锅烧热倒油，放入午餐肉片，中火煎到两面焦黄（每面1分钟）。',judge:'午餐肉两面金黄焦脆，边角微焦。',noviceNote:'午餐肉本身有油——锅里少放油，半勺就够'},
    {stepNum:2,title:'煎蛋',duration:2,emoji:'🍳',instruction:'午餐肉推到一边，直接在锅另一边打个蛋。煎到蛋白完全凝固（约2分钟）。蛋黄留溏心或煎熟都行。',judge:'蛋白完全变白凝固，蛋黄按个人喜好（戳一下看软硬）。',noviceNote:'想吃溏心蛋就用可生食鸡蛋。普通鸡蛋一定要煎到蛋黄全熟'},
    {stepNum:3,title:'装盘',duration:1,emoji:'🍴',instruction:'午餐肉和蛋盛出来，撒一点点黑胡椒（有就加）。',judge:'午餐肉焦脆，蛋煎得漂亮。',noviceNote:'午餐肉本身很咸！不要再加盐了——黑胡椒够了'},
  ],rescue:[
    {problem:'蛋煎破了蛋黄流出来',fix:'流出来的蛋液煎熟了也好吃。下次蛋打碗里再滑入锅'},
    {problem:'午餐肉煎糊了',fix:'把糊的部分切掉。下次用中小火'},
  ]},

  {id:'hao-you-xing-bao-gu',name:'蚝油杏鲍菇',emoji:'🍄',difficulty:1,time:8,cookMethod:'炒',category:'菌菇',tags:['快手','下饭','懒人'],tools:['炒锅'],mainIngredients:['杏鲍菇'],subIngredients:[],seasonings:[{name:'蚝油',required:true},{name:'生抽',required:true},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'切杏鲍菇',duration:2,emoji:'🔪',instruction:'杏鲍菇冲洗一下，手撕成条（食指粗）。不要用刀切——手撕口感更好。',judge:'杏鲍菇撕成均匀长条，每条约食指粗。',noviceNote:'手撕比刀切口感好！手撕顺着纤维走，炒出来有嚼劲'},
    {stepNum:2,title:'煎杏鲍菇',duration:4,emoji:'🍳',instruction:'锅烧热倒油，放入杏鲍菇条。中火煎到两面微焦出水，体积缩小一半左右。',judge:'杏鲍菇表面微焦金黄，变软了但还有嚼劲。',noviceNote:'杏鲍菇刚下锅是干的，煎一煎会自己出水——不要加水！让它自己出'},
    {stepNum:3,title:'加蚝油',duration:2,emoji:'🔄',instruction:'加入2勺蚝油、半勺生抽，大火翻炒均匀。酱汁裹在每根杏鲍菇上就出锅。',judge:'杏鲍菇均匀裹上蚝油色，亮晶晶的。汁收干了。',noviceNote:'蚝油本身有咸味——不要另外加盐了！觉得淡加生抽'},
  ],rescue:[
    {problem:'杏鲍菇炒出来水汪汪的',fix:'大火收汁收到干。下次不要加水，让它自己出水慢慢煎干'},
    {problem:'味道太淡不入味',fix:'杏鲍菇不容易入味，多加半勺蚝油再炒几下'},
  ],tips:'杏鲍菇口感像鲍鱼但价格是鲍鱼的1/100。贫穷料理之光。'},

  {id:'cong-bao-yang-rou-juan',name:'葱爆羊肉卷',emoji:'🥩',difficulty:2,time:8,cookMethod:'炒',category:'肉类',tags:['快手','下饭','解馋'],tools:['炒锅'],mainIngredients:['羊肉卷'],subIngredients:['大葱','姜'],seasonings:[{name:'生抽',required:true},{name:'孜然',required:false,alt:'不加就是葱爆原味，加就是新疆风味'},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'切葱',duration:1,emoji:'🔪',instruction:'大葱切斜段（指节长）。姜切片。',judge:'葱段大小均匀，斜切面大更出味。',noviceNote:'大葱切斜段比直切好——切面大，葱味更容易爆出来'},
    {stepNum:2,title:'爆炒羊肉',duration:5,emoji:'🍳',instruction:'锅烧到冒烟倒油，放入姜片爆香。放入羊肉卷大火快炒。变色就加葱段。',judge:'羊肉变色没有粉红色，边缘微焦。',noviceNote:'锅要烧到冒烟再倒油！羊肉卷温度不够会出水变煮羊肉'},
    {stepNum:3,title:'调味出锅',duration:2,emoji:'🔄',instruction:'加生抽、孜然（有就加）。大火翻炒几下立刻出锅。从羊肉下锅到出锅不超过3分钟。',judge:'羊肉嫩，葱还带一点脆。酱色均匀。',noviceNote:'调味后不要恋战——翻匀就出锅。多炒10秒肉就老了'},
  ],rescue:[
    {problem:'羊肉炒出一锅水',fix:'大火继续炒把水收干。下次锅烧到冒烟再下肉'},
    {problem:'羊肉太膻',fix:'加点醋和孜然能盖住膻味。下次买好点的羊肉卷'},
  ]},

  {id:'tang-cu-ou-pian',name:'糖醋藕片',emoji:'🥬',difficulty:2,time:12,cookMethod:'炒',category:'蔬菜',tags:['下饭','清淡'],tools:['煮锅','炒锅'],mainIngredients:['莲藕'],subIngredients:[],seasonings:[{name:'醋',required:true},{name:'糖',required:true},{name:'盐',required:true},{name:'生抽',required:true},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'切藕片',duration:3,emoji:'🔪',instruction:'莲藕去皮，切成薄片（筷子尖厚）。切好的藕片立刻泡进水里防氧化变黑。',judge:'藕片薄厚均匀，泡在水里没有变色。',noviceNote:'藕切完立刻泡水！暴露在空气中10秒就开始变黑。水里加几滴醋更好'},
    {stepNum:2,title:'焯水',duration:2,emoji:'🍲',instruction:'锅中水烧开，放入藕片焯水2分钟。捞出沥干。',judge:'藕片变微透明，但还是脆的。',noviceNote:'藕片焯水不要超过2分钟——脆口才是藕片的灵魂'},
    {stepNum:3,title:'糖醋调味',duration:5,emoji:'🔄',instruction:'锅烧热倒油，放入藕片大火翻炒几下。调糖醋汁：生抽1勺+醋2勺+糖2勺+少许水搅匀倒进锅里。大火翻炒到汁收干。',judge:'每片藕均匀裹上糖醋汁，亮晶晶的。酸甜适中。',noviceNote:'糖醋汁比例=1:2:2（生抽1:醋2:糖2）。先调好碗汁再倒'},
  ],rescue:[
    {problem:'藕片炒出来黑了',fix:'加几滴醋拌一下能改善颜色。下次切完立刻泡醋水'},
    {problem:'太酸或太甜',fix:'太酸加糖，太甜加醋。调到自己满意为止'},
  ]},

  {id:'he-lan-dou-chao-la-chang',name:'荷兰豆炒腊肠',emoji:'🫛',difficulty:2,time:10,cookMethod:'炒',category:'蔬菜',tags:['快手','下饭'],tools:['炒锅'],mainIngredients:['荷兰豆','腊肠'],subIngredients:['蒜'],seasonings:[{name:'盐',required:false,alt:'腊肠本身有咸味，一般不用加盐'},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'处理荷兰豆',duration:3,emoji:'🔪',instruction:'荷兰豆掐头去筋（掐掉两头，顺势拉掉两侧的老筋）。大的可以掰成两段。',judge:'两侧筋都去掉了，两头掐干净。',noviceNote:'不去筋咬不动！掰断一头顺势拉——整条筋就下来了。两面都要拉'},
    {stepNum:2,title:'切腊肠',duration:1,emoji:'🔪',instruction:'腊肠斜切片（筷子尖厚）。斜切比直切好看，切面大更容易出味。',judge:'腊肠片薄厚均匀，斜切面椭圆。',noviceNote:'腊肠不用煮不用泡——直接切片炒。广式腊肠偏甜，川式腊肠偏辣'},
    {stepNum:3,title:'炒',duration:4,emoji:'🍳',instruction:'锅烧热倒油，先放腊肠片中小火炒到出油（约1分钟）。放入蒜末爆香。转大火放入荷兰豆炒2分钟，炒到颜色变鲜绿。',judge:'荷兰豆翠绿还脆，腊肠出油卷起。颜色搭配好看。',noviceNote:'荷兰豆不能生吃！但炒太久会变黄。颜色变鲜绿就是熟了，立刻出锅'},
  ],rescue:[
    {problem:'荷兰豆炒黄了不脆',fix:'下次大火快炒不要超过2分钟。这次加点水焖一下将就吃'},
    {problem:'腊肠太咸',fix:'少放腊肠多放荷兰豆。这道菜荷兰豆是主角'},
  ]},

  {id:'jia-chang-dou-fu',name:'家常豆腐',emoji:'🥬',difficulty:2,time:15,cookMethod:'炒',category:'豆制品',tags:['下饭','家常'],tools:['炒锅'],mainIngredients:['老豆腐'],subIngredients:['青椒','木耳'],seasonings:[{name:'生抽',required:true},{name:'蚝油',required:false,alt:'不放也行'},{name:'盐',required:true},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'切豆腐',duration:2,emoji:'🔪',instruction:'老豆腐切厚片（一指厚，麻将牌大小）。用厨房纸吸干表面水分。',judge:'豆腐片大小均匀，表面干爽。',noviceNote:'一定要用老豆腐（北豆腐）！嫩豆腐一下锅就碎。吸干水分防粘锅'},
    {stepNum:2,title:'煎豆腐',duration:6,emoji:'🍳',instruction:'锅烧热倒油，放入豆腐片中小火煎。一面煎到金黄（约3分钟）再翻面。两面金黄盛出。',judge:'两面金黄焦脆，豆腐没有碎。',noviceNote:'不要频繁翻面！一面煎到金黄定型了再翻。翻太勤豆腐碎成渣'},
    {stepNum:3,title:'红烧',duration:5,emoji:'🍲',instruction:'锅中留底油，放入青椒块和木耳翻炒几下。倒入煎好的豆腐。加生抽、蚝油、半碗水。中小火煮3分钟让豆腐入味。大火收汁。',judge:'豆腐吸饱了汤汁，表面还是焦的里面入味了。',noviceNote:'煮3分钟让豆腐吸汁！不是10秒翻炒就出锅。但也别煮太久豆腐会散'},
  ],rescue:[
    {problem:'豆腐煎碎了',fix:'碎豆腐也能吃——变成豆腐炒蛋。下次一定要用老豆腐+一面煎定型再翻'},
    {problem:'豆腐不入味里面是白的',fix:'煮的时间不够。下次多加点汤汁煮5分钟'},
  ]},

  {id:'tu-dou-si',name:'土豆丝',emoji:'🥔',difficulty:2,time:10,cookMethod:'炒',category:'主食',tags:['快手','下饭'],tools:['炒锅'],mainIngredients:['土豆'],subIngredients:['青椒','干辣椒'],seasonings:[{name:'盐',required:true},{name:'醋',required:true},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'切丝泡水',duration:4,emoji:'🔪',instruction:'土豆去皮切细丝（火柴棍粗）。立刻泡进冷水里，换水2-3次直到水变清。',judge:'土豆丝粗细一致，泡的水清澈没有白色淀粉。',noviceNote:'切好一定要泡水去淀粉！不去淀粉炒出来糊成一团不脆。水清才算泡好了'},
    {stepNum:2,title:'焯水',duration:1,emoji:'🍲',instruction:'锅中水烧开，放入土豆丝焯水30秒。捞出沥干（不要过凉水）。',judge:'土豆丝变微透明但还是很脆，没有变软。',noviceNote:'30秒！不是3分钟。焯水只是去一下生味，炒的时候还会加热'},
    {stepNum:3,title:'爆炒',duration:3,emoji:'🍳',instruction:'锅烧热倒油，放入干辣椒和青椒丝爆香。放入土豆丝大火快炒。加盐和醋，翻炒均匀立刻出锅。',judge:'土豆丝脆爽不粘锅，醋香扑鼻。每根都裹上味道。',noviceNote:'全程大火！土豆丝下锅到出锅不超过2分钟。炒久了就不脆了'},
  ],rescue:[
    {problem:'土豆丝不脆软趴趴',fix:'下次切好一定要泡水去淀粉+焯水30秒+大火快炒。这次加点醋拌一下当土豆泥吃'},
    {problem:'粘锅糊底了',fix:'锅不够热。下次锅烧到冒烟再倒油'},
  ],tips:'用刨丝器刨土豆丝最省力——但注意别刨到手。'},

  // ════════ 五、红烧/炖 ════════
  {id:'hong-shao-ji-tui',name:'红烧鸡腿',emoji:'🍗',difficulty:2,time:30,cookMethod:'红烧/炖',category:'肉类',tags:['下饭','解馋'],tools:['炒锅','锅盖'],mainIngredients:['鸡腿'],subIngredients:['姜','葱'],seasonings:[{name:'生抽',required:true},{name:'老抽',required:false,alt:'没有颜色浅一点但味道一样'},{name:'料酒',required:false,alt:'用姜去腥'},{name:'冰糖',required:false,alt:'用白糖代替也行'},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'鸡腿划刀焯水',duration:6,emoji:'🔪',instruction:'鸡腿两面各划两刀。冷水下锅加姜片，大火烧开煮2分钟去血水。捞出冲洗干净。',judge:'鸡腿表面干净没有血沫。划刀的刀口明显。',noviceNote:'一定要焯水！不焯水的鸡腿红烧出来腥味重。冷水下锅不是热水'},
    {stepNum:2,title:'煎鸡腿',duration:5,emoji:'🍳',instruction:'锅烧热倒油，放入鸡腿中火煎到两面金黄（每面2分钟）。',judge:'两面金黄微焦，鸡皮有点脆。',noviceNote:'鸡腿下锅前用廚房纸擦干——带水下锅会爆油溅得到处都是'},
    {stepNum:3,title:'红烧炖煮',duration:18,emoji:'🍲',instruction:'加生抽2勺、老抽半勺、冰糖几颗（或白糖1勺）、姜片。倒入开水没过鸡腿大半。大火烧开转中小火盖盖子炖15分钟。开盖转大火收汁。',judge:'鸡腿颜色红亮，筷子轻松戳透。汤汁浓稠裹在鸡腿上。',noviceNote:'加热水不是冷水！加冷水肉会收缩变柴。不常做饭就提前烧壶开水'},
  ],rescue:[
    {problem:'鸡腿颜色太浅不好看',fix:'下次多加半勺老抽上色。这次可以淋一点红烧汁假装颜色深'},
    {problem:'汤汁不浓稠挂不住',fix:'开盖大火收汁。或者用一小勺淀粉+水搅匀勾芡'},
  ],tips:'红烧菜的灵魂是收汁那一下——不要着急，看到大泡泡变密集了再关火。'},

  {id:'tu-dou-dun-niu-rou',name:'土豆炖牛肉',emoji:'🥩',difficulty:2,time:50,cookMethod:'红烧/炖',category:'肉类',tags:['下饭','解馋'],tools:['炒锅','锅盖'],mainIngredients:['牛肉','土豆'],subIngredients:['姜','葱'],seasonings:[{name:'生抽',required:true},{name:'老抽',required:false,alt:'没有颜色浅一点'},{name:'料酒',required:false,alt:'用姜去腥'},{name:'八角',required:false,alt:'不放就是纯牛肉味'},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'切牛肉焯水',duration:8,emoji:'🔪',instruction:'牛肉切块（麻将牌大）。冷水下锅加姜片，大火烧开煮3分钟去血水。捞出冲洗。',judge:'牛肉块大小均匀，焯水后表面干净。',noviceNote:'牛肉一定要冷水下锅焯水！热水下锅血水锁在里面出不来'},
    {stepNum:2,title:'炒牛肉',duration:5,emoji:'🍳',instruction:'锅烧热倒油，放入牛肉块中火炒到表面微焦。加生抽、老抽、八角（有就放）翻炒上色。',judge:'牛肉表面微焦，均匀裹上酱色。',noviceNote:'炒牛肉时火不要太小——中火才能炒出焦香'},
    {stepNum:3,title:'炖牛肉',duration:30,emoji:'🍲',instruction:'加入开水没过牛肉。大火烧开转中小火，盖盖子炖30分钟。',judge:'牛肉用筷子戳能戳进去，但还有一点阻力。',noviceNote:'水一次加够！中途加水加热水。冷水会让牛肉变硬'},
    {stepNum:4,title:'加土豆',duration:10,emoji:'🥔',instruction:'土豆去皮切块（麻将牌大）。放入锅中，继续炖10分钟。开盖大火收汁。',judge:'土豆软糯筷子轻松戳穿，牛肉软烂。汤汁浓稠。',noviceNote:'土豆不要切太小——炖10分钟会化掉。麻将牌大小刚好'},
  ],rescue:[
    {problem:'牛肉炖了两个小时还是硬',fix:'买的牛肉部位不对。牛腩或牛腱子最适合炖。下次买对部位'},
    {problem:'土豆炖化了一锅糊',fix:'不影响味道。下次牛肉炖到筷子能戳了再加土豆'},
  ],tips:'牛肉炖越久越入味。时间允许的话炖1小时以上更好吃。'},

  {id:'lu-dan',name:'卤蛋',emoji:'🥚',difficulty:1,time:30,cookMethod:'红烧/炖',category:'禽蛋',tags:['备餐','解馋','懒人'],tools:['煮锅'],mainIngredients:['鸡蛋'],subIngredients:[],seasonings:[{name:'生抽',required:true},{name:'老抽',required:false,alt:'没有颜色浅一点'},{name:'八角',required:false,alt:'不放也行'},{name:'茶叶',required:false,alt:'不放就是卤蛋，放了就是茶叶蛋'}],steps:[
    {stepNum:1,title:'煮鸡蛋',duration:10,emoji:'🥚',instruction:'鸡蛋冷水下锅，水开后煮8分钟。捞出过冷水，剥壳。',judge:'蛋壳完整没有煮裂。剥壳后蛋白光滑。',noviceNote:'冷水下锅！热水下锅蛋壳会裂。煮完立刻过冷水才好剥壳'},
    {stepNum:2,title:'划花刀',duration:1,emoji:'🔪',instruction:'剥好的鸡蛋表面划几刀（浅浅的，只划到蛋白），方便入味。',judge:'蛋白表面有刀痕但不深，蛋黄没有露出来。',noviceNote:'划太深蛋黄露出来→卤的时候蛋黄跑出来蛋白只剩一半'},
    {stepNum:3,title:'卤煮',duration:15,emoji:'🍲',instruction:'锅中加开水，加生抽3勺、老抽1勺、八角1个、茶叶（有就加）。放入鸡蛋小火煮15分钟。关火泡着。',judge:'鸡蛋变成酱色，蛋白上色均匀。切开里面蛋黄还是黄的。',noviceNote:'卤好了别急着吃！泡在卤水里过夜更好吃——味道才进去'},
  ],rescue:[
    {problem:'鸡蛋剥壳撕得坑坑洼洼',fix:'不影响味道！下次煮好立刻过冰水泡5分钟再剥'},
    {problem:'卤蛋不入味蛋白还是白的',fix:'划的刀不够深或者泡的时间不够。卤好泡过夜最入味'},
  ],tips:'卤水别倒！可以反复用——下次再煮几个蛋放进去。越卤越香。'},

  {id:'ke-le-ji-chi',name:'可乐鸡翅',emoji:'🍗',difficulty:1,time:25,cookMethod:'红烧/炖',category:'肉类',tags:['下饭','解馋'],tools:['炒锅','锅盖'],mainIngredients:['鸡翅'],subIngredients:['姜'],seasonings:[{name:'可乐',required:true},{name:'生抽',required:true},{name:'老抽',required:false,alt:'颜色浅一点但味道一样'},{name:'料酒',required:false,alt:'用姜片代替去腥'},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'鸡翅划刀',duration:3,emoji:'🔪',instruction:'鸡翅两面各划两刀，刀口到骨头。',judge:'每根鸡翅正反两面都有两刀，能看到骨头。',noviceNote:'划太浅没效果——刀口要到骨头'},
    {stepNum:2,title:'煎鸡翅',duration:5,emoji:'🍳',instruction:'锅烧热倒油，中小火放入鸡翅煎到两面金黄，每面约2分钟。',judge:'两面金黄微焦，不是惨白也不是全黑。',noviceNote:'大火煎外面糊了里面还是生的——中小火慢煎'},
    {stepNum:3,title:'炖煮',duration:15,emoji:'🍲',instruction:'倒入可乐没过鸡翅大半。加生抽2勺、老抽半勺、姜片。大火烧开转中小火盖盖子炖15分钟。',judge:'汤汁变浓稠，鸡翅颜色红亮。筷子轻松戳透。',noviceNote:'可乐别倒一整瓶——没过鸡翅大半就够了'},
    {stepNum:4,title:'收汁',duration:3,emoji:'🔥',instruction:'开盖转大火收汁，翻动防止粘锅。收到汤汁浓稠裹在鸡翅上。',judge:'汤汁像糖浆一样挂在勺子上。冒大泡泡就要关火。',noviceNote:'收到干了糊锅——留一点汤汁拌饭超香'},
  ],rescue:[
    {problem:'鸡翅煎糊了',fix:'把黑的部分刮掉继续炖。下次用中小火'},
    {problem:'太甜了吃不惯',fix:'加半勺生抽或一点醋平衡。下次可乐少倒1/3'},
  ],tips:'剩下的汤汁别倒！拌米饭或者煮面条绝了。'},

  {id:'luo-bo-dun-pai-gu',name:'萝卜炖排骨',emoji:'🍖',difficulty:2,time:50,cookMethod:'红烧/炖',category:'肉类',tags:['下饭','家常'],tools:['炒锅','锅盖'],mainIngredients:['排骨','白萝卜'],subIngredients:['姜','葱'],seasonings:[{name:'盐',required:true},{name:'料酒',required:false,alt:'不放也行，姜去腥'},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'排骨焯水',duration:6,emoji:'🔪',instruction:'排骨冷水下锅加姜片，大火烧开煮2分钟去血水。捞出冲洗干净浮沫。',judge:'排骨表面干净没有血沫漂浮。',noviceNote:'排骨一定要冷水下锅焯水！热水下锅血水锁在里面出不来，汤会腥'},
    {stepNum:2,title:'炖排骨',duration:30,emoji:'🍲',instruction:'排骨放入锅中，加开水没过排骨。加姜片葱段。大火烧开转中小火盖盖子炖30分钟。',judge:'排骨用筷子戳肉能戳进去。汤色变白。',noviceNote:'水一次加足！中途加水加热水。冷水加进去汤就不鲜了'},
    {stepNum:3,title:'加萝卜',duration:14,emoji:'🥬',instruction:'白萝卜去皮切滚刀块（麻将牌大）。放入锅中，加盐。继续炖10-15分钟到萝卜变透明。',judge:'萝卜变半透明，筷子轻松戳透。汤味鲜甜。',noviceNote:'萝卜切太大煮不烂，切太小煮化了。麻将牌大小最合适'},
    {stepNum:4,title:'出锅',duration:1,emoji:'🍴',instruction:'尝一下咸淡，不够加盐。撒葱花。',judge:'排骨软烂脱骨，萝卜甜、汤鲜。',noviceNote:'出锅前再尝一次咸淡！萝卜加进去后会稀释咸味'},
  ],rescue:[
    {problem:'汤有腥味',fix:'下次排骨多泡半小时去血水。已经腥了加姜片再煮10分钟'},
    {problem:'萝卜有筋嚼不动',fix:'萝卜品种问题。下次买白萝卜时选重手的（水分足）'},
  ],tips:'这道菜冬天吃最舒服。一次多做点，第二天热一下更好吃（萝卜更入味）。'},

  // ════════ 六、空气炸锅 ════════
  {id:'kong-qi-zha-guo-ji-xiong',name:'空气炸锅鸡胸肉块',emoji:'🍗',difficulty:1,time:25,cookMethod:'空气炸锅',category:'肉类',tags:['快手','备餐','懒人'],tools:['空气炸锅'],mainIngredients:['鸡胸肉'],subIngredients:[],seasonings:[{name:'盐',required:true},{name:'黑胡椒',required:false,alt:'不放也行'},{name:'生抽',required:true},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'切块腌制',duration:15,emoji:'🔪',instruction:'鸡胸肉切块（麻将牌大）。加生抽1勺、盐、黑胡椒抓匀，腌15分钟。',judge:'鸡块大小均匀，酱色裹匀。',noviceNote:'切大块一点！太小块炸出来干硬。麻将牌大小最合适'},
    {stepNum:2,title:'入炸锅',duration:12,emoji:'🔥',instruction:'腌好的鸡块淋一点点油抓匀。放入空气炸锅，180度12分钟。中间拉出来翻一次面（6分钟时翻）。',judge:'表面金黄，筷子夹开完全变白没有粉色。',noviceNote:'不要堆叠！铺成一层。堆叠的地方熟不透。一次放不下就分两锅'},
    {stepNum:3,title:'开吃',duration:1,emoji:'🍴',instruction:'拿出来稍晾一下。可以直接吃或者蘸番茄酱。',judge:'外焦里嫩，咬开有汁水不柴。',noviceNote:'刚出锅巨烫！晾2分钟再吃。趁热吃最香'},
  ],rescue:[
    {problem:'鸡胸肉炸出来很柴',fix:'下次腌的时候加半勺淀粉锁水。已经柴了撕成丝拌沙拉吃'},
    {problem:'外面焦了里面还是生的',fix:'切的太大了！下次切小一点或者温度降到160度多炸3分钟'},
  ],tips:'鸡胸肉腌过夜更入味。早上腌好放冰箱，晚上回来直接炸。'},

  {id:'kong-qi-zha-guo-shu-jiao',name:'空气炸锅薯角',emoji:'🥔',difficulty:1,time:25,cookMethod:'空气炸锅',category:'主食',tags:['快手','解馋','懒人'],tools:['空气炸锅'],mainIngredients:['土豆'],subIngredients:[],seasonings:[{name:'盐',required:true},{name:'食用油',required:true},{name:'黑胡椒粉',required:false,alt:'不放也行'},{name:'辣椒粉',required:false,alt:'不放就是原味'}],steps:[
    {stepNum:1,title:'切薯角',duration:5,emoji:'🔪',instruction:'土豆带皮洗净，切成角形（先对半切，再每半切3-4个角）。每角约2指宽。',judge:'薯角大小均匀，带皮的那面完整。',noviceNote:'带皮切更好吃！皮烤了焦香。切太大不容易熟，太小会烤成薯条'},
    {stepNum:2,title:'拌调料',duration:3,emoji:'🥣',instruction:'薯角放大碗里，加2勺油、盐、黑胡椒、辣椒粉（有就加）。用手抓匀让每块都裹上油和调料。',judge:'每块薯角油亮亮的，调料均匀。',noviceNote:'油不能太少——没油的薯角烤出来像石头。2勺油是起码的'},
    {stepNum:3,title:'炸',duration:18,emoji:'🔥',instruction:'空气炸锅200度预热3分钟。放入薯角，200度炸15分钟。拉出来翻一下，再炸3-5分钟到表面金黄焦脆。',judge:'表面金黄焦脆，用筷子戳中间是软的。',noviceNote:'每个炸锅温度不一样！第一次做看着点——金黄了就停'},
  ],rescue:[
    {problem:'薯角外面糊了里面没熟',fix:'下次切小一点或者温度降到180度炸20分钟'},
    {problem:'薯角不脆软塌塌的',fix:'下次拌油的时候多放点油。大火锅炸到金黄才够脆'},
  ],tips:'蘸番茄酱或者沙拉酱吃。有芝士粉撒一点更高级。'},

  {id:'kong-qi-zha-guo-ji-chi',name:'空气炸锅鸡翅',emoji:'🍗',difficulty:1,time:25,cookMethod:'空气炸锅',category:'肉类',tags:['快手','解馋','懒人'],tools:['空气炸锅'],mainIngredients:['鸡翅'],subIngredients:[],seasonings:[{name:'生抽',required:true},{name:'蚝油',required:false,alt:'不放也行'},{name:'料酒',required:false,alt:'不放也行'},{name:'孜然',required:false,alt:'不放是原味'},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'腌鸡翅',duration:15,emoji:'🥣',instruction:'鸡翅两面各划两刀。加生抽2勺、蚝油1勺、料酒抓匀，腌15分钟。',judge:'鸡翅均匀裹上酱色，刀口明显。',noviceNote:'腌的时间不要少于15分钟——不入味炸出来只有肉味没有咸味'},
    {stepNum:2,title:'入炸锅',duration:20,emoji:'🔥',instruction:'腌好的鸡翅排入空气炸锅（不重叠）。200度炸15分钟。拉出来翻面，刷一层油撒孜然，再炸5分钟。',judge:'鸡翅表面金黄焦脆，用筷子戳肉轻松穿透。',noviceNote:'鸡翅之间留空隙！挨太近受热不均。中间翻面那步不能省'},
    {stepNum:3,title:'开吃',duration:1,emoji:'🍴',instruction:'拿出来稍晾一下。',judge:'外皮焦脆，里面肉嫩多汁。咬开有汁水。',noviceNote:'刚出锅很烫！晾2分钟再啃。小心骨头也烫'},
  ],rescue:[
    {problem:'鸡翅烤出来太干',fix:'下次腌的时候多加半勺蚝油锁水。这次可以蘸番茄酱吃'},
    {problem:'鸡翅没味道只有皮咸',fix:'腌的时间不够！下次至少腌15分钟或者腌过夜'},
  ],tips:'空气炸锅版比油炸版少用80%的油——健康很多但一样好吃。'},

  // ════════ 七、一锅出/懒人 ════════
  {id:'dian-fan-bao-la-chang-men-fan',name:'电饭煲腊肠焖饭',emoji:'🍚',difficulty:1,time:40,cookMethod:'电饭煲',category:'主食',tags:['懒人','一锅出','备餐'],tools:['电饭煲'],mainIngredients:['腊肠','大米'],subIngredients:['胡萝卜','玉米粒'],seasonings:[{name:'生抽',required:true},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'准备食材',duration:5,emoji:'🔪',instruction:'腊肠切片。胡萝卜切丁。米淘洗干净。',judge:'腊肠片均匀，胡萝卜丁大小一致。',noviceNote:'腊肠不要切太薄——太薄焖完找不到了。筷子尖厚最好'},
    {stepNum:2,title:'放电饭煲',duration:2,emoji:'🍚',instruction:'米放进电饭煲，加正常煮饭的水量。铺上腊肠、胡萝卜丁、玉米粒。加1勺生抽、半勺油。按下煮饭键。',judge:'食材均匀铺在米上，水没过了食材。',noviceNote:'水量=正常煮饭的水！不要多加——腊肠和蔬菜也会出水。水多了变成粥'},
    {stepNum:3,title:'焖好拌匀',duration:1,emoji:'🔄',instruction:'电饭煲跳闸后，开盖把饭菜拌匀。盖盖子再焖3分钟。',judge:'米饭粒粒分明，腊肠油渗进饭里。颜色金黄均匀。',noviceNote:'跳闸后别开盖马上吃——焖3分钟让味道融合。这一步很关键'},
  ],rescue:[
    {problem:'饭太湿了像粥',fix:'开盖不盖再按一次煮饭键蒸发水分。下次少加水'},
    {problem:'腊肠太咸了整个饭都咸',fix:'多加点米饭进去拌匀。下次少放腊肠或先煮一下去咸味'},
  ],tips:'可以加任何冰箱里的剩菜——香菇、土豆、青豆。一锅搞定一顿饭。'},

  {id:'fan-qie-ji-dan-mian',name:'番茄鸡蛋面',emoji:'🍜',difficulty:1,time:12,cookMethod:'煮+加工',category:'主食',tags:['快手','懒人','一锅出'],tools:['炒锅'],mainIngredients:['番茄','鸡蛋','挂面'],subIngredients:['葱'],seasonings:[{name:'盐',required:true},{name:'生抽',required:false,alt:'不放也行'},{name:'食用油',required:true}],steps:[
    {stepNum:1,title:'炒番茄',duration:4,emoji:'🍳',instruction:'番茄切块。锅烧热倒油，放入番茄中火炒到出汁，用铲子压一压。',judge:'番茄出汁变软，锅底有红色汤汁。',noviceNote:'和番茄炒蛋一样——中火出汁。火太小不出汁'},
    {stepNum:2,title:'煮面',duration:5,emoji:'🍲',instruction:'番茄炒好后加2碗水烧开。放入挂面，煮3-4分钟到面变软。',judge:'面条煮到没有白硬芯，筷子能夹断。',noviceNote:'面不要煮太久——软了不好吃。包装上写几分钟就几分钟'},
    {stepNum:3,title:'淋蛋花',duration:1,emoji:'🥚',instruction:'鸡蛋打散。面条煮好后转圈淋入蛋液，等10秒再搅动。蛋花凝固后加盐调味，撒葱花出锅。',judge:'蛋花成片不是碎末，面条软硬适中。汤色红亮。',noviceNote:'蛋液淋进去别马上搅！等10秒再轻轻推——不然变蛋花汤沫'},
  ],rescue:[
    {problem:'面条煮成一坨糊',fix:'下次水多放一点，面不要太多。这次加点热水搅散将就吃'},
    {problem:'汤不够酸不开胃',fix:'加半勺醋补救。下次选熟透的番茄'},
  ],tips:'这是最便宜的一人食。成本不到3块钱，比泡面健康一百倍。'},

  {id:'pao-cai-dou-fu-guo',name:'泡菜豆腐锅',emoji:'🥘',difficulty:1,time:15,cookMethod:'煮+加工',category:'豆制品',tags:['快手','下饭','一锅出'],tools:['煮锅'],mainIngredients:['泡菜','嫩豆腐'],subIngredients:['五花肉片'],seasonings:[{name:'生抽',required:true},{name:'辣椒酱',required:false,alt:'不放也行，泡菜本身有辣味'}],steps:[
    {stepNum:1,title:'炒泡菜',duration:3,emoji:'🍳',instruction:'锅烧热倒一点点油，放入五花肉片（有就放）炒到变色。放入泡菜翻炒几下炒出香味。',judge:'泡菜炒出香味，油微微变红。',noviceNote:'泡菜炒一下再煮比直接煮好吃十倍！这一步不要省'},
    {stepNum:2,title:'煮汤',duration:8,emoji:'🍲',instruction:'加2碗水烧开。加1勺生抽、半勺辣椒酱（有就加）。中火煮5分钟让泡菜味煮进汤里。',judge:'汤变红，泡菜味飘出来。',noviceNote:'泡菜本身有咸味——先尝尝汤再决定要不要加盐'},
    {stepNum:3,title:'加豆腐',duration:4,emoji:'🥬',instruction:'嫩豆腐轻轻切块放入锅中。不要搅动！煮3-4分钟热透。出锅。',judge:'豆腐热透了，汤味也进去了。豆腐块完整没碎。',noviceNote:'豆腐下锅别搅！用锅铲背轻轻推几下就好。搅动了豆腐全碎'},
  ],rescue:[
    {problem:'汤太咸了',fix:'加点水稀释。下次少放泡菜或者泡菜先洗一下再炒'},
    {problem:'豆腐全碎了',fix:'变成泡菜豆腐汤——味道不影响。下次用锅铲背推不要搅'},
  ],tips:'泡菜推荐宗家府或者清净园。便宜的泡菜味道差很多。'},

  {id:'ma-la-tang',name:'麻辣烫',emoji:'🥘',difficulty:1,time:15,cookMethod:'煮+加工',category:'蔬菜',tags:['快手','解馋','一锅出'],tools:['煮锅'],mainIngredients:[],subIngredients:['任意食材'],seasonings:[{name:'火锅底料',required:true},{name:'生抽',required:true},{name:'芝麻酱',required:false,alt:'没有就少点麻酱味，麻辣味够了好吃'}],steps:[
    {stepNum:1,title:'炒底料',duration:3,emoji:'🍳',instruction:'锅中加少许油，放入一小块火锅底料（拇指大），小火炒化炒出红油。',judge:'火锅底料完全化开，油变红色，香味呛鼻。',noviceNote:'小火炒底料！大火炒会糊发苦。闻到呛鼻的香味就是好了'},
    {stepNum:2,title:'煮汤',duration:2,emoji:'🍲',instruction:'加3碗水烧开。加1勺生抽。汤底就做好了。',judge:'汤色红亮，麻辣味飘出来。',noviceNote:'火锅底料有盐味——先尝尝再决定加不加盐'},
    {stepNum:3,title:'按顺序涮菜',duration:8,emoji:'🥬',instruction:'按耐煮程度放入食材——先放根茎类（土豆、萝卜）煮3分钟，再放菌菇、豆制品煮2分钟，最后放叶菜和肉片煮1分钟。全部熟了一起出锅。',judge:'所有食材都熟了——根茎软了、肉变色了、叶子变深绿了。',noviceNote:'不要把全部食材一锅倒！按顺序放——根茎先放耐煮，叶菜后放不然烂了'},
  ],rescue:[
    {problem:'太辣了吃不下',fix:'加牛奶或豆浆能中和辣味。下次火锅底料少放一半'},
    {problem:'味道太淡不够味',fix:'加盐或者再加一小块火锅底料。或者调个蘸碟：生抽+醋+蒜末'},
  ],tips:'火锅底料推荐：海底捞清油或者好人家。半块够两个人吃。冰箱里剩菜都能煮。'},
];
