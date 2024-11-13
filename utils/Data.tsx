import images from "@/constants/images";

import { colors } from "./colors";
import { Text, View } from "react-native";
import { verticalScale } from "./Mertics";
import { isiPad } from "./CommonFun";
import { LineDataItem } from "@/types";

export const MonthlyGraphdata: LineDataItem[] = [
  { value: 300, label: "1", frontColor: "#FFC22F" },
  { value: 1000, label: "2", frontColor: "#FFC22F" },
  { value: 500, label: "3", frontColor: "#FFC22F" },
  { value: 1050, label: "", frontColor: "#FFC22F" },
  { value: 1200, label: "", frontColor: "#FFC22F" },
  { value: 500, label: "", frontColor: "#FFC22F" },
  { value: 700, label: "", frontColor: "#FFC22F" },
  { value: 900, label: "15", frontColor: "#FFC22F" },
  { value: 1000, label: "", frontColor: "#FFC22F" },
  { value: 450, label: "", frontColor: "#FFC22F" },
  { value: 1000, label: "", frontColor: "#FFC22F" },
  { value: 300, label: "", frontColor: "#FFC22F" },

  // { value: 650, label: '4' },
  { value: 1200, label: "", frontColor: "#FFC22F" },
];

export const DailyGraphdata: LineDataItem[] = [
  { value: 300, label: "0", frontColor: "#FFC22F" },
  { value: 1000, label: "", frontColor: "#FFC22F" },
  { value: 500, label: "", frontColor: "#FFC22F" },
  { value: 1050, label: "", frontColor: "#FFC22F" },
  { value: 1200, label: "", frontColor: "#FFC22F" },
  { value: 500, label: "", frontColor: "#FFC22F" },
  { value: 700, label: "", frontColor: "#FFC22F" },
  { value: 900, label: "15", frontColor: "#FFC22F" },
  { value: 1000, label: "", frontColor: "#FFC22F" },
  { value: 450, label: "", frontColor: "#FFC22F" },
  { value: 1000, label: "", frontColor: "#FFC22F" },
  { value: 300, label: "", frontColor: "#FFC22F" },

  // { value: 650, label: '4' },
  { value: 1200, label: "", frontColor: "#FFC22F" },
];

export const AllTimeGraphData: LineDataItem[] = [
  { value: 300, label: "1", frontColor: "#FFC22F" },
  { value: 1000, label: "", frontColor: "#FFC22F" },
  { value: 500, label: "", frontColor: "#FFC22F" },
  { value: 1050, label: "182", frontColor: "#FFC22F" },
  { value: 700, label: "", frontColor: "#FFC22F" },
  { value: 900, label: "", frontColor: "#FFC22F" },
  {
    value: 1000,
    label: "",
    frontColor: "#FFC22F",
    showStrip: true,
    stripHeight: 190,
    stripColor: "transparent",
    dataPointLabelComponent: () => (
      <View
        style={{ paddingHorizontal: 8, paddingVertical: 5, borderRadius: 4 }}
      >
        <Text
          style={{
            color: "#626262",
            fontSize: verticalScale(13),
            fontWeight:"600",
            fontFamily: "ClashDisplayMedium",
          }}
        >
          1000
        </Text>
      </View>
    ),
    dataPointLabelShiftY: isiPad ? -50 : -30,
    dataPointLabelShiftX: -4,
  },
  { value: 1200, label: "", frontColor: "#FFC22F" },
];

export const onlineFriends = [
  {
    image: images.user3,
    friend: "3374",
    name: "Justine R.",
    des: "In AP US History ",
    inOnline: true,
  },
  {
    image: images.user2,
    friend: " 802",
    name: " Jacob S.",
    des: "In Home Screen",
    inOnline: true,
  },
];

export const BadgesData=[
  {image:images.uniqueApolloBadge},
  {image:images.raeCannonBadge},
  {image:images.uncommanBadge1},


]

