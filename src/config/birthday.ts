const parseEnvStr = (val: unknown): string | null => {
  if (!val) return null;
  const str = String(val).trim();
  if (str === "" || str === "null" || str === "undefined") return null;
  return str;
};

const envPhoto1 = parseEnvStr(import.meta.env.VITE_PHOTO1);
const envPhoto2 = parseEnvStr(import.meta.env.VITE_PHOTO2);
const envPhoto3 = parseEnvStr(import.meta.env.VITE_PHOTO3);
const envBgm = parseEnvStr(import.meta.env.VITE_BGM_URL);
const envSoundEffectsRaw = parseEnvStr(import.meta.env.VITE_SOUND_EFFECTS);
const envSoundEffects = envSoundEffectsRaw !== null
  ? !['false', '0', 'no', 'off', 'disabled'].includes(envSoundEffectsRaw.toLowerCase())
  : true;

export const BIRTHDAY_CONFIG = {
  targetName: "Khin Phone",
  title: "HAPPY BIRTHDAY KHIN PHONE",
  subtitle: "Love You Khin Phone",
};

export const PHOTO_ASSETS = {
  photo1: envPhoto1,
  photo2: envPhoto2,
  photo3: envPhoto3,
};

export const AUDIO_ASSETS = {
  bgmUrl: "https://files.catbox.moe/gq4x4b.mp3",
  soundEffectsEnabled: envSoundEffects,
};
