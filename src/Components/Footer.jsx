function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div>
      {" "}
      <footer>
        <p>Copyright {year}</p>
      </footer>{" "}
    </div>
  );
}

export default Footer;
