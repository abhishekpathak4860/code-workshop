import '../style.css'

export default function Hero() {
  return (
    <div className='hero_section'>
      <div className="hero1">
        <div className="image-container">
          <img src="https://parceljs.org/avatar.b1be591d.avif" alt="" />
          <p className='title1'>Parcel</p>
        </div>
        <p className="title2">The zero configuration build tool for the <span>web</span>.</p>
        <p className="title3">Parcel combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application.</p>

        <div className="button">
          <button className="btn1">Get Started</button>
          <button className="btn2">GitHub</button>
        </div>
      </div>
      <div className="hero2">
        <div className="dot">
          <p id='dot1'></p>
          <p id='dot2'></p>
          <p id='dot3'></p>
        </div>
        <p className="para1">$ parcel index.html</p>
        <p className="para2">Server running at http://localhost:1234</p>
        <p className="para3">✨ Built in 48ms</p>
      </div>
    </div>
  )
}
