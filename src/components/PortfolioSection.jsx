import React from "react";
import 'boxicons';
import port1 from '../assets/image/portfolio1.png'

const PortfolioSection = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Project</span></h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={port1} alt="" />
          <div className="portfolio-layer">
            <h4>Lezatara</h4>
            <p>Lezatara adalah sebuah platform daring (website) yang bertujuan untuk memperkenalkan, melestarikan, dan membagikan kelezatan masakan Nusantara. Aplikasi ini dirancang untuk memberikan informasi yang lengkap dan mudah diakses seputar resep-resep masakan Indonesia, termasuk bahan-bahan, langkah-langkah, dan informasi tambahan mengenai resep makanan di setiap regional wilayah indonesia, dalam website ini kami membagi ke 6 regional besar di wilayah indonesia diantaranya, Sumatera, Jawa, Bali Nusra, Kalimantan, Sulawesi, dan terakhir Papua Maluku.</p>
            <a href="#"><i className="bx bx-link-external"></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={port1} alt="" />
          <div className="portfolio-layer">
            <h4>Lezatara</h4>
            <p>Lezatara adalah sebuah platform daring (website) yang bertujuan untuk memperkenalkan, melestarikan, dan membagikan kelezatan masakan Nusantara. Aplikasi ini dirancang untuk memberikan informasi yang lengkap dan mudah diakses seputar resep-resep masakan Indonesia, termasuk bahan-bahan, langkah-langkah, dan informasi tambahan mengenai resep makanan di setiap regional wilayah indonesia, dalam website ini kami membagi ke 6 regional besar di wilayah indonesia diantaranya, Sumatera, Jawa, Bali Nusra, Kalimantan, Sulawesi, dan terakhir Papua Maluku.</p>
            <a href="#"><i className="bx bx-link-external"></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={port1} alt="" />
          <div className="portfolio-layer">
            <h4>Lezatara</h4>
            <p>Lezatara adalah sebuah platform daring (website) yang bertujuan untuk memperkenalkan, melestarikan, dan membagikan kelezatan masakan Nusantara. Aplikasi ini dirancang untuk memberikan informasi yang lengkap dan mudah diakses seputar resep-resep masakan Indonesia, termasuk bahan-bahan, langkah-langkah, dan informasi tambahan mengenai resep makanan di setiap regional wilayah indonesia, dalam website ini kami membagi ke 6 regional besar di wilayah indonesia diantaranya, Sumatera, Jawa, Bali Nusra, Kalimantan, Sulawesi, dan terakhir Papua Maluku.</p>
            <a href="#"><i className="bx bx-link-external"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection;
