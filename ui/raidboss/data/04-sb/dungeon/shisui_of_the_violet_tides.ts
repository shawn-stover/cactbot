import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.ShisuiOfTheVioletTides,
  timelineFile: 'shisui_of_the_violet_tides.txt',
  triggers: [
    {
      id: 'Shisui Amikiri Kamikiri Add',
      type: 'AddedCombatant',
      netRegex: NetRegexes.addedCombatantFull({ npcNameId: '6238' }),
      alertText: (_data, matches, output) => output.kill!({ name: matches.name }),
      outputStrings: {
        kill: {
          en: 'Kill ${name}',
          de: 'Besiege ${name}',
          fr: 'Tuez ${name}',
          ja: '${name}を倒す',
          cn: '击杀 ${name}',
          ko: '${name} 처치',
        },
      },
    },
    {
      id: 'Shisui Amikiri Digestive Fluid',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '000E' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Shisui Ruby Princess Seduce',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'Ruby Princess', id: '1F7A', capture: false }),
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Get In Box',
          de: 'Geh in die Box',
          fr: 'Allez dans la boîte',
          ja: '箱に入る',
          cn: '进盒子',
          ko: '박스에 접근',
        },
      },
    },
    {
      // This is what it's called!
      id: 'Shisui Ruby Princess Geothermal Flatulence',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '0001' }),
      condition: Conditions.targetIsYou(),
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Chasing AOE on YOU',
          de: 'Verfolgende AoE auf DIR',
          fr: 'Ruée sur VOUS',
          ja: '追跡AOE',
          cn: '追踪AOE点名',
          ko: '연속장판 대상자',
        },
      },
    },
    {
      id: 'Shisui Shisui Yohi Naishi-No-Kami',
      type: 'AddedCombatant',
      netRegex: NetRegexes.addedCombatantFull({ npcNameId: '6244', capture: false }),
      response: Responses.killAdds(),
    },
    {
      id: 'Shisui Shisui Yohi Mad Stare',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ source: 'Shisui Yohi', id: '1F82', capture: false }),
      response: Responses.lookAway(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Amikiri': 'Amikiri',
        'Naishi-No-Kami': 'Naishi no Kami',
        'Ruby Princess': 'Rubinprinzessin',
        'Shisui Gokagura': 'Shisui Gokagura',
        'Shisui Yohi': 'Shisui Yohi',
        'The Akashio Hall': 'Akashio-Halle',
        'The Harutsuge Gate': 'Haratsuge-Tor',
      },
      'replaceText': {
        '--add--': '--Add--',
        '--adds--': '--Adds--',
        'Abyssal Volcano': 'Submariner Vulkan',
        'Black Tide': 'Schwarze Flut',
        'Coriolis Kick': 'Coriolis-Kick',
        'Digest': 'Verdauen',
        'Foul Nail': 'Hexenkralle',
        'Geothermal Flatulence': 'Vulkanausbruch',
        'Mad Stare': 'Verrückter Blick',
        'Mucal Glob': 'Schleimklumpen',
        'Seduce': 'Versuchung',
        'Sharp Strike': 'Spitzer Schlag',
        'Shuck': 'Enthülsen',
        'Thick Fog': 'Dichter Nebel',
        'Tornadogenesis': 'Tornadogenese',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Amikiri': 'Amikiri',
        'Naishi-No-Kami': 'Naishi no Kami',
        'Ruby Princess': 'Princesse de Rubis',
        'Shisui Gokagura': 'Shisui Gokagura',
        'Shisui Yohi': 'Shisui Yohi',
        'The Akashio Hall': 'Chambre d\'Akashio',
        'The Harutsuge Gate': 'Porte de Harutsuge',
      },
      'replaceText': {
        '\\?': ' ?',
        '--add--': '--add--',
        '--adds--': '--adds--',
        'Abyssal Volcano': 'Volcan abyssal',
        'Black Tide': 'Marée noire',
        'Coriolis Kick': 'Coup de pied Coriolis',
        'Digest': 'Digestion',
        'Foul Nail': 'Ongle fétide',
        'Geothermal Flatulence': 'Éruption volcanique',
        'Mad Stare': 'Regard fou',
        'Mucal Glob': 'Globe de mucus',
        'Seduce': 'Séduction',
        'Sharp Strike': 'Frappe tranchante',
        'Shuck': 'Décorticage',
        'Thick Fog': 'Brouillard épais',
        'Tornadogenesis': 'Tornadogénèse',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Amikiri': 'アミキリ',
        'Naishi-No-Kami': 'ナイシノカミ',
        'Ruby Princess': '紅玉姫',
        'Shisui Gokagura': '紫水御神楽',
        'Shisui Yohi': '紫水妖妃',
        'The Akashio Hall': '紅潮之間',
        'The Harutsuge Gate': '春告門前',
      },
      'replaceText': {
        'Abyssal Volcano': '海底火山',
        'Black Tide': 'ブラックタイド',
        'Coriolis Kick': '大嵐蹴',
        'Digest': '消化',
        'Foul Nail': 'ウィッチクロウ',
        'Geothermal Flatulence': '噴火',
        'Mad Stare': '狂気の視線',
        'Mucal Glob': '粘液玉',
        'Seduce': '誘惑',
        'Sharp Strike': 'シャープストライク',
        'Shuck': 'シェルブレイカー',
        'Thick Fog': '濃霧',
        'Tornadogenesis': '竜巻蹴',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Amikiri': '切网虾蛄',
        'Naishi-No-Kami': '尚侍',
        'Ruby Princess': '红玉公主',
        'Shisui Gokagura': '紫水御神乐',
        'Shisui Yohi': '紫水妖妃',
        'The Akashio Hall': '红潮之间',
        'The Harutsuge Gate': '春告门前',
      },
      'replaceText': {
        '--add--': '--小怪--',
        '--adds--': '--小怪--',
        'Abyssal Volcano': '海底火山',
        'Black Tide': '黑潮',
        'Coriolis Kick': '暴风踢',
        'Digest': '消化',
        'Foul Nail': '巫婆魔爪',
        'Geothermal Flatulence': '火山喷发',
        'Mad Stare': '疯狂视线',
        'Mucal Glob': '粘液球',
        'Seduce': '诱惑',
        'Sharp Strike': '突然袭击',
        'Shuck': '碎壳重击',
        'Thick Fog': '浓雾',
        'Tornadogenesis': '旋风踢',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Amikiri': '아미키리',
        'Naishi-No-Kami': '시스이 상궁',
        'Ruby Princess': '홍옥 공주',
        'Shisui Gokagura': '시스이 누대',
        'Shisui Yohi': '시스이 요비',
        'The Akashio Hall': '아카시오의 방',
        'The Harutsuge Gate': '하루츠게 문',
      },
      'replaceText': {
        '--add--': '--쫄--',
        '--adds--': '--쫄--',
        'Abyssal Volcano': '해저 화산',
        'Black Tide': '검은 파도',
        'Coriolis Kick': '태풍차기',
        'Digest': '소화',
        'Foul Nail': '마녀의 손톱',
        'Geothermal Flatulence': '분화',
        'Mad Stare': '광기 어린 시선',
        'Mucal Glob': '점액 방울',
        'Seduce': '유혹',
        'Sharp Strike': '날카로운 일격',
        'Shuck': '껍데기 파괴',
        'Thick Fog': '짙은 안개',
        'Tornadogenesis': '회오리차기',
      },
    },
  ],
};

export default triggerSet;
