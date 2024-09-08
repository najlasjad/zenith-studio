import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Header from "../containers/Header";
import Footer from "../containers/Footer";

function Product() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=f7eee9eb238841b3e2ab9f1809faeef8")
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(json => dispatch({ type: 'SET_PRODUCT_LIST', payload: json.results }))
        .catch(error => console.error('Fetch error:', error));
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {productList.map((movie) => (
                    <div style={{ margin: '10px' }} key={movie.id}>
                        <img style={{ width: '150px', height: 'auto' }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Product;