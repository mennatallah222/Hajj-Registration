import JourneyCard from "./JourneyCard";
import img1 from '../Styles/imgs/1.png';
import img2 from '../Styles/imgs/2.png';
import img3 from '../Styles/imgs/3.png';
import img4 from '../Styles/imgs/4.png';
import img5 from '../Styles/imgs/5.png';
import img6 from '../Styles/imgs/6.png';
import img7 from '../Styles/imgs/7.png';
import img8 from '../Styles/imgs/8.png';
import img9 from '../Styles/imgs/9.png';
import img10 from '../Styles/imgs/10.png';
import img11 from '../Styles/imgs/11.png';
import img12 from '../Styles/imgs/12.png';

export default function JourneyPage(){
    let index=0;
    return (
        <div style={{display:"grid"}}>

            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", justifySelf:"center", alignItems:"center", width:"80%"}} >
                <JourneyCard    isLtoR={true}
                                index={index++}
                                img={img1} 
                                title={"Ihram"}
                                text={"Start your Hajj journey with a sincere intention to enter the state of Ihram and engage in the rituals of Hajj, with the recitation of the Talbiyah. Then, put on the Ihram garments."} 
                />

                <br/>

                <JourneyCard    isLtoR={false} 
                                img={img2} 
                                title={"Tawaf Al-Qudum"}
                                text={"Upon entering Makkah, perform the Tawaf Al-Qudum by circumambulating the Kaaba seven times. Then, pray two Rak'ahs of Tawaf behind the Maqam Ibrahim (as possible)."} 
                />

                <br/>

                <JourneyCard    isLtoR={true} 
                                img={img3} 
                                title={"Sa'i between Safa and Marwa"}
                                text={"Perform Sa'i between Safa and Marwah, walking seven times starting at Safa and ending at Marwah."} 
                />

                <br/>

                <JourneyCard    isLtoR={false} 
                                img={img4} 
                                title={"Mina (the Day of Tarwiyah)"}
                                text={"Head to Mina on the morning of the 8th of Dhul-Hijjah and spend the night there, dedicating your time to supplication and prayer until the morning of the 9th."} 
                />

                <br/>

                <JourneyCard    isLtoR={true} 
                                img={img5} 
                                title={"Arafah (Day of the Greater Hajj)"}
                                text={"On the 9th of Dhul-Hijjah, head to Arafat and devote yourself to Allah on this day until sunset."} 
                />

                <br/>

                <JourneyCard    isLtoR={false} 
                                img={img6} 
                                title={"Muzdalifah"}
                                text={"After sunset on the 9th of Dhul-Hijjah, move to Muzdalifah where you will spend the night there and collect seven pebbles for the upcoming Jamarat rituals."} 
                />

                <br/>

                <JourneyCard    isLtoR={true} 
                                img={img7} 
                                title={"Pelt Jamrat Al-Aqabah"}
                                text={"On the 10th of Dhul-Hijjah (the Day of Eid), return to Mina and pelt Jamrat Al-Aqabah with seven pebbles while reciting Takbeer."} 
                />

                <br/>

                <JourneyCard    isLtoR={false} 
                                img={img8} 
                                title={"Adhahi"}
                                text={"Make an Adhahi offering to draw closer to Allah. It is important to share the Adhahi with those in need."} 
                />

                <br/>

                <JourneyCard    isLtoR={true} 
                                img={img9} 
                                title={"Shave Hair or Trim"}
                                text={"Shave or trim your hair. Then, remove the Ihram and change into your regular clothes."} 
                />

                <br/>

                <JourneyCard    isLtoR={false} 
                                img={img10} 
                                title={"Tawaf Al-Ifada"}
                                text={"Return to Makkah and perform the Tawaf Al-Ifada by circumambulating the Kaaba seven times and then offer prayers (rakaat) behind Maqam Ibrahim (if possible)."} 
                />

                <br/>

                <JourneyCard    isLtoR={true} 
                                img={img11} 
                                title={"Pelting the three Jamarat"}
                                text={"Return to Mina and participate in pelting the three Jamarat (Jamrat Al-Aqabah - the largest pillar, Jamrat Al-Wusta, and Jamrat Al-Sughra) on the 11th, 12th, and optionally 13th of Dhul-Hijjah."} 
                />

                <br/>

                <JourneyCard    isLtoR={false} 
                                img={img12} 
                                title={"Tawaf Al-Wadaa"}
                                text={"Before leaving Makkah, engage in the Tawaf Al-Wadaa by circumambulating the Kaaba seven times."} 
                />

                <br/>



                
            </div>
        </div>
    )
}