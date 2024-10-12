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
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
    maxWidth: '1000px',
    backgroundColor: '#FFF502',
    border: '3px solid #000',
    borderRadius: '30px',
    padding: '50px',
    margin: '40px auto', // 중앙 정렬
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    flexWrap: 'wrap'
  },
  image: {
    width: '50%',
    maxWidth: '300px',
    height: 'auto',
    marginLeft: '40px',
    borderRadius: '10px'
  },
  yellowBoxContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '10px',
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
    width: '90%',
    maxWidth: '1000px',
    backgroundColor: '#FFF502',
    border: '3px solid #000',
    borderRadius: '30px',
    padding: '20px',
    margin: '20px auto', // 중앙 정렬
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
  },
  mobileImage: {
    width: '95%',
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

const YellowBox2 = ({ title, texts, image }) => {
  const isMobile = window.innerWidth <= 480;
  const boxStyle = isMobile ? styles.mobileYellowBox : styles.yellowBoxDesktop;
  const imageStyle = isMobile ? styles.mobileImage : styles.image;
  const textStyle = isMobile ? styles.mobileText : styles.text;
  const headingStyle = isMobile ? styles.mobileHeading : styles.heading;

  return (
    <div style={boxStyle}>
      <div className="content" style={styles.yellowBoxContent}>
        <h2 style={headingStyle}>{title}</h2>
        <p style={textStyle}>{texts}</p>
      </div>
      <img src={image} alt="image" style={imageStyle} />
    </div>
  );
};

export default YellowBox2;