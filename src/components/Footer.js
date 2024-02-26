function Footer({}) {
  return (
      <div style={{ paddingBottom: 0 }}>
          <div>
              <div style={{ padding: 20, backgroundColor: '#f4f4fc' }}>
                  {/* You can include any other elements or text above the copyright notice as needed */}
                  
                  {/* Copyright notice */}
                  <p style={{ width: '100%', fontWeight: 'normal', color: "#717274", textAlign: 'center', marginTop: '14px' }}>
                      © {new Date().getFullYear()} Resonance Labs
                  </p>
              </div>
          </div>
      </div>
  );
}

export default Footer;
