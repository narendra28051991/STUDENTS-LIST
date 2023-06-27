import Title from "@/components/Head";
import Link from "next/link";
import styles from '@/styles/Students.module.css';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { students: data }
    }
}

const Students = ({ students }) => {
    return (
        <>
            <Title title='All Students'/>
            <div className='content'>
                <h1>Students List</h1>
                {
                    students.map(student => (
                        <div key={ student.id }>
                            <Link href={'/students/' + student.id} className={styles.single}>
                                <h3>{ student.name }</h3>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
     );
}
 
export default Students;