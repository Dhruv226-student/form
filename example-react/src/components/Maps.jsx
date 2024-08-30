function Maps() {
   
let foodItems = ['Banana','Graps','Pineple','Avacado','Strawberry']
    return (
    <>
{foodItems.map(item=><li key={item}>{item}</li>)}

    </>
    )
}

export default Maps