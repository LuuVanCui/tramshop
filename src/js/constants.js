export const LANGUAGES = Object.freeze({
  VIETNAM: "lang-vi",
  JAPAN: "lang-japan",
});

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
      [LANGUAGES.VIETNAM]: "Số điện thoại: +123 456 789",
      [LANGUAGES.JAPAN]: "電話番号: +123 456 789",
    },
    facebook: {
      [LANGUAGES.VIETNAM]: "Facebook: <a href='#'>Trang của chúng tôi</a>",
      [LANGUAGES.JAPAN]: "Facebook: <a href='#'>私たちのページ</a>",
    },
    copyright: {
      [LANGUAGES.VIETNAM]: "&copy; 2025 Sorai Shop. Tất cả quyền được bảo vệ.",
      [LANGUAGES.JAPAN]: "&copy; 2025 Sorai Shop. 全著作権所有",
    },
  },
});
