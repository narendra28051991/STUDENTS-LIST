import Title from "@/components/Head";

const About = () => {
    return (
        <>
            <Title title='About' />
            <div className='content'>
                <h1>About</h1>
                <p>HackYourFuture is a not-for-profit coding school for people with limited access to education and the labor market. The majority of our students worldwide are refugees.</p>
                <p>We believe in a world in which education and quality jobs are accessible for all. This is why we have designed a free 34 week program for newcomers in tech.</p>
                <p>After the program we support our students in finding high quality jobs. Our success criteria is not graduation from the course but employment in the tech industry.</p>
            </div>
        </>
     );
}
 
export default About;