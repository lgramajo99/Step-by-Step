import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { addProduct } from "../../features/cartSlice";
import heartImage from './imagenes/bx-heart.svg.jpg';
import { useDispatch } from "react-redux";





const GET_URL = "http://localhost:3001/products";
function Detail(clickHandler) {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("Ninguno seleccionado");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${GET_URL}/${id}`);
        const data = await response.json();
        setProductData(data);
        console.log("size", data.sizes)
        setSelectedImage(data.images[0].imageUrl); // Establecer la primera imagen como seleccionada inicialmente
        // Establecer la primera imagen como seleccionada inicialmente
        console.log(selectedSize)
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [id]);

  const clickAddHandler = (product) => {
    if (selectedSize !== "Ninguno seleccionado") {

      dispatch(addProduct({ ...product, sizes: [selectedSize] }));
    } else {
      alert("seleccione un talle para comprar ")
    }
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  const handleImageSize = (size) => {
    setSelectedSize(size);
  };

  const dispatch = useDispatch()
  return (
    <>
      {productData ? (
        <div className="container h-screen flex ">
          <div className=" bg-white flex flex-row justify-between relative w-full items-center pl-16 pr-[210px]">
            <div className="min-w-[520px]  bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-end relative h-[725px] w-[650px] items-center my-12 py-6 ">
              <img src={selectedImage} alt="Shoes" className="object-cover w-full h-full" style={{ objectFit: 'contain' }} />
            </div>
            <div className="flex flex-col justify-start gap-2 relative h-[694px] items-start">
              <div className="overflow-hidden bg-[#edf0f1] flex  flex-col justify-start mb-4 relative w-12 items-stretch px-2 rounded">
                <div className="text-sm font-['Inter'] font-semibold tracking-[-0.0840000033378601] leading-[24px] text-[#242c31] relative">
                  New!
                </div>
              </div>
              <div className="mt-4 whitespace-nowrap text-4xl font-['Inter'] font-bold tracking-[-0.7920000171661377] leading-[58px] text-[#242c31] self-stretch mr-20 relative">
                {productData.model}
              </div>
              <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.0840000033378601] leading-[24px] text-[#6e7c86] mb-5 relative w-20">
                {productData.gender}
              </div>
              <div className="text-4xl font-['Inter'] font-bold tracking-[-0.7920000171661377] leading-[48px] text-[#242c31] mb-5 relative w-32">
                ${productData.totalPrice}
              </div>
              <div>
                <p>{productData.description}</p>
              </div>
              <div className="flex flex-row justify-start mb-8 relative items-center">
                {/* Mostrar las imágenes adicionales */}
                <div className="flex space-x-2">
                  {productData.images.slice(1).map((image, index) => (
                    <div key={index}
                      className="border border-gray-300 p-1 transition-transform duration-300 hover:scale-110 hover:border-blue-500"
                      onClick={() => handleImageClick(image.imageUrl)}>
                      <img src={image.imageUrl} alt="Shoes" className="min-h-0 min-w-0 relative w-20 shrink-0 cursor-pointer" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center font-['Inter'] tracking-[-0.09600000381469727] leading-[24px] text-[#242c31] mb-1 relative w-8">
                Size
              </div>
              <div className="flex flex-row justify-start mb-8 relative items-center">
                {/* Mostrar las imágenes adicionales */}
                <div className="flex space-x-2">
                  {productData.sizes.map((size, index) => (
                    <div key={index}
                      className="border border-gray-300 p-1 transition-transform duration-300 hover:scale-110 hover:border-blue-500"
                      onClick={() => handleImageSize(size.size)}>
                      <h3 className="cursor-pointer font-bold">{size.size}</h3>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p>{`Talle seleccionado: ${selectedSize}`}</p>
              </div>
              <div className="self-stretch flex flex-row justify-start gap-5 relative items-center mb-3 mr-12">
                <button
                  onClick={() => clickAddHandler(productData)}
                  className="bg-black text-white cursor-pointer flex flex-col justify-center relative w-1/2 h-10 items-center rounded-lg">
                  Comprar
                </button>
                {/* <div className="border-solid border-[#0a0a0a] cursor-pointer flex flex-row justify-center gap-1 relative w-1/5 h-10 items-center border rounded-lg">
                  <div className="text-sm font-['Inter'] font-semibold tracking-[-0.0840000033378601] text-black relative w-12 shrink-0">
                    Favorite
                  </div>
                  <img
                    src={heartImage}
                    className="min-h-0 min-w-0 relative w-4 h-4 shrink-0 alt=Imagen"
                  />
                </div> */}
              </div>
              <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.0840000033378601] leading-[24px] text-[#252c32] self-stretch justify-start mr-40 relative">
                Shipping*
                <br />
                To get accurate shipping information{" "}
                <div className="text-sm font-['Inter'] tracking-[-0.0840000033378601] leading-[24px] text-[#252c32] contents">
                  Edit Location
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Detail