export const uniqueBadgeData = [
  { name: "Poseidon", icon: images.poseidonBadge },
  { name: "Zeus", icon: images.zeusBadge },
  { name: "Athena", icon: images.athenaBadge },
  { name: "Apollo", icon: images.uniqueApolloBadge },
  { name: "Medusa", icon: images.medusaBadge },
]
export const rareBadgeData = [
  { name: "Cavalry", icon: images.cavalryRare },
  { name: "Battle Axe", icon: images.battleRare },
  { name: "Castle", icon: images.castleRare },
  { name: "Helmet", icon: images.helmetRare },
  { name: "Cannon", icon: images.cannonRare },
  { name: "Elephant", icon: images.elephantRare },

  { name: "Cobra", icon: images.cobraRare },
  { name: "Torch", icon: images.torchRare },
  { name: "Sword", icon: images.swordRare },
  { name: "Shield", icon: images.shieldRare },
  { name: "Raven", icon: images.ravenRare },
  { name: "Phoenix", icon: images.phoenixRare },

  { name: "Arrow", icon: images.arrowRare },
  { name: "Warship", icon: images.warshipRare },
  { name: "Mace", icon: images.maceRare },
  { name: "Dragon", icon: images.dragonRare },
  { name: "Rose", icon: images.roseRare },
  { name: "Bugel", icon: images.bugelRare },

]
export const uncommanBadgeData = [
  {  icon: images.uncommanBadge2 },
  {  icon: images.uncommanBadge3 },
  {  icon: images.uncommanBadge4 },
  {  icon: images.uncommanBadge5 },
  {  icon: images.uncommanBadge6 },
  {  icon: images.uncommanBadge7 },
  {  icon: images.uncommanBadge8 },
  {  icon: images.uncommanBadge9 },
  {  icon: images.uncommanBadge10 },
  {  icon: images.uncommanBadge11 },
  {  icon: images.uncommanBadge12 },
  {  icon: images.uncommanBadge13 },
  {  icon: images.uncommanBadge14 },
  {  icon: images.uncommanBadge15 },
  {  icon: images.uncommanBadge16 },
  {  icon: images.uncommanBadge17 },
  {  icon: images.uncommanBadge18 },
  {  icon: images.uncommanBadge19 },
  {  icon: images.uncommanBadge20 },
  {  icon: images.uncommanBadge21 },
  {  icon: images.uncommanBadge22 },
  {  icon: images.uncommanBadge23 },
  {  icon: images.uncommanBadge24 },
  {  icon: images.uncommanBadge25 },
  {  icon: images.uncommanBadge26 },
  {  icon: images.uncommanBadge27 },
  {  icon: images.uncommanBadge28 },
  {  icon: images.uncommanBadge29 },
  {  icon: images.uncommanBadge30},
  {  icon: images.uncommanBadge31 },
  {  icon: images.uncommanBadge32 },
  {  icon: images.uncommanBadge33},
  {  icon: images.uncommanBadge34 },
  {  icon: images.uncommanBadge35 },
  {  icon: images.uncommanBadge36 },
  {  icon: images.uncommanBadge37 },
  {  icon: images.uncommanBadge38 },
  {  icon: images.uncommanBadge39 },
  {  icon: images.uncommanBadge40 },
  {  icon: images.uncommanBadge41 },
  {  icon: images.uncommanBadge42 },
  {  icon: images.uncommanBadge43 }

]

