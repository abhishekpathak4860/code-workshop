import '../style.css'

export default function Hero2() {
    return (
        <div className='hero2-container'>
            <div className="companies">
                <p className="trusted">TRUSTED BY:</p>
                <p className="atlassian"><img src="https://images.ctfassets.net/8j5aqoy0ts8s/3V650c91OiNdKFEHshpKMs/e3913190d8e406b3acf0fa13b6055c63/atlassian-blue-logo.png" alt="" /></p>
                <p className="microsoft"><img src="https://attackofthefanboy.com/wp-content/uploads/2014/07/Microsoft-Logo.jpg" alt="" /></p>
                <img className='souregraphimg' src="https://images.prismic.io/contrary-research/95602efe-e233-434a-ba27-f76acac5182e_sourcegraph+square.png?auto=compress,format" alt="" />  <p className="sourcegraph">Sourcegraph</p>

                <img className='xchartimg' src="https://xchart.com/images/icon512.png" alt="" />  <p className="xchart">Chart <span>.com</span></p>
            </div>

            <div className="head-para">
                <p className="heading">A build tool for the rest of us.</p>
                <p className="heading2">Parcel starts with a great development experience, from starting a new project, to iterating and debugging, and shipping to production. No more fiddling with configuration, or spending hours to keep up with best practices – it just works!</p>
            </div>

            <div className="scatter1">
                <div className="sub-scatter1">
                    <h3>Zero config</h3>
                    <p className="sub-para1">Start with an HTML file. Add a SCRIPT tag. Maybe some CSS. How about TypeScript? SASS? Images? No problem. Parcel works out of the box just as you'd expect.</p>
                    <p className="sub-para2">Parcel supports many languages and file types out of the box, from web technologies like HTML, CSS, and JavaScript, to assets like images, fonts, videos, and more. And when you use a file type that isn't included by default, Parcel will automatically install all of the necessary plugins and dev dependencies for you!</p>
                    <h3>Get started →</h3>
                </div>
                <div className="sub-scatter2">
                <img src="https://www.wikitechy.com/step-by-step-html-tutorials/html5-canvas/img/canvas-images/code-explanation-linewidth-property-in-html5-canvas.png" alt="" />
                </div>
            </div>
        </div>
    )
}
