// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize components
  initializeNavbar()
  initializeSearch()
  initializePurchaseButton()
  initializeScrollEffects()
  initializeProductImageZoom()
})

// Navbar functionality
function initializeNavbar() {
  const navbar = document.querySelector(".gaga-navbar")

  // Change navbar background on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)"
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
    }
  })
}

// Search functionality
function initializeSearch() {
  const searchForm = document.querySelector('form[role="search"]')
  const searchInput = document.querySelector(".search-input")

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const searchTerm = searchInput.value.trim()

    if (searchTerm) {
      // Simulate search functionality
      alert(`Buscando por: "${searchTerm}"\n\nEm breve teremos mais produtos da Gaga disponíveis!`)
      searchInput.value = ""
    }
  })

  // Search suggestions (mock data)
  const suggestions = [
    "Vestido de Carne",
    "Vestido Kermit",
    "Sapatos Armadillo",
    "Óculos Telephone",
    "Vestido Disco Ball",
  ]

  searchInput.addEventListener("input", () => {
    // This would typically show a dropdown with suggestions
    // For now, we'll just add a placeholder for future implementation
  })
}

// Purchase button functionality
function initializePurchaseButton() {
  const purchaseBtn = document.getElementById("purchaseBtn")

  purchaseBtn.addEventListener("click", () => {
    // Add loading state
    const originalText = purchaseBtn.innerHTML
    purchaseBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Processando...'
    purchaseBtn.disabled = true

    // Simulate purchase process
    setTimeout(() => {
      alert(
        "🎉 Parabéns!\n\nVocê está prestes a adquirir uma peça única da história da moda!\n\nEm breve você será redirecionado para finalizar a compra segura.\n\n⚠️ Lembre-se: Esta peça não aceita devolução devido à sua natureza única e histórica.",
      )

      // Reset button
      purchaseBtn.innerHTML = originalText
      purchaseBtn.disabled = false
    }, 2000)
  })
}

// Scroll effects
function initializeScrollEffects() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroSection = document.querySelector(".hero-section")

    if (heroSection) {
      heroSection.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })

  // Fade in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document.querySelectorAll(".product-info, .policy-card, .purchase-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}

// Product image zoom effect
function initializeProductImageZoom() {
  const productImage = document.querySelector(".product-image")

  if (productImage) {
    productImage.addEventListener("click", () => {
      // Create modal for image zoom (basic implementation)
      const modal = document.createElement("div")
      modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                cursor: pointer;
            `

      const zoomedImage = document.createElement("img")
      zoomedImage.src = productImage.src
      zoomedImage.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
            `

      modal.appendChild(zoomedImage)
      document.body.appendChild(modal)

      modal.addEventListener("click", () => {
        document.body.removeChild(modal)
      })
    })
  }
}

// Price formatting
function formatPrice(price) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price)
}
