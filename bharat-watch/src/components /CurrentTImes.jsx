const CurrentTimes =()=>{
   let time = new Date()

   return <div>
        
        <p>

        This is Current Times : {time.toLocaleDateString()} -{time.toLocaleTimeString()}
        </p>
        
        </div>
}
export default CurrentTimes