import { mushaf } from "mushaf";

const getJuzIndex = (maqra) => Math.floor(maqra / 8);
const getMaqraIndex = (maqra) => Math.ceil(maqra % 8);
const getMaqra = (index) => mushaf.sections[index];
const getMaqras = (j) => mushaf.juzs()[j];

const getSurah = (verse) => {
  let count = 0;
  for (let surah of mushaf.surahs()) {
    if (count + surah.numVerses > verse) {
      const v = verse - count;
      return { surah, v };
    } else count += surah.numVerses;
  }
};

const nextJuz = (page, offset) => {
  const index = getJuzIndex(page, offset);
  if (index >= 29) return mushaf.sections[index];
  else return mushaf.sections[index + 1];
};

const prevJuz = (page, offset) => {
  const index = getJuzIndex(page, offset);
  if (index < 1) return mushaf.sections[index];
  else return mushaf.sections[index - 1];
};

const generatePageNumbers = (start, end) => {
  let arr = [];
  for (let i = start; i <= end; i++) arr.push(i);
  return arr;
};

const generatePages = (maqra, offset) => {
  let pages = generatePageNumbers(
    mushaf.sections[maqra].page.start + offset,
    mushaf.sections[maqra].page.end + offset
  );
  return pages.flat();
};

export {
  getJuzIndex,
  getMaqraIndex,
  getMaqra,
  getMaqras,
  getSurah,
  nextJuz,
  prevJuz,
  generatePageNumbers,
  generatePages,
};
