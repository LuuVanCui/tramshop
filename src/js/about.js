import { LANGUAGES } from "./constants.js";

const ABOUT_CONTENT = {
  [LANGUAGES.VIETNAM]: {
    title: "Về chúng tôi",
    description: `Quà lưu niệm Việt Nam là món quà tượng trưng cho nhiều nét đẹp của
            Việt Nam, mang đậm bản sắc văn hoá, ẩm thực Việt Nam. Hy vọng rằng
            bạn có thể lựa chọn cho mình những sản phẩm đẹp và phù hợp nhất.
            Ngoài ra nếu bạn có nhu cầu đặt mua quà lưu niệm Việt Nam hãy liên
            hệ cho Sorai Shop để được hỗ trợ nhé!`,
  },
  [LANGUAGES.JAPAN]: {
    title: "私たちについて",
    description:
      "ベトナムの土産品は、ベトナムの美しさや文化、料理の特色を象徴する贈り物です。あなたにとって最も美しく、適した商品をお選びいただけることを願っています。また、ベトナムの土産品を購入したい場合は、Sorai Shop までお気軽にお問い合わせください！",
  },
};

export function renderAboutSession(language) {
  const element = document.getElementById("about-content");
  element.innerHTML = `
    <h2>${ABOUT_CONTENT[language].title}</h2>
    <p>${ABOUT_CONTENT[language].description}</p>
  `;
}
