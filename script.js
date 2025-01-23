async function loadNavbar() {
    const response = await fetch("components/navbar.html");
    const navbarHtml = await response.text();
    document.getElementById("navbar").innerHTML = navbarHtml;
  }
  
  async function loadFooter() {
    const response = await fetch("components/footer.html");
    const footerHtml = await response.text();
    document.getElementById("footer").innerHTML = footerHtml;
  }
  
  loadFooter();
  loadNavbar();

 