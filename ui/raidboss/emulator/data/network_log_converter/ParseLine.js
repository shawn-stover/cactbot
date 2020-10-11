'use strict';

const LineEvent = require('./LineEvent.js');
const { LineEvent00 } = require('./LineEvent0x00.js');
const { LineEvent01 } = require('./LineEvent0x01.js');
const { LineEvent02 } = require('./LineEvent0x02.js');
const { LineEvent03 } = require('./LineEvent0x03.js');
const { LineEvent04 } = require('./LineEvent0x04.js');
const { LineEvent12 } = require('./LineEvent0x0C.js');
const { LineEvent20 } = require('./LineEvent0x14.js');
const { LineEvent21 } = require('./LineEvent0x15.js');
const { LineEvent22 } = require('./LineEvent0x16.js');
const { LineEvent23 } = require('./LineEvent0x17.js');
const { LineEvent24 } = require('./LineEvent0x18.js');
const { LineEvent25 } = require('./LineEvent0x19.js');
const { LineEvent26 } = require('./LineEvent0x1A.js');
const { LineEvent27 } = require('./LineEvent0x1B.js');
const { LineEvent28 } = require('./LineEvent0x1C.js');
const { LineEvent29 } = require('./LineEvent0x1D.js');
const { LineEvent30 } = require('./LineEvent0x1E.js');
const { LineEvent31 } = require('./LineEvent0x1F.js');
const { LineEvent34 } = require('./LineEvent0x22.js');
const { LineEvent35 } = require('./LineEvent0x23.js');
const { LineEvent36 } = require('./LineEvent0x24.js');
const { LineEvent37 } = require('./LineEvent0x25.js');
const { LineEvent38 } = require('./LineEvent0x26.js');
const { LineEvent39 } = require('./LineEvent0x27.js');

class ParseLine {
  static parse(repo, line) {
    let ret;

    let parts = line.split('|');
    let event = parts[0];

    // Don't parse raw network packet lines
    if (event === '252')
      return false;

    // This is ugly, but just want to check if we have a specific
    // line class is defined without having a huge if/else or switch/case
    let tn = 'LineEvent' + event;
    if (eval('typeof(' + tn + ')') === 'function')
      eval('ret = new ' + tn + '(repo, line, parts);');
    else
      ret = new LineEvent(repo, line, parts);

    // Also don't parse lines with a non-sane date. This is 2000-01-01 00:00:00
    if (ret && ret.timestamp < 946684800)
      return false;

    // Finally, if the object marks itself as invalid, skip it
    if (ret && ret.invalid)
      return false;

    return ret;
  }
}

if (typeof module !== 'undefined' && module.exports)
  module.exports = ParseLine;
