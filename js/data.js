var data = [
        {id:'1',type:'book',name:'普通剑法',lvl:1,damage:10,describe:'普普通通的一本剑法，随处可见',money:1,weight:1},
        {id:'2',type:'book',name:'普通枪法',lvl:1,damage:10,describe:'普普通通的一本枪法，随处可见',money:1,weight:1},
        {id:'3',type:'book',name:'普通刀法',lvl:1,damage:10,describe:'普普通通的一本刀法，随处可见',money:1,weight:1},
        {id:'4',type:'book',name:'普通棍法',lvl:1,damage:10,describe:'普普通通的一本棍法，随处可见',money:1,weight:1},
        {id:'5',type:'book',name:'普通拳法',lvl:1,damage:10,describe:'普普通通的一本拳法，随处可见',money:1,weight:1},
        {id:'6',type:'book',name:'普通斧法',lvl:1,damage:10,describe:'普普通通的一本斧法，随处可见',money:1,weight:1},
        {id:'7',type:'book',name:'三才剑法',lvl:2,damage:20,describe:'三才者取义天、地、人也，以示其传人仁义并重，剑法奥妙，变化无穷。多为儒生必学剑技。',money:10,weight:1},
        {id:'8',type:'book',name:'青莲剑法',lvl:3,damage:30,describe:'青莲剑法由唐朝青莲居士李太白所创，剑招变幻莫测，往往令敌人防不胜防。',money:20,weight:1},
        {id:'9',type:'book',name:'万花剑法',lvl:4,damage:40,describe:'万花剑法是恒山派武学，该剑法施展时剑花有如缤纷花瓣煞是好看，但是美丽之下也隐藏着致命的杀机。',money:30,weight:1},
        {id:'10',type:'book',name:'五狱剑法',lvl:5,damage:50,describe:'五狱剑法是从五岳剑派中糅合而领悟出来的剑法，集合了五岳剑派各家之长，是非常高深的剑法。',money:40,weight:1},
        {id:'11',type:'book',name:'真玄剑法',lvl:6,damage:60,describe:'此剑法将泰山地势融入剑法之中，泰山【十八盘】越盘越高，越行越险，这路剑法也是越转越加很辣。',money:50,weight:1},
        {id:'12',type:'book',name:'太极十三剑法',lvl:7,damage:70,describe:'传统十三剑法 太极拳理根于《周易》的五行、八卦，合五行、八卦之数，传统太极拳、剑都讲究十三法。',money:60,weight:1},
        {id:'13',type:'book',name:'武当剑法',lvl:8,damage:80,describe:'全凭乎神。神足而道成。练精化气。练气化神。神练成道。剑神合一。是近道矣。',money:70,weight:1},
        {id:'14',type:'book',name:'独孤九剑',lvl:9,damage:99,describe:'独孤九剑，独孤求败所创，破尽天下武学',money:80,weight:1},
        {id:'15',type:'book',name:'哀伤魔枪',lvl:2,damage:20,describe:'哀伤魔枪，来源于热血江湖，属于正派武功。威力一般',money:10,weight:1},
        {id:'16',type:'book',name:'开山斧',lvl:2,damage:20,describe:'威力较强的一招技能，传说一斧可以开山劈石',money:10,weight:1},
        {id:'17',type:'book',name:'霸王斧',lvl:3,damage:30,describe:'霸道无比的一招技能，其霸气无人可以匹敌',money:10,weight:1},
        
        {id:'18',type:'consumables',name:'止血剂',lvl:1,describe:'很普通的药剂。作用还是较小的。据说使用后可以恢复50点血量',money:1,weight:1,hp:50},
        {id:'19',type:'consumables',name:'金创药',lvl:1,describe:'很一般的药剂。作用还是挺大的。据说使用后可以恢复150点血量',money:10,weight:1,hp:150},
        {id:'20',type:'consumables',name:'大还丹',lvl:1,describe:'很上等的药剂。作用还是很大的。据说使用后可以恢复250点血量',money:20,weight:1,hp:250},
        {id:'21',type:'consumables',name:'仙灵葫芦',lvl:1,describe:'很特等的药剂。作用还是超大的。据说使用后可以恢复350点血量',money:30,weight:1,hp:350},
        {id:'22',type:'consumables',name:'天元聚魂丹',lvl:1,describe:'古代皇陵中深藏的珍稀丹药，虽不能起死回生，但也能肉白骨，能恢复1000点血量',money:40,weight:1,hp:1000},
        {id:'23',type:'consumables',name:'清凉露',lvl:1,describe:'很普通的药剂。但作用还是较小的。据说使用后可以恢复50点内力',money:1,weight:1,mp:50},
        {id:'24',type:'consumables',name:'清心露',lvl:1,describe:'很一般的药剂。但作用还是挺大的。据说使用后可以恢复150点内力',money:10,weight:1,mp:150},
        {id:'25',type:'consumables',name:'清心散',lvl:1,describe:'很上等的药剂。但作用还是很大的。据说使用后可以恢复250点内力',money:20,weight:1,mp:250},
        {id:'26',type:'consumables',name:'清心散',lvl:1,describe:'很上等的药剂。但作用还是很大的。据说使用后可以恢复250点内力',money:30,weight:1,mp:350},
        {id:'27',type:'consumables',name:'九转还魂丹',lvl:1,describe:'仙族流传的名药，有起死回生之功效，能恢复1000点内力',money:40,weight:1,hp:1000},
        {id:'28',type:'consumables',name:'经验石[小]',lvl:1,describe:'能增加少量的经验值',money:1,weight:1,exp:100},
        {id:'29',type:'consumables',name:'经验石[中]',lvl:1,describe:'能增加一些的经验值',money:1,weight:1,exp:500},
        {id:'30',type:'consumables',name:'经验石[大]',lvl:1,describe:'能增加大量的经验值',money:1,weight:1,exp:1000},
        {id:'31',type:'consumables',name:'经验石[特]',lvl:1,describe:'能增加超级多的经验值',money:1,weight:1,exp:5000},
        {id:'32',type:'consumables',name:'传送符',lvl:1,describe:'有了这个才能随意在各个地方穿梭。',money:1,weight:1},      
]
var enemy = [
        {id:'1',type:'animal',name:'甲虫',lvl:1,describe:'一只小小的甲虫，好像随手都可以打死。',money:10,exp:10,goods:{n10:1,n32:1},energy:100,max_energy:100,power:50,damage:2},
]