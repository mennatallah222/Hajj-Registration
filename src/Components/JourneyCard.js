export default function JourneyCard({isLtoR, index, img, title, text}){

return (
    <div className="journeyCard" style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"20px", width:"80%", alignItems:"center"}}>
        {
            isLtoR?
            (
                <>
                    {<img src={img} alt="img" style={{justifySelf:"flex-end"}}></img>}
                    <>
                    {index}
                    <br/>
                        {title}
                        <br/>
                        {text}
                    </>
                    
                </>
            )
            :
            (
                <>
                    <div style={{justifySelf:"flex-end"}}>
                        {title}
                        <br/>
                        {text}
                    </div>
                    {<img src={img} alt="img" style={{justifySelf:"flex-start"}}></img>}
                </>
            )
        }
        
    </div>
)
}