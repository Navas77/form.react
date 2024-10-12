import react from"react"
import WithHoverAnim  from "./WithHoverAnim";

const Paragraph = () =>{
return(
    <p>
       Amidst the vast tapestry of human experience, language weaves the threads of our thoughts, emotions, and stories. Each word chosen carries a weight of history, culture, and individuality, making every conversation a unique tapestry. From the bustling streets of Tokyo to the serene backwaters of Kerala, the rhythm and melody of spoken words bind us all, creating bridges where once there were chasms. It's through this intricate dance of syllables and sentences that we truly connect, understand, and share our most profound truths. What's your favorite way language has surprised or connected you recently? 
    </p>

)
}
export default Paragraph;

export const ParagraphWithHoverAnim = WithHoverAnim(Paragraph);