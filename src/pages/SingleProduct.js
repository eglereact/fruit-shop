import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/product_context";

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();
  const single_product_url = `https://api-eglereact.netlify.app/api/fruitshop?id=`;

  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was in error</h1>;
  }

  console.log(product);
  return <div>SingleProduct {product?.fields?.name}</div>;
}

export default SingleProduct;
