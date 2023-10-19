
export default function ProductCard(price,avatar,description, date ) {
  return (
    
    <>
    <img src={avatar} alt="" />
    <h3>{price}</h3>
    <p>{description}</p>
     <p>{date}</p>
    </>
  )
}