export const commanBadgeData = [
  {  icon: images.commanBadge2 },
  {  icon: images.commanBadge3 },
  {  icon: images.commanBadge4 },
  {  icon: images.commanBadge5 },
  {  icon: images.commanBadge6 },
  {  icon: images.commanBadge7 },
  {  icon: images.commanBadge8 },
  {  icon: images.commanBadge9 },
  {  icon: images.commanBadge10 },
  {  icon: images.commanBadge11 },
  {  icon: images.commanBadge12 },
  {  icon: images.commanBadge13 },
  {  icon: images.commanBadge14 },
  {  icon: images.commanBadge15 },
  {  icon: images.commanBadge16 },
  {  icon: images.commanBadge17 },
  {  icon: images.commanBadge18 },
  {  icon: images.commanBadge19 },
  {  icon: images.commanBadge20 },
  {  icon: images.commanBadge21 },
  {  icon: images.commanBadge22 },
  {  icon: images.commanBadge23 },
  {  icon: images.commanBadge24 },
  {  icon: images.commanBadge25 },
  {  icon: images.commanBadge26 },
  {  icon: images.commanBadge27 },
  {  icon: images.commanBadge28 },
  {  icon: images.commanBadge29 },
  {  icon: images.commanBadge30},
  {  icon: images.commanBadge31 },
  {  icon: images.commanBadge32 },
  {  icon: images.commanBadge33},
  {  icon: images.commanBadge34 },
  {  icon: images.commanBadge35 },
  {  icon: images.commanBadge36 },
  {  icon: images.commanBadge37 },
  {  icon: images.commanBadge38 },
  {  icon: images.commanBadge39 },
  {  icon: images.commanBadge40 },
  {  icon: images.commanBadge41 },
  {  icon: images.commanBadge42 },
  {  icon: images.commanBadge43 },
  {  icon: images.commanBadge44 },
  {  icon: images.commanBadge45 },
  {  icon: images.commanBadge46 },
  {  icon: images.commanBadge47 },
  {  icon: images.commanBadge48 },
  {  icon: images.commanBadge49 },
  {  icon: images.commanBadge50 },
  {  icon: images.commanBadge51},
  {  icon: images.commanBadge52 },
  {  icon: images.commanBadge53 },
  {  icon: images.commanBadge54 },
  {  icon: images.commanBadge55 },
  {  icon: images.commanBadge56 },
  {  icon: images.commanBadge57 },
  {  icon: images.commanBadge58 },
  {  icon: images.commanBadge59 },
  {  icon: images.commanBadge60 },
  {  icon: images.commanBadge61 },
  {  icon: images.commanBadge62 },
  {  icon: images.commanBadge63 },
  {  icon: images.commanBadge64 },
  {  icon: images.commanBadge65 },
  {  icon: images.commanBadge66 },
  {  icon: images.commanBadge67 },
  {  icon: images.commanBadge68 },
  {  icon: images.commanBadge69 },
  {  icon: images.commanBadge70 },
  {  icon: images.commanBadge71 },
  {  icon: images.commanBadge72 },
  {  icon: images.commanBadge73 },
  {  icon: images.commanBadge74 },
  {  icon: images.commanBadge75 },
  {  icon: images.commanBadge76 },
  {  icon: images.commanBadge77 },
  {  icon: images.commanBadge78 },



]
export const friendData=[
  {image:images.user10,isOnline:true},
  {image:images.user12},
  {image:images.user13,isOnline:true},
  {image:images.user14},
  {image:images.user15},
  {image:images.user16},
]
export const rankingData=[
  {name:"Roosevelt HS",sat:"SAT at",id:"#2",image:images.roosevelt},
  {name:"Missouri",sat:"SAT in",id:"#52",image:images.map2},

]
export const userHistoryData=[
  { userProfile:images.user10,gole:"3-2",user1Image:images.user11,points:"36",win:true,user1Online:true},
  { userProfile:images.user12,gole:"1-3",user1Image:images.user13,points:"-40",win:false,user1Online:true},
  { userProfile:images.user14,gole:"3-0",user1Image:images.user15,points:"+20",win:true,user1Online:false},
  { userProfile:images.user16,gole:"0-3",user1Image:images.user17,points:"-16",win:false,user1Online:false},



]
export const groupParties = [
  {
    image: images.user3,
    friend: "3374",
    title: "3rd Period Calc 😃",
    des: "In Calculus II",
    inOnline: true,
    Parties: [
      {
        img: images.user3,
      },
      {
        img: images.user2,
      },
    ],
  },
  {
    image: images.user2,
    friend: " 802",
    title: "SAT Study Group",
    des: "In SAT Prep",
    inOnline: true,
    Parties: [
      {
        img: images.user4,
      },
      {
        img: images.user5,
      },
    ],
  },
];

