import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="typed-js"
export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Change your life", "Watch movies"],
      typeSpeed: 50,
      loop: true
    })
  }
}
