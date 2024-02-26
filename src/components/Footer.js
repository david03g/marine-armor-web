function Footer({}) {
  return (
      <div style={{ paddingBottom: 0 }}>
          <div>
              <div style={{ padding: 20, backgroundColor: '#f4f4fc' }}>
                  {/* You can include any other elements or text above the copyright notice as needed */}
                  
                  {/* Copyright notice */}
                  <p style={{ width: '100%', fontWeight: 'bold', color: "#717274", textAlign: 'center', marginTop: '16px' }}>
                      © {new Date().getFullYear()} Copyright Resonance Labs
                  </p>
              </div>
          </div>
      </div>
  );
}

export default Footer;