export const FindFriends = [
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    monsterBadge: images.monsterBadge,
    image: images.user6,
  },
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    tagBadge: images.sashBadge,
    image: images.user7,
  },
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    image: images.user8,
  },
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    image: images.user9,
  },
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    image: images.user10,
  },
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    image: images.user11,
  },
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    image: images.user12,
  },
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    image: images.user13,
  },
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    image: images.user14,
  },
];
export const createUserData = [
  {
    name: "Carol Lyons",
    points: "590 ELO",
    rooseveltBadge: images.roosevelt,
    image: images.user15,
    count: "4",
  },
  {
    name: "Zain Vaccaro",
    points: "448 ELO",
    rooseveltBadge: images.roosevelt,
    image: images.user16,
    count: "5",
  },
  {
    name: "Carol Lyons",
    points: "590 ELO",
    rooseveltBadge: images.highSchoolMedal,
    image: images.user15,
    count: "4",
  },
  {
    name: "Zain Vaccaro",
    points: "448 ELO",
    rooseveltBadge: images.athletics,
    image: images.user16,
    count: "5",
  },
  {
    name: "You",
    points: "448 points",
    rooseveltBadge: images.roosevelt,
    image: images.user17,
    count: "890",
  },
];

export const country = [
  { name: "Uganda", image: images.uganda },
  { name: "Ukraine", image: images.ukraine },
  { name: "United Arab Emirates", image: images.unitedArab },
  { name: "United Kindom", image: images.unitedKingdom },
  { name: "United States", image: images.unitedStates },
  { name: "Uruguay", image: images.uruguay },
  { name: "Uzbekistan", image: images.uzbekistan },
];

