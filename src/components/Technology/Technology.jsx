import './Technology.css'

const Technology = () => {
  const firstRowLogos = [
    {
      type: 'image',
      src:'https://tse2.mm.bing.net/th/id/OIP.NuWjtUbP5dLtfsA6RV4skgHaD3?pid=Api&P=0&h=180',
      srcset: 'https://tse2.mm.bing.net/th/id/OIP.NuWjtUbP5dLtfsA6RV4skgHaD3?pid=Api&P=0&h=180',
      width: 149,
      height: 80
    },
    {
      type: 'image',
      src: 'https://static.wixstatic.com/media/033c11_bfbe44171d004fe2ae57cb9fc09bb542~mv2.png/v1/fill/w_149,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_bfbe44171d004fe2ae57cb9fc09bb542~mv2.png',
      srcset: 'https://static.wixstatic.com/media/033c11_bfbe44171d004fe2ae57cb9fc09bb542~mv2.png/v1/fill/w_149,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_bfbe44171d004fe2ae57cb9fc09bb542~mv2.png 1x, https://static.wixstatic.com/media/033c11_bfbe44171d004fe2ae57cb9fc09bb542~mv2.png/v1/fill/w_298,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_bfbe44171d004fe2ae57cb9fc09bb542~mv2.png 2x',
      width: 149,
      height: 80
    },
    {
      type: 'image',
      src: 'https://static.wixstatic.com/media/033c11_067b6dd8f37049f0a45e69b3c0795234~mv2.png/v1/fill/w_193,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_067b6dd8f37049f0a45e69b3c0795234~mv2.png',
      srcset: 'https://static.wixstatic.com/media/033c11_067b6dd8f37049f0a45e69b3c0795234~mv2.png/v1/fill/w_193,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_067b6dd8f37049f0a45e69b3c0795234~mv2.png 1x, https://static.wixstatic.com/media/033c11_067b6dd8f37049f0a45e69b3c0795234~mv2.png/v1/fill/w_386,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_067b6dd8f37049f0a45e69b3c0795234~mv2.png 2x',
      width: 193,
      height: 40
    },
    {
      type: 'image',
      src: 'https://static.wixstatic.com/media/033c11_53a9031118bc4b3e8a3f9309db64bad4~mv2.png/v1/fill/w_193,h_47,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_53a9031118bc4b3e8a3f9309db64bad4~mv2.png',
      srcset: 'https://static.wixstatic.com/media/033c11_53a9031118bc4b3e8a3f9309db64bad4~mv2.png/v1/fill/w_193,h_47,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_53a9031118bc4b3e8a3f9309db64bad4~mv2.png 1x, https://static.wixstatic.com/media/033c11_53a9031118bc4b3e8a3f9309db64bad4~mv2.png/v1/fill/w_386,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_53a9031118bc4b3e8a3f9309db64bad4~mv2.png 2x',
      width: 193,
      height: 47
    },
    {
      type: 'image',
      src: 'https://static.wixstatic.com/media/033c11_1d56b5753e9b45408457f68af7a54bd5~mv2.png/v1/fill/w_206,h_129,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_1d56b5753e9b45408457f68af7a54bd5~mv2.png',
      srcset: 'https://static.wixstatic.com/media/033c11_1d56b5753e9b45408457f68af7a54bd5~mv2.png/v1/fill/w_206,h_129,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_1d56b5753e9b45408457f68af7a54bd5~mv2.png 1x, https://static.wixstatic.com/media/033c11_1d56b5753e9b45408457f68af7a54bd5~mv2.png/v1/fill/w_412,h_258,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_1d56b5753e9b45408457f68af7a54bd5~mv2.png 2x',
      width: 206,
      height: 129
    }
  ]

  const secondRowLogos = [
    {
      type: 'image',
      src: 'https://tse4.mm.bing.net/th/id/OIP.Simboeb-pWvWHal3LKGevQHaFj?pid=Api&P=0&h=180',
      srcset: 'https://tse4.mm.bing.net/th/id/OIP.Simboeb-pWvWHal3LKGevQHaFj?pid=Api&P=0&h=180',
      width: 160,
      height: 80
    },
    {
      type: 'image',
      src: 'https://static.wixstatic.com/media/033c11_22d53ff4050b422a9ae8a975436c8549~mv2.png/v1/fill/w_257,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_22d53ff4050b422a9ae8a975436c8549~mv2.png',
      srcset: 'https://static.wixstatic.com/media/033c11_22d53ff4050b422a9ae8a975436c8549~mv2.png/v1/fill/w_257,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_22d53ff4050b422a9ae8a975436c8549~mv2.png 1x, https://static.wixstatic.com/media/033c11_22d53ff4050b422a9ae8a975436c8549~mv2.png/v1/fill/w_514,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_22d53ff4050b422a9ae8a975436c8549~mv2.png 2x',
      width: 149,
      height: 80
    },
    {
      type: 'image',
      src: 'https://static.wixstatic.com/media/033c11_c5fdc853173149beba8965c2b106f0ad~mv2.png/v1/fill/w_193,h_129,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_c5fdc853173149beba8965c2b106f0ad~mv2.png',
      srcset: 'https://static.wixstatic.com/media/033c11_c5fdc853173149beba8965c2b106f0ad~mv2.png/v1/fill/w_193,h_129,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_c5fdc853173149beba8965c2b106f0ad~mv2.png 1x, https://static.wixstatic.com/media/033c11_c5fdc853173149beba8965c2b106f0ad~mv2.png/v1/fill/w_386,h_258,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_c5fdc853173149beba8965c2b106f0ad~mv2.png 2x',
      width: 149,
      height: 80
    },
    {
      type: 'image',
      src: 'https://tse4.mm.bing.net/th/id/OIP.ZjMYvsxoR73eLLh_1ZlK8wAAAA?pid=Api&P=0&h=180',
      srcset: 'https://tse4.mm.bing.net/th/id/OIP.ZjMYvsxoR73eLLh_1ZlK8wAAAA?pid=Api&P=0&h=180',
      width: 149,
      height: 80
    },
    {
      type: 'image',
      src: 'https://static.wixstatic.com/media/033c11_9a53cf3e8474414d8d4c94be31e06455~mv2.png/v1/fill/w_198,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_9a53cf3e8474414d8d4c94be31e06455~mv2.png',
      srcset: 'https://static.wixstatic.com/media/033c11_9a53cf3e8474414d8d4c94be31e06455~mv2.png/v1/fill/w_198,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_9a53cf3e8474414d8d4c94be31e06455~mv2.png 1x, https://static.wixstatic.com/media/033c11_9a53cf3e8474414d8d4c94be31e06455~mv2.png/v1/fill/w_396,h_172,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/033c11_9a53cf3e8474414d8d4c94be31e06455~mv2.png 2x',
      width: 149,
      height: 80
    }
  ]

  return (
    <section id="tech" className="technology comp-m77g53jb19 wixui-section">
      <section className="tech-header comp-m77ris4e CohWsy wixui-column-strip">
        <div className="tech-header-content">
          <h2 className="tech-title">
            <span className="tech-header-text">Technology & Platforms</span>
          </h2>
        </div>
      </section>
      <section className="tech-logos-section comp-m77g53jd22 CohWsy wixui-column-strip">
        <div className="tech-logos-row V5AUxf">
          {firstRowLogos.map((logo, index) => (
            <div key={index} className="tech-logo-column YzqVVZ wixui-column-strip__column">
              <div className="tech-logo-wrapper">
                {logo.type === 'svg' ? (
                  <div className="tech-logo-svg">{logo.svg}</div>
                ) : (
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
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="tech-logos-section comp-mic75yfq CohWsy wixui-column-strip">
        <div className="tech-logos-row V5AUxf">
          {secondRowLogos.map((logo, index) => (
            <div key={index} className="tech-logo-column YzqVVZ wixui-column-strip__column">
              <div className="tech-logo-wrapper">
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
