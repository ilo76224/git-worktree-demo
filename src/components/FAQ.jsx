import { useState } from 'react';
import './FAQ.css';

const faqs = [
    {
        question: "如何開始使用 SalesPilot CRM？",
        answer: "只需註冊一個帳號，即可免費試用 14 天完整功能。試用期結束後，您可以選擇適合您團隊的方案繼續使用。"
    },
    {
        question: "支援多個業務團隊共同協作嗎？",
        answer: "是的，專業版與企業版方案皆支援無上限的使用者帳號，並提供精細的權限管理功能，讓不同團隊能安全地協作。"
    },
    {
        question: "可以匯入既有的客戶資料嗎？",
        answer: "當然可以。我們支援 CSV 與 Excel 格式的資料匯入，系統會自動對應欄位，您也可以手動調整對應關係。"
    },
    {
        question: "有提供手機 App 版本嗎？",
        answer: "有的，我們提供 iOS 與 Android 原生應用程式，讓您的業務團隊隨時隨地都能掌握最新商機。"
    },
    {
        question: "資料安全有保障嗎？",
        answer: "我們採用銀行級的 256 位元加密技術，並定期將資料備份至多個地理區域的備援中心，確保您的業務數據絕對安全。"
    }
];

const FAQItem = ({ faq, isOpen, onClick }) => {
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className="faq-question" onClick={onClick}>
                <h3>{faq.question}</h3>
                <span className="faq-icon"></span>
            </button>
            <div className="faq-answer-container">
                <div className="faq-answer">
                    <p>{faq.answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0); // 預設展開第一個

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <div className="section-header">
                    <h2>常見問題解答</h2>
                    <p className="subtitle">找尋您在評估過程中的各式解答</p>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FAQItem 
                            key={index} 
                            faq={faq} 
                            isOpen={index === openIndex} 
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
