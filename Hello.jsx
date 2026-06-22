import './App.css'

function Hello(){
    const name ="Muqaddas"
    const headingStyle ={
        color:"red",
        textAlign:"centre",
        backgroundColor:"pink",
        fontSize:"50px"
    }
    return (
        <>
         <h2 style={ headingStyle}>Hello{name} </h2>
         <p className='test'> My name is muqaddas.</p>
        </>
   
    )
}
export default Hello