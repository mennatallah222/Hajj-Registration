export default function Button({content, id}){
    return <>
        <button id={id?id:"r-btn"}>
            {content}
        </button>
    </>
}