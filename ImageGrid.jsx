import React from 'react';
import {useState} from 'react'

const images = [
  {src:'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', name:'Mac'},
  {src:'https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Dell'},
  {src:'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/vostro-15-3520/media-gallery/gray-paint/notebook-vostro-15-3520-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=606&qlt=100,1&resMode=sharp2&size=606,402&chrss=full',name:'hp'},
  {src:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmgcDQiqe3CJQQVj_ogwvDUrVuvzllem5vBtkzDl9Ve5OR9jTaQLBb-1_hfnmpUpnrh7dAQJClWYV3IHsLiFwA_HX3W_dItQdJtynUB5qJV3bbnOWZB3EvYQ',name:'samsung'},
  {src:'https://images.samsung.com/is/image/samsung/p6pim/in/np750xgj-kg1in/gallery/in-galaxy-book-np750xgj-kg1in-front-gray-541108694?$730_584_PNG$',name:'dell'},
  {src:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQMIviQqUgLUERHf5JVZLkSHEeOkjC3bDIwHO6rWT2JU6SCYjoCfrXWDGhtAIqcPuui4dd4rkFWxVJ20_7a1GqpLXmLvXQNqOIRR07A_i9fmHplS-lSb46N',name:'chromebook'},
];


const ImageGrid=()=>{
    const [selectedProduct, setSelectedProduct] = useState(null);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };
    return(
        <>
        <div className="container">
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4 shadow-sm">
              <div className="image-container" onClick={() => handleImageClick(image)}>
                <img src={image.src} className="card-img-top" alt={`Portfolio ${index + 1}`} />
                <div className="overlay">
                  <div className="overlay-text">{image.name}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="product-details mt-4">
          <h3>{selectedProduct.name}</h3>
          <p>{selectedProduct.description}</p>
        </div>
      )}
    </div>
        
        </>
    )
}
export default ImageGrid