export const LANGUAGES = Object.freeze({
  VIETNAM: "lang-vi",
  JAPAN: "lang-japan",
});

export const PHONE_NUMBER = "+8170-9171-4417";
export const SHOP_NAME = "Sorai Shop";

export const translations = Object.freeze({
  common: {
    categories: {
      [LANGUAGES.VIETNAM]: "Danh mục",
      [LANGUAGES.JAPAN]: "カテゴリー",
    },
  },
  header: {
    home: { [LANGUAGES.VIETNAM]: "Trang chủ", [LANGUAGES.JAPAN]: "ホーム" },
  },
  footer: {
    contactUs: {
      [LANGUAGES.VIETNAM]: "Liên hệ với chúng tôi",
      [LANGUAGES.JAPAN]: "お問い合わせ",
    },
    phone: {
      [LANGUAGES.VIETNAM]: `Số điện thoại:  <a href="tel:${PHONE_NUMBER}">${PHONE_NUMBER}</a>`,
      [LANGUAGES.JAPAN]: `電話番号: <a href="tel:${PHONE_NUMBER}">${PHONE_NUMBER}</a>`,
    },
    facebook: `Facebook: ${SHOP_NAME}`,
    copyright: {
      [LANGUAGES.VIETNAM]: `&copy; 2025 ${SHOP_NAME}. Tất cả quyền được bảo vệ.`,
      [LANGUAGES.JAPAN]: `&copy; 2025 ${SHOP_NAME}. 全著作権所有`,
    },
  },
});
