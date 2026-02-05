import './Technology.css'

const Technology = () => {
  const firstRowLogos = [
    {
      type: 'image',
      src:'/images/Azure.png',
      width: 149,
      height: 80
    },
    {
      type: 'image',
      src: '/images/AWS/aws.png',
      width: 120,
      height: 60
    },
    {
      type: 'image',
      src: '/images/Claude.png',
      width: 160,
      height: 80
    },
    {
      type: 'image',
      src: '/images/OpenAI.png',
      width: 149,
      height: 80
    },
    {
      type: 'image',
      src: '/images/Databricks.png',
      width: 149,
      height: 80
    }
  ]

  const secondRowLogos = [
    {
      type: 'image',
      src: '/images/Tensorflow/icons8-tensorflow-240.png',
      width: 160,
      height: 80
    },
    {
      type: 'image',
      src: '/images/PowerBI.png',
      width: 149,
      height: 80
    },
    {
      type: 'image',
      src: '/images/PowerAutomate.png',
      width: 149,
      height: 80
    },
    {
      type: 'image',
      src: '/images/React.png',
      width: 149,
      height: 80
    },
    {
      type: 'image',
      src: 'https://static.wixstatic.com/media/033c11_1df9ffa9e3e34c0e8a99062ce9200bae~mv2.png/v1/fill/w_230,h_207,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_1df9ffa9e3e34c0e8a99062ce9200bae~mv2.png',
      srcset: 'https://static.wixstatic.com/media/033c11_1df9ffa9e3e34c0e8a99062ce9200bae~mv2.png/v1/fill/w_230,h_207,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_1df9ffa9e3e34c0e8a99062ce9200bae~mv2.png 1x, https://static.wixstatic.com/media/033c11_1df9ffa9e3e34c0e8a99062ce9200bae~mv2.png/v1/fill/w_460,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_1df9ffa9e3e34c0e8a99062ce9200bae~mv2.png 2x',
      width: 149,
      height: 80
    }
  ]

  return (
    <section id="tech" className="technology">
        <div className="tech-header-content">
          <h2 className="tech-title">
            <span className="tech-header-text">Technology & Platforms</span>
          </h2>
        </div>
      <section className="tech-logos-section">
        <div className="tech-logos-row">
          {firstRowLogos.map((logo, index) => (
            <div key={index} className="tech-logo-column">
              <div className="image-card">
                  <img
                    src={logo.src}
                    srcSet={logo.srcset}
                    alt=""
                    className="tech-logo-image"
                    width={logo.width}
                    height={logo.height}
                    loading="lazy"
                    style={{ objectFit: 'cover' }}
                  />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="tech-logos-section">
        <div className="tech-logos-row">
          {secondRowLogos.map((logo, index) => (
            <div key={index} className="tech-logo-column">
              <div className="image-card">
                <img
                  src={logo.src}
                  srcSet={logo.srcset}
                  alt=""
                  className="tech-logo-image"
                  width={logo.width}
                  height={logo.height}
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Technology