export const rewardRanks: any = [
  {
    startName: "Beginner",
    nextName: "Prodigy",
    min: 0,
    max: 499,
    minImage: images.beginner,
    maxImage: images.prodigy,
    minImageShadowColor: "#C0F0FA",
    maxImageShadowColor: "#F0BDCC",
    data: [
      {
        bedageImage: images.uniqueBadge,
        name: "Unique Badge",
        nameColor: "#9E00FF",
        value: "0.75%",
      },
      {
        bedageImage: images.rareBadge,
        name: "Rare Badge",
        nameColor: "#A20000",

        value: "2.25%",
      },

      {
        bedageImage: images.uncommonBadge,
        name: "Uncommon Badge",
        nameColor: "#007CD6",
        value: "7%",
      },

      {
        bedageImage: images.commonBadge,
        name: "Common Badge",
        nameColor: colors.black,
        value: "40%",
      },
      {
        bedageImage: images.title,
        name: "Title",
        isTitle: true,
        nameColor: colors.black,
        value: "50%",
      },
    ],
  },
  {
    startName: "Prodigy",
    nextName: "Elite",
    min: 500,
    max: 1249,
    minImage: images.prodigy,
    maxImage: images.elite,

    minImageShadowColor: "#F0BDCC",
    maxImageShadowColor: "#1C361A",
    data: [
      {
        bedageImage: images.uniqueBadge,
        name: "Unique Badge",
        nameColor: "#9E00FF",
        value: "1.25%",
      },
      {
        bedageImage: images.rareBadge,
        name: "Rare Badge",
        nameColor: "#A20000",

        value: "3.75%",
      },

      {
        bedageImage: images.uncommonBadge,
        name: "Uncommon Badge",
        nameColor: "#007CD6",
        value: "10.5%",
      },

      {
        bedageImage: images.commonBadge,
        name: "Common Badge",
        nameColor: colors.black,
        value: "40%",
      },
      {
        bedageImage: images.title,
        name: "Title",
        isTitle: true,
        nameColor: colors.black,
        value: "44.5%",
      },
    ],
  },
  {
    startName: "Elite",
    nextName: "Mastermind",

    min: 1250,
    max: 1999,
    minImage: images.elite,
    maxImage: images.mastermind,
    minImageShadowColor: "#1C361A",
    maxImageShadowColor: "#C200D3",
    data: [
      {
        bedageImage: images.uniqueBadge,
        name: "Unique Badge",
        nameColor: "#9E00FF",
        value: "2%",
      },
      {
        bedageImage: images.rareBadge,
        name: "Rare Badge",
        nameColor: "#A20000",

        value: "5%",
      },

      {
        bedageImage: images.uncommonBadge,
        name: "Uncommon Badge",
        nameColor: "#007CD6",
        value: "15%",
      },

      {
        bedageImage: images.commonBadge,
        name: "Common Badge",
        nameColor: colors.black,
        value: "46%",
      },
      {
        bedageImage: images.title,
        name: "Title",
        isTitle: true,
        nameColor: colors.black,
        value: "30%",
      },
    ],
  },
  {
    startName: "Mastermind",
    nextName: "King/Queen",
    min: 2000,
    max: 2249,
    minImage: images.mastermind,
    maxImage: images.kingQueen,
    minImageShadowColor: "#C200D3",
    maxImageShadowColor: "#037676",
    data: [
      {
        bedageImage: images.uniqueBadge,
        name: "Unique Badge",
        nameColor: "#9E00FF",
        value: "4%",
      },
      {
        bedageImage: images.rareBadge,
        name: "Rare Badge",
        nameColor: "#A20000",

        value: "8.5%",
      },

      {
        bedageImage: images.uncommonBadge,
        name: "Uncommon Badge",
        nameColor: "#007CD6",
        value: "25.5%",
      },

      {
        bedageImage: images.commonBadge,
        name: "Common Badge",
        nameColor: colors.black,
        value: "47%",
      },
      {
        bedageImage: images.title,
        name: "Title",
        isTitle: true,
        nameColor: colors.black,
        value: "15%",
      },
    ],
  },
  {
    name: "King/Queen",
    startName: "King/Queen",
    nextName: "Legend",
    min: 2250,
    max: 2499,
    minImage: images.kingQueen,
    maxImage: images.legend,
    minImageShadowColor: "#037676",
    maxImageShadowColor: "#F6DE8A",
    data: [
      {
        bedageImage: images.uniqueBadge,
        name: "Unique Badge",
        nameColor: "#9E00FF",
        value: "6%",
      },
      {
        bedageImage: images.rareBadge,
        name: "Rare Badge",
        nameColor: "#A20000",

        value: "12%",
      },

      {
        bedageImage: images.uncommonBadge,
        name: "Uncommon Badge",
        nameColor: "#007CD6",
        value: "40%",
      },

      {
        bedageImage: images.commonBadge,
        name: "Common Badge",
        nameColor: colors.black,

        value: "42%",
      },
    ],
  },
  {
    name: "Legend",
    startName: "Legend",
    nextName: "",
    min: 2500,
    max: Infinity,
    minImage: images.prodigy,
    maxImage: null,
    minImageShadowColor: "#F6DE8A",
    data: [
      {
        bedageImage: images.uniqueBadge,
        name: "Unique Badge",
        nameColor: "#9E00FF",
        value: "<0.5%",
      },
      {
        bedageImage: images.rareBadge,
        name: "Rare Badge",
        nameColor: "#A20000",

        value: "9.5%",
      },

      {
        bedageImage: images.uncommonBadge,
        name: "Uncommon Badge",
        nameColor: "#007CD6",
        value: "25%",
      },

      {
        bedageImage: images.commonBadge,
        name: "Common Badge",
        nameColor: colors.black,
        value: "65%",
      },
    ],
  },
];
