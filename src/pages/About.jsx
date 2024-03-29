import "../about.css";
import Footer from "../components/Footer";
const About = () => {
    return (
        <div>
            <header className="masthead">
                <p className="masthead-intro">Hii..</p>
                <h1 className="masthead-heading">Welcome To Our <span>Saloon Cafè</span></h1>
            </header>
            <section className="intro">
                <h1>Introduction</h1>
                <p>I'm a future Front End developer who loves <span className="bold">good design</span>, <span className="bold">good food</span> and <span className="bold">good people</span>. I work in totally different industry now, but I am now in trasition of my new career!. I am so excited about learning that make interactive webpage and design.</p>
                <p>I love the web and all the awesome new technologies. I'm excited to learn a new things that make the web more beautiful, functional, and perfect.</p>

                <p>I love learning a new thing! Expecially in tech industries. I am so happy that I can learn at Thinkful and as student of Thinkful community!</p>
            </section>
            <section className="more-about-me">
                <h1>More About Me</h1>
                <h2>What are your favorite hobbies?</h2>
                <p>My favorite hobby was playing Counter-Strike. But now I am enjoying most of my time with study coding!</p>
                <h2>What's your dream job?</h2>
                <p>My goal is that become a full stack developer, so that I can manage front-end side and back-end side as well.
                    Before achieve that goal, I need to master front-end developer skills first!</p>
                <h2>What's your background?</h2>
                <p>I've seen programming since I was very young. My dad was web programmer!. He always wants me to do stuying web programming. Here I am! now I am studying hard to master front end developing skills.</p>
                <h2>What music have you been listening to lately?</h2>
                <p>I've been listing to a ton of K-Pop lately, obviously I am korean. Nowaday K-Pop is very popular even in the United States.</p>
            </section>
            <Footer />
        </div>
    )
}
export default About;