import pic1 from './pics/pic2.png';

function About() {
  return (  
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${pic1})`,
        backgroundSize: "cover",
        transform:"scale(1)",
        transformOrigin:"0% 0%",
        display: "flex",
        flexDirection: "column",
      }}>

        <div className='topView' style={{
          height:"80%",
          width:"100%",
          display:"flex",
          flexDirection:"column",
          alignItems:"end",
        }}>

          <div className='hello' style={{
            height:"50%",
            width:"50%",
            paddingTop:"3%"
          }}>
            <h1 style={{
              fontSize:"clamp(1.8rem,20vw,16.2rem)",
              color:"#fa7e0bff",
              letterSpacing:'-15px'
            }}>Hello!</h1>
            </div>

          <div className='bout' style={{
            height:"50%",
            width:"50%",
            paddingRight:"5%",
            fontStyle:'GaretBook' ,
            
          }}><p style={{
            fontSize:"clamp(1rem,2.5vw,1.8rem)",
            textAlign:"justify",
            color:"#fa7e0bff"
          }}>Hi, I’m Ivan Bryan R. Manaois, a dedicated student learning the art of programming and problem-solving. I aim to become a skilled software developer capable of building efficient and meaningful systems. I believe in progress through persistence — one step, one project at a time.</p></div>

          <div className='quote' style={{height:"20%", width:"100%", display:"flex", justifyContent:"end",paddingRight:"5%", paddingTop:"5%",color:"#fa7e0bff"}}>
        <blockquote style={{alignSelf:"center",fontStyle:"italic"}}>
          “A man who never made a mistake never tried anything new.” 
          <footer style={{justifySelf:"end", marginTop:"5%"}}>— Albert Einstein</footer>
        </blockquote></div>
        </div>

        


    </div>
  );
}

export default About;
