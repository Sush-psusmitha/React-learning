const Content = () => {

  const handleCHnage = () => {
    const list = ['Earn', 'Grow', 'Give', 'Pay', 'receive'];
    const index = Math.floor(Math.random()*5)
    return list[index]
  }
  
  const HandleClick1 = (name) => {
    console.log(`button Clicked!! ${name} `)
  }
  const handleClick2 = (e) => {
    console.log(e.target.innerText)
  }
  
    return(
      <main>
      <p onClick={()=>HandleClick1('Priyaa')}>
       Let's {handleCHnage()} Money</p> <br />
       
       <button onClick={() => handleCHnage()}>Click to change text</button> 
        <br />
        <button onClick={() => HandleClick1('Sush')}>subscribe</button>
        <br/>
        <button onClick={(e)=> handleClick2(e)}>event btn</button>
      </main>
    )
}
export default Content