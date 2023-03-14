import {useRouter} from "next/router";
import Link from "next/link";

import ClinicList from "@/components/Blog/BLogList";

const BlogPage = (props) => {
    const router = useRouter()
    console.log(props.data);
console.log(props.data.attributes)

    const serviceData = props.data.data;

    console.log(serviceData);
    return <div className="container">

        {serviceData.map(({id, attributes }) => (
            <Link key={id} href={'/blog2/' + attributes.slug}>
                <ClinicList tags={attributes.tags.data.attributes}
                            name={attributes.name}
                            // image={attributes.image.data.attributes.formats.thumbnail.url}
                            author={attributes.author}
                            description={attributes.description}
                            title={attributes.title}
                            date={attributes.date}
                            raiting={attributes.raiting}
                            rewiew={attributes.rewiew}
                            stars={attributes.stars}
                        />
                        {attributes.name}
            </Link>
        ))}

    </div>

}
export default BlogPage;


export async function getStaticProps(context) {
    const res = await fetch(`${process.env.API_URL}/blogs?populate=*`)
    const data = await res.json()
    console.log(context);
    return {
        props: {data}, // will be passed to the page component as props
    }
}