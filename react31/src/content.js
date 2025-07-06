const Content = () => {
     function changeText(){
    const list = ['Earn', 'Grow', 'Give', 'Pay', 'receive']; 
    const index = Math.floor(Math.random()*5); 
    return list[index]
  }
    return(
      <p>Let's {changeText()} Money</p>
    )
}
export default Content