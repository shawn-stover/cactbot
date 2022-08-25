import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.AsphodelosTheFourthCircle,
  timelineFile: 'p4n.txt',
  triggers: [
    {
      id: 'P4N Elegant Evisceration',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6A50', source: 'Hesperos' }),
      response: Responses.tankCleave('alert'),
    },
    // Strong proximity Aoe
    {
      id: 'P4N Levinstrike Pinax',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6A3F', source: 'Hesperos', capture: false }),
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Go to Corner',
          de: 'In eine Ecke gehen',
          fr: 'Allez dans un coin',
          ja: '角へ',
          cn: '去角落',
          ko: '구석으로',
        },
      },
    },
    {
      id: 'P4N Well Pinax',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6A3E', source: 'Hesperos', capture: false }),
      delaySeconds: 4,
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Middle Knockback',
          de: 'Rückstoß von der Mitte',
          fr: 'Poussée au milieu',
          ja: '真ん中からノックバック',
          cn: '中间击退',
          ko: '중앙에서 넉백',
        },
      },
    },
    {
      id: 'P4N Acid Pinax',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6A3C', source: 'Hesperos', capture: false }),
      response: Responses.spread(),
    },
    {
      id: 'P4N Lava Pinax',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6A3D', source: 'Hesperos', capture: false }),
      response: Responses.stackMarker(),
    },
    {
      id: 'P4N Decollation',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6A51', source: 'Hesperos', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'P4N Bloodrake',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6A40', source: 'Hesperos', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'P4N Hell Skewer',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6A4F', source: 'Hesperos', capture: false }),
      response: Responses.awayFromFront(),
    },
    {
      id: 'P4N Belone Coils',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '69DD', source: 'Hesperos', capture: false }),
      delaySeconds: 2,
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Get Other Role Tower',
          de: 'Geh in einen Turm einer anderen Rolle',
          fr: 'Prenez la tour d\'un autre rôle',
          ja: '他のロールの塔を処理',
          cn: '踩其他职能的塔',
          ko: '내 직업군이 아닌쪽 장판 밟기',
        },
      },
    },
    {
      id: 'P4N Northerly Shift Slash',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6A4A', source: 'Hesperos', capture: false }),
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Go North Edge',
          de: 'Geh zur nördlichen Kante',
          fr: 'Allez au bord nord',
          ja: '北側へ',
          cn: '去上 (北) 边',
          ko: '북쪽 구석으로',
        },
      },
    },
    {
      id: 'P4N Easterly Shift Slash',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6A4C', source: 'Hesperos', capture: false }),
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Go East Edge',
          de: 'Geh zur östlichen Kante',
          fr: 'Allez au bord est',
          ja: '東側へ',
          cn: '去右 (东) 边',
          ko: '동쪽 구석으로',
        },
      },
    },
    {
      id: 'P4N Southerly Shift Slash',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6A4B', source: 'Hesperos', capture: false }),
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Go South Edge',
          de: 'Geh zur südlichen Kante',
          fr: 'Allez au bord sud',
          ja: '南側へ',
          cn: '去下 (南) 边',
          ko: '남쪽 구석으로',
        },
      },
    },
    {
      id: 'P4N Westerly Shift Slash',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6A4D', source: 'Hesperos', capture: false }),
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Go West Edge',
          de: 'Geh zur westlichen Kante',
          fr: 'Allez au bord ouest',
          ja: '西側へ',
          cn: '去左 (西) 边',
          ko: '서쪽 구석으로',
        },
      },
    },
    {
      id: 'P4N Northerly Shift Knockback',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6DAE', source: 'Hesperos', capture: false }),
      delaySeconds: 2,
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'North Knockback',
          de: 'Rückstoß vom Norden',
          fr: 'Poussée au nord',
          ja: '北側からノックバック',
          cn: '上 (北) 击退',
          ko: '북쪽 넉백',
        },
      },
    },
    {
      id: 'P4N Easterly Shift Knockback',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6DB0', source: 'Hesperos', capture: false }),
      delaySeconds: 2,
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'East Knockback',
          de: 'Rückstoß vom Osten',
          fr: 'Poussée à l\'est',
          ja: '東側からノックバック',
          cn: '右 (东) 击退',
          ko: '동쪽 넉백',
        },
      },
    },
    {
      id: 'P4N Southerly Shift Knockback',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6DAF', source: 'Hesperos', capture: false }),
      delaySeconds: 2,
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'South Knockback',
          de: 'Rückstoß vom Süden',
          fr: 'Poussée au sud',
          ja: '南側からノックバック',
          cn: '下 (南) 击退',
          ko: '남쪽 넉백',
        },
      },
    },
    {
      id: 'P4N Westerly Shift Knockback',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '6DB1', source: 'Hesperos', capture: false }),
      delaySeconds: 2,
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'West Knockback',
          de: 'Rückstoß vom Westen',
          fr: 'Poussée à l\'ouest',
          ja: '西側からノックバック',
          cn: '左 (西) 击退',
          ko: '서쪽 넉백',
        },
      },
    },
    {
      id: 'P4N Belone Bursts',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '69D9', source: 'Hesperos', capture: false }),
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Pop other role orbs',
          de: 'Nimm einen Orb einer anderen Rolle',
          fr: 'Éclatez l\'orbe d\'un autre rôle',
          ja: '他のロールの玉に当たる',
          cn: '撞其他职能的球',
          ko: '내 직업군과 다른 구슬 터뜨리기',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'en',
      'replaceText': {
        'Well Pinax/Levinstrike Pinax': 'Well/Levinstrike Pinax',
        'Levinstrike Pinax/Well Pinax': 'Levinstrike/Well Pinax',
      },
    },
    {
      'locale': 'de',
      'replaceSync': {
        'Hesperos': 'Hesperos',
      },
      'replaceText': {
        '\\(cleave\\)': '(Cleave)',
        '\\(knockback\\)': '(Rückstoß)',
        'Acid Pinax': 'Säure-Pinax',
        'Belone Bursts': 'Berstendes Belone',
        'Belone Coils': 'Gewundenes Belone',
        'Bloodrake': 'Blutharke',
        'Burst(?!s)': 'Einschlag',
        'Decollation': 'Enthauptung',
        'Directional Shift': 'Himmelsrichtung-Schwingen',
        'Elegant Evisceration': 'Adrette Ausweidung',
        'Hell Skewer': 'Höllenspieß',
        'Levinstrike Pinax': 'Donner-Pinax',
        '(?<!\\w )Pinax': 'Pinax',
        'Setting the Scene': 'Vorhang auf',
        'Shifting Strike': 'Schwingenschlag',
        'Well Pinax': 'Brunnen-Pinax',
        'Westerly Shift': 'Schwingen gen Westen',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Hesperos': 'Hespéros',
      },
      'replaceText': {
        '\\(cleave\\)': '(cleave)',
        '\\(knockback\\)': '(poussée)',
        'Acid Pinax': 'Pinax de poison',
        'Belone Bursts': 'Bélos enchanté : explosion',
        'Belone Coils': 'Bélos enchanté : rotation',
        'Bloodrake': 'Racle de sang',
        'Burst(?!s)': 'Explosion',
        'Decollation': 'Décollation',
        'Directional Shift': 'Frappe mouvante vers un cardinal',
        'Elegant Evisceration': 'Éviscération élégante',
        'Hell Skewer': 'Embrochement infernal',
        '(?<!/)Levinstrike Pinax(?!/)': 'Pinax de foudre',
        'Levinstrike Pinax/Well Pinax': 'Pinax de foudre/eau',
        '(?<!\\w )Pinax': 'Pinax',
        'Setting the Scene': 'Lever de rideau',
        'Shifting Strike': 'Frappe mouvante',
        '(?<!/)Well Pinax(?!/)': 'Pinax d\'eau',
        'Well Pinax/Levinstrike Pinax': 'Pinax d\'eau/foudre',
        'Westerly Shift': 'Frappe mouvante vers l\'ouest',
      },
    },
    {
      'locale': 'ja',
      'missingTranslations': true,
      'replaceSync': {
        'Hesperos': 'ヘスペロス',
      },
      'replaceText': {
        'Acid Pinax': 'ピナクスポイズン',
        'Belone Bursts': 'エンチャンテッドペロネー：エクスプロージョン',
        'Belone Coils': 'エンチャンテッドペロネー：ラウンド',
        'Bloodrake': 'ブラッドレイク',
        'Burst(?!s)': '大爆発',
        'Decollation': 'デコレーション',
        'Elegant Evisceration': 'エレガントイヴィセレーション',
        'Hell Skewer': 'ヘルスキュアー',
        'Levinstrike Pinax': 'ピナクスサンダー',
        '(?<!\\w )Pinax': 'ピナクス',
        'Setting the Scene': '劇場創造',
        'Shifting Strike': 'シフティングストライク',
        'Well Pinax': 'ピナクススプラッシュ',
        'Westerly Shift': 'シフティングストライクW',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Hesperos': '赫斯珀洛斯',
      },
      'replaceText': {
        '\\(cleave\\)': '(顺劈)',
        '\\(knockback\\)': '(击退)',
        'Acid Pinax': '剧毒板画',
        'Belone Bursts': '附魔佩罗涅·爆炸',
        'Belone Coils': '附魔佩罗涅·场地',
        'Bloodrake': '聚血',
        'Burst(?!s)': '大爆炸',
        'Decollation': '断头',
        'Directional Shift': '换位强袭·方位',
        'Elegant Evisceration': '优雅除脏',
        'Hell Skewer': '地狱穿刺',
        'Levinstrike Pinax': '雷电板画',
        '(?<!\\w )Pinax': '板画',
        'Setting the Scene': '布置剧场',
        'Shifting Strike': '换位强袭',
        'Well Pinax': '喷水板画',
        'Westerly Shift': '换位强袭·西',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Hesperos': '헤스페로스',
      },
      'replaceText': {
        '\\(cleave\\)': '(칼)',
        '\\(knockback\\)': '(넉백)',
        'Acid Pinax': '독 배경판',
        'Belone Bursts': '마법검 벨로네: 폭발',
        'Belone Coils': '마법검 벨로네: 원형',
        'Bloodrake': '피갈퀴',
        'Burst(?!s)': '대폭발',
        'Decollation': '집단 참수',
        'Directional Shift': '이동 공격: 동서남북',
        'Elegant Evisceration': '우아한 적출',
        'Hell Skewer': '지옥 찌르기',
        'Levinstrike Pinax': '번개 배경판',
        '(?<!\\w )Pinax': '배경판',
        'Setting the Scene': '극장 창조',
        'Shifting Strike': '이동 공격',
        'Well Pinax': '물기둥 배경판',
        'Westerly Shift': '이동 공격: 서',
      },
    },
  ],
};

export default triggerSet;
