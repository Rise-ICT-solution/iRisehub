import { LuPlus } from "react-icons/lu";
import { BiMinus } from "react-icons/bi";
import { useState } from "react";

const FAQsData = [
    {
        question: "What is iRisehub?",
        answer: "iRisehub is a launching pad for Somalia's innovation, entrepreneurship, and technological leapfrogging. We are a community of pioneers and social disruptors driving economic prosperity."
    },
    {
        question: "What services does iRisehub offer?",
        answer: "We nurture Somali tech talents, entrepreneurs, and innovators by providing a unique design-thinking approach that transforms potential into reality. Our programs are tailored to support startups in launching and scaling their solutions."
    },
    {
        question: "Who can benefit from iRisehub's programs?",
        answer: "Our programs are open to all individuals, regardless of economic or social background, who have a passion for innovation and entrepreneurship. We welcome every dreamer eager to make a difference."
    },
    {
        question: "How can I join iRisehub?",
        answer: "To become a part of our community, you can apply through our website or contact us directly. We offer various programs and partnerships designed to support startups at different stages of development."
    },
    {
        question: "What makes iRisehub different from other innovation hubs?",
        answer: "Our people-to-people approach and customized programs set us apart. We build partnerships and design solutions that enable startups to immediately enter the market, ensuring practical and impactful outcomes."
    },
    {
        question: "How can I contact iRisehub for more information?",
        answer: "You can reach us through our website's contact page or by emailing us directly. Our team is ready to assist you with any inquiries or support you may need."
    },

]

function FAQs (){
    const [IsActiveAnswer, setIsActiveAnswer] = useState(null)
    const HandleActiveFAQ = (index) => {
        setIsActiveAnswer(IsActiveAnswer === index ? null : index)
    }
    return <div> 
        {FAQsData.map((FAQData, index) => {
            return <div key={index} onClick={() => HandleActiveFAQ(index)}  className="w-[450px]  border-l-white mb-2 border-l-3 py-3 leading-[20px] bg-gray-800/50  shadow-lg  px-4 rounded-l-[3px] rounded-r-[10px] "> 
            <div className="flex justify-between items-center">
                <h1 className=" w-[350px] "> {FAQData.question}</h1>
                {IsActiveAnswer === index ? (<BiMinus />) : (<LuPlus />)}
            </div>
            { IsActiveAnswer === index && (
                <p className="mt-3 font-sans text-gray-300">{FAQData.answer}</p>
            )
            }
            
        </div> 
        } )}
    </div>
}
export default FAQs