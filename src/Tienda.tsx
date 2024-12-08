import { useState } from "react";
import "./App.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const Tienda = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);

  const products = [
    {
      id: 1,
      name: "iPhone 13 Pro",
      price: "$999",
      image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      price: "$899",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    },
    {
      id: 3,
      name: "Google Pixel 6",
      price: "$799",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
    },
    {
      id: 4,
      name: "OnePlus 9 Pro",
      price: "$899",
      image: "https://i.blogs.es/1eff46/img_7818/1366_2000.jpg",
    },
  ];

  const featuredProducts = [
    {
      id: 5,
      name: "iPhone 14 Pro Max",
      price: "$1299",
      image:
        "https://elcomercio.pe/resizer/WeuGENHxxmDInnBGV6lZ7Ne02LA=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/L4MDHLXZ3REOFDTCTLTFFAMKUQ.jpg",
    },
    {
      id: 6,
      name: "Samsung Galaxy Z Fold",
      price: "$1799",
      image:
        "https://i0.wp.com/www.sitemarca.com/wp-content/uploads/2024/08/mejores-celulares-2024.jpg?ssl=1",
    },
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="contenedorPadre flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="contenedor hidden md:flex space-x-8">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Products
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </div>
            </div>

            {/* aqui estaba */}

            <div className="md:hidden">
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isNavOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  Products
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16">
        <div
          className="h-[500px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1616348436168-de43ad0db179')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Discover the Latest Smartphones
                </h1>
                <p className="text-xl mb-8">
                  Find your perfect device from our premium collection
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-1/2 object-cover"
                />
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              We are committed to providing the latest and greatest mobile
              devices to our customers. With years of experience in the
              industry, we ensure quality products and exceptional customer
              service.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>Email: info@mobilestore.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Shipping Information
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Mobile Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Tienda;
