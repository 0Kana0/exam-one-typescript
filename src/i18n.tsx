import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources: { [key: string]: { translation: { [key: string]: string } } } = {
	en: {
		translation: {
			"Test 1": "Test 1",
			"Test 2": "Test 2",
			"Test 3": "Test 3",
			"Layout & Style": "Layout & Style",
			"Connect API": "Connect API",
			"Form & Table": "Form & Table",
			"EN": "EN",
			"TH": "TH",
			"Select": "Select"
		}
	},
	th: {
		translation: {
			"Test 1": "แบบทดสอบที่ 1",
			"Test 2": "แบบทดสอบที่ 2",
			"Test 3": "แบบทดสอบที่ 3",
			"Layout & Style": "การจัดการหน้าเว็ป",
			"Connect API": "ก่ารเชื่อมต่อ API",
			"Form & Table": "การจัดการหน้าฟอร์ม",
			"EN": "อังกฤษ",
			"TH": "ไทย",
			"Select": "เลือก"
		}
	}
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: "en",
		interpolation: {
			escapeValue: false // react already safes from xss
		}
	});

export default i18n;