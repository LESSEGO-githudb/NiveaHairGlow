document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("niveaVideo");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );
  
    if (video) {
      observer.observe(video);
    }
  });
  
  // Cart logic to add items from product page
document.addEventListener("DOMContentLoaded", () => {
  const cartKey = "hairGlowCart";

  function getCart() {
    const cart = localStorage.getItem(cartKey);
    return cart ? JSON.parse(cart) : [];
  }

  function saveCart(cart) {
    localStorage.setItem(cartKey, JSON.stringify(cart));
  }

  function addToCart(product) {
    const cart = getCart();

    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    alert(`${product.name} added to cart!`);
  }

  // Attach event listeners to buttons
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const container = e.target.parentElement;
      const name = container.querySelector("h3").textContent;
      const priceText = container.querySelector("p").textContent;
      const price = parseFloat(priceText.replace(/[^\d.]/g, ""));
      const image = container.querySelector("img").getAttribute("src");

      const product = { name, price, image };
      addToCart(product);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("show");
  });
});
