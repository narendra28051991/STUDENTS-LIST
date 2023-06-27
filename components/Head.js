import Head from "next/head";

const Title = (props) => {
    return (
        <Head>
            <title>{`Students List | ${ props.title }`}</title>
            <meta name='keywords' content='students'></meta>
        </Head>
     );
}
 
export default Title;
