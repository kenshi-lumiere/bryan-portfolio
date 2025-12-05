function Home() {
  return (
    <div
      className="home"
      style={{
        height: "100vh",
        width: "100%",
        margin: 0,
        padding: "0 0 0 5%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "start",

        /* MOVED BACKGROUND HERE */
        background: `
          radial-gradient(
            circle at 150% -50%,
            rgba(0, 0, 0, 0.5),
            rgba(104, 104, 104, 0.69)
          ),
          radial-gradient(
            at var(--mouse-x) var(--mouse-y),
            rgba(29, 29, 29, 0.397),
            rgba(0,0,0,0.5)
          ),
          url("data:image/svg+xml,%3Csvg viewBox='0 0 341 341' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4.3' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
        `,
        backgroundSize: "cover",
        filter: "contrast(250%) brightness(100%)",
        position: "relative",
      }}
    >

      {/* Right side */}
      <div className="homie" style={{ height:"100vh", width:"40%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"start" }}>

        <div style={{ marginBottom: "-40px" }}>
          <h2 style={{ color:"white", fontFamily:"sans-serif" }}>OBJECT-ORIENTED PROGRAMMING</h2>
        </div>

        <div style={{ marginBottom: "-40px", fontFamily:"GaretHeavy, sans-serif" }}>
          <h1 style={{ color:"#fa7e0bff", fontSize:"150px", fontWeight:"800", letterSpacing:"-0.05em",padding:"0" }}>PORTFOLIO</h1>
        </div>

        <div style={{ fontFamily:"sans-serif", width:"850px", overflow:"hidden" }}>
          <h2 style={{ color:"white", fontSize:"3.8em", whiteSpace:"nowrap", transform:"scaleX(1)", letterSpacing:"4px", fontWeight:"700" }}>
            IVAN BRYAN R. MANAOIS
          </h2>
        </div>

        <div style={{ width:"950px", display:"flex", flexDirection:"row", fontFamily:"sans-serif", color:"#fa7e0bff", fontSize:"20px",overflow:"hidden",gap:"15px" }}>
          <h3>COLLEGE STUDENT</h3>
          <h3>FUTURE SOFTWARE DEVELOPER</h3>
          <h3>LIFELONG LEARNER</h3>
        </div>

      </div>

      {/* Left side — Stars */}
      <div className="homie pic" style={{ height:"100vh", width:"60%", position:"relative" }}>
        <img src="https://media-public.canva.com/WZP8I/MAEeKPWZP8I/1/s.png" alt="big star" style={{
          position:"absolute", top:"35%", left:"55%", height:"600px",
          transform:"translate(-50%, -50%)"
        }}/>

        <img src="https://media-public.canva.com/WZP8I/MAEeKPWZP8I/1/s.png" alt="medium star" style={{
          position:"absolute", top:"65%", left:"80%", height:"250px",
          transform:"translate(-50%, -50%)"
        }}/>

        <img src="https://media-public.canva.com/WZP8I/MAEeKPWZP8I/1/s.png" alt="small star" style={{
          position:"absolute", top:"75%", left:"35%", height:"150px",
          transform:"translate(-50%, -50%)"
        }} />
      </div>
    </div>
  );
}

export default Home;
