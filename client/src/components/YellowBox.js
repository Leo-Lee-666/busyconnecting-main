import React from 'react';

const styles = {
  yellowBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '90%',
    maxWidth: '1000px',
    backgroundColor: '#FFF502',
    border: '3px solid #000',
    borderRadius: '30px',
    padding: '20px',
    margin: '20px auto', // 중앙 정렬
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
  },
  yellowBoxDesktop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '90%',
    maxWidth: '1000px',
    backgroundColor: '#FFF502', 
    padding: '20px',
    margin: '20px auto', // 중앙 정렬 
    flexWrap: 'wrap'
  },
  image: {
    width: '35%',
    maxWidth: '250px',
    height: 'auto',
    margin: '20px',
    borderRadius: '10px'
  },
  yellowBoxContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left'
  },
  heading: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '26px',
    marginBottom: '20px',
    color: '#000',
    textAlign: 'center',
    width: '100%'
  },
  text: {
    fontFamily: 'Poppins Medium, sans-serif',
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#333'
  },
  mobileYellowBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    maxWidth: '280px', // 박스 크기 더 줄임
    backgroundColor: '#FFF502',
    border: '3px solid #000',
    borderRadius: '30px',
    padding: '15px', // 패딩 조정
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px auto' // 중앙 정렬
  },
  mobileImage: {
    width: '95%', // 이미지 크기 증가
    height: 'auto',
    marginBottom: '15px',
    borderRadius: '10px'
  },
  mobileHeading: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '20px',
    marginBottom: '10px',
    color: '#000',
    textAlign: 'center'
  },
  mobileText: {
    fontFamily: 'Poppins Medium, sans-serif',
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#333',
    textAlign: 'center'
  }
};

const YellowBox = ({ title, texts, image }) => {
  const isMobile = window.innerWidth <= 480;

  return (
    <div style={isMobile ? styles.mobileYellowBox : styles.yellowBox}>
      <h2 style={isMobile ? styles.mobileHeading : styles.heading}>{title}</h2>
      <div style={isMobile ? { display: 'flex', flexDirection: 'column', alignItems: 'center' } : styles.yellowBoxDesktop}>
        <img src={image} alt='image1' style={isMobile ? styles.mobileImage : styles.image} />
        <div style={isMobile ? { textAlign: 'center' } : styles.yellowBoxContent}>
          <p style={isMobile ? styles.mobileText : styles.text}>{texts}</p>
        </div>
      </div>
    </div>
  );
};

export default YellowBox;

// Responsive styles (to be handled with CSS media queries if required)
// Note: Inline styles in JavaScript don't directly support media queries,
// so they would need to be implemented with a CSS-in-JS library or external CSS.