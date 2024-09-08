import React, {useEffect, useState} from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";

const Product = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/products'); // Replace with your API link
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return(
        <div>
            <Header></Header>
            {/* Render fetched data here */}
            {data && <div>{JSON.stringify(data)}</div>}
            <Footer></Footer>
        </div>
    )
}

export default Product;