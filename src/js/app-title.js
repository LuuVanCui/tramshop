import { LANGUAGES, SHOP_NAME } from "./constants.js";

const TITLE = {
  [LANGUAGES.VIETNAM]: `${SHOP_NAME} - Đồ lưu niệm Việt Nam`,
  [LANGUAGES.JAPAN]: `${SHOP_NAME} - ベトナムのお土産`,
};

export function updateAppTitle(language) {
  document.title = TITLE[language];
}
