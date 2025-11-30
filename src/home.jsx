function home() {
  return (
    <div className="home" style={{ height:"100vh", width:"100%",margin: 0, padding: "0 0 0 5% ", display: "flex",flexDirection:"row" ,justifyContent:"center", alignItems:"start" }}>
        
        {/* righ side */}
        <div className="homie" style={{ height:"100vh", width:"40%",margin: 0, display: "flex",flexDirection:"column" ,justifyContent:"center", alignItems:"start" }}>
        
            <div className="object" style={{marginBottom: "-40px", padding:0}}>
            <h2 style={{ color:"white",fontFamily:"sans-serif"}}>OBJECT-ORIENTED PROGRAMMING</h2>
            </div>

            <div className="portfolio" style={{marginBottom: "-40px", padding: "0", fontFamily:"GaretHeavy, sans-serif"}}>
            <h1 style={{ color:"#fa7e0bff", fontSize:"150px", fontWeight:"800", letterSpacing: "-0.05em", margin: 0}}>PORTFOLIO</h1>
            </div>

            <div className="name" style={{margin: 0, padding: "0", fontFamily: "sans-serif", width: "950px", overflow: "hidden"}}>
             <h2 style={{padding:"0",margin:"0", color:"white", fontSize:"3em", letterSpacing: ".01em", whiteSpace: "nowrap", transformOrigin: "left center", transform: "scaleX(1.3)"}}>
                IVAN BRYAN R. MANAOIS
             </h2>
            </div>


            <div className="profile" style={{width:"100%",display:"flex", flexDirection:"row", justifyContent:"space-between",fontFamily:"sans-serif",color:"#fa7e0bff"}}>
            <div><h3>COLLEGE STUDENT</h3></div>
            <div><h3>FUTURE SOFTWARE DEVELOPER</h3></div>
            <div><h3>LIFELONG LEARNER</h3></div>
            </div>
        </div>

        {/* left side */}

        <div className="homie pic" style={{height: "100vh",width: "60%",padding: 0,position: "relative",}}>
            <img src="https://media-public.canva.com/WZP8I/MAEeKPWZP8I/1/s.png" alt="big star" style={{
                position: "absolute",
                top: "35%",      // Adjust vertical position
                left: "55%",     // Adjust horizontal position
                height: "600px",
                width: "auto",
                transform: "translate(-50%, -50%)", // Center around this point
            }}/>

            <img src="https://media-public.canva.com/WZP8I/MAEeKPWZP8I/1/s.png" alt="medium star" style={{
                position: "absolute",
                top: "65%",
                left: "80%",
                height: "250px",
                width: "auto",
                transform: "translate(-50%, -50%)",
                }}/>

            <img src="https://media-public.canva.com/WZP8I/MAEeKPWZP8I/1/s.png" alt="small star" style={{
                position: "absolute",
                top: "75%",
                left: "35%",
                height: "150px",
                width: "auto",
                transform: "translate(-50%, -50%)",
                }}/>
        </div>
    </div>
  );
}

export default home;