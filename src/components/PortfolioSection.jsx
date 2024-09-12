import React from "react";
import 'boxicons';
import port1 from '../assets/image/portfolio1.png';
import port2 from '../assets/image/portfolio2.png';

const PortfolioSection = () => {
  const projects = [
    {
      imgSrc: port1,
      title: 'Lezatara',
      description: 'Lezatara adalah sebuah platform daring (website) yang bertujuan untuk memperkenalkan, melestarikan, dan membagikan kelezatan masakan Nusantara.',
      link: 'https://lezatara.netlify.app/',
    },
    {
      imgSrc: port2,
      title: 'Bantu Si Liar',
      description: 'Bantu Si Liar merupakan sebuah aplikasi berbasis website yang berfungsi sebagai sumber informasi sekaligus media untuk melaporkan apabila seseorang menemukan hewan liar yang tidak memiliki tempat tinggal, yang berkeliaran tanpa pemilik atau hewan peliharaan yang hilang',
      link: 'https://bantu-si-liar.netlify.app/',
    },
    {
      imgSrc: port1,
      title: 'Point of Sale',
      description: 'Point of sale merupakan aplikasi yang digunakan dalam membantu pengolahan data-data bisnis seperti data pembelian, eceran, transaksi hutang, transaksi retur pembelian, hingga pelaporan transaksi yang dibutuhkan dalam pengambilan keputusan oleh para pebisnis',
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Project</span></h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div className="portfolio-box" key={index}>
            <img src={project.imgSrc} alt={project.title} />
            <div className="portfolio-layer">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PortfolioSection;
