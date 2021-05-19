import juzes from "../mushaf/maqras";
import quran from "../mushaf/quran";

const maqras = juzes.flat();

const getJuzIndex = (maqra) => Math.floor(maqra / 8);
const getMaqraIndex = (maqra) => Math.ceil(maqra % 8);
const getMaqra = (index) => maqras[index];
const getMaqras = (j) => juzes[j]

const getSurah = (verse) => {
  let count = 0;
  for (let chapter of quran) {
    if (count + chapter.numVerses > verse) {
	    const v = verse - count;
	    return {chapter, v};
    }
    else count += chapter.numVerses;
  }
};


const nextJuz = (page, offset) => {
  const index = getJuzIndex(page, offset);
  if (index >= 29) return maqras[index];
  else return maqras[index + 1];
};

const prevJuz = (page, offset) => {
  const index = getJuzIndex(page, offset);
  if (index < 1) return maqras[index];
  else return maqras[index - 1];
};

const generatePageNumbers = (start, end) => {
  let arr = [];
  for (let i = start; i <= end; i++) arr.push(i);
  return arr;
};

const generatePages = (maqra, offset) => {
  let pages = generatePageNumbers(
    maqras[maqra].page.start + offset,
    maqras[maqra].page.end + offset
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
