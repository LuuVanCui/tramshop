import { LANGUAGES, PHONE_NUMBER, SHOP_NAME } from "./constants.js";

const CONTACT_INFO = {
  [LANGUAGES.VIETNAM]: {
    content: `Hãy liên hệ hotline ${PHONE_NUMBER} (Ms. Trâm) hoặc Facebook ${SHOP_NAME} để đặt mua hàng nhanh nhất.`,
    buttonText: "Đóng",
  },
  [LANGUAGES.JAPAN]: {
    content: `最速でご注文いただくには、ホットライン ${PHONE_NUMBER}（トラムさん）または Facebook の ${SHOP_NAME} にご連絡ください。`,
    buttonText: "閉じる",
  },
};

export function renderContactDialog(language) {
  const element = document.getElementById("contactDialogContent");
  element.innerHTML = `
    <p>${CONTACT_INFO[language].content}</p>
    <button class="close-btn" onclick="closeDialog()">${CONTACT_INFO[language].buttonText}</button>
  `;
}
